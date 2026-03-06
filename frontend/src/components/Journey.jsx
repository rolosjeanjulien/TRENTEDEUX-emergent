import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Building2, ArrowRightLeft } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Journey = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.2, once: true });
  
  const phases = [
    {
      icon: Compass,
      number: "I",
      title: "Installation",
      points: [
        "Analyse stratégique de votre projet.",
        "Définition de la structure adaptée à votre situation.",
        "Organisation des équilibres juridiques et patrimoniaux.",
      ],
      footer: null
    },
    {
      icon: Building2,
      number: "II",
      title: "Développement",
      points: [
        "Structuration capitalistique.",
        "Anticipation des évolutions du cabinet.",
        "Mise en cohérence de la gouvernance.",
      ],
      footer: null
    },
    {
      icon: ArrowRightLeft,
      number: "III",
      title: "Transmission",
      points: [
        "Préparation en amont de la cession.",
        "Vision patrimoniale globale.",
        "Organisation structurée de la transition.",
      ],
      footer: null
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
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
    <section id="journey" className="journey-section py-24 bg-[#F5F1E9]" data-testid="journey-section">
      <div className="container mx-auto px-6">
        {/* Mission Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-4xl md:text-5xl text-[#1A1A1A] text-center mb-6 font-playfair">
            Notre Mission
          </h2>
          <motion.div
            className="w-12 h-[1px] bg-[#006618] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.div 
            className="max-w-3xl mx-auto mb-16 space-y-4"
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={titleInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center text-[#1A1A1A]/80 text-lg leading-relaxed">
              Trente Deux accompagne les praticiens dans la conception et l'organisation de leur architecture professionnelle.
            </p>
            <p className="text-center text-[#1A1A1A]/70 text-lg leading-relaxed">
              Nous intervenons en amont des décisions structurantes afin de bâtir une organisation cohérente, durable et adaptée à votre exercice.
            </p>
            <p className="text-center text-[#1A1A1A]/70 text-lg leading-relaxed">
              Notre rôle est d'apporter vision, méthode et coordination.
            </p>
          </motion.div>
        </motion.div>

        {/* 3 Phases */}
        <motion.div 
          className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          {phases.map((phase, index) => (
            <motion.div 
              key={index} 
              className="journey-step group text-left p-8 bg-white/50 backdrop-blur-sm rounded-sm border border-[#D9C2A7]/30 hover:border-[#006618]/50 transition-all duration-500 hover:shadow-xl relative overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              data-testid={`journey-step-${index}`}
            >
              {/* Phase Number */}
              <div className="absolute top-4 right-6 text-[#006618]/5 text-7xl font-playfair font-bold select-none">
                {phase.number}
              </div>

              <motion.div 
                className="icon-wrapper relative z-10 inline-flex items-center justify-center w-20 h-20 mb-6 bg-[#006618]/10 rounded-full group-hover:bg-[#006618]/20 transition-all duration-300"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <phase.icon className="w-10 h-10 text-[#006618]" strokeWidth={1.5} />
              </motion.div>
              
              <h3 className="text-2xl font-playfair text-[#1A1A1A] mb-5 relative z-10">
                Phase {phase.number} — {phase.title}
              </h3>
              
              <ul className="space-y-2 relative z-10 mb-4">
                {phase.points.map((point, i) => (
                  <li key={i} className="text-[#1A1A1A]/70 leading-relaxed text-sm">
                    {point}
                  </li>
                ))}
              </ul>

              {phase.footer && (
                <p className="text-[#006618]/80 text-sm italic relative z-10 border-t border-[#D9C2A7]/20 pt-4 mt-4">
                  {phase.footer}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
