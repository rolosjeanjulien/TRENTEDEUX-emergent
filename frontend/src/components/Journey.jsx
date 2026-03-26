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
        "Vous vous installez, rejoignez une SEL ou créez une structure de groupe.",
        "Nous définissons avec vous l'architecture la plus adaptée avant que les mauvais choix soient pris — et difficiles à corriger.",
        "Statuts, répartition du capital, équilibres entre associés : tout est posé dès le départ.",
      ],
      footer: null
    },
    {
      icon: Building2,
      number: "II",
      title: "Développement",
      points: [
        "Votre cabinet grandit, vous intégrez un associé ou rachetez des parts.",
        "Nous structurons le capital, anticipons les frictions et nous assurons que votre gouvernance tient quand ça compte vraiment.",
        "Vous avancez. Nous veillons à ce que la structure suive.",
      ],
      footer: null
    },
    {
      icon: ArrowRightLeft,
      number: "III",
      title: "Transmission",
      points: [
        "Un cabinet mal structuré se vend significativement moins cher.",
        "Que la transmission soit dans 2 ans ou dans 15 ans, elle se prépare maintenant.",
        "Nous organisons votre sortie pour que vous en retiriez la valeur que vous avez construite.",
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
    <section id="journey" className="journey-section py-14 md:py-24 bg-[#F5F1E9]" data-testid="journey-section">
      <div className="container mx-auto px-6">
        {/* Mission Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-4xl md:text-5xl text-[#1A1A1A] text-center mb-6 font-playfair">
            Votre parcours
          </h2>
          <motion.div
            className="w-12 h-[1px] bg-[#006618] mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.div 
            className="max-w-3xl mx-auto mb-10 md:mb-16 space-y-4"
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={titleInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center text-[#1A1A1A]/80 text-lg leading-relaxed">
              Vous avez passé des années à construire votre cabinet. Mais entre les projets d'association, les questions sur votre holding, la préparation de la transmission et les équilibres entre associés, personne ne vous a encore donné une vision d'ensemble claire et coordonnée.
            </p>
            <p className="text-center text-[#1A1A1A]/70 text-lg leading-relaxed">
              C'est précisément ce que nous faisons.
            </p>
          </motion.div>
        </motion.div>

        {/* 3 Phases */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto"
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
