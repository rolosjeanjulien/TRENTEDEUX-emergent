import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { Mail, Phone } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const CALENDLY_URL = process.env.REACT_APP_CALENDLY_URL;
const API_URL = process.env.REACT_APP_API_URL || '';

export const Contact = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.15, once: true });
  const [formData, setFormData] = useState({
    nom: '',
    cabinet: '',
    email: '',
    besoin: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi. Veuillez réessayer.');
      }

      toast.success("Demande envoyée", {
        description: "Nous vous recontacterons dans les plus brefs délais.",
      });
      setFormData({ nom: '', cabinet: '', email: '', besoin: '' });
    } catch (err) {
      setSubmitError(err.message || 'Une erreur est survenue. Veuillez réessayer ou nous contacter par email.');
    } finally {
      setIsLoading(false);
    }
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.15 * i, duration: 0.5, ease: "easeOut" }
    })
  };

  return (
    <section id="contact" className="contact-section py-24 bg-white" data-testid="contact-section">
      <div className="container mx-auto px-6">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title text-4xl md:text-5xl text-[#1A1A1A] text-center mb-6 font-playfair">
            Prenez Rendez-vous
          </h2>
          <motion.p
            className="text-center text-[#1A1A1A]/70 mb-16 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Commencez votre parcours d'excellence stratégique
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: -40 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="text-2xl font-playfair text-[#1A1A1A] mb-6">
              Formulaire de contact
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              {[
                { label: "Nom complet *", type: "text", name: "nom", placeholder: "Dr. Prénom Nom" },
                { label: "Nom du cabinet *", type: "text", name: "cabinet", placeholder: "Cabinet Dentaire..." },
                { label: "Email professionnel *", type: "email", name: "email", placeholder: "contact@cabinet.fr" }
              ].map((field, i) => (
                <motion.div
                  key={field.name}
                  custom={i}
                  variants={formFieldVariants}
                  initial="hidden"
                  animate={titleInView ? "visible" : "hidden"}
                >
                  <label className="block text-[#1A1A1A] mb-2 font-light">
                    {field.label}
                  </label>
                  <Input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="w-full border-[#D9C2A7]/50 focus:border-[#006618] transition-colors"
                    placeholder={field.placeholder}
                    data-testid={`contact-input-${field.name}`}
                  />
                </motion.div>
              ))}

              <motion.div
                custom={3}
                variants={formFieldVariants}
                initial="hidden"
                animate={titleInView ? "visible" : "hidden"}
              >
                <label className="block text-[#1A1A1A] mb-2 font-light">
                  Votre besoin *
                </label>
                <Textarea
                  name="besoin"
                  value={formData.besoin}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  rows={5}
                  className="w-full border-[#D9C2A7]/50 focus:border-[#006618] transition-colors resize-none"
                  placeholder="Décrivez brièvement votre projet de structuration..."
                  data-testid="contact-input-besoin"
                />
              </motion.div>

              {submitError && (
                <motion.p
                  className="text-red-600 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {submitError}
                </motion.p>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={titleInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={!isLoading ? { scale: 1.02 } : {}}
                whileTap={!isLoading ? { scale: 0.98 } : {}}
              >
                <Button
                  type="submit"
                  disabled={isLoading}
                  data-testid="contact-submit-button"
                  className="w-full bg-[#122D18] hover:bg-[#0D1F12] text-white py-6 rounded-full transition-all duration-300 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Calendly / RDV */}
          <motion.div
            className="calendly-wrapper"
            initial={{ opacity: 0, x: 40 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-2xl font-playfair text-[#1A1A1A] mb-6">
              Réservez votre créneau
            </h3>

            {CALENDLY_URL ? (
              <iframe
                src={CALENDLY_URL}
                title="Calendly - Prise de rendez-vous"
                className="w-full rounded-sm border border-[#D9C2A7]/30"
                style={{ minHeight: '500px', border: 'none' }}
                loading="lazy"
              />
            ) : (
              <div className="bg-[#F5F1E9]/30 rounded-sm border border-[#D9C2A7]/30 p-8 min-h-[500px] flex flex-col items-center justify-center">
                <p className="text-[#1A1A1A]/60 text-center text-sm">
                  La prise de rendez-vous en ligne sera disponible prochainement.
                </p>
                <p className="text-[#1A1A1A]/40 text-xs text-center mt-2">
                  En attendant, utilisez le formulaire ci-contre ou contactez-nous par email.
                </p>
              </div>
            )}

            {/* Contact Info */}
            <motion.div
              className="mt-8 space-y-4"
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 text-[#1A1A1A]/70" data-testid="contact-email">
                <Mail className="w-5 h-5 text-[#006618]" />
                <span>contact@trentedeux.fr</span>
              </div>
              <div className="flex items-center gap-3 text-[#1A1A1A]/70" data-testid="contact-phone">
                <Phone className="w-5 h-5 text-[#006618]" />
                <span>+33 (0)1 XX XX XX XX</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
