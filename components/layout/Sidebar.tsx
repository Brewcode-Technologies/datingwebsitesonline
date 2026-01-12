import { X, Home, Phone, Info, LogIn, UserPlus } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { useOutsideClick } from '@/hooks';
import { categoriesData } from '@/constants';
import Logo from '../common/Logo';
import Image from 'next/image';
import { ClerkLoaded, SignedIn, SignedOut, useUser } from '@clerk/nextjs';
import UserDropdown from '../UserDropdown';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  const mainMenuItems = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'About Us', href: '/about', icon: Info },
    { title: 'Contact Us', href: '/contact', icon: Phone },
  ];

  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-primary/50 shadow-xl transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform ease-in-out duration-300`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
        className="min-w-72 max-w-96 bg-black z-50 h-screen text-primary-foreground p-6 border-r border-r-shop_dark_green flex flex-col gap-4 overflow-y-auto scrollbar-thin scrollbar-thumb-shop_dark_green scrollbar-track-transparent"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-shop_dark_green">
          {/* <Logo className="text-white" /> */}
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            className="object-contain h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-200 bg-transparent"
            priority
          />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect p-2 rounded-md hover:bg-shop_dark_green/30"
          >
            <X size={20} />
          </button>
        </div>

        {/* Main Navigation */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-shop_light_green uppercase tracking-wider">
            Navigation
          </h3>
          <div className="flex flex-col gap-2">
            {mainMenuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={onClose}
                  key={item.title}
                  href={item.href}
                  className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 hover:text-shop_light_green hover:bg-shop_dark_green/30 ${
                    pathname === item.href
                      ? 'text-shop_light_green bg-shop_dark_green/50'
                      : 'text-zinc-300'
                  }`}
                >
                  <Icon size={18} />
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-shop_light_green uppercase tracking-wider">
            Categories
          </h3>
          <div className="flex flex-col gap-1">
            {categoriesData.map((item) => (
              <Link
                onClick={onClose}
                key={item.title}
                href={`/category/${item.href}`}
                className={`flex items-center gap-3 p-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 hover:text-shop_light_green hover:bg-shop_dark_green/30 ${
                  pathname === item.href
                    ? 'text-shop_light_green bg-shop_dark_green/50'
                    : 'text-zinc-300'
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Authentication Section */}
        <div className="mt-auto pt-4 border-t border-shop_dark_green">
          <ClerkLoaded>
            <SignedIn>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-shop_light_green uppercase tracking-wider">
                  Account
                </h3>
                <UserDropdown />
              </div>
            </SignedIn>
            <SignedOut>
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-shop_light_green uppercase tracking-wider">
                  Get Started
                </h3>
                <div className="flex flex-col gap-2">
                  <Link
                    onClick={onClose}
                    href="/sign-in"
                    className="flex items-center gap-3 p-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 hover:text-shop_light_green hover:bg-shop_dark_green/30 text-zinc-300"
                  >
                    <LogIn size={18} />
                    Sign In
                  </Link>
                  <Link
                    onClick={onClose}
                    href="/sign-up"
                    className="flex items-center gap-3 p-2 rounded-md text-sm font-medium tracking-wide transition-all duration-200 bg-shop_light_green text-black hover:bg-shop_light_green/90"
                  >
                    <UserPlus size={18} />
                    Sign Up
                  </Link>
                </div>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
