import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER, DISPLAY_PHONE } from '../i18n/translations';

interface NavbarProps {
  lang: Language;
  onOpenWhatsAppModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onOpenWhatsAppModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const defaultWaMessage = encodeURIComponent(
    lang === 'pt'
      ? 'Olá! Gostaria de solicitar um orçamento para o meu imóvel.'
      : "Hi! I'd like to request a quote for my property."
  );

  const navLinks = [
    { label: t.navServices, href: '#services' },
    { label: t.navBeforeAfter, href: '#transformations' },
    { label: t.navCalculator, href: '#calculator' },
    { label: `${t.navRes} / ${t.navCom}`, href: '#who' },
    { label: t.navAreas, href: '#areas' },
    { label: t.navFaq, href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e5eae6] transition-all">
      <div 
        className="w-full max-w-full mx-0 pl-0 pr-4 sm:pr-6 h-20 flex items-center justify-between gap-6 bg-[#DED3BC]"
        style={{
          backgroundColor: '#DED3BC',
          backgroundImage: "url('/backgroundbarra6.png')",
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'left center',
          backgroundSize: 'auto 100%',
        }}
      >
        {/* Logo container with uploaded image without alterations */}
        <div className="flex items-center justify-start h-20 w-[267px] min-w-[267px] shrink-0 mr-auto text-left pl-0 ml-0">
          <img
            src="/LogoGarden4.png"
            alt="Garden Now"
            width={267}
            height={84}
            referrerPolicy="no-referrer"
            className="max-h-full max-w-full h-auto w-auto object-contain block bg-transparent"
          />
        </div>

        {/* Navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-[#33463a]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#2b7a45] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2b7a45] hover:after:w-full after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action buttons */}
        <div className="flex items-center justify-end gap-3 ml-auto">
          <a
            href="tel:5550147788"
            className="hidden sm:flex flex-col text-right pr-2"
          >
            <span className="text-xs font-semibold text-[#14311f] tabular-nums">
              {DISPLAY_PHONE}
            </span>
            <span className="text-[10px] text-[#5d6a60] uppercase tracking-wider font-bold">
              {t.phoneHours}
            </span>
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#14311f] hover:bg-[#f0f4f1] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e5eae6] px-6 py-5 shadow-xl animate-fade-in">
          <nav className="flex flex-col gap-3 font-semibold text-[#33463a]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 rounded-lg hover:bg-[#f5f8f6] hover:text-[#2b7a45] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${defaultWaMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#25d366] text-white py-3 rounded-xl font-bold text-sm shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>{t.heroCta1}</span>
              </a>
              <a
                href="tel:5550147788"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#f0f4f1] text-[#14311f] py-3 rounded-xl font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#2b7a45]" />
                <span>{DISPLAY_PHONE}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
