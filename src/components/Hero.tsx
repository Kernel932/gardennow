import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section 
      className="relative overflow-hidden text-white py-16 lg:py-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(6, 26, 13, 0.92) 0%, rgba(6, 26, 13, 0.82) 35%, rgba(6, 26, 13, 0.40) 60%, rgba(6, 26, 13, 0) 82%), url('/manssao.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="relative max-w-5xl mx-auto px-6 py-4 sm:px-8">
        <div className="flex flex-col justify-center max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-display mb-6 [text-wrap:balance]">
            {t.heroTitlePrefix}
            <span className="text-[#a8d94b] underline decoration-[#a8d94b]/40 decoration-wavy decoration-2">
              {t.heroTitleHighlight}
            </span>
            {t.heroTitleSuffix}
          </h1>

          <p className="text-lg sm:text-xl text-white leading-relaxed max-w-2xl mb-8 font-normal" style={{ color: '#ffffff' }}>
            {t.heroLead}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#quote"
              style={{ backgroundColor: '#007054' }}
              className="inline-flex items-center justify-center gap-2.5 bg-[#007054] hover:bg-[#005a43] text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:shadow-2xl transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>{t.heroCta1}</span>
            </a>
          </div>

          {/* Proof Metric Strips */}
          <div className="pt-8 border-t border-white/15 grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#a8d94b] font-display tabular-nums">
                15+
              </span>
              <span className="text-xs sm:text-sm text-[#a9c6b3] font-medium leading-tight">
                {t.stat1}
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#a8d94b] font-display tabular-nums">
                2,400+
              </span>
              <span className="text-xs sm:text-sm text-[#a9c6b3] font-medium leading-tight">
                {t.stat2}
              </span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#a8d94b] font-display tabular-nums">
                4.9★
              </span>
              <span className="text-xs sm:text-sm text-[#a9c6b3] font-medium leading-tight">
                {t.stat3}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
