
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sarthak from "../../public/sarthak.png";
import nitin from "../../public/nitin.png";
import karan from "../../public/karan.jpg";
import deba from "../../public/deba.jpg";
import nikhil from "../../public/nikhil.jpg"
import sar from "../../public/Personal-Photoroom-modified.png"

const teamMembers = [
{
  name: "Karan",
  role: "Developer",
  image: karan,
  bio: "A skilled developer with expertise in crafting interactive and user-friendly web applications.",
  social: {
    // twitter: "#",
    linkedin: "https://www.linkedin.com/in/karan-kumar-gupta-8608a0253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/karang152"
  }
}
,
{
  name: "Sarthak",
  role: "Developer, Digital Marketer",
  image: sarthak,
  bio: "Combines technical development skills with digital marketing expertise to build impactful and engaging online experiences.",
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/sarthak-rai?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/sarthak2685"
  }
}
,
 {
  name: "Nitin",
  role: "Developer, Designer, Digital Marketer",
  image: nitin,
  bio: "Excels in development, design, and digital marketing, crafting innovative solutions that merge creativity with technology.",
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/nitink30/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/nitink3006"
  }
}
,
{
  name: "Debashish",
  role: "Developer",
  image: deba,
  bio: "Dedicated to delivering high-quality solutions that enhance performance and reliability.",
  social: {
    twitter: "#",
    linkedin: "https://www.linkedin.com/in/debashish-sarkar-7109491b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    github: "https://github.com/coder8-cpu"
  }
}
,
{
  name: 'Nikhil',
  role: 'Developer',
  image: nikhil,
  bio: 'Passionate developer specializing in building scalable and efficient applications. He ensures high-quality code and innovative solutions.',
  social: {
    twitter: '#',
    linkedin: 'https://www.linkedin.com/in/nikhil-raghav-683573225',
    github: 'https://github.com/ErNikhil0'
  }
}

];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  
  return (
    <section id="team" className="section bg-secondary/30 relative z-20">
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
            Meet Our Experts
          </motion.p>
          <motion.h2 
            className="mb-6"
            variants={fadeUp}
          >
            The Team Behind Our Success
          </motion.h2>
          <motion.p 
            className="max-w-2xl mx-auto text-lg text-foreground/70"
            variants={fadeUp}
          >
            Our talented team brings together diverse skills and perspectives to deliver exceptional results for our clients.
          </motion.p>
        </motion.div>
        
<Swiper
  modules={[Autoplay, Navigation, Pagination]}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
  loop={true}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  className="w-full"
>
  {teamMembers.map((member, index) => (
    <SwiperSlide key={index} className="h-[450px]"> {/* Set a fixed height */}
      <motion.div
        className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/30 group h-full flex flex-col"
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
      >
        <div className="relative overflow-hidden h-64">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
            <div className="flex items-center space-x-4">
              <motion.a
                href={member.social.linkedin}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                target="__blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href={member.social.github}
                className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                target="__blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={18} />
              </motion.a>
            </div>
          </div>
        </div>
        <div className="p-6 flex-grow"> {/* Ensures text section stretches properly */}
          <h3 className="font-bold text-xl mb-1">{member.name}</h3>
          <p className="text-primary/80 text-sm mb-3">{member.role}</p>
          <p className="text-foreground/70 text-sm">{member.bio}</p>
        </div>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>

      </motion.div>
    </section>
  );
};

export default Team;
