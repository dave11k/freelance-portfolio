"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  currentPage?: "home" | "projects" | "about" | "contact";
}

export default function Navbar({ currentPage = "home" }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", key: "home" },
    { name: "Projects", href: "/projects", key: "projects" },
    { name: "About", href: "/about", key: "about" },
    { name: "Contact", href: "/contact", key: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <a href="/" className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-900">David Kiely</h1>
              <span className="text-gray-500 hidden sm:inline">|</span>
              <span className="text-gray-600 hidden sm:inline">
                Full Stack Developer
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.key}>
                {currentPage === item.key ? (
                  <span className="text-emerald-600 font-medium">
                    {item.name}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-emerald-600 transition-colors"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100"
            style={{ height: "50vh" }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
              {navItems.map((item) => (
                <div key={item.key} className="text-center">
                  {currentPage === item.key ? (
                    <span className="text-emerald-600 font-semibold text-2xl">
                      {item.name}
                    </span>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-emerald-600 transition-colors text-2xl font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
