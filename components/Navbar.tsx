"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Management", href: "#management" },
  { name: "Services", href: "#services" },
  { name: "Clients", href: "#clients" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-6"
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-white/80 backdrop-blur-3xl shadow-2xl shadow-black/5"
            : "bg-white/10 backdrop-blur-2xl"
        } rounded-[20px] border border-white/20`}
      >
        <div className="flex items-center justify-between h-16 md:h-20 px-6 md:px-8">
          {/* Logo with Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative cursor-pointer group"
            onClick={() => scrollToSection("#home")}
          >
            <span
              className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-[#667eea] to-[#764ba2] bg-clip-text text-transparent"
                  : "text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.5)]"
              }`}
            >
              SAMARTHWAVE
            </span>
          </motion.div>

          {/* Desktop Menu with Pills */}
          <div className="hidden md:flex items-center gap-2 bg-white/5 rounded-full px-2 py-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:bg-white hover:shadow-lg"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button - Glass Style */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2.5 rounded-full transition-all duration-300 ${
              isScrolled
                ? "bg-gray-100/80 text-gray-700"
                : "bg-white/20 text-white"
            }`}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>

        {/* Mobile Menu - Glassmorphic */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden border-t ${
              isScrolled ? "border-gray-200/50" : "border-white/10"
            }`}
          >
            <div className="py-4 px-4 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`block w-full text-left px-5 py-3.5 rounded-2xl font-medium transition-all duration-300 ${
                    isScrolled
                      ? "text-gray-700 hover:bg-gradient-to-r hover:from-[#667eea]/10 hover:to-[#764ba2]/10 hover:text-primary"
                      : "text-white hover:bg-white/20"
                  }`}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
