"use client";

import Link from "next/link";
import { Bell } from "lucide-react";
import { useUserData } from "@/contexts/UserDataContext";

export default function NotificationBell() {
  const { isSignedIn } = useUserData();

  if (!isSignedIn) {
    return null;
  }

  return (
    <Link href="/notifications" className="relative">
      <Bell className="text-shop_dark_green/80 group-hover:text-shop_dark_green hoverEffect" />
      <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white rounded-full text-xs font-semibold flex items-center justify-center min-w-[14px] h-[14px]">
        0
      </span>
    </Link>
  );
}
