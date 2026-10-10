import React, { useState } from 'react';
import { MessageCircle, Shield, CheckCircle2 } from 'lucide-react';
import { Language, QuoteFormData } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface QuoteSectionProps {
  lang: Language;
}

export const QuoteSection: React.FC<QuoteSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    phone: '',
    email: '',
    propertyType: 'residential',
    service: 'mowing',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const previewMessage =
    lang === 'pt'
      ? `Olá! Gostaria de um orçamento gratuito para meu imóvel.\n• Nome: ${formData.name || '(Seu nome)'}\n• Imóvel: ${formData.propertyType === 'residential' ? 'Residencial' : 'Comercial'}\n• Serviço: ${formData.service}\n• Telefone: ${formData.phone || '(Seu telefone)'}\n${formData.notes ? `• Detalhes: ${formData.notes}` : ''}`
      : `Hello! I would like a free estimate for my property.\n• Name: ${formData.name || '(Your name)'}\n• Property: ${formData.propertyType === 'residential' ? 'Residential' : 'Commercial'}\n• Service: ${formData.service}\n• Phone: ${formData.phone || '(Your phone)'}\n${formData.notes ? `• Notes: ${formData.notes}` : ''}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const textPayload = encodeURIComponent(previewMessage);
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${textPayload}`;
    window.location.href = waUrl;
  };

  return (
    <section id="quote-section" className="py-16 bg-[#E8EFDF] border-b border-[#d4decb]" style={{ backgroundColor: '#E8EFDF' }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div id="quote" className="bg-white text-[#1c241f] rounded-3xl p-6 sm:p-10 shadow-lg border border-[#d4decb] relative">
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-12 h-12 rounded-full bg-[#25d366]/15 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 text-[#25d366] fill-[#25d366]" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold text-[#14311f] font-display leading-tight">
                {t.quoteCardTitle}
              </h3>
              <p className="text-sm text-[#5d6a60]">
                {t.quoteCardHint}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                {t.lblEmail}
              </label>
              <input
                type="email"
                placeholder={t.phEmail}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa] transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                  {t.lblProp}
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      propertyType: e.target.value as 'residential' | 'commercial',
                    })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa]"
                >
                  <option value="residential">{t.optResidential}</option>
                  <option value="commercial">{t.optCommercial}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-1">
                  {t.lblService}
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
              id="submitBtn"
              style={{ backgroundColor: '#007054' }}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#007054] hover:bg-[#005a43] text-white py-3.5 rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
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
                  <CheckCircle2 className="w-4 h-4 text-[#1e5e35]" />
                  <span>{t.formOk}</span>
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(previewMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-bold text-[#1e5e35] hover:text-[#144224]"
                >
                  {t.waOut}
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
