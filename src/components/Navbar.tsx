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

  // Add body overflow control for mobile menu
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + custom * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  const mobileNavItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + custom * 0.08,
        duration: 0.3,
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
          className="md:hidden z-50 p-2 bg-white/80 rounded-full backdrop-blur-sm shadow-md"
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
      
      {/* Enhanced Mobile Navigation Menu with full height and background */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden h-screen flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: "linear-gradient(135deg, rgba(238, 242, 255, 0.95) 0%, rgba(252, 231, 255, 0.95) 100%)",
              backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%234F46E5\" fill-opacity=\"0.05\" fill-rule=\"evenodd\"/%3E%3C/svg%3E'), linear-gradient(135deg, rgba(238, 242, 255, 0.95) 0%, rgba(252, 231, 255, 0.95) 100%)",
              backgroundSize: "cover",
              backdropFilter: "blur(8px)"
            }}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-indigo-100">
                <motion.span 
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  WebCrafticX
                </motion.span>
                <motion.button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full p-2 hover:bg-indigo-50"
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} className="text-indigo-600" />
                </motion.button>
              </div>
              
              {/* Mobile Menu Links with increased height and spacing */}
              <div className="flex-1 flex flex-col justify-center overflow-y-auto py-12 px-8">
                <div className="space-y-5">
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.title}
                      href={link.href}
                      className={`text-2xl font-medium block py-2 ${
                        activeSection === link.href.substring(1)
                          ? 'text-indigo-600'
                          : 'text-gray-800'
                      }`}
                      variants={mobileNavItemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      onClick={() => setMobileMenuOpen(false)}
                      whileHover={{ x: 5, color: "#4F46E5" }}
                    >
                      {link.title}
                      {activeSection === link.href.substring(1) && (
                        <motion.div className="h-1 w-12 bg-indigo-600 mt-1 rounded-full" />
                      )}
                    </motion.a>
                  ))}
                </div>
              </div>
              
              {/* Mobile Menu Footer */}
              <div className="p-8 border-t border-indigo-100">
                <motion.button
                  className="w-full py-5 rounded-xl bg-indigo-600 text-white font-medium text-lg shadow-lg shadow-indigo-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 15px 25px rgba(79, 70, 229, 0.35)" }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    document.getElementById('project-modal')?.click();
                  }}
                >
                  Start a Project
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;