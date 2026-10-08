import React from 'react';
import { Phone, ShieldCheck, Clock, Globe } from 'lucide-react';
import { Language } from '../types';
import { translations, DISPLAY_PHONE } from '../i18n/translations';

interface TopBarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const TopBar: React.FC<TopBarProps> = ({ lang, onLanguageChange }) => {
  const t = translations[lang];

  return (
    <div className="bg-[#092f17] text-white text-xs py-2 px-4 sm:px-6 border-b border-[#062010] w-full" style={{ backgroundColor: '#092f17' }}>
      <div className="w-full max-w-full mx-0 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap mr-auto justify-start text-left">
          <span 
            className="flex items-center gap-1.5 font-medium text-left mr-auto justify-start"
            style={{ textAlign: 'left', marginLeft: 0, marginRight: 'auto' }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#a8d94b]" />
            {t.topBar}
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-[#a9c6b3]">
            <Clock className="w-3.5 h-3.5" />
            {t.phoneHours}
          </span>
        </div>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="tel:5550147788"
            className="flex items-center gap-1.5 text-white hover:text-[#a8d94b] transition-colors font-semibold"
          >
            <Phone className="w-3.5 h-3.5 text-[#a8d94b]" />
            <span>{t.topBarPhone} <strong className="text-[#a8d94b]">{DISPLAY_PHONE}</strong></span>
          </a>

          {/* Language Switcher */}
          <div className="inline-flex items-center gap-1 bg-[#1e462c] p-0.5 rounded-full border border-[#2b5e3c]">
            <Globe className="w-3 h-3 text-[#a8d94b] ml-1.5" />
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                lang === 'en'
                  ? 'bg-[#2b7a45] text-white shadow-xs'
                  : 'text-[#a9c6b3] hover:text-white'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('pt')}
              className={`px-2 py-0.5 rounded-full text-[11px] font-bold transition-all ${
                lang === 'pt'
                  ? 'bg-[#2b7a45] text-white shadow-xs'
                  : 'text-[#a9c6b3] hover:text-white'
              }`}
              aria-label="Mudar para Português"
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
