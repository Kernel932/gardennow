import React from 'react';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER, DISPLAY_PHONE } from '../i18n/translations';

interface CtaBannerProps {
  lang: Language;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="py-20 bg-gradient-to-r from-[#143a22] via-[#1e5e35] to-[#256b3c] text-white relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#a8d94b]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-display [text-wrap:balance]">
          {t.ctaTitle}
        </h2>

        <p className="text-base sm:text-lg text-[#dcefe1] max-w-2xl mx-auto leading-relaxed">
          {t.ctaText}
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              lang === 'pt'
                ? 'Olá! Gostaria de agendar uma avaliação gratuita para o meu jardim.'
                : 'Hi! I would like to schedule a free on-site assessment for my property.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-white text-[#14311f] hover:bg-[#f2fbf5] px-8 py-4 rounded-full font-extrabold text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-[#25d366] text-[#25d366]" />
            <span>{t.ctaBtn}</span>
          </a>

          <a
            href="tel:5550147788"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-7 py-4 rounded-full font-bold text-base transition-all hover:-translate-y-0.5 backdrop-blur-sm"
          >
            <Phone className="w-4 h-4 text-[#a8d94b]" />
            <span>{DISPLAY_PHONE}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
