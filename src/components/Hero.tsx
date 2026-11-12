import React from 'react';
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
      <div className="relative max-w-5xl mx-auto px-6 pt-[20px] pb-4 sm:px-8" style={{ paddingTop: '20px' }}>
        <div className="flex flex-col justify-center max-w-3xl">
          <p 
            className="block sm:hidden text-center text-white font-semibold mb-[20px] tracking-wide"
            style={{ fontSize: '12px', color: '#ffffff', marginBottom: '20px' }}
          >
            {t.topBar}
          </p>
          <h1 
            className="text-[31.6px] sm:text-5xl lg:text-6xl w-[340px] max-w-full mx-auto sm:mx-0 sm:w-auto font-extrabold tracking-tight leading-[1.1] font-display mb-[25px] [text-wrap:balance]"
            style={{ marginBottom: '25px' }}
          >
            {t.heroTitlePrefix}
            <span className="text-[#a8d94b] underline decoration-[#a8d94b]/40 decoration-wavy decoration-2">
              {t.heroTitleHighlight}
            </span>
            {t.heroTitleSuffix}
          </h1>

          <p className="text-lg sm:text-xl text-white leading-relaxed w-[340px] max-w-full mx-auto sm:mx-0 sm:w-auto sm:max-w-2xl mb-4 font-normal" style={{ color: '#ffffff' }}>
            {t.heroLead}
          </p>

          {/* Callout */}
          <p 
            className="text-white mb-1.5 tracking-tight flex items-center gap-2"
            style={{ 
              color: '#ffffff',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '28.6px',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            <span>{t.heroCallout}</span>
          </p>
          <p 
            className="text-[#a8d94b] mb-6 tracking-tight flex items-center gap-2"
            style={{ 
              color: '#a8d94b',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              fontSize: '28.6px',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}
          >
            <span>{t.heroCallPhone}</span>
          </p>

          {/* Proof Metric Strips */}
          <div className="pt-8 border-t border-white/15 flex gap-10 max-w-lg">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-[#a8d94b] font-display tabular-nums">
                5.0★
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
