const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("token");
}

export function setToken(token: string) {
  localStorage.setItem("token", token);
}

export function clearToken() {
  localStorage.removeItem("token");
}

export function isAuthenticated(): boolean {
  return !!getToken();
}

export function getUser(): { id: string; name?: string; email: string; role: string; shopName?: string; vendorStatus?: string } | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem("user");
  return raw ? JSON.parse(raw) : null;
}

export function setUser(user: unknown) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function clearUser() {
  localStorage.removeItem("user");
}

async function request<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<{ success: boolean; data?: T; error?: string; details?: unknown }> {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(options.headers as Record<string, string>),
  };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, { ...options, headers });
    const json = await res.json();
    if (!res.ok) {
      return { success: false, error: json.error || "Request failed", details: json.details };
    }
    return { success: true, data: json.data };
  } catch (err) {
    return { success: false, error: err instanceof Error ? err.message : "Network error" };
  }
}

export const api = {
  auth: {
    signup: (body: { email: string; password: string; name?: string }) =>
      request<{ token: string; user: { id: string; name?: string; email: string; role: string; shopName?: string; vendorStatus?: string } }>(
        "/auth/signup",
        { method: "POST", body: JSON.stringify(body) }
      ),
    vendorSignup: (body: { email: string; password: string; shopName: string; name?: string; shopDescription?: string }) =>
      request<{ token: string; user: Record<string, unknown>; message: string }>(
        "/auth/vendor-signup",
        { method: "POST", body: JSON.stringify(body) }
      ),
    signin: (body: { email: string; password: string }) =>
      request<{ token: string; user: { id: string; name?: string; email: string; role: string; shopName?: string; vendorStatus?: string } }>(
        "/auth/signin",
        { method: "POST", body: JSON.stringify(body) }
      ),
    forgotPassword: (body: { email: string }) =>
      request<{ message: string }>("/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    verifyOtp: (body: { email: string; otp: string }) =>
      request<{ message: string }>("/auth/verify-otp", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    resetPassword: (body: { email: string; otp: string; password: string }) =>
      request<{ message: string }>("/auth/reset-password", {
        method: "POST",
        body: JSON.stringify(body),
      }),
    me: () => request<{ id: string; name?: string; email: string; role: string; shopName?: string; vendorStatus?: string }>("/auth/me"),
  },
  products: {
    list: (params?: { category?: string; minPrice?: number; maxPrice?: number; search?: string; vendorId?: string }) => {
      const query = new URLSearchParams();
      if (params?.category) query.set("category", params.category);
      if (params?.minPrice !== undefined) query.set("minPrice", String(params.minPrice));
      if (params?.maxPrice !== undefined) query.set("maxPrice", String(params.maxPrice));
      if (params?.search) query.set("search", params.search);
      if (params?.vendorId) query.set("vendorId", params.vendorId);
      const qs = query.toString();
      return request<unknown[]>(`/products${qs ? `?${qs}` : ""}`);
    },
    getById: (id: string) => request<unknown>(`/products/${id}`),
  },
  cart: {
    get: () => request<{ items: { productId: string; title: string; price: string; quantity: number; lineTotal: number; image?: string; size?: string; color?: string }[]; subtotal: number; shipping: number; tax: number; total: number; itemCount: number }>("/cart"),
    addItem: (body: { productId: string; title: string; price: string; quantity: number; image?: string; size?: string; color?: string }) =>
      request<{ items: { productId: string; title: string; price: string; quantity: number; lineTotal: number; image?: string; size?: string; color?: string }[]; subtotal: number; shipping: number; tax: number; total: number; itemCount: number }>("/cart/items", { method: "POST", body: JSON.stringify(body) }),
    updateQuantity: (productId: string, quantity: number) =>
      request<{ items: { productId: string; title: string; price: string; quantity: number; lineTotal: number; image?: string; size?: string; color?: string }[]; subtotal: number; shipping: number; tax: number; total: number; itemCount: number }>(`/cart/items/${productId}`, { method: "PATCH", body: JSON.stringify({ quantity }) }),
    removeItem: (productId: string) =>
      request<{ items: { productId: string; title: string; price: string; quantity: number; lineTotal: number; image?: string; size?: string; color?: string }[]; subtotal: number; shipping: number; tax: number; total: number; itemCount: number }>(`/cart/items/${productId}`, { method: "DELETE" }),
    clear: () => request<{ message: string }>("/cart", { method: "DELETE" }),
  },
  orders: {
    create: (body: { items: { productId: string; title: string; price: string; quantity: number }[]; total: string }) =>
      request<unknown>("/orders", { method: "POST", body: JSON.stringify(body) }),
    list: () => request<unknown[]>("/orders"),
    getById: (id: string) => request<unknown>(`/orders/${id}`),
  },
  vendor: {
    dashboard: () => request<{ productCount: number; orderCount: number; revenue: number }>("/vendor/dashboard"),
    profile: () => request<Record<string, unknown>>("/vendor/profile"),
    updateProfile: (body: { shopName?: string; shopDescription?: string; shopLogo?: string }) =>
      request<Record<string, unknown>>("/vendor/profile", { method: "PUT", body: JSON.stringify(body) }),
    products: {
      list: () => request<unknown[]>("/vendor/products"),
      create: (body: { title: string; price: string; category: string; brand?: string; sizes?: string[]; colors?: string[]; description?: string; discount?: number }) =>
        request<unknown>("/vendor/products", { method: "POST", body: JSON.stringify(body) }),
      update: (id: string, body: Record<string, unknown>) =>
        request<unknown>(`/vendor/products/${id}`, { method: "PUT", body: JSON.stringify(body) }),
      delete: (id: string) =>
        request<unknown>(`/vendor/products/${id}`, { method: "DELETE" }),
    },
    orders: {
      list: () => request<unknown[]>("/vendor/orders"),
      updateItemStatus: (orderId: string, itemIdx: number, status: string) =>
        request<unknown>(`/vendor/orders/${orderId}/items/${itemIdx}/status`, {
          method: "PUT",
          body: JSON.stringify({ status }),
        }),
    },
  },
  admin: {
    vendors: {
      list: (status?: string) =>
        request<unknown[]>(`/admin/vendors${status ? `?status=${status}` : ""}`),
      approve: (id: string) =>
        request<unknown>(`/admin/vendors/${id}/approve`, { method: "PUT" }),
      suspend: (id: string) =>
        request<unknown>(`/admin/vendors/${id}/suspend`, { method: "PUT" }),
    },
  },
};
