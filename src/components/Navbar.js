'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const isAuth = document.cookie.includes('auth=authenticated');
    setIsLoggedIn(isAuth);
  }, []);

  const handleLogout = () => {
    document.cookie = 'auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    setIsLoggedIn(false);
    router.push('/');
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold hover:text-blue-100">
            MyApp
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="hover:text-blue-100 transition">
              Home
            </Link>
            <Link href="/items" className="hover:text-blue-100 transition">
              Items
            </Link>
            {isLoggedIn && (
              <Link href="/add-item" className="hover:text-blue-100 transition">
                Add Item
              </Link>
            )}
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block hover:text-blue-100 py-2">
              Home
            </Link>
            <Link href="/items" className="block hover:text-blue-100 py-2">
              Items
            </Link>
            {isLoggedIn && (
              <Link href="/add-item" className="block hover:text-blue-100 py-2">
                Add Item
              </Link>
            )}
            {!isLoggedIn ? (
              <Link
                href="/login"
                className="block bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="block w-full text-left bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
