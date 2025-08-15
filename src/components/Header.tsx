'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-stone-800 tracking-tight">
              <span className="text-amber-600">Home</span>DynastyFurniture
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
              Home
            </Link>
            <Link href="#services" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
              Services
            </Link>
            <Link href="#portfolio" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
              Portfolio
            </Link>
            <Link href="#about" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
              About
            </Link>
            <Link href="#contact" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
              Contact
            </Link>
          </nav>

          {/* Phone Number */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+1234567890" 
              className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>(123) 456-7890</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-stone-700 hover:text-amber-600 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-stone-200 py-6 bg-white/95">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
                Home
              </Link>
              <Link href="#services" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
                Services
              </Link>
              <Link href="#portfolio" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
                Portfolio
              </Link>
              <Link href="#about" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
                About
              </Link>
              <Link href="#contact" className="text-stone-700 hover:text-amber-600 transition-colors font-medium text-lg">
                Contact
              </Link>
              <a 
                href="tel:+1234567890" 
                className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-fit"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(123) 456-7890</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
