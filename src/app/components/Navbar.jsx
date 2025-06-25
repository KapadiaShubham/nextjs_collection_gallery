'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const NAV_LINKS = [
  { href: '/', label: 'New Arrivals' },
  { href: '/long-dress', label: 'Long Dress' },
  { href: '/kurtis', label: 'Kurtis' },
  { href: '/tshirts-tops', label: 'T-shirts & Tops' },
  { href: '/western-wear', label: 'Western Wear' },
  { href: '/contact', label: 'Contact' },
];

const getLinkClasses = (currentPath, href) =>
  clsx(
    'relative group text-base md:text-lg px-4 py-3 transition-all duration-300',
    {
      'text-pink-600': currentPath === href,
      'text-gray-700 hover:text-pink-500': currentPath !== href,
    }
  );

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md border-b border-pink-200/40',
        {
          'bg-white/80 shadow-md': scrolled,
          'bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100/80':
            !scrolled,
        }
      )}
    >
      <div className='max-w-screen-xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-0'>
        {/* Top Row (Logo + Hamburger for mobile) */}
        <div className='w-full flex items-center justify-between'>
          <Link href='/' className='flex items-center space-x-3'>
            <Image
              src='https://flowbite.com/docs/images/logo.svg'
              alt='Logo'
              width={40}
              height={40}
            />
            <span className='text-2xl font-extrabold text-gray-800 hover:text-pink-500 transition'>
              Dhunki
            </span>
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className='md:hidden text-gray-600 hover:text-gray-900 focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {/* Nav Items Row */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } w-full md:flex md:items-center md:justify-center md:w-auto`}
        >
          <ul className='flex flex-col md:flex-row items-center md:space-x-6 space-y-3 md:space-y-0 text-gray-800 font-medium'>
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} className='mr-2 whitespace-nowrap'>
                <Link
                  href={href}
                  className={`${getLinkClasses(
                    pathname,
                    href
                  )} whitespace-nowrap`}
                >
                  {label}
                  <span className='absolute left-0 -bottom-1 w-0 h-0.5 bg-pink-500 transition-all group-hover:w-full'></span>
                </Link>
              </li>
            ))}
            <li className='relative whitespace-nowrap' ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='text-base md:text-lg px-4 py-3 hover:text-pink-600 transition whitespace-nowrap'
              >
                More ▼
              </button>
              {dropdownOpen && (
                <ul className='absolute top-full mt-1 right-0 bg-white border shadow-lg rounded-lg w-48 text-left z-10 overflow-hidden animate-fade-in'>
                  <li>
                    <Link
                      href='#'
                      className='block px-4 py-2 hover:bg-pink-100'
                    >
                      Offers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='block px-4 py-2 hover:bg-pink-100'
                    >
                      Festive Wear
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='#'
                      className='block px-4 py-2 hover:bg-pink-100'
                    >
                      Lookbook
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button className='bg-gradient-to-r from-pink-500 to-purple-500 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-pink-500/50 transition hover:scale-105 whitespace-nowrap'>
                Shop Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
