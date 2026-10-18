import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const faqs = [
    { q: t.faq1q, a: t.faq1a },
    { q: t.faq2q, a: t.faq2a },
    { q: t.faq3q, a: t.faq3a },
    { q: t.faq4q, a: t.faq4a },
  ];

  return (
    <section id="faq" className="py-20 bg-[#E8EFDF] border-b border-[#d4decb]" style={{ backgroundColor: '#E8EFDF' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14311f] font-display">
            {t.faqTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-[#c9ddcf] bg-white p-6 shadow-sm"
            >
              <h3 className="font-bold text-lg sm:text-xl text-[#14311f] font-display">
                {faq.q}
              </h3>
              <p className="mt-3 text-base text-[#4d5f52] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

        {/* Transform Your Outdoor Space Area */}
        <div className="mt-12 rounded-3xl bg-gradient-to-br from-[#007D5D] to-[#004332] p-8 sm:p-12 text-center text-white shadow-xl shadow-[#004332]/10 border border-[#007D5D]/40">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
            {t.transformTitle}
          </h3>
          <p className="mt-3 text-base sm:text-lg text-[#dcefe1] max-w-xl mx-auto leading-relaxed">
            {t.transformSub}
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/16145550192?text=Ol%C3%A1!%20Gostaria%20de%20transformar%20meu%20espa%C3%A7o%20externo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#a8d94b] text-[#14311f] hover:bg-[#b8e362] font-extrabold px-8 py-3.5 rounded-full text-base transition-all shadow-md active:scale-95 hover:shadow-lg"
            >
              <span>{t.transformBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
