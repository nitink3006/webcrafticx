import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { fadeUp } from '../utils/animations';
import aditya from "../../public/aditya.jpg";
import rishi from "../../public/rishi.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// Import required Swiper modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const testimonials = [
  {
    name: 'Aditya Verma',
    company: 'Mock Period',
    position: 'CEO',
    image: aditya,
    content: 'Most web development sites focus purely on utility, but Webcrafticx transforms it into an art form. The design ethos balances minimalism with depth, making complex web-building accessible without sacrificing sophistication.I really appreciate the work of WebcrafticX.'
  },
  {
    name: 'Rishi',
    company: 'Mock Period',
    position: 'CMO',
    image: rishi,
    content: "I recently had the opportunity to use the Mock Period software developed by Web Crafticx, and I must say, it's a game changer. The software makes mock tests easily accessible and incredibly effective for students."
  },
  {
   name: "Anonymous",
    company: "Anonymous",
    position: "Founder",
  "image": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,
    content: 'As a founder, I understand the importance of digital presence, and WebCrafticX has exceeded my expectations. Their innovative approach and attention to detail set them apart in the industry.'
  },
    {
    name: "Anonymous",
    company: "Anonymous",
    position: "Founder",
"image": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
,
    content: "We've worked with several agencies in the past, but none have delivered the level of quality and ROI that WebCrafticX consistently provides. They're true partners in our success."
  },
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
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
          
          <div className="max-w-3xl mx-auto">
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                clickable: true,
                el: '.swiper-pagination',
                bulletClass: 'inline-block w-2.5 h-2.5 rounded-full mx-1 transition-all duration-300 bg-primary/30',
                bulletActiveClass: '!bg-primary scale-125',
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <motion.div 
                    className="bg-white/80 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg border border-border/30 relative z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
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
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons
            <div className="flex justify-center mt-8 space-x-4">
              <motion.button
                className="swiper-button-prev w-10 h-10 rounded-full bg-white shadow-sm border border-border/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </motion.button>
              <motion.button
                className="swiper-button-next w-10 h-10 rounded-full bg-white shadow-sm border border-border/30 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </motion.button>
            </div> */}
            
            {/* Custom Pagination */}
            <div className="swiper-pagination flex justify-center mt-6"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;