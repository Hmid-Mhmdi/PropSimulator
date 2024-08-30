"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./toggle-theme";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white rtl">
        <div className="container mx-auto px-16 py-6 flex justify-between items-center">
          <button
            className="lg:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden lg:flex items-center">
            <ThemeToggle />
            <Link href="/login" className="text-white mr-4 hover:text-gray-300">
              ورود
            </Link>
            <Link href="/register" className="text-white hover:text-gray-300">
              ثبت نام
            </Link>

            <Link href="/" className="text-xl font-bold mx-2">
              شبیه ساز پراپ
            </Link>
          </div>

          <div className="lg:hidden text-xl font-bold mx-2">شبیه ساز پراپ</div>

          <nav className="hidden lg:flex space-x-4">
            <a href="/contact-us" className="hover:text-gray-300">
              تماس با ما
            </a>
            <a href="/about-us" className="hover:text-gray-300">
              درباره ما
            </a>
            <a href="/rules" className="hover:text-gray-300">
              قوانین
            </a>
            <a href="/#banner" className="hover:text-gray-300">
              محصولات
            </a>
            <Link href="/" className="hover:text-gray-300">
              خانه
            </Link>
          </nav>
        </div>
      </header>

      {/* Side menu for mobile and tablet */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden bg-gray-800 text-white w-64 space-y-6 py-7 px-2 transition duration-200 ease-in-out z-20`}
      >
        <nav className="flex flex-col space-y-3 text-right">
          <Link href="/" className="hover:text-gray-300">
            خانه
          </Link>
          <Link href="/#banner" className="hover:text-gray-300">
            محصولات
          </Link>
          <Link href="/rules" className="hover:text-gray-300">
            قوانین
          </Link>
          <Link href="/about-us" className="hover:text-gray-300">
            درباره ما
          </Link>
          <Link href="/contact-us" className="hover:text-gray-300">
            تماس با ما
          </Link>

          <div className="h-48"></div>

          <Link href="/login" className="text-white  hover:text-gray-300">
            ورود
          </Link>
          <Link href="/register" className="text-white hover:text-gray-300">
            ثبت نام
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
