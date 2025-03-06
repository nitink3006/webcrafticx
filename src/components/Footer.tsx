
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'Digital Marketing', href: '#services' },
      { name: 'Brand Strategy', href: '#services' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Our Work', href: '#work' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Case Studies', href: '#' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'FAQs', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <motion.a 
              href="#home"
              className="text-3xl font-bold mb-6 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visionary
            </motion.a>
            <p className="text-white/70 max-w-md mb-6">
              We craft digital experiences that bring ideas to life and help brands connect with their audiences in meaningful ways.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-white/70 mt-1" />
                <p className="text-white/70">123 Innovation Drive, Tech City, TC 10101</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-white/70" />
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-white/70" />
                <p className="text-white/70">hello@visionaryagency.com</p>
              </div>
            </div>
          </div>
          
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex}>
              <h3 className="text-lg font-semibold mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a 
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors flex items-center group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight 
                        size={16} 
                        className="inline mr-2 opacity-0 group-hover:opacity-100 transition-opacity" 
                      />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <hr className="border-white/10 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Visionary Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {['Twitter', 'Facebook', 'Instagram', 'LinkedIn'].map((social, index) => (
              <motion.a 
                key={index}
                href={`#${social.toLowerCase()}`}
                className="text-white/70 hover:text-white transition-colors"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {social}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
