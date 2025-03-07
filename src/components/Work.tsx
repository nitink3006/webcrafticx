
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, ExternalLink, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';

const projects = [
  {
    title: 'E-Commerce Redesign',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1789&q=80',
    description: 'Complete redesign of an e-commerce platform focusing on conversion optimization and user experience improvements.',
    link: '#'
  },
  {
    title: 'Financial Dashboard',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'Interactive financial dashboard with real-time data visualization and customizable reporting features.',
    link: '#'
  },
  {
    title: 'Travel Companion App',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1721&q=80',
    description: 'Cross-platform mobile application for travelers with itinerary management, location-based recommendations, and offline maps.',
    link: '#'
  },
  {
    title: 'Brand Identity System',
    category: 'Brand Strategy',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
    description: 'Comprehensive brand identity system including logo design, visual language, and implementation guidelines.',
    link: '#'
  }
];

const Work = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="work" className="section bg-white relative z-20">
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
            className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-3"
            variants={fadeUp}
          >
            Our Portfolio
          </motion.p>
          <motion.h2 
            className="mb-6 text-slate-900"
            variants={fadeUp}
          >
            Recent Projects
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-slate-600"
            variants={fadeUp}
          >
            Explore our latest work that showcases our expertise in design, development, and digital innovation.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300"
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-indigo-200 mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <motion.a 
                  href={project.link}
                  className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  View Project <ArrowRight size={16} className="ml-1" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeUp}
        >
          <motion.a 
            href="#contact"
            className="button-primary bg-indigo-600 hover:bg-indigo-700 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Project
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Work;
