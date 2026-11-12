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
    <div className="text-white text-xs py-1 md:py-2 px-4 sm:px-6 border-b border-[#00382a] w-full max-h-[32px] md:max-h-none flex items-center box-border" style={{ background: 'linear-gradient(90deg, #007D5D 0%, #004332 100%)' }}>
      <div className="w-full max-w-full mx-0 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap mr-auto justify-start text-left">
          <span 
            className="hidden md:flex items-center gap-1.5 font-medium text-left mr-auto justify-start text-[#E8EFDF] text-[16px]"
            style={{ textAlign: 'left', marginLeft: 0, marginRight: 'auto', color: '#E8EFDF', fontFamily: "'Futura Md BT', 'Futura', sans-serif", fontSize: '16px' }}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#E8EFDF]" />
            {t.topBar}
          </span>
          <span className="hidden md:flex items-center gap-1.5 text-[#a9c6b3]">
            <Clock className="w-3.5 h-3.5" />
            {t.phoneHours}
          </span>
        </div>

        <div className="flex items-center justify-center md:justify-end gap-4 flex-wrap w-full md:w-auto">
          <a
            href="tel:5550147788"
            className="flex items-center justify-center gap-1.5 text-white hover:text-[#a8d94b] transition-colors font-semibold text-center"
          >
            <Phone className="w-3.5 h-3.5 text-[#a8d94b]" />
            <span className="text-center" style={{ color: '#E8EFDF', fontFamily: "'Futura Md BT', 'Futura', sans-serif" }}>{t.topBarPhone} <strong style={{ color: '#d8492e' }}>{DISPLAY_PHONE}</strong></span>
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
