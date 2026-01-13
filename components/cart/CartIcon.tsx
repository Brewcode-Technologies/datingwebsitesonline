"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import useCartStore from "@/store";

const CartIcon = () => {
  const { items } = useCartStore();
  
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link
      href="/cart"
      className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      <ShoppingCart className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
          {itemCount > 99 ? "99+" : itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;