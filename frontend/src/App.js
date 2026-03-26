import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import "@/App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { MentionsLegales } from "./pages/MentionsLegales";
import { PolitiqueConfidentialite } from "./pages/PolitiqueConfidentialite";
import { CGV } from "./pages/CGV";

function HomePage() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
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
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
      <Route path="/cgv" element={<CGV />} />
    </Routes>
  );
}

export default App;

