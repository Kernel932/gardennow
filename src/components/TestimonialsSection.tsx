import React from 'react';
import { MessageCircle, Image as ImageIcon } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="py-20 border-b border-[#00382a]" style={{ background: 'linear-gradient(135deg, #007D5D 0%, #004332 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-5 text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-left" style={{ color: '#ffffff', textAlign: 'left' }}>
            {t.testiTitle}
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed text-left"
            style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'normal', color: '#a9c6b3', textAlign: 'left' }}
          >
            {t.turfIntro}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start pt-4">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display text-left"
                style={{ color: '#ffffff', textAlign: 'left' }}
              >
                {t.turfAdvantagesTitle}
              </h3>
              <ul className="space-y-3.5 pt-4">
                {[t.turfAdv1, t.turfAdv2, t.turfAdv3, t.turfAdv4, t.turfAdv5].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#e2f0e7]">
                    <span className="w-5 h-5 rounded-full bg-[#a8d94b]/20 text-[#a8d94b] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div
              id="turf-adv-image-box"
              className="w-full max-w-[520px] h-[360px] rounded-2xl bg-white/5 border border-white/15 overflow-hidden transition-all mx-auto lg:mx-0"
              style={{ width: '100%', maxWidth: '520px', height: '360px' }}
            >
              <img
                src="public/instalgramasintetica.png"
                alt={lang === 'pt' ? 'Vantagens da Grama Sintética' : 'Synthetic Turf Advantages'}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display text-left pt-6"
            style={{ color: '#ffffff', textAlign: 'left' }}
          >
            {t.turfProcessTitle}
          </h3>
          <ol className="space-y-3.5 pt-2" style={{ width: '680px', maxWidth: '100%' }}>
            {[
              { num: 1, text: t.turfStep1 },
              { num: 2, text: t.turfStep2 },
              { num: 3, text: t.turfStep3 },
              { num: 4, text: t.turfStep4 },
            ].map((step) => (
              <li key={step.num} className="flex items-start gap-3 text-sm sm:text-base text-[#e2f0e7]">
                <span className="w-5 h-5 rounded-full bg-[#e8efdf] text-[#004332] flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 shadow-xs" style={{ backgroundColor: '#e8efdf', color: '#004332' }}>
                  {step.num}
                </span>
                <span>{step.text}</span>
              </li>
            ))}
          </ol>
          <div className="pt-8 mt-10 border-t border-white/15 text-left">
            <h3
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-display text-left mb-5 max-w-3xl leading-snug"
              style={{ color: '#ffffff', textAlign: 'left' }}
            >
              {t.turfCtaTitle}
            </h3>
            <div className="flex flex-wrap gap-4 pt-1">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  lang === 'pt'
                    ? 'Olá! Gostaria de solicitar uma avaliação gratuita para instalação de grama sintética.'
                    : 'Hi! I would like to request a free on-site assessment for synthetic turf installation.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1eb857] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.turfCtaBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
