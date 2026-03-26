import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { CircularLogo } from './CircularLogo';

export const Header = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const appContainer = document.querySelector('.App');
      if (appContainer) {
        setIsScrolled(appContainer.scrollTop > 100);
      }
    };

    const appContainer = document.querySelector('.App');
    if (appContainer) {
      appContainer.addEventListener('scroll', handleScroll);
      return () => appContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Votre parcours', section: 'journey' },
    { label: 'Ce que nous faisons', section: 'services' },
    { label: 'Pourquoi Trente Deux', section: 'whyus' },
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#1A1A1A] backdrop-blur-md shadow-2xl py-3' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
      data-testid="header"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="cursor-pointer flex items-center gap-3" 
            onClick={() => {
              const appContainer = document.querySelector('.App');
              if (appContainer) appContainer.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <CircularLogo size={isScrolled ? 42 : 48} />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" data-testid="desktop-nav">
            {navItems.map((item, i) => (
              <motion.button 
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="text-[#D9C2A7] hover:text-[#006618] transition-colors text-sm tracking-wide relative"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -2 }}
                data-testid={`nav-${item.section}`}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button 
              onClick={onContactClick}
              data-testid="header-contact-button"
              className="bg-[#122D18] hover:bg-[#0D1F12] text-white px-6 py-2 rounded-full transition-all duration-300 text-sm tracking-wide"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Prendre contact
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#F5F1E9]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav 
              className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-[#D9C2A7]/20 pt-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              data-testid="mobile-nav"
            >
              {navItems.map((item) => (
                <button 
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-[#D9C2A7] hover:text-[#006618] transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => { onContactClick(); setIsMobileMenuOpen(false); }}
                data-testid="header-contact-button-mobile"
                className="bg-[#122D18] hover:bg-[#0D1F12] text-white px-6 py-2 rounded-full transition-all duration-300 text-center"
              >
                Prendre contact
              </button>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
