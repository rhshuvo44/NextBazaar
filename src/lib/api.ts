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
      request<{ token: string; user: { id: string; name?: string; email: string; role: string } }>(
        "/auth/signup",
        { method: "POST", body: JSON.stringify(body) }
      ),
    signin: (body: { email: string; password: string }) =>
      request<{ token: string; user: { id: string; name?: string; email: string; role: string } }>(
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
    me: () => request<{ id: string; name?: string; email: string; role: string }>("/auth/me"),
  },
  products: {
    list: (params?: { category?: string; minPrice?: number; maxPrice?: number; search?: string }) => {
      const query = new URLSearchParams();
      if (params?.category) query.set("category", params.category);
      if (params?.minPrice !== undefined) query.set("minPrice", String(params.minPrice));
      if (params?.maxPrice !== undefined) query.set("maxPrice", String(params.maxPrice));
      if (params?.search) query.set("search", params.search);
      const qs = query.toString();
      return request<unknown[]>(`/products${qs ? `?${qs}` : ""}`);
    },
    getById: (id: string) => request<unknown>(`/products/${id}`),
  },
  orders: {
    create: (body: { items: { productId: string; title: string; price: string; quantity: number }[]; total: string }) =>
      request<unknown>("/orders", { method: "POST", body: JSON.stringify(body) }),
    list: () => request<unknown[]>("/orders"),
    getById: (id: string) => request<unknown>(`/orders/${id}`),
  },
};
