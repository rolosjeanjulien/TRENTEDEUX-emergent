import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export const Footer = () => {
  const [footerRef, footerInView] = useInView({ threshold: 0.2, once: true });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer bg-[#1A1A1A] text-[#F5F1E9] py-12" data-testid="footer">
      <motion.div 
        ref={footerRef}
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={footerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-playfair tracking-widest mb-4">TRENTE DEUX</h2>
            <p className="text-[#D9C2A7] text-sm font-light italic">
              Maison de structuration stratégique
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={footerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-playfair mb-4 text-[#F5F1E9]">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => { const app = document.querySelector('.App'); if (app) app.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-[#D9C2A7] hover:text-[#006618] transition-colors">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-[#D9C2A7] hover:text-[#006618] transition-colors">
                  Domaines d'intervention
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-[#D9C2A7] hover:text-[#006618] transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={footerInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-playfair mb-4 text-[#F5F1E9]">
              Informations légales
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/mentions-legales.html" className="text-[#D9C2A7] hover:text-[#006618] transition-colors" data-testid="legal-mentions">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/politique-de-confidentialite.html" className="text-[#D9C2A7] hover:text-[#006618] transition-colors" data-testid="legal-privacy">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/conditions-generales-utilisation.html" className="text-[#D9C2A7] hover:text-[#006618] transition-colors" data-testid="legal-cgu">
                  CGU
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Legal Disclaimer */}
        <motion.div 
          className="border-t border-[#D9C2A7]/20 pt-6 mb-6"
          initial={{ opacity: 0 }}
          animate={footerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-[#D9C2A7]/50 text-xs leading-relaxed text-center max-w-3xl mx-auto" data-testid="legal-disclaimer">
            Trente Deux exerce une activité de conseil stratégique et de coordination.
            Les prestations juridiques réglementées sont réalisées par des professionnels habilités.
          </p>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-[#D9C2A7]/10 pt-4 text-center">
          <p className="text-[#D9C2A7]/40 text-xs">
            &copy; {new Date().getFullYear()} Trente Deux. Tous droits réservés.
          </p>
        </div>
      </motion.div>
    </footer>
  );
};
