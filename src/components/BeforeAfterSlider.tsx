import React, { useState, useRef, useCallback } from 'react';
import { SlidersHorizontal, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface BeforeAfterSliderProps {
  lang: Language;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeCase, setActiveCase] = useState<0 | 1>(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const cases = [
    {
      title: t.sliderCase1Title,
      description: t.sliderCase1Desc,
      beforeImg: '/src/assets/images/garden_overgrown_lawn_1791311016074.jpg',
      afterImg: '/src/assets/images/hero_lawn_grounds_1791310984617.jpg',
      highlightBadge: lang === 'pt' ? 'Recuperação de Gramado' : 'Turf Transformation',
    },
    {
      title: t.sliderCase2Title,
      description: t.sliderCase2Desc,
      beforeImg: '/src/assets/images/garden_overgrown_lawn_1791311016074.jpg',
      afterImg: '/src/assets/images/garden_patio_hardscape_1791310996946.jpg',
      highlightBadge: lang === 'pt' ? 'Área Gourmet e Pedras' : 'Hardscape Living Space',
    },
  ];

  const current = cases[activeCase];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="transformations" className="py-20 bg-[#E8EFDF] border-b border-[#d4decb]" style={{ backgroundColor: '#E8EFDF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2b7a45] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.beforeAfterEyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14311f] font-display">
            {t.beforeAfterTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5d6a60]">
            {t.beforeAfterSub}
          </p>

          {/* Project Switcher Tabs */}
          <div className="inline-flex p-1.5 bg-[#f0f4f1] rounded-2xl mt-6 border border-[#dce5df] max-w-md w-full">
            {cases.map((c, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveCase(idx as 0 | 1);
                  setSliderPosition(50);
                }}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeCase === idx
                    ? 'bg-white text-[#14311f] shadow-sm'
                    : 'text-[#4e6757] hover:text-[#14311f]'
                }`}
              >
                {c.highlightBadge}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Window */}
        <div className="max-w-4xl mx-auto bg-[#fafbfa] rounded-3xl p-4 sm:p-6 border border-[#e2e8e4] shadow-xl">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[480px] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-inner"
          >
            {/* After Image (Background layer) */}
            <img
              src={current.afterImg}
              alt="After landscape transformation"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />

            {/* Before Image (Clipped layer) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={current.beforeImg}
                alt="Before landscape transformation"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: containerRef.current?.clientWidth || '100%' }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl transition-all"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#14311f] text-white flex items-center justify-center shadow-xl border-2 border-white">
                <SlidersHorizontal className="w-4 h-4 text-[#a8d94b]" />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg border border-white/20">
              {t.beforeLabel}
            </div>
            <div className="absolute top-4 right-4 bg-[#14311f]/90 backdrop-blur-md text-[#a8d94b] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#a8d94b]/30">
              {t.afterLabel}
            </div>
          </div>

          {/* Project Details Footer */}
          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-[#e2e8e4]">
            <div>
              <h4 className="text-lg font-bold text-[#14311f] font-display">
                {current.title}
              </h4>
              <p className="text-sm text-[#5d6a60]">
                {current.description}
              </p>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                lang === 'pt'
                  ? `Olá! Vi a transformação "${current.title}" no site e gostaria de fazer algo parecido no meu terreno.`
                  : `Hi! I saw the "${current.title}" transformation on your site and want to discuss similar work for my yard.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#1eb857] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-sm transition-all hover:-translate-y-0.5 shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>{lang === 'pt' ? 'Pedir Projeto Igual' : 'Get Similar Results'}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
