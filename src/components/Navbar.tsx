
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from "../../public/logo.png"

const navLinks = [
  { title: 'Home', href: '#home' },
  { title: 'About', href: '#about' },
  { title: 'Services', href: '#services' },
  { title: 'Work', href: '#work' },
  { title: 'Team', href: '#team' },
  { title: 'Testimonials', href: '#testimonials' },
  { title: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  
  // Enhanced background with more glass effect
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.95)']
  );
  
  // Improved shadow for depth
  const navShadow = useTransform(
    scrollY,
    [0, 100],
    ['0 0 0 rgba(0, 0, 0, 0)', '0 10px 30px rgba(0, 0, 0, 0.1)']
  );
  
  // Consistent text color
  const textColor = useTransform(
    scrollY,
    [0, 100],
    ['rgb(30, 41, 59)', 'rgb(30, 41, 59)']
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

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + custom * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-10"
      style={{ 
        backgroundColor: navBackground,
        boxShadow: navShadow,
        backdropFilter: 'blur(12px)'
      }}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a 
          href="#home"
          className="font-bold text-2xl md:text-3xl z-10 flex items-center"
          style={{ color: textColor }}
          variants={logoVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800">
            {/* <img src={logo} alt="" /> */}
            WebCrafticX
          </span>
          {/* <span className="w-2 h-2 ml-1 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"></span> */}
        </motion.a>
        
        {/* Desktop Navigation with enhanced hover effects */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              className={`nav-link font-medium relative ${
                activeSection === link.href.substring(1) 
                  ? 'text-indigo-600' 
                  : 'text-slate-700'
              }`}
              variants={navItemVariants}
              custom={index}
              whileHover={{ y: -2, color: "#4f46e5" }}
              transition={{ duration: 0.2 }}
            >
              {link.title}
              {activeSection === link.href.substring(1) && (
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-indigo-600 rounded"
                  layoutId="activeSection"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.a>
          ))}
        </nav>
        
        <motion.button
          className="button-primary hidden md:block bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20"
          variants={navItemVariants}
          custom={navLinks.length}
          whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(79, 70, 229, 0.3)" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('project-modal')?.click()}
        >
          Start a Project
        </motion.button>
        
        {/* Mobile Navigation Toggle with improved design */}
        <motion.button
          className="md:hidden z-10 p-2 bg-white/80 rounded-full backdrop-blur-sm shadow-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          variants={logoVariants}
        >
          {mobileMenuOpen ? (
            <X size={24} className="text-indigo-600" />
          ) : (
            <Menu size={24} className="text-indigo-600" />
          )}
        </motion.button>
      </div>
      
      {/* Mobile Navigation Menu with enhanced design */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-gradient-to-b from-indigo-900 to-purple-900"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.title}
                  href={link.href}
                  className="text-white text-2xl font-semibold"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.title}
                </motion.a>
              ))}
              <motion.button 
                className="mt-4 px-8 py-3 rounded-md bg-white text-indigo-700 font-medium transition-all duration-300 shadow-xl hover:bg-gray-100"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('project-modal')?.click();
                }}
              >
                Start a Project
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
