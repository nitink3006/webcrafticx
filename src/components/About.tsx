
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseDelta, setMouseDelta] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);
  
  // Enhanced mouse position tracking with delta and speed
  useEffect(() => {
    let prevMousePosition = { x: 0, y: 0 };
    let mouseSpeedAccumulator = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate deltas
      const deltaX = e.clientX - prevMousePosition.x;
      const deltaY = e.clientY - prevMousePosition.y;
      
      // Update mouse position
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
      
      // Update delta with smoothing
      setMouseDelta({
        x: deltaX * 0.2,
        y: deltaY * 0.2
      });
      
      // Calculate mouse speed
      const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      mouseSpeedAccumulator = mouseSpeedAccumulator * 0.8 + speed * 0.2;
      setMouseSpeed(mouseSpeedAccumulator);
      
      // Save position for next calculation
      prevMousePosition = { x: e.clientX, y: e.clientY };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Calculate normalized mouse positions
  const calcMouseX = mousePosition.x / (window.innerWidth || 1);
  const calcMouseY = mousePosition.y / (window.innerHeight || 1);
  
  return (
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
              style={{
                x: mouseDelta.x * 0.5,
                y: mouseDelta.y * 0.5
              }}
              transition={{
                x: { duration: 0.2 },
                y: { duration: 0.2 }
              }}
            >
              About Us
            </motion.p>
            <motion.h2 
              className="mb-6 text-slate-900"
              variants={fadeUp}
              style={{
                x: mouseDelta.x * 0.3,
                y: mouseDelta.y * 0.3,
                rotateX: mouseDelta.y * -0.02,
                rotateY: mouseDelta.x * 0.02,
                perspective: 1000
              }}
              transition={{
                x: { duration: 0.3 },
                y: { duration: 0.3 },
                rotateX: { duration: 0.3 },
                rotateY: { duration: 0.3 }
              }}
            >
              Your Vision, Our Expertise
            </motion.h2>
            <motion.div 
              className="space-y-4 text-slate-600"
              variants={fadeUp}
              style={{
                x: mouseDelta.x * 0.1,
                y: mouseDelta.y * 0.1
              }}
              transition={{
                x: { duration: 0.4 },
                y: { duration: 0.4 }
              }}
            >
              <p>
                Founded in 2013, Visionary is a full-service digital agency dedicated to helping brands thrive in an increasingly complex landscape. We blend creativity, technology, and strategy to create meaningful digital experiences that drive results.
              </p>
              <p>
                Our team of designers, developers, and strategists work collaboratively to solve the most challenging business problems. We pride ourselves on our commitment to quality, attention to detail, and client satisfaction.
              </p>
              <p>
                Whether you're looking to launch a new product, revamp your brand, or optimize your digital presence, we have the expertise to turn your vision into reality.
              </p>
            </motion.div>
            
            <motion.div 
              className="mt-8"
              variants={fadeUp}
              style={{
                x: mouseDelta.x * 0.15,
                y: mouseDelta.y * 0.15
              }}
              transition={{
                x: { duration: 0.2 },
                y: { duration: 0.2 }
              }}
            >
              <motion.a 
                href="#team"
                className="button-primary bg-indigo-600 hover:bg-indigo-700 inline-block"
                whileHover={{ 
                  scale: 1.05,
                  y: -5 + mouseDelta.y * 0.1 // Dynamic hover based on mouse movement
                }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Team
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            variants={fadeUp}
            style={{
              x: (mousePosition.x - window.innerWidth / 2) * 0.02 + mouseDelta.x * 0.3,
              y: (mousePosition.y - window.innerHeight / 2) * 0.02 + mouseDelta.y * 0.3,
              rotateX: mouseDelta.y * -0.05,
              rotateY: mouseDelta.x * 0.05,
              perspective: 1000
            }}
            transition={{
              x: { duration: 0.3, ease: "easeOut" },
              y: { duration: 0.3, ease: "easeOut" },
              rotateX: { duration: 0.5, ease: "easeOut" },
              rotateY: { duration: 0.5, ease: "easeOut" }
            }}
          >
            <motion.div 
              className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                scale: 1 + mouseSpeed * 0.0002 // Subtle scaling based on mouse speed
              } : { opacity: 0, y: 20 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.3,
                scale: { duration: 0.2 }
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Team collaborating" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Decorative elements with enhanced mouse reactivity */}
            <motion.div 
              className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-indigo-200/30 -z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: 1,
                filter: `blur(${mouseSpeed * 0.03}px)` // Dynamic blur based on mouse speed
              } : { opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.4,
                filter: { duration: 0.2 }
              }}
              style={{
                x: (mousePosition.x - window.innerWidth / 2) * -0.03 + mouseDelta.x * -0.5,
                y: (mousePosition.y - window.innerHeight / 2) * -0.03 + mouseDelta.y * -0.5
              }}
            />
            <motion.div 
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-indigo-200/30 -z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: 1,
                filter: `blur(${mouseSpeed * 0.03}px)` // Dynamic blur based on mouse speed
              } : { opacity: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5,
                filter: { duration: 0.2 }
              }}
              style={{
                x: (mousePosition.x - window.innerWidth / 2) * 0.04 + mouseDelta.x * 0.5,
                y: (mousePosition.y - window.innerHeight / 2) * 0.04 + mouseDelta.y * 0.5
              }}
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
          variants={fadeUp}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center"
              variants={fadeUp}
              whileHover={{ 
                y: -5,
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              style={{
                x: (mousePosition.x - window.innerWidth / 2) * 0.01 * (index + 1) + mouseDelta.x * 0.05 * (index + 1),
                y: (mousePosition.y - window.innerHeight / 2) * 0.01 * (index + 1) + mouseDelta.y * 0.05 * (index + 1),
                rotate: mouseDelta.x * 0.01 * (index + 1)
              }}
              transition={{
                x: { duration: 0.3 },
                y: { duration: 0.3 },
                rotate: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1,
                  boxShadow: "0 10px 25px rgba(79, 70, 229, 0.15)"
                }}
                transition={{ 
                  rotate: { duration: 0.5 },
                  scale: { duration: 0.2 },
                  boxShadow: { duration: 0.2 }
                }}
              >
                {stat.icon}
              </motion.div>
              <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
