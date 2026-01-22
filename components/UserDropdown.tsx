"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  User,
  Settings,
  LogOut,
  UserCircle,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useIsAdmin } from "@/lib/adminUtils";
import { useUserData } from "@/contexts/UserDataContext";

const UserDropdown = () => {
  const [open, setOpen] = useState(false);
  const { isSignedIn } = useUserData();
  const isAdmin = useIsAdmin();

  if (!isSignedIn) return null;

  const handleSignOut = () => {
    setOpen(false);
  };

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button className="flex items-center gap-2 py-1 px-2 rounded-lg hover:bg-shop_light_bg group border border-shop_dark_green/20 hover:border-shop_dark_green hoverEffect">
          <div className="relative">
            <UserCircle className="w-8 h-8 text-gray-500 group-hover:text-shop_light_green transition-colors" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white shadow-sm"></div>
          </div>
          <div className="hidden lg:flex flex-col items-start">
            <span className="text-sm font-medium text-gray-800 group-hover:text-shop_light_green transition-colors">
              User
            </span>
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-72 p-0" align="end" sideOffset={5}>
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <UserCircle className="w-12 h-12 text-gray-500" />
            <div>
              <h3 className="font-semibold text-gray-800">User</h3>
              <p className="text-sm text-gray-500">user@example.com</p>
            </div>
          </div>
        </div>

        <div className="p-2">
          <Link
            href="/profile"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-shop_light_bg transition-colors duration-200 group"
          >
            <User className="w-4 h-4 text-gray-500 group-hover:text-shop_light_green transition-colors" />
            <span className="text-gray-800 group-hover:text-shop_light_green transition-colors">
              My Profile
            </span>
          </Link>

          <Link
            href="/settings"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-shop_light_bg transition-colors duration-200 group"
          >
            <Settings className="w-4 h-4 text-gray-500 group-hover:text-shop_light_green transition-colors" />
            <span className="text-gray-800 group-hover:text-shop_light_green transition-colors">
              Settings
            </span>
          </Link>

          <Link
            href="/help"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-shop_light_bg transition-colors duration-200 group"
          >
            <svg
              className="w-4 h-4 text-gray-500 group-hover:text-shop_light_green transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-800 group-hover:text-shop_light_green transition-colors">
              Help & Support
            </span>
          </Link>
        </div>

        <div className="p-2 border-t border-gray-100">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg hover:bg-red-50 transition-colors duration-200 w-full text-left"
          >
            <LogOut className="w-4 h-4 text-red-500" />
            <span className="text-red-600">Sign Out</span>
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserDropdown;
