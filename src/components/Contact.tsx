
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const contactInfo = [
  {
    icon: <MapPin size={24} />,
    title: 'Our Location',
    details: '123 Innovation Drive, Tech City, TC 10101'
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone Number',
    details: '+1 (555) 123-4567'
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Address',
    details: 'hello@visionaryagency.com'
  },
  {
    icon: <Clock size={24} />,
    title: 'Working Hours',
    details: 'Mon - Fri: 9AM - 6PM (EST)'
  }
];

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isFormInView = useInView(formRef, { once: false, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Track mouse position within the component
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <section id="contact" className="section bg-white relative z-20">
      <motion.div 
        ref={ref}
        className="max-w-screen-xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
        >
          <motion.p 
            className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-3"
            variants={fadeUp}
          >
            Get In Touch
          </motion.p>
          <motion.h2 
            className="mb-6"
            variants={fadeUp}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-foreground/70"
            variants={fadeUp}
          >
            Have a project in mind or want to learn more about our services? We'd love to hear from you.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            variants={fadeUp}
            style={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02,
              transition: { stiffness: 150, damping: 25 }
            }}
          >
            <div className="bg-secondary/30 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    variants={fadeUp}
                    style={{
                      x: (mousePosition.x - window.innerWidth / 2) * 0.01 * (index + 1),
                      y: (mousePosition.y - window.innerHeight / 2) * 0.01 * (index + 1),
                      transition: { stiffness: 150, damping: 20 }
                    }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-foreground/70">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-10">
                <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {['twitter', 'facebook', 'instagram', 'linkedin'].map((social, index) => (
                    <motion.a
                      key={index}
                      href={`#${social}`}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      style={{
                        x: (mousePosition.x - window.innerWidth / 2) * 0.015 * (index + 1),
                        y: (mousePosition.y - window.innerHeight / 2) * 0.015 * (index + 1),
                        transition: { stiffness: 180, damping: 20 }
                      }}
                    >
                      <span className="capitalize">{social.charAt(0)}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            ref={formRef}
            className="relative"
            initial="hidden"
            animate={isFormInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 }
              }
            }}
            style={{
              x: (mousePosition.x - window.innerWidth / 2) * -0.02,
              y: (mousePosition.y - window.innerHeight / 2) * -0.02,
              transition: { stiffness: 150, damping: 25 }
            }}
          >
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm border border-border/30"
              variants={fadeUp}
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              <form className="space-y-5">
                <motion.div variants={fadeUp}>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    placeholder="Project Inquiry"
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </motion.div>
                
                <motion.div variants={fadeUp}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full py-3 px-4 bg-primary text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send size={18} />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
