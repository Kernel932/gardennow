import React, { useState } from 'react';
import { Calculator, Check, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface QuoteCalculatorProps {
  lang: Language;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ lang }) => {
  const t = translations[lang];

  const [lotSizeIndex, setLotSizeIndex] = useState(1); // 0: Small, 1: 1/4 acre, 2: 1/2 acre, 3: 1+ acre
  const [frequency, setFrequency] = useState<'weekly' | 'biweekly' | 'onetime'>('weekly');
  const [addonMulch, setAddonMulch] = useState(false);
  const [addonAeration, setAddonAeration] = useState(false);
  const [addonIrrigation, setAddonIrrigation] = useState(false);

  const lotSizes = [
    { label: lang === 'pt' ? 'Pequeno / Quintal (~300m²)' : 'Townhouse / Small (~3,000 sq ft)', basePrice: 45, areaText: '3,000 sq ft' },
    { label: lang === 'pt' ? 'Típico (~1.000m² - 1/4 acre)' : 'Suburban (~1/4 acre lot)', basePrice: 65, areaText: '1/4 acre' },
    { label: lang === 'pt' ? 'Médio (~2.000m² - 1/2 acre)' : 'Expansive (~1/2 acre lot)', basePrice: 95, areaText: '1/2 acre' },
    { label: lang === 'pt' ? 'Grande (~4.000m²+ - 1+ acre)' : 'Estate (1+ acre property)', basePrice: 155, areaText: '1+ acre' },
  ];

  // Frequency multipliers
  const freqMultipliers = {
    weekly: 1.0,
    biweekly: 1.25, // More work per cut
    onetime: 2.8,   // Deep reset rate
  };

  const selectedLot = lotSizes[lotSizeIndex];
  let calculatedBase = selectedLot.basePrice * freqMultipliers[frequency];

  let addonsTotal = 0;
  if (addonMulch) addonsTotal += 35;
  if (addonAeration) addonsTotal += 45;
  if (addonIrrigation) addonsTotal += 30;

  const lowEstimate = Math.round(calculatedBase + addonsTotal * 0.85);
  const highEstimate = Math.round(calculatedBase * 1.2 + addonsTotal * 1.15);

  const buildCalculatorWhatsAppMessage = () => {
    const isPt = lang === 'pt';
    const freqLabels = {
      weekly: t.calcFreqWeekly,
      biweekly: t.calcFreqBiweekly,
      onetime: t.calcFreqOneTime,
    };

    const activeAddons = [
      addonMulch ? t.calcAddon1 : null,
      addonAeration ? t.calcAddon2 : null,
      addonIrrigation ? t.calcAddon3 : null,
    ].filter(Boolean);

    const lines = [
      isPt ? '🌿 *Estimativa de Orçamento Calculada no Site*' : '🌿 *Website Instant Quote Estimate*',
      '',
      `${t.calcLotLabel}: ${selectedLot.label}`,
      `${t.calcFreqLabel}: ${freqLabels[frequency]}`,
      activeAddons.length > 0 ? `${t.calcAddonsLabel}: ${activeAddons.join(', ')}` : '',
      `${t.calcEstimatedTotal}: $${lowEstimate} – $${highEstimate}`,
      '',
      isPt
        ? 'Olá Garden Now! Fiz essa simulação no site e gostaria de confirmar a agenda para a minha propriedade.'
        : 'Hi Garden Now! I calculated this estimate on your website and would like to lock in this service opening.'
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  };

  return (
    <section id="calculator" className="py-20 bg-[#fafaf7] border-b border-[#e5eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2b7a45] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calcEyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14311f] font-display">
            {t.calcTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5d6a60]">
            {t.calcSub}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#e5eae6] shadow-sm space-y-7">
            {/* 1. Property Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-3">
                {t.calcLotLabel}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {lotSizes.map((lot, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setLotSizeIndex(idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      lotSizeIndex === idx
                        ? 'border-[#2b7a45] bg-[#edf6ef] text-[#14311f] ring-2 ring-[#2b7a45]/20 font-bold'
                        : 'border-[#e0e6e1] bg-white text-[#41544a] hover:border-[#b9cdc0]'
                    }`}
                  >
                    <span className="block text-xs font-semibold">{lot.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Frequency */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-3">
                {t.calcFreqLabel}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setFrequency('weekly')}
                  className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    frequency === 'weekly'
                      ? 'border-[#2b7a45] bg-[#14311f] text-white shadow-sm'
                      : 'border-[#e0e6e1] bg-white text-[#41544a] hover:bg-[#f7faf8]'
                  }`}
                >
                  {t.calcFreqWeekly.split(' ')[0]}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('biweekly')}
                  className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    frequency === 'biweekly'
                      ? 'border-[#2b7a45] bg-[#14311f] text-white shadow-sm'
                      : 'border-[#e0e6e1] bg-white text-[#41544a] hover:bg-[#f7faf8]'
                  }`}
                >
                  {t.calcFreqBiweekly}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency('onetime')}
                  className={`py-2.5 px-3 rounded-xl border text-center text-xs font-bold transition-all ${
                    frequency === 'onetime'
                      ? 'border-[#2b7a45] bg-[#14311f] text-white shadow-sm'
                      : 'border-[#e0e6e1] bg-white text-[#41544a] hover:bg-[#f7faf8]'
                  }`}
                >
                  {t.calcFreqOneTime.split(' ')[0]}
                </button>
              </div>
            </div>

            {/* 3. Add-on Services */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#48604f] mb-3">
                {t.calcAddonsLabel}
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center gap-3 p-3 rounded-xl border border-[#e0e6e1] hover:bg-[#f9fbf9] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={addonMulch}
                    onChange={(e) => setAddonMulch(e.target.checked)}
                    className="w-4 h-4 rounded text-[#2b7a45] focus:ring-[#2b7a45]"
                  />
                  <span className="text-xs sm:text-sm font-medium text-[#2d3f33]">
                    {t.calcAddon1}
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-[#e0e6e1] hover:bg-[#f9fbf9] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={addonAeration}
                    onChange={(e) => setAddonAeration(e.target.checked)}
                    className="w-4 h-4 rounded text-[#2b7a45] focus:ring-[#2b7a45]"
                  />
                  <span className="text-xs sm:text-sm font-medium text-[#2d3f33]">
                    {t.calcAddon2}
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl border border-[#e0e6e1] hover:bg-[#f9fbf9] cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={addonIrrigation}
                    onChange={(e) => setAddonIrrigation(e.target.checked)}
                    className="w-4 h-4 rounded text-[#2b7a45] focus:ring-[#2b7a45]"
                  />
                  <span className="text-xs sm:text-sm font-medium text-[#2d3f33]">
                    {t.calcAddon3}
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Pricing Outcome Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#14311f] to-[#1e5e35] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/10 sticky top-28">
            <span className="inline-block text-xs uppercase font-extrabold tracking-widest text-[#a8d94b] mb-2">
              {t.calcEstimatedTotal}
            </span>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl sm:text-5xl font-extrabold font-display text-white tabular-nums">
                ${lowEstimate} – ${highEstimate}
              </span>
              <span className="text-xs text-[#cfe4d5]">
                {frequency === 'weekly' ? '/ visit' : frequency === 'biweekly' ? '/ visit' : '/ one-time job'}
              </span>
            </div>

            <p className="text-xs text-[#a9c6b3] leading-relaxed mb-6">
              {t.calcDisclaimer}
            </p>

            <div className="border-t border-white/15 pt-5 mb-7 space-y-2.5 text-xs text-[#dbece0]">
              <div className="flex items-center justify-between">
                <span>Lot size profile</span>
                <span className="font-bold text-white">{selectedLot.areaText}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Frequency schedule</span>
                <span className="font-bold text-white capitalize">{frequency}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Selected add-ons</span>
                <span className="font-bold text-white">
                  {[addonMulch, addonAeration, addonIrrigation].filter(Boolean).length} included
                </span>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildCalculatorWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1eb857] text-white py-3.5 px-4 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{t.calcCta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
