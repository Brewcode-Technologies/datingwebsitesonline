'use client';

import Link from 'next/link';
import React from 'react';
import Container from './Container';
import HeaderMenu from './layout/HeaderMenu';
import MobileMenu from './layout/MobileMenu';
import NotificationBell from './NotificationBell';
import UserDropdown from './UserDropdown';
import Image from 'next/image';

const ClientHeader = () => {

  return (
    <header className="sticky top-0 z-40 py-2 sm:py-3 lg:py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <Container className="h-full">
        <div className="flex items-center h-full min-h-[3rem] sm:min-h-[3.5rem] lg:min-h-[4rem]">
          {/* Left Section: Mobile Menu + Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <MobileMenu />
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="object-contain h-10 sm:h-12 md:h-14 lg:h-16 w-auto cursor-pointer hover:scale-105 transition-transform duration-200 bg-transparent"
                priority
              />
            </Link>
          </div>

          {/* Right Section: Navigation + Actions */}
          <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 ml-auto">
            {/* Navigation Menu (Desktop Only) */}
            <div className="hidden lg:flex items-center">
              <HeaderMenu />
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <NotificationBell />
              <UserDropdown />
            </div>

            {/* Tablet Actions (Medium screens) */}
            <div className="hidden md:flex lg:hidden items-center gap-2">
              <NotificationBell />
              <UserDropdown />
            </div>

            {/* Mobile Actions (Small screens) */}
            <div className="flex md:hidden items-center gap-1">
              <UserDropdown />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default ClientHeader;
