import React from 'react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section className="py-20 border-b border-[#00382a]" style={{ background: 'linear-gradient(135deg, #007D5D 0%, #004332 100%)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display" style={{ color: '#ffffff' }}>
            {t.testiTitle}
          </h2>
        </div>
      </div>
    </section>
  );
};
