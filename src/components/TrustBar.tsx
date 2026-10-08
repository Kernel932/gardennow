import React from 'react';
import { Shield, Sprout, Award, MapPin } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../i18n/translations';

interface TrustBarProps {
  lang: Language;
}

export const TrustBar: React.FC<TrustBarProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="bg-[#f4f2ea] border-y border-[#e5e0d3] py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm md:text-base font-bold text-[#14311f] text-center md:text-left max-w-md">
          {t.trustText}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm font-semibold text-[#3b5242]">
          <span className="inline-flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#2b7a45]">
              <Shield className="w-4 h-4" />
            </span>
            <span>{t.badge1}</span>
          </span>

          <span className="inline-flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#2b7a45]">
              <Sprout className="w-4 h-4" />
            </span>
            <span>{t.badge2}</span>
          </span>

          <span className="inline-flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#2b7a45]">
              <Award className="w-4 h-4" />
            </span>
            <span>{t.badge3}</span>
          </span>

          <span className="inline-flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center text-[#2b7a45]">
              <MapPin className="w-4 h-4" />
            </span>
            <span>{t.badge4}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
