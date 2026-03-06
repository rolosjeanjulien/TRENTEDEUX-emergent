import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Stethoscope, Eye, Users, Lock } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const WhyUs = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.15, once: true });

  const reasons = [
    {
      icon: Stethoscope,
      title: "Une expertise dédiée à l'écosystème dentaire",
      description: ""
    },
    {
      icon: Eye,
      title: "Une vision stratégique globale",
      description: ""
    },
    {
      icon: Users,
      title: "Un pilotage coordonné et centralisé",
      description: ""
    },
    {
      icon: Lock,
      title: "Discrétion et exigence méthodologique",
      description: ""
    }
  ];

  const testimonials = [
    {
      text: "Une approche structurée et rassurante.",
      author: "Dr. A.L.",
      position: ""
    },
    {
      text: "Une vision claire et méthodique.",
      author: "Dr. S.D.",
      position: ""
    },
    {
      text: "Un accompagnement parfaitement adapté à notre profession.",
      author: "Dr. M.B.",
      position: ""
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="whyus" className="whyus-section py-24 bg-[#F5F1E9] relative overflow-hidden" data-testid="whyus-section">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.15 }}
        animate={titleInView ? { scale: 1.05 } : {}}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img 
          src="https://images.pexels.com/photos/6077239/pexels-photo-6077239.jpeg"
          alt="Excellence et confiance - Trente Deux"
          className="w-full h-full object-cover opacity-10"
        />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-4xl md:text-5xl text-[#1A1A1A] text-center mb-6 font-playfair">
            Ce qui nous distingue
          </h2>
          <motion.div
            className="w-12 h-[1px] bg-[#006618] mx-auto mb-16"
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </motion.div>

        {/* 4 Reasons Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              className="group flex gap-5 p-6 bg-white/60 backdrop-blur-sm rounded-sm border border-[#D9C2A7]/30 hover:border-[#006618]/50 transition-all duration-500 hover:shadow-lg"
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              data-testid={`reason-card-${index}`}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-14 h-14 bg-[#006618]/10 rounded-full group-hover:bg-[#006618]/20 transition-all duration-300 shrink-0"
                whileHover={{ rotate: 5 }}
              >
                <reason.icon className="w-7 h-7 text-[#006618]" strokeWidth={1.5} />
              </motion.div>
              <div>
                <h3 className="text-lg font-playfair text-[#1A1A1A]">
                  {reason.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="testimonial-card bg-white/80 backdrop-blur-sm p-8 rounded-sm border border-[#D9C2A7]/30 hover:border-[#006618]/50 transition-all duration-500 hover:shadow-xl"
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              data-testid={`testimonial-card-${index}`}
            >
              <Quote className="w-8 h-8 text-[#006618]/25 mb-4" />
              
              <p className="text-[#1A1A1A]/80 mb-6 leading-relaxed italic text-sm">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-[#D9C2A7]/30 pt-4">
                <p className="text-[#1A1A1A] font-semibold text-sm">
                  {testimonial.author}
                </p>
                <p className="text-[#1A1A1A]/60 text-xs">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
