
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Paintbrush, Smartphone, LineChart, Lightbulb, Globe } from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';

const services = [
  {
    icon: <Paintbrush size={32} />,
    title: 'UI/UX Design',
    description: 'We create intuitive, engaging interfaces that enhance user experience while reflecting your brand identity.'
  },
  {
    icon: <Code size={32} />,
    title: 'Web Development',
    description: 'Our developers build responsive, high-performance websites using cutting-edge technologies and best practices.'
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Apps',
    description: 'We deliver native and cross-platform mobile applications with seamless functionality and beautiful interfaces.'
  },
  {
    icon: <LineChart size={32} />,
    title: 'Digital Marketing',
    description: 'Our data-driven strategies increase visibility, drive traffic, and convert visitors into loyal customers.'
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Brand Strategy',
    description: "We help define and articulate your brand's vision, values, and voice to strengthen market positioning."
  },
  {
    icon: <Globe size={32} />,
    title: 'E-commerce Solutions',
    description: 'We create custom online stores that maximize sales, streamline operations, and enhance customer experiences.'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="services" className="section bg-white relative z-20">
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
            What We Do
          </motion.p>
          <motion.h2 
            className="mb-6 text-slate-900"
            variants={fadeUp}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-slate-600"
            variants={fadeUp}
          >
            We offer a comprehensive range of digital services to help your business thrive in the modern landscape.
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-md border border-slate-200 hover:shadow-xl transition-all duration-300"
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-16 h-16 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
