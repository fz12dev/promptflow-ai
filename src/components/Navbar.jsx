import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { BsStars } from 'react-icons/bs';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Tool', href: '#tool' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center">
              <BsStars className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">Smart<span className="text-gradient">AI</span></span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Log in
            </a>
            <a href="#demo" className="btn-primary text-sm px-5 py-2.5">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <hr className="border-white/10 my-2" />
          <div className="flex flex-col gap-4">
            <a href="#login" className="text-center font-medium text-slate-300 hover:text-white transition-colors">
              Log in
            </a>
            <a href="#demo" className="btn-primary text-center">
              Get Started
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
