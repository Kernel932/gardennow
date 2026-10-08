import React, { useState } from 'react';
import { MessageCircle, ArrowRight, CheckCircle2, Shield, Sparkles, ExternalLink } from 'lucide-react';
import { Language, QuoteFormData } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface HeroProps {
  lang: Language;
}

export const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    propertyType: 'Residential',
    serviceType: t.svcMaintenance,
    lotSize: 'approx. 1/4 acre',
    frequency: 'Weekly',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  const buildWhatsAppMessage = (data: QuoteFormData) => {
    const isPt = lang === 'pt';
    const lines = [
      isPt ? '🌿 *Nova Solicitação de Orçamento - Garden Now*' : '🌿 *New Quote Request - Garden Now*',
      '',
      `${t.lblName}: ${data.name || (isPt ? 'Não informado' : 'Not provided')}`,
      `${t.lblPhone}: ${data.phone || (isPt ? 'Não informado' : 'Not provided')}`,
      `${t.lblEmail}: ${data.email || (isPt ? 'Não informado' : 'Not provided')}`,
      `${t.lblProp}: ${data.propertyType}`,
      `${t.lblService}: ${data.serviceType}`,
      `${t.lblLotSize}: ${data.lotSize}`,
      data.notes ? `${t.lblMsg}: ${data.notes}` : '',
      '',
      isPt ? 'Por favor, me informe a disponibilidade para visita técnica!' : 'Please let me know your earliest opening for an on-site estimate!'
    ].filter(Boolean);

    return lines.join('\n');
  };

  const previewMessage = buildWhatsAppMessage(formData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = buildWhatsAppMessage(formData);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    setLastWaUrl(url);
    setSubmitted(true);
    
    // Safely attempt opening in new tab
    try {
      window.open(url, '_blank');
    } catch {
      // Fallback handles blocked popups
    }
  };

  return (
    <section className="relative overflow-hidden text-white py-12 lg:py-20 bg-[linear-gradient(110deg,rgba(6,26,13,0.90)_0%,rgba(9,36,18,0.80)_46%,rgba(14,48,24,0.52)_78%,rgba(6,22,11,0.88)_100%),url('/jardim.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="relative max-w-7xl mx-auto px-6 py-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Value Proposition & Social Proof */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div 
              className="inline-flex items-center gap-2 text-[40px] font-extrabold uppercase tracking-widest text-[#a8d94b] mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm self-start border border-white/10"
              style={{ fontSize: '40px' }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.heroEyebrow}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-display mb-6 [text-wrap:balance]">
              {t.heroTitlePrefix}
              <span className="text-[#a8d94b] underline decoration-[#a8d94b]/40 decoration-wavy decoration-2">
                {t.heroTitleHighlight}
              </span>
              {t.heroTitleSuffix}
            </h1>

            <p className="text-lg sm:text-xl text-[#cfe4d5] leading-relaxed max-w-2xl mb-8 font-normal">
              {t.heroLead}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  lang === 'pt' ? 'Olá! Gostaria de um orçamento para o meu imóvel.' : "Hi! I'd like a quote for my property."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25d366] hover:bg-[#1eb857] text-white px-7 py-4 rounded-full font-bold text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{t.heroCta1}</span>
              </a>

              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-6 py-4 rounded-full font-semibold text-base transition-all hover:-translate-y-0.5 backdrop-blur-sm"
              >
                <span>{t.heroCta2}</span>
                <ArrowRight className="w-4 h-4" />
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

          {/* Right Column: Interactive WhatsApp Lead Card */}
          <div className="lg:col-span-5">
            <div className="bg-white text-[#1c241f] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/80 relative">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#25d366]/15 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-[#25d366] fill-[#25d366]" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#14311f] font-display leading-tight">
                    {t.quoteCardTitle}
                  </h3>
                  <p className="text-xs text-[#5d6a60]">
                    {t.quoteCardHint}
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                      {t.lblName}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.phName}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                      {t.lblPhone}
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder={t.phPhone}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                      {t.lblProp}
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as 'Residential' | 'Commercial' })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa]"
                    >
                      <option value="Residential">{t.optResidential}</option>
                      <option value="Commercial">{t.optCommercial}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                      {t.lblLotSize}
                    </label>
                    <select
                      value={formData.lotSize}
                      onChange={(e) => setFormData({ ...formData, lotSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa]"
                    >
                      <option value="Townhouse / Patio (~3,000 sq ft)">Small yard / Patio</option>
                      <option value="approx. 1/4 acre (~10,000 sq ft)">~1/4 Acre Lot</option>
                      <option value="approx. 1/2 acre (~20,000 sq ft)">~1/2 Acre Lot</option>
                      <option value="1 acre or larger">1+ Acre Estate</option>
                      <option value="Commercial Business Park">Commercial Campus / HOA</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                    {t.lblService}
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa]"
                  >
                    <option>{t.svcMaintenance}</option>
                    <option>{t.svcDesign}</option>
                    <option>{t.svcIrrigation}</option>
                    <option>{t.svcBeds}</option>
                    <option>{t.svcHardscape}</option>
                    <option>{t.svcSnow}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                    {t.lblMsg}
                  </label>
                  <textarea
                    rows={2}
                    placeholder={t.phMsg}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa] resize-none"
                  />
                </div>

                {/* Live Chat Bubble Preview */}
                <div className="bg-[#eef8f1] border border-[#c3e8cd] rounded-xl p-3 text-xs text-[#285937]">
                  <div className="flex items-center gap-1.5 font-bold mb-1 text-[#1e5e35]">
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t.waChatPreview}</span>
                  </div>
                  <p className="line-clamp-2 text-[#3b6e49] font-mono whitespace-pre-line text-[11px]">
                    {previewMessage}
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1eb857] text-white py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>{submitted ? t.formSent : t.formSubmit}</span>
                </button>

                <p className="text-[11px] text-center text-[#5d6a60] flex items-center justify-center gap-1.5 pt-1">
                  <Shield className="w-3 h-3 text-[#2b7a45]" />
                  {t.formNote}
                </p>

                {submitted && (
                  <div className="p-3 bg-[#e8f8ed] border border-[#a6e5b9] rounded-xl text-xs text-[#1e5e35] animate-fade-in">
                    <p className="flex items-center gap-1.5 font-bold mb-1">
                      <CheckCircle2 className="w-4 h-4 text-[#25d366]" />
                      {t.formOk}
                    </p>
                    <a
                      href={lastWaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#14311f] font-bold underline hover:text-[#25d366]"
                    >
                      <span>{t.waOut}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
