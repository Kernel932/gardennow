import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface TestimonialsSectionProps {
  lang: Language;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const testimonials = [
    {
      id: '1',
      author: 'Denise M.',
      location: t.testi1s,
      content: t.testi1p,
      avatar: 'DM',
      highlight: lang === 'pt' ? 'Atendimento Residencial' : 'Residential Recurring',
    },
    {
      id: '2',
      author: 'Ray T.',
      location: t.testi2s,
      content: t.testi2p,
      avatar: 'RT',
      highlight: lang === 'pt' ? 'Projeto em Pedra' : 'Hardscape & Patio Build',
    },
    {
      id: '3',
      author: 'Sonia P.',
      location: t.testi3s,
      content: t.testi3p,
      avatar: 'SP',
      highlight: lang === 'pt' ? 'Gestão Predial' : 'Commercial Facility',
    },
  ];

  return (
    <section className="py-20 bg-[#b4e1b7] border-b border-[#e5e0d3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2b7a45] mb-3">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>{t.testiEyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14311f] font-display">
            {t.testiTitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e4d8] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#e8b529]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#e8b529]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-[#2b7a45] bg-[#edf6ef] px-2.5 py-0.5 rounded-full border border-[#d3e5d7]">
                    {item.highlight}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#384a3f] leading-relaxed italic mb-6">
                  {item.content}
                </p>
              </div>

              <div className="pt-4 border-t border-[#f0ece2] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2b7a45] to-[#14311f] text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-xs">
                  {item.avatar}
                </div>
                <div>
                  <span className="block text-sm font-bold text-[#14311f]">
                    {item.author}
                  </span>
                  <span className="block text-xs text-[#6e7d72]">
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
