
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Work', href: '#work' },
  { title: 'Team', href: '#team' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.9)']
  );
  
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 rgba(0, 0, 0, 0)', '0 4px 20px rgba(0, 0, 0, 0.05)']
  );
  
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(255, 255, 255)', 'rgb(23, 23, 23)']
  );

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-10"
      style={{ 
        backgroundColor: navBackground,
        boxShadow: navShadow,
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#home"
          className="font-bold text-2xl md:text-3xl z-10"
          style={{ color: textColor }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Visionary
        </motion.a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="nav-link"
              style={{ color: textColor }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              {link.title}
            </motion.a>
          ))}
        </nav>
        
        <motion.button
          className="button-primary hidden md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('project-modal')?.click()}
        >
          Start a Project
        </motion.button>
        
        {/* Mobile Navigation Toggle */}
        <motion.button
          className="md:hidden z-10 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {mobileMenuOpen ? (
            <X size={24} style={{ color: 'white' }} />
          ) : (
            <Menu size={24} style={{ color: mobileMenuOpen ? 'white' : textColor.get() }} />
          )}
        </motion.button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <motion.div
        className="fixed inset-0 z-40 bg-black"
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          x: mobileMenuOpen ? "0%" : "100%",
        }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="text-white text-2xl font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: mobileMenuOpen ? 1 : 0, 
                y: mobileMenuOpen ? 0 : 10 
              }}
              transition={{ 
                delay: mobileMenuOpen ? index * 0.1 : 0,
                duration: 0.3
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.title}
            </motion.a>
          ))}
          <motion.button 
            className="button-primary mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: mobileMenuOpen ? 1 : 0, 
              y: mobileMenuOpen ? 0 : 10 
            }}
            transition={{ 
              delay: mobileMenuOpen ? navLinks.length * 0.1 : 0,
              duration: 0.3
            }}
            onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('project-modal')?.click();
            }}
          >
            Start a Project
          </motion.button>
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
