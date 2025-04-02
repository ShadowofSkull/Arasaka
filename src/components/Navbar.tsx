"use client";

import ChatSidebar from "@/components/chat-history/ChatHistory";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-[var(--zindex-nav)] w-full backdrop-blur-md bg-white/70 dark:bg-zinc-900/80 border-b border-zinc-200/50 dark:border-zinc-800/50 shadow-sm h-[var(--navbar-height)]">
      <nav className="w-full px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto h-full">
        <div className="flex justify-between items-center h-full">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {/* Logo - links to home page */}
            <Link href="/" className="flex items-center ml-4">
              <Image
                src="/hori-logo.svg"
                alt="Company Logo"
                width={120}
                height={120}
              />
            </Link>
          </div>

          {/* Right side - Favorites and Profile */}
          {/* Right side - Favorites and Profile */}
          <div className="flex items-center space-x-4">
            {/* Favorites */}
            {/* Favorites */}
            <Link
              href="/favorites"
              href="/favorites"
              className="relative p-2 text-zinc-600 dark:text-zinc-400 hover:text-red-500 dark:hover:text-red-400"
            >
              <span className="sr-only">Favorites</span>
              <span className="sr-only">Favorites</span>
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
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
        <ChatSidebar onClose={() => setIsSidebarOpen(false)} />
      )}
    </header>
  );
};

export default Navbar;
