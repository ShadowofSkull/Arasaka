"use client";

import ChatSidebar from "@/components/chat-history/ChatSidebar";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-(--zindex-nav) w-full backdrop-blur-md bg-white/70 dark:bg-zinc-900/80 border-b border-zinc-200/50 dark:border-zinc-800/50">
      <nav className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Menu icon and Logo */}
          <div className="flex items-center">
            {/* Sidebar menu button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:focus:ring-offset-zinc-900"
              aria-expanded={isSidebarOpen}
              aria-label="Open chat history"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isSidebarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Logo - links to home page */}
            <Link href="/" className="flex items-center ml-4">
              <Image
                src="/hori-logo.svg"
                alt="Company Logo"
                width={120}
                height={100}
              />
            </Link>
          </div>

          {/* Right side - Cart and Profile */}
          <div className="flex items-center space-x-4">
            {/* Shopping Cart */}
            <Link
              href="/cart"
              className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400"
            >
              <span className="sr-only">Shopping cart</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-500 rounded-full">
                0
              </span>
            </Link>

            {/* Profile */}
            <Link
              href="/profile"
              className="p-2 text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400"
            >
              <span className="sr-only">Profile</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </nav>

      {/* Chat History Sidebar */}
      {!!isSidebarOpen && (
        <ChatSidebar
          onClose={() => setIsSidebarOpen(false)}
        />
      )}
    </header>
  );
};

export default Navbar;
