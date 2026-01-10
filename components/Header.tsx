import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Travel Rules', path: '/rules' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Determine if header should be transparent (e.g., above Home Hero)
  // For now, keeping it clean white with 0 margin/padding issues.
  return (
    <header className="bg-white sticky top-0 z-50 border-b border-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-14 md:h-16">

          {/* LOGO */}
          <Link
            to="/"
            title="BookMyCar.live"
            className="flex items-center space-x-3 group"
          >
            <div className="w-9 h-9 overflow-hidden rounded-xl border border-gray-100 shadow-sm group-hover:rotate-6 transition-transform">
              <img src="/logo.png" alt="BookMyCar Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-xl font-black text-black tracking-tighter">
              BookMyCar<span className="text-blue-500">.live</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${isActive(link.path)
                  ? 'text-blue-600'
                  : 'text-gray-400 hover:text-black'
                  }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-6 py-4 font-black uppercase tracking-widest text-xs rounded-2xl ${isActive(link.path)
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-500 hover:bg-gray-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
