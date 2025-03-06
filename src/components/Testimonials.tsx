import React, { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { fadeUp } from '../utils/animations';

const testimonials = [
  {
    name: 'Jennifer Matthews',
    company: 'TechVision Inc.',
    position: 'CEO',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
    content: 'Their team transformed our outdated website into a conversion powerhouse. The attention to detail and strategic approach exceeded our expectations at every turn.'
  },
  {
    name: 'David Chen',
    company: 'InnovateCorp',
    position: 'Marketing Director',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    content: "We've worked with several agencies in the past, but none have delivered the level of quality and ROI that this team consistently provides. They're true partners in our success."
  },
  {
    name: 'Sophia Rodriguez',
    company: 'Future Brands',
    position: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    content: 'Their ability to translate our brand vision into digital experiences is remarkable. The mobile app they developed for us became an instant hit with our customers.'
  },
  {
    name: 'Marcus Johnson',
    company: 'Elevate Solutions',
    position: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    content: 'From strategy to execution, they deliver excellence at every stage. Our e-commerce revenue has increased by 215% since implementing their recommendations.'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const testimonial = testimonials[currentIndex];
  
  return (
    <section id="testimonials" className="section relative z-20 overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/80">
      <motion.div 
        ref={ref}
        className="max-w-screen-xl mx-auto"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { staggerChildren: 0.1 }
          }
        }}
      >
        <motion.div 
          className="text-center mb-16"
          variants={fadeUp}
        >
          <motion.p 
            className="text-sm font-medium text-primary/80 uppercase tracking-wider mb-3"
            variants={fadeUp}
          >
            Client Feedback
          </motion.p>
          <motion.h2 
            className="mb-6"
            variants={fadeUp}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-foreground/70"
            variants={fadeUp}
          >
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </motion.p>
        </motion.div>
        
        <div className="relative py-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 text-primary/10">
            <Quote size={96} strokeWidth={1} />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-border/30 max-w-3xl mx-auto relative z-10"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto md:mx-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex mb-4 justify-center md:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg md:text-xl mb-6 italic text-center md:text-left">"{testimonial.content}"</p>
                  <div className="text-center md:text-left">
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-primary/80">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-4">
            <motion.button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-border/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-sm border border-border/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary scale-125' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
