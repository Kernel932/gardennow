import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface WhatsAppFabProps {
  lang: Language;
}

export const WhatsAppFab: React.FC<WhatsAppFabProps> = ({ lang }) => {
  const t = translations[lang];
  const [modalOpen, setModalOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');
  const [preset, setPreset] = useState<'quote' | 'mowing' | 'urgent'>('quote');

  const presets = {
    quote: lang === 'pt'
      ? 'Olá! Gostaria de agendar uma avaliação gratuita para o meu terreno.'
      : 'Hello! I would like to schedule a free on-site estimate for my property.',
    mowing: lang === 'pt'
      ? 'Olá! Gostaria de saber os valores para corte de grama semanal/quinzenal.'
      : 'Hi! I would like to inquire about pricing and schedule for recurring lawn mowing.',
    urgent: lang === 'pt'
      ? 'Olá! Preciso de uma limpeza e recuperação urgente para o meu jardim nesta semana.'
      : 'Hi! I need an urgent one-time clean-up and landscaping reset this week.',
  };

  const currentMessage = customMsg || presets[preset];

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(currentMessage)}`;
    try {
      window.open(url, '_blank');
    } catch {
      // Fallback
    }
    setModalOpen(false);
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed right-5 bottom-5 z-50 flex items-center gap-3">
        {/* Tooltip on Desktop */}
        <div className="hidden sm:block bg-[#14311f] text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-lg border border-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          {t.fabTip}
        </div>

        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="relative w-14 h-14 rounded-full bg-[#25d366] hover:bg-[#1eb857] text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all animate-wa-pulse focus:outline-none focus:ring-4 focus:ring-[#25d366]/40 cursor-pointer"
          aria-label={t.fabTip}
        >
          <MessageCircle className="w-7 h-7 fill-white" />
        </button>
      </div>

      {/* WhatsApp Quick Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl border border-slate-200 relative animate-scale-up">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#25d366] text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-5 h-5 fill-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#14311f] font-display">
                  {t.waModalTitle}
                </h3>
                <p className="text-xs text-[#5d6a60]">
                  {t.waModalSub}
                </p>
              </div>
            </div>

            {/* Presets */}
            <div className="space-y-2 mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5d6a60]">
                {lang === 'pt' ? 'Escolha uma mensagem rápida:' : 'Quick message template:'}
              </span>
              <div className="flex flex-col gap-1.5">
                <button
                  type="button"
                  onClick={() => { setPreset('quote'); setCustomMsg(''); }}
                  className={`text-left text-xs p-2.5 rounded-xl border transition-all ${
                    preset === 'quote' && !customMsg
                      ? 'border-[#2b7a45] bg-[#edf6ef] text-[#14311f] font-semibold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {presets.quote}
                </button>
                <button
                  type="button"
                  onClick={() => { setPreset('mowing'); setCustomMsg(''); }}
                  className={`text-left text-xs p-2.5 rounded-xl border transition-all ${
                    preset === 'mowing' && !customMsg
                      ? 'border-[#2b7a45] bg-[#edf6ef] text-[#14311f] font-semibold'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  {presets.mowing}
                </button>
              </div>
            </div>

            <form onSubmit={handleSend} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-[#5d6a60] mb-1">
                  {lang === 'pt' ? 'Ou escreva sua mensagem personalizada:' : 'Or customize your note:'}
                </label>
                <textarea
                  rows={3}
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  placeholder={presets[preset]}
                  className="w-full text-xs p-3 rounded-xl border border-slate-200 focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 bg-slate-50 resize-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#1eb857] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.waModalSend}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="py-3 px-4 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  {t.waModalClose}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
