"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api, isAuthenticated } from "@/lib/api";
import { CartResponse } from "@/types";
import { FaTrash, FaArrowLeft, FaShoppingBag } from "react-icons/fa";

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkingOut, setCheckingOut] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace("/auth/signin");
      return;
    }
    api.cart.get().then((res) => {
      if (res.success && res.data) setCart(res.data);
      setLoading(false);
    });
  }, [router]);

  const handleQuantity = async (productId: string, quantity: number) => {
    if (quantity < 1) return;
    const res = await api.cart.updateQuantity(productId, quantity);
    if (res.success && res.data) setCart(res.data);
  };

  const handleRemove = async (productId: string) => {
    const res = await api.cart.removeItem(productId);
    if (res.success && res.data) setCart(res.data);
  };

  const handleCheckout = async () => {
    if (!cart || cart.items.length === 0) return;
    setCheckingOut(true);
    const items = cart.items.map((i) => ({
      productId: i.productId,
      title: i.title,
      price: i.price,
      quantity: i.quantity,
    }));
    const res = await api.orders.create({
      items,
      total: cart.total.toFixed(2),
    });
    if (res.success) {
      await api.cart.clear();
      router.push("/account");
    } else {
      alert(res.error || "Checkout failed");
    }
    setCheckingOut(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center mt-16">
        <div className="animate-pulse space-y-6 w-full max-w-4xl px-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-4">
              <div className="w-24 h-24 bg-base-300 rounded-xl" />
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-base-300 rounded w-1/3" />
                <div className="h-3 bg-base-300 rounded w-1/4" />
                <div className="h-3 bg-base-300 rounded w-1/5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 mt-16 px-4">
        <FaShoppingBag className="text-6xl text-base-content/20" />
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="text-base-content/60">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/shop" className="btn btn-primary">
          <FaArrowLeft /> Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 mt-16">
      <div className="max-w-[1600px] mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.productId}
                className="flex gap-4 sm:gap-6 items-start bg-base-100 border border-base-300 rounded-2xl p-4"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-base-200 shrink-0">
                  {item.image ? (
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-base-content/20 text-sm">
                      No img
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <Link href={`/shop/${item.productId}`} className="font-semibold hover:text-primary line-clamp-1">
                    {item.title}
                  </Link>
                  {item.size && <p className="text-sm text-base-content/60">Size: {item.size}</p>}
                  {item.color && (
                    <div className="flex items-center gap-1.5 text-sm text-base-content/60">
                      Color: <span className="w-3 h-3 rounded-full border" style={{ backgroundColor: item.color }} />
                    </div>
                  )}
                  <p className="text-sm font-medium text-primary mt-1">
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button
                    onClick={() => handleRemove(item.productId)}
                    className="text-red-500 hover:text-red-700 p-1"
                    aria-label="Remove item"
                  >
                    <FaTrash className="text-sm" />
                  </button>
                  <div className="flex items-center border border-base-300 rounded-lg">
                    <button
                      onClick={() => handleQuantity(item.productId, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-base-200 transition"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-sm font-medium min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantity(item.productId, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-base-200 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-base-100 border border-base-300 rounded-2xl p-6 h-fit lg:sticky lg:top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-base-content/60">Subtotal</span>
                <span>${cart.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-base-content/60">Shipping</span>
                <span>{cart.shipping === 0 ? <span className="text-green-600 font-medium">FREE</span> : `$${cart.shipping.toFixed(2)}`}</span>
              </div>
              {cart.shipping > 0 && (
                <p className="text-xs text-base-content/40">Free shipping on orders over $50</p>
              )}
              <div className="flex justify-between">
                <span className="text-base-content/60">Tax (8%)</span>
                <span>${cart.tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-base-300 pt-3 mt-3">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${cart.total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={checkingOut}
              className="btn btn-primary w-full mt-6"
            >
              {checkingOut ? "Processing..." : "Proceed to Checkout"}
            </button>

            <Link
              href="/shop"
              className="btn btn-ghost w-full mt-2 text-sm"
            >
              <FaArrowLeft /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
