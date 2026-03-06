import React from 'react';
import { SEO } from '../components/SEO';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Journey } from '../components/Journey';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Toaster } from '../components/ui/sonner';

export const HomePage = () => {
  const contactRef = React.useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <SEO 
        title="Trente Deux - Structuration Stratégique pour Cabinets Dentaires"
        description="Maison de structuration stratégique pour chirurgiens-dentistes et orthodontistes. Holdings professionnelles, gouvernance, pactes d'associés, transmission."
        keywords="structuration cabinet dentaire, holding dentaire, SELARL dentiste, SPFPL dentaire, pacte associés orthodontiste, transmission cabinet dentaire, structuration stratégique"
      />
      
      <Header onContactClick={scrollToContact} />
      <Hero onContactClick={scrollToContact} />
      <Journey />
      <Services />
      <WhyUs />
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
};
