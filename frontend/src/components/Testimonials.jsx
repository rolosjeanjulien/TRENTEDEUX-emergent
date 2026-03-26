import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export const Testimonials = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.2, once: true });

  const testimonials = [
    {
      text: "Je n'avais jamais eu quelqu'un qui coordonne vraiment tout. Mon comptable faisait son côté, le notaire le sien. Trente Deux a mis tout le monde autour de la table.",
      author: "Dr. A.L.",
      position: "Chirurgien-dentiste, Paris"
    },
    {
      text: "Quand j'ai voulu intégrer un associé, j'avais peur de mal structurer les choses. Ils ont anticipé des situations que je n'avais même pas envisagées.",
      author: "Dr. S.D.",
      position: "Orthodontiste, Lyon"
    },
    {
      text: "À six mois de la cession, j'ai réalisé que ma structure n'était pas optimisée. Trente Deux a redressé la situation et j'ai vendu dans de bien meilleures conditions.",
      author: "Dr. M.B.",
      position: "Chirurgien-dentiste, Bordeaux"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    })
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#1A1A1A] relative overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-14">
          <motion.p
            className="text-[#006618] text-xs tracking-[0.3em] uppercase mb-4 font-light"
            initial={{ opacity: 0, y: 10 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Témoignages
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-playfair text-[#F5F1E9] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Ils nous font confiance
          </motion.h2>
          <motion.div
            className="w-10 h-[1px] bg-[#006618] mx-auto"
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={titleInView ? "visible" : "hidden"}
              className="group bg-white/5 border border-white/10 hover:border-[#006618]/40 rounded-sm p-8 flex flex-col transition-all duration-500 hover:bg-white/8"
              data-testid={`testimonial-card-${index}`}
            >
              <Quote className="w-7 h-7 text-[#006618]/50 mb-5 shrink-0" />

              <p className="text-[#D9C2A7] leading-relaxed italic text-sm mb-8 flex-1">
                "{testimonial.text}"
              </p>

              <div className="border-t border-white/10 pt-5">
                <p className="text-[#F5F1E9] font-semibold text-sm">
                  {testimonial.author}
                </p>
                <p className="text-[#D9C2A7]/60 text-xs mt-0.5">
                  {testimonial.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
