"use client";

import Link from "next/link";
import ThemeToggle from "./toggle-theme";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [providers, setProviders] = useState(null);
  const isUserLoggedIn = false;

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      console.log(response);
      setProviders(response);
    };
    setUpProviders();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="dark:bg-gray-800 dark:text-white bg-white text-black rtl">
        <div className="container mx-auto px-16 py-8 flex justify-between items-center">
          <div className="hidden lg:flex items-center">
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
            <ThemeToggle />

            {isUserLoggedIn ? (
              <>
                <button
                  type="button"
                  className="px-4 pt-2 pb-4 text-sm font-medium text-black dark:text-white border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                  onClick={signOut}
                >
                  خروج
                </button>
                <div className="w-2"></div>

                <Link
                  href="/dashboard"
                  className="px-4 pt-2 pb-4 text-sm font-medium text-black dark:text-white border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                >
                  داشبورد
                </Link>
              </>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      className="px-4 pt-2 pb-4 text-sm font-medium text-black dark:text-white border border-black dark:border-white rounded-md hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
                    >
                      ورود با {provider.name}
                    </button>
                  ))}
              </>
            )}

            <Link href="/" className="text-xl font-bold mx-2">
              شبیه ساز پراپ
            </Link>
          </div>

          <div className="lg:hidden text-xl font-bold mx-2">شبیه ساز پراپ</div>

          <nav className="hidden lg:flex space-x-4">
            <Link href="/#contact" className="hover:text-gray-300">
              تماس با ما
            </Link>
            <Link href="/#about" className="hover:text-gray-300">
              درباره ما
            </Link>
            <Link href="/#rules" className="hover:text-gray-300">
              قوانین
            </Link>
            <Link href="/#banner" className="hover:text-gray-300">
              پلن ها
            </Link>
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
          <Link href="/#plans" className="hover:text-gray-300">
            پلن ها
          </Link>
          <Link href="/#rules" className="hover:text-gray-300">
            قوانین
          </Link>
          <Link href="/#about" className="hover:text-gray-300">
            درباره ما
          </Link>
          <Link href="/#contact" className="hover:text-gray-300">
            تماس با ما
          </Link>

          <div className="h-48"></div>

          <Link href="/login" className="text-white  hover:text-gray-300">
            ورود
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
