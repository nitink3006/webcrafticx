
import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  // Lazy load ThreeJS
  useEffect(() => {
    const loadThreeJS = async () => {
      try {
        // This will only load Three.js when the component mounts
        await import('three');
        console.log('Three.js loaded successfully');
      } catch (error) {
        console.error('Failed to load Three.js:', error);
      }
    };
    
    loadThreeJS();
  }, []);
  
  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      
      <Footer />
      <ProjectModal />
    </div>
  );
};

export default Index;
