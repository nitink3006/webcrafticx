
import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Work from '../components/Work';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';
import { Helmet } from "react-helmet-async";


const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    container: containerRef
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <>
      <Helmet>
        <title>Webcrafticx</title>
        <meta name="description" content="We provide top-quality web development, SEO, UI/UX design, and app development." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="relative" ref={containerRef}>
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 z-[100] origin-left"
          style={{ scaleX }}
        />

        {/* Custom cursor for desktop */}
        <motion.div
          className="fixed w-8 h-8 rounded-full border-2 border-indigo-500 pointer-events-none z-[200] hidden md:block mix-blend-difference"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 150,
            mass: 0.3
          }}
        />

        <motion.div
          className="fixed w-2 h-2 rounded-full bg-indigo-600 pointer-events-none z-[201] hidden md:block mix-blend-difference"
          animate={{
            x: mousePosition.x - 1,
            y: mousePosition.y - 1
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 200,
            mass: 0.1
          }}
        />

        <Navbar />

        <main>
          <Hero />
          <About />
          <Services />
          <Work />
          <Team />
          <Testimonials />
          <Contact />
        </main>

        <Footer />
        <ProjectModal />

        <motion.a
          href="#home"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: scrollYProgress.get() > 0.1 ? 1 : 0,
            y: scrollYProgress.get() > 0.1 ? 0 : 20
          }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0 8px 30px rgba(79, 70, 229, 0.4)"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 19V5M12 5L5 12M12 5L19 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </>
  );
};

export default Index;
