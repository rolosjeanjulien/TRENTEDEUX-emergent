import React from 'react';
import { motion } from 'framer-motion';

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i + 0.3,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  })
};

export const Hero = ({ onContactClick }) => {
  const title = "TRENTE DEUX";

  return (
    <section className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden" data-testid="hero-section">
      {/* Background Image with Parallax Zoom */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img 
          src="https://images.unsplash.com/photo-1737474707380-5ef35770d8a7" 
          alt="Bureau moderne haut de gamme - Conseil juridique Trente Deux"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A1A]/85 via-[#006618]/20 to-[#1A1A1A]/90"></div>
      </motion.div>

      {/* Content with Staggered Text Reveal */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Letter-by-letter title reveal */}
        <motion.h1 
          className="logo-text text-[#F5F1E9] text-6xl md:text-7xl lg:text-8xl mb-8 font-playfair tracking-widest flex justify-center flex-wrap"
          initial="hidden"
          animate="visible"
          aria-label={title}
        >
          {title.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className={char === ' ' ? 'inline-block w-4 md:w-6' : 'inline-block'}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Decorative line */}
        <motion.div
          className="w-16 h-[1px] bg-[#D9C2A7] mx-auto mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        />
        
        <motion.p
          className="hero-subtitle text-[#F5F1E9] text-xl md:text-2xl mb-8 font-light tracking-wide max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.1 }}
        >
          Vous exercez depuis des années.<br />
          Votre structure, elle, n'a jamais été optimisée pour vous.
        </motion.p>

        <motion.p
          className="hero-tagline text-[#D9C2A7] text-lg md:text-xl mb-12 font-light italic max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 1.4 }}
        >
          SEL, holding, pacte d'associés, transmission — nous construisons l'architecture que personne autour de vous ne coordonne vraiment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button
            onClick={onContactClick}
            data-testid="hero-cta-button"
            className="cta-button bg-[#122D18] hover:bg-[#0D1F12] text-white px-10 py-6 text-lg rounded-full transition-all duration-300 hover:shadow-2xl"
          >
            Parler de ma situation
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 2.2, duration: 0.6 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        }}
      >
        <div className="scroll-indicator w-6 h-10 border-2 border-[#D9C2A7] rounded-full flex justify-center pt-2" data-testid="scroll-indicator">
          <motion.div 
            className="w-1.5 h-1.5 bg-[#D9C2A7] rounded-full"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};
