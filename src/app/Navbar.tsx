"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Flowbite Logo"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-black">
            Dhunki Fashion
          </span>
        </Link>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <Link
                href="/"
                className={clsx("block py-2 px-3 rounded-sm md:p-0",
                  {
                    "text-white bg-blue-700 md:bg-transparent md:text-blue-700":pathname === '/',
                    "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700":pathname !== '/'
                  }
                )}
                aria-current="page"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={clsx("block py-2 px-3 rounded-sm md:p-0",
                  {
                    "text-white bg-blue-700 md:bg-transparent md:text-blue-700":pathname === '/about',
                    "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700":pathname !== '/about'
                  }
                )}
              >
                Kurtis
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={clsx("block py-2 px-3 rounded-sm md:p-0",
                  {
                    "text-white bg-blue-700 md:bg-transparent md:text-blue-700":pathname === '/services',
                    "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700":pathname !== '/services'
                  }
                )}
              >
                T-shirts & Tops
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={clsx("block py-2 px-3 rounded-sm md:p-0",
                  {
                    "text-white bg-blue-700 md:bg-transparent md:text-blue-700":pathname === '/pricing',
                    "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700":pathname !== '/pricing'
                  }
                )}
              >
                Western Wear
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={clsx("block py-2 px-3 rounded-sm md:p-0",
                  {
                    "text-white bg-blue-700 md:bg-transparent md:text-blue-700":pathname === '/contact',
                    "text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700":pathname !== '/contact'
                  }
                )}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
