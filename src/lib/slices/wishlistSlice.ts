import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api, isAuthenticated } from "@/lib/api";
import { getWishlist as getLocalWishlist, toggleWishlist as toggleLocalWishlist, removeFromWishlist, clearWishlist as clearLocalWishlist } from "@/lib/wishlist";
import type { WishlistItem } from "@/lib/wishlist";

function saveWishlist(items: WishlistItem[]) {
  localStorage.setItem("wishlist", JSON.stringify(items));
}

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    if (!isAuthenticated()) {
      return { items: getLocalWishlist() };
    }
    const res = await api.wishlist.get();
    if (!res.success || !res.data) return rejectWithValue(res.error);
    const items = res.data.items as WishlistItem[];
    saveWishlist(items);
    return { items };
  }
);

export const toggleWishlistItem = createAsyncThunk(
  "wishlist/toggleWishlistItem",
  async (item: Omit<WishlistItem, "addedAt">) => {
    const localItems = toggleLocalWishlist(item);

    if (!isAuthenticated()) {
      return { items: localItems };
    }

    const res = await api.wishlist.toggle(item);
    if (!res.success || !res.data) return { items: localItems };
    const apiItems = res.data.items as WishlistItem[];
    saveWishlist(apiItems);
    return { items: apiItems };
  }
);

export const removeWishlistItem = createAsyncThunk(
  "wishlist/removeWishlistItem",
  async (productId: string) => {
    const localItems = removeFromWishlist(productId);

    if (!isAuthenticated()) {
      return { items: localItems };
    }

    const res = await api.wishlist.remove(productId);
    if (!res.success || !res.data) return { items: localItems };
    const apiItems = res.data.items as WishlistItem[];
    saveWishlist(apiItems);
    return { items: apiItems };
  }
);

export const clearWishlistItems = createAsyncThunk(
  "wishlist/clearWishlistItems",
  async () => {
    clearLocalWishlist();
    if (isAuthenticated()) {
      await api.wishlist.clear();
    }
    return { items: [] as WishlistItem[] };
  }
);

export const mergeWishlistAfterLogin = createAsyncThunk(
  "wishlist/mergeWishlistAfterLogin",
  async () => {
    const localItems = getLocalWishlist();

    if (localItems.length === 0) {
      const res = await api.wishlist.get();
      if (!res.success || !res.data) return { items: [] };
      const items = res.data.items as WishlistItem[];
      saveWishlist(items);
      return { items };
    }

    const res = await api.wishlist.get();
    if (!res.success || !res.data) return { items: localItems };

    const backendItems = res.data.items as WishlistItem[];
    const backendIds = new Set(backendItems.map((i) => i.productId));

    const toAdd = localItems.filter((i) => !backendIds.has(i.productId));
    for (const item of toAdd) {
      await api.wishlist.toggle({
        productId: item.productId,
        title: item.title,
        price: item.price,
        image: item.image,
      });
    }

    const mergedIds = new Set(backendItems.map((i) => i.productId));
    const merged = [...backendItems, ...localItems.filter((i) => !mergedIds.has(i.productId))];
    saveWishlist(merged);
    return { items: merged };
  }
);

interface WishlistState {
  items: WishlistItem[];
  loading: boolean;
  error: string | null;
}

const initialState: WishlistState = {
  items: [],
  loading: false,
  error: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWishlist.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchWishlist.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload.items;
    });
    builder.addCase(fetchWishlist.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || action.error.message || "Failed to load wishlist";
      state.items = getLocalWishlist();
    });

    builder.addCase(toggleWishlistItem.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });

    builder.addCase(removeWishlistItem.fulfilled, (state, action) => {
      state.items = action.payload.items;
    });

    builder.addCase(clearWishlistItems.fulfilled, (state) => {
      state.items = [];
    });

    builder.addCase(mergeWishlistAfterLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(mergeWishlistAfterLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload.items;
    });
    builder.addCase(mergeWishlistAfterLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = (action.payload as string) || action.error.message || "Failed to sync wishlist";
    });
  },
});

export const { clearError } = wishlistSlice.actions;
export default wishlistSlice.reducer;
