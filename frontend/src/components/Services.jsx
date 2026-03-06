import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Handshake, ArrowRightLeft, FileText } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Services = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.15, once: true });
  
  const services = [
    {
      icon: FileText,
      title: "Structuration de SEL et SPFPL",
    },
    {
      icon: Landmark,
      title: "Organisation de holdings professionnelles",
    },
    {
      icon: Handshake,
      title: "Gouvernance et équilibres entre associés",
    },
    {
      icon: ArrowRightLeft,
      title: "Réorganisation capitalistique",
    },
    {
      icon: Building2,
      title: "Préparation stratégique de transmission",
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: (i) => ({ 
      opacity: 0, 
      y: 40, 
      x: i % 2 === 0 ? -20 : 20,
      scale: 0.95 
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  return (
    <section id="services" className="services-section py-24 bg-white" data-testid="services-section">
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-4xl md:text-5xl text-[#1A1A1A] text-center mb-6 font-playfair">
            Domaines d'intervention
          </h2>
          <motion.div
            className="w-12 h-[1px] bg-[#006618] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.p 
            className="text-center text-[#1A1A1A]/70 mb-16 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
            animate={titleInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Nous intervenons exclusivement dans l'écosystème des cabinets dentaires afin de garantir un niveau d'exigence élevé.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={titleInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              custom={index}
              className="service-card group relative overflow-hidden rounded-sm border border-[#D9C2A7]/30 hover:border-[#006618]/50 transition-all duration-500 cursor-pointer p-6 bg-[#F5F1E9]/30"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.03 }}
              data-testid={`service-card-${index}`}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="icon-wrapper inline-flex items-center justify-center w-12 h-12 bg-[#006618]/10 rounded-full group-hover:bg-[#006618]/20 transition-all duration-300 shrink-0"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <service.icon className="w-6 h-6 text-[#006618]" strokeWidth={1.5} />
                </motion.div>

                <h3 className="text-lg font-playfair text-[#1A1A1A]">
                  {service.title}
                </h3>
              </div>

              {/* Hover reveal line */}
              <motion.div 
                className="mt-4 h-[1px] bg-[#006618]/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                style={{ transformOrigin: "left" }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center text-[#1A1A1A]/40 text-xs italic max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
        </motion.p>
      </div>
    </section>
  );
};
