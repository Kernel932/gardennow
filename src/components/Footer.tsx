import React from 'react';
import { MessageCircle, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER, DISPLAY_PHONE } from '../i18n/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <footer className="bg-[#0f2417] text-[#a9c6b3] pt-16 pb-12 border-t border-[#1c3a26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Wordmark */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2b7a45] to-[#14311f] flex items-center justify-center text-white text-xl shadow-md">
                🌿
              </span>
              <span className="text-2xl font-extrabold text-white font-display">
                Garden Now
              </span>
            </a>
            <p className="text-sm text-[#8faea0] leading-relaxed max-w-sm">
              {t.footAbout}
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-[#8faea0]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#a8d94b]" />
                {t.badge1}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#a8d94b]" />
                {t.phoneHours}
              </span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footServices}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.footS1}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.footS2}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.footS3}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.footS4}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {t.footS5}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footCompany}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#who" className="hover:text-white transition-colors">
                  {t.navRes}
                </a>
              </li>
              <li>
                <a href="#who" className="hover:text-white transition-colors">
                  {t.navCom}
                </a>
              </li>
              <li>
                <a href="#transformations" className="hover:text-white transition-colors">
                  {t.navBeforeAfter}
                </a>
              </li>
              <li>
                <a href="#areas" className="hover:text-white transition-colors">
                  {t.navAreas}
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  {t.navFaq}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">
              {t.footContact}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#25d366] hover:underline font-semibold"
                >
                  <MessageCircle className="w-4 h-4 fill-[#25d366]" />
                  <span>{t.footWa}</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:5550147788"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#a8d94b]" />
                  <span>{DISPLAY_PHONE}</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:gardennowlandscape@gmail.com"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#a8d94b]" />
                  <span>gardennowlandscape@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#719080]">
          <p>{t.footRights}</p>
          <p>{t.footLegal}</p>
        </div>
      </div>
    </footer>
  );
};
