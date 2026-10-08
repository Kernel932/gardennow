import React, { useState } from 'react';
import { Home, Building2, CheckCircle2, MessageCircle, Clock, ShieldCheck, Camera, FileText } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface SegmentsSectionProps {
  lang: Language;
}

export const SegmentsSection: React.FC<SegmentsSectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
  const t = translations[lang];

  return (
    <section id="who" className="py-20 bg-[#092f17] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#a8d94b] mb-3">
            <span>{t.segEyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display">
            {t.segTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#a9c6b3]">
            {t.segSub}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 p-1.5 bg-white/10 rounded-2xl max-w-sm mt-8 border border-white/10">
          <button
            type="button"
            onClick={() => setActiveTab('residential')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'residential'
                ? 'bg-[#a8d94b] text-[#14311f] shadow-md'
                : 'text-[#d3e5d9] hover:text-white'
            }`}
          >
            <Home className="w-4 h-4" />
            <span>{t.tabRes}</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('commercial')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'commercial'
                ? 'bg-[#a8d94b] text-[#14311f] shadow-md'
                : 'text-[#d3e5d9] hover:text-white'
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>{t.tabCom}</span>
          </button>
        </div>

        {/* Tab Panels */}
        <div className="mt-12">
          {activeTab === 'residential' ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-[#cfe4d5] leading-relaxed">
                  {t.resP}
                </p>

                <ul className="space-y-3.5">
                  {[t.resL1, t.resL2, t.resL3, t.resL4, t.resL5].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#e2f0e7]">
                      <span className="w-5 h-5 rounded-full bg-[#a8d94b]/20 text-[#a8d94b] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      lang === 'pt'
                        ? 'Olá! Gostaria de um orçamento residencial para a manutenção do meu quintal.'
                        : 'Hi! I would like to get a residential quote for my home lawn and yard.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1eb857] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{lang === 'pt' ? 'Solicitar Plano Residencial' : 'Get Residential Plan Quote'}</span>
                  </a>
                </div>
              </div>

              {/* Plan Card */}
              <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white font-display mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#a8d94b]" />
                  <span>{t.resPlanTitle}</span>
                </h3>

                <div className="space-y-6 text-sm">
                  <div className="border-b border-white/10 pb-4">
                    <span className="block font-bold text-white mb-1">
                      {t.resPlan1b}
                    </span>
                    <span className="text-xs text-[#a9c6b3]">
                      {t.resPlan1s}
                    </span>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <span className="block font-bold text-white mb-1">
                      {t.resPlan2b}
                    </span>
                    <span className="text-xs text-[#a9c6b3]">
                      {t.resPlan2s}
                    </span>
                  </div>

                  <div>
                    <span className="block font-bold text-white mb-1">
                      {t.resPlan3b}
                    </span>
                    <span className="text-xs text-[#a9c6b3]">
                      {t.resPlan3s}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-in">
              <div className="lg:col-span-7 space-y-6">
                <p className="text-base sm:text-lg text-[#cfe4d5] leading-relaxed">
                  {t.comP}
                </p>

                <ul className="space-y-3.5">
                  {[t.comL1, t.comL2, t.comL3, t.comL4, t.comL5].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#e2f0e7]">
                      <span className="w-5 h-5 rounded-full bg-[#a8d94b]/20 text-[#a8d94b] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      lang === 'pt'
                        ? 'Olá! Sou gestor predial/comercial e gostaria de solicitar uma proposta comercial para o nosso condomínio/empresa.'
                        : 'Hi! I am a commercial property manager and would like to request an RFP quote for our business grounds.'
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1eb857] text-white px-6 py-3.5 rounded-full font-bold text-sm shadow-md transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>{lang === 'pt' ? 'Solicitar Proposta Comercial' : 'Request Commercial RFP'}</span>
                  </a>
                </div>
              </div>

              {/* Commercial Perks Card with Real Asset */}
              <div className="lg:col-span-5 bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-8 backdrop-blur-sm overflow-hidden">
                <div className="mb-6 rounded-2xl overflow-hidden h-40 border border-white/10">
                  <img
                    src="/src/assets/images/garden_commercial_park_1791311006865.jpg"
                    alt="Commercial office grounds"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="text-xl font-bold text-white font-display mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#a8d94b]" />
                  <span>{t.comPlanTitle}</span>
                </h3>

                <div className="space-y-6 text-sm">
                  <div className="border-b border-white/10 pb-4">
                    <span className="block font-bold text-white mb-1">
                      {t.comPlan1b}
                    </span>
                    <span className="text-xs text-[#a9c6b3]">
                      {t.comPlan1s}
                    </span>
                  </div>

                  <div className="border-b border-white/10 pb-4">
                    <span className="block font-bold text-white mb-1">
                      {t.comPlan2b}
                    </span>
                    <span className="text-xs text-[#a9c6b3]">
                      {t.comPlan2s}
                    </span>
                  </div>

                  <div>
                    <span className="block font-bold text-white mb-1">
                      {t.comPlan3b}
                    </span>
                    <span className="text-xs text-[#a9c6b3]">
                      {t.comPlan3s}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
