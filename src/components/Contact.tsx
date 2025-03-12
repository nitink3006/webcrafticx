import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Clock, CheckCircle } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';
import emailjs from '@emailjs/browser';
import { Link } from "react-router-dom";

const contactInfo = [
  {
    icon: <Phone size={24} />,
    title: 'Phone Number',
    details: '7488668170, 8789088935'
  },
  {
    icon: <Mail size={24} />,
    title: 'Email Address',
    details: 'webcraftix3@gmail.com',
        path: "mailto:webcraftix3@gmail.com",
  }
];

const Contact = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const emailFormRef = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isFormInView = useInView(formRef, { once: false, amount: 0.2 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });
  
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      isSubmitting: true,
      isSubmitted: false,
      error: null
    });
    
    // EmailJS configuration
    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_x1nsh9s';
    const templateId = 'template_fkx9iby';
    const publicKey = 'QiMAPy0YX26Qod3oM';
    
    // Prepare the template parameters
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_subject: formData.subject,
      user_message: formData.message,
      to_email: 'webcraftix3@gmail.com' // You can hardcode the recipient email
    };
    
    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setFormStatus({
          isSubmitting: false,
          isSubmitted: true,
          error: null
        });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({
            ...prev,
            isSubmitted: false
          }));
        }, 5000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setFormStatus({
          isSubmitting: false,
          isSubmitted: false,
          error: 'Failed to send message. Please try again later.'
        });
      });
  };
  
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
          <motion.div variants={fadeUp}>
            <div className="bg-secondary/30 rounded-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4"
                    variants={fadeUp}
                  >
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center text-primary shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                                  <a
                      href={item.path}
                      target='_blank' // Open in a new tab if it's an external link
                      rel="noopener noreferrer"
              className="text-black-600 hover:underline"
            >
{item.details}
            </a>
                      {/* <p className="text-foreground/70">{item.details}</p> */}
                    </div>
                  </motion.div>
                ))}
              </div>
              
<div className="mt-10">
  <h4 className="text-lg font-medium mb-4">Follow Us</h4>
  <div className="flex space-x-4">
    {[
      { name: 'facebook', url: 'https://facebook.com' },
      { name: 'instagram', url: 'https://www.instagram.com/webcrafticx?igsh=MXVlOWZkdDQxMTg3bQ==' },
      { name: 'linkedin', url: 'https://www.linkedin.com/company/webcrafticx/' },
    ].map((social, index) => (
      <motion.a
        key={index}
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span className="capitalize">{social.name.charAt(0)}</span>
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
          >
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-sm border border-border/30"
              variants={fadeUp}
            >
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              {formStatus.isSubmitted ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-green-800 mb-2">Message Sent!</h4>
                  <p className="text-green-700">Thank you for contacting us. We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form ref={emailFormRef} className="space-y-5" onSubmit={handleSubmit}>
                  <motion.div variants={fadeUp}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeUp}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter Your Email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeUp}>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Your Inquiry"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeUp}>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      placeholder="Tell us about your Requirement..."
                      className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      required
                    ></textarea>
                  </motion.div>
                  
                  {formStatus.error && (
                    <motion.div 
                      className="bg-red-50 border border-red-200 rounded-lg p-3 text-red-700"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {formStatus.error}
                    </motion.div>
                  )}
                  
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 bg-primary text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                    variants={fadeUp}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={formStatus.isSubmitting}
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        Sending...
                        <span className="animate-spin ml-2">
                          <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </span>
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;