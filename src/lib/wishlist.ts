const STORAGE_KEY = "wishlist";

export interface WishlistItem {
  productId: string;
  title: string;
  price: string;
  image?: string;
  addedAt: string;
}

function getItems(): WishlistItem[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveItems(items: WishlistItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function getWishlist(): WishlistItem[] {
  return getItems();
}

export function isInWishlist(productId: string): boolean {
  return getItems().some((i) => i.productId === productId);
}

export function toggleWishlist(item: Omit<WishlistItem, "addedAt">): WishlistItem[] {
  const items = getItems();
  const existing = items.findIndex((i) => i.productId === item.productId);
  if (existing >= 0) {
    items.splice(existing, 1);
  } else {
    items.push({ ...item, addedAt: new Date().toISOString() });
  }
  saveItems(items);
  return items;
}

export function removeFromWishlist(productId: string): WishlistItem[] {
  const items = getItems().filter((i) => i.productId !== productId);
  saveItems(items);
  return items;
}

export function clearWishlist() {
  localStorage.removeItem(STORAGE_KEY);
}
