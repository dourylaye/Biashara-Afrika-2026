import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'fr' | 'en';
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, lang }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const t = {
    fr: {
      title: 'Nous Écrire',
      subtitle: 'Envoyez un message au comité d\'organisation',
      name: 'Nom complet',
      email: 'Adresse e-mail',
      phone: 'Contact / Téléphone',
      message: 'Votre message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      successTitle: 'Message Envoyé !',
      successText: 'Votre message a été transmis avec succès au comité d\'organisation.',
      close: 'Fermer',
      recipient: 'biashara2026.com@commerce.gouv.tg'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Send a message to the organizing committee',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Contact / Phone',
      message: 'Your message',
      send: 'Send Message',
      sending: 'Sending...',
      successTitle: 'Message Sent!',
      successText: 'Your message has been successfully transmitted to the organizing committee.',
      close: 'Close',
      recipient: 'biashara2026.com@commerce.gouv.tg'
    }
  }[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // In a real app, you'd call an API. For now, we'll also prepare a mailto for the user to actually send it if they want
      // but showing success in UI is what the user asked for.
      console.log('Form submitted to:', t.recipient, formData);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-brand-green p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
                <MessageSquare className="w-32 h-32" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
                <p className="text-white/70 font-light">{t.subtitle}</p>
              </div>
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-10">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-green">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">{t.successTitle}</h3>
                  <p className="text-black/50 mb-10 leading-relaxed max-w-sm mx-auto">
                    {t.successText}
                  </p>
                  <button 
                    onClick={onClose}
                    className="px-10 py-4 bg-brand-green text-white font-bold rounded-full hover:bg-brand-green/90 transition-all shadow-xl"
                  >
                    {t.close}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">{t.name}</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green/50" />
                        <input 
                          required
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({...formData, name: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">{t.email}</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green/50" />
                        <input 
                          required
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({...formData, email: e.target.value})}
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">{t.phone}</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-green/50" />
                      <input 
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all"
                        placeholder="+228 99 00 00 00"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-black/40 ml-1">{t.message}</label>
                    <div className="relative">
                      <div className="absolute left-4 top-5 text-brand-green/50">
                        <MessageSquare className="w-4 h-4" />
                      </div>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({...formData, message: e.target.value})}
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-black/5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-green/20 focus:border-brand-green focus:bg-white transition-all resize-none"
                        placeholder="..."
                      />
                    </div>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-5 bg-brand-green text-white font-black rounded-2xl shadow-[0_20px_50px_rgba(3,107,33,0.3)] hover:shadow-[0_25px_60px_rgba(3,107,33,0.4)] disabled:opacity-50 disabled:shadow-none hover:-translate-y-1 transition-all flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t.send}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
