import React, { useRef } from "react";
import "@/App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Journey } from "./components/Journey";
import { Services } from "./components/Services";
import { WhyUs } from "./components/WhyUs";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

function App() {
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

export default App;

