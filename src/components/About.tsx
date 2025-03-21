
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';
import { Helmet } from "react-helmet-async";


const stats = [
  { 
    icon: <Award size={32} />, 
    value: '10+', 
    label: 'Years Experience' 
  },
  { 
    icon: <Users size={32} />, 
    value: '250+', 
    label: 'Happy Clients' 
  },
  { 
    icon: <Globe size={32} />, 
    value: '15+', 
    label: 'Countries Served' 
  },
  { 
    icon: <TrendingUp size={32} />, 
    value: '300+', 
    label: 'Projects Completed' 
  }
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <>
    <Helmet>
        <title>About Us - Webcrafticx | Expert Web Development & SEO</title>
        <meta name="description" content="Webcrafticx specializes in web development, UI/UX design, SEO, and mobile app development. Learn more about our expert team!" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://webcrafticx.com/about" />
      </Helmet>
    <section id="about" className="section bg-slate-50 relative z-20">
      <motion.div 
        ref={ref}
        className="max-w-screen-xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
          >
            <motion.p 
              className="text-sm font-medium text-indigo-600 uppercase tracking-wider mb-3"
              variants={fadeUp}
            >
              About Us
            </motion.p>
            <motion.h2 
              className="mb-6 text-slate-900"
              variants={fadeUp}
            >
              Your Vision, Our Expertise
            </motion.h2>
            <motion.div 
              className="space-y-4 text-slate-600"
              variants={fadeUp}
            >
              <p>
                Founded in 2024, WebCrafticX is a full-service digital agency dedicated to helping brands thrive in an increasingly complex landscape. We blend creativity, technology, and strategy to create meaningful digital experiences that drive results.
              </p>
              <p>
                Our team of designers and developers work collaboratively to solve the most challenging business problems. We pride ourselves on our commitment to quality, attention to detail, and client satisfaction.
              </p>
              <p>
                Whether you're looking to launch a new product, revamp your brand, or optimize your digital presence, we have the expertise to turn your vision into reality.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              variants={fadeUp}
            >
              <motion.a 
                href="#team"
                className="button-primary bg-indigo-600 hover:bg-indigo-700 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Team
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            variants={fadeUp}
          >
            <motion.div 
              className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Team collaborating" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-indigo-200/30 -z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-indigo-200/30 -z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </div>
        
        {/* <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
          variants={fadeUp}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div> */}
      </motion.div>
    </section>
    </>
  );
};

export default About;
