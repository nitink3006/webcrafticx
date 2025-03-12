
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link, ExternalLink, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';
import mock from "../../public/mockperiod.png"
import asap from "../../public/asap.png"
import bus from "../../public/bus.png"
import opus from "../../public/opus.png"
import urban from "../../public/urban.png"
import fabspin from "../../public/fabspin.png"

const projects = [
 {
  title: 'Mock Test Platform',
  category: 'Web Development',
  image: mock,
  description: 'A fully optimized mock test platform designed for an intuitive user experience, ensuring seamless navigation and enhanced accessibility for students.',
  link: 'https://www.mockperiod.com'
},

{
  title: 'ASAP - Smart Cleaning Solutions',
  category: 'Web Development',
  image: asap,
  description: 'ASAP is a modern cleaning service platform designed for efficient management and coordination. It enables real-time task tracking, automated scheduling, and seamless communication between service providers and clients, ensuring a cleaner and healthier environment.',
  link: 'https://asap-silk.vercel.app/'
}
,
{
  title: 'Bus Service Platform',
  category: 'Web Development',
  image: bus,
  description: 'A smart bus service platform designed for parents to monitor their child’s journey in real-time, receive instant notifications, and make secure payments effortlessly. The platform ensures safety, transparency, and convenience for both parents and service providers.',
  link: 'https://architectural-studio-lab.vercel.app/'
}
,
// {
//   title: 'Physiotherapist Platform',
//   category: 'Web Development',
//   image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
//   description: 'A professional platform for physiotherapists to host therapy sessions, manage bookings, and connect with clients. It offers live video consultations, session scheduling, exercise plans, and progress tracking, providing a seamless experience for both therapists and patients.',
//   link: '#'
// }
{
  title: 'Interior Designing Platform',
  category: 'Web Development',
  image: opus,
  description: 'An innovative platform that connects users with professional interior designers, offering virtual consultations, 3D design previews, and budget-friendly customization options. It streamlines project planning, material selection, and real-time collaboration for a seamless design experience.',
  link: 'https://bus-service-rosy.vercel.app/'
},
{
  title: 'E-Commerce Platform',
  category: 'Web Development',
  image: urban,
  description: 'A feature-rich e-commerce platform designed for seamless online shopping, and efficient order management. It offers personalized recommendations, a user-friendly interface, and robust inventory tracking to enhance the shopping experience for both buyers and sellers.',
  link: 'https://urban-muse.vercel.app/'
},
{
  title: 'Dry Cleaner Platform',
  category: 'WordPress Development',
  image: fabspin,
  description: 'A modern dry cleaning platform that enables customers to schedule pickups, track orders, and make secure online payments. It offers seamless booking, real-time order status updates, and efficient service management for both customers and dry cleaning businesses.',
  link: 'https://www.fabspin.com/'
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
  target="_blank"
  rel="noopener noreferrer"
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
