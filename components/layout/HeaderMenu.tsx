'use client';
import { headerData } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

const HeaderMenu = () => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleDropdownClick = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 300); // 300ms delay before closing
  };

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(title);
  };

  return (
    <div className="hidden md:inline-flex w-full items-center justify-center gap-7 text-sm capitalize font-semibold text-light-color">
      {headerData?.map((item) => (
        <div
          key={item?.title}
          className="relative"
          ref={item.hasDropdown ? dropdownRef : null}
          onMouseEnter={item.hasDropdown ? () => handleMouseEnter(item.title) : undefined}
          onMouseLeave={item.hasDropdown ? handleMouseLeave : undefined}
        >
          {item.hasDropdown ? (
            <div className="relative">
              <Link
                href={item?.href}
                className={`hover:text-shop_light_green hoverEffect relative group ${
                  pathname === item?.href || 
                  (item.hasDropdown && item.dropdownItems?.some(dropItem => pathname === dropItem.href))
                    ? 'text-shop_light_green' : ''
                }`}
                onClick={() => setOpenDropdown(null)}
              >
                {item?.title}
                <span
                  className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
                    pathname === item?.href || 
                    (item.hasDropdown && item.dropdownItems?.some(dropItem => pathname === dropItem.href))
                      ? 'w-1/2' : ''
                  }`}
                />
                <span
                  className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
                    pathname === item?.href || 
                    (item.hasDropdown && item.dropdownItems?.some(dropItem => pathname === dropItem.href))
                      ? 'w-1/2' : ''
                  }`}
                />
              </Link>
            </div>
          ) : (
            <Link
              href={item?.href}
              className={`hover:text-shop_light_green hoverEffect relative group ${
                pathname === item?.href ? 'text-shop_light_green' : ''
              }`}
            >
              {item?.title}
              <span
                className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300 group-hover:w-1/2 group-hover:left-0 ${
                  pathname === item?.href ? 'w-1/2' : ''
                }`}
              />
              <span
                className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green transition-all duration-300 group-hover:w-1/2 group-hover:right-0 ${
                  pathname === item?.href ? 'w-1/2' : ''
                }`}
              />
            </Link>
          )}
          
          {item.hasDropdown && openDropdown === item.title && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md border z-50">
              {item.dropdownItems?.map((dropItem) => (
                <Link
                  key={dropItem.title}
                  href={dropItem.href}
                  className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-shop_light_green ${
                    pathname === dropItem.href ? 'text-shop_light_green bg-gray-50' : ''
                  }`}
                  onClick={() => setOpenDropdown(null)}
                >
                  {dropItem.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HeaderMenu;
