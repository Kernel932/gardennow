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
        <div
          className="mt-8 sm:mt-11 w-full max-w-[820px] mx-auto rounded-2xl sm:rounded-[20px] bg-gradient-to-br from-[#007D5D] to-[#004332] px-5 py-7 sm:px-8 sm:py-10 text-center text-white shadow-xl shadow-[#004332]/15 border border-[#007D5D]/40"
          style={{ width: '100%', maxWidth: '820px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-white font-display">
            {t.transformTitle}
          </h3>
          <p className="mt-3 text-sm sm:text-lg text-[#dcefe1] max-w-xl mx-auto leading-relaxed">
            {t.transformSub}
          </p>
          <p className="mt-4 text-xs sm:text-sm font-bold tracking-wide uppercase text-[#a8d94b]">
            {t.transformFeatures}
          </p>
          <div className="mt-6 sm:mt-7 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/16145550192?text=Ol%C3%A1!%20Gostaria%20de%20transformar%20meu%20espa%C3%A7o%20externo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full max-w-[280px] sm:w-auto gap-2.5 bg-[#a8d94b] text-[#14311f] hover:bg-[#b8e362] font-extrabold px-6 sm:px-8 py-3.5 rounded-full text-sm sm:text-base transition-all shadow-md active:scale-95 hover:shadow-lg"
            >
              <span>{t.transformBtn}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
