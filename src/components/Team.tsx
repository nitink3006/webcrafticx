
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { staggerContainer, fadeUp } from '../utils/animations';

const teamMembers = [
  {
    name: 'Alex Morgan',
    role: 'CEO & Creative Director',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    bio: 'With over 15 years of experience in digital design, Alex leads our creative vision and strategic direction.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Sarah Chen',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    bio: 'Sarah combines artistic talent with user-centered design principles to create beautiful, functional interfaces.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Michael Rodriguez',
    role: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    bio: 'Michael oversees all technical aspects of our projects, ensuring elegant solutions to complex challenges.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    name: 'Emily Jackson',
    role: 'Project Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
    bio: 'Emily ensures our projects run smoothly, on time, and within budget while exceeding client expectations.',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-border/30 group"
              variants={fadeUp}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex items-center space-x-4">
                    <motion.a 
                      href={member.social.twitter}
                      className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter size={18} />
                    </motion.a>
                    <motion.a 
                      href={member.social.linkedin}
                      className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin size={18} />
                    </motion.a>
                    <motion.a 
                      href={member.social.github}
                      className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                <p className="text-primary/80 text-sm mb-3">{member.role}</p>
                <p className="text-foreground/70 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
