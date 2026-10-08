import React from 'react';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const services = [
    {
      id: 'mowing',
      span: 'lg:col-span-8',
      tag: '01',
      title: t.svcMaintenance,
      description: lang === 'pt'
        ? 'Corte regular, delimitação milimétrica das bordas em calçadas e canteiros, desobstrução com soprador profissional e conferência de portões fechados.'
        : 'Weekly or bi-weekly mowing, razor-sharp perimeter edging, blowing of all paved areas, and secure gate lock checks after every single visit.',
      features: lang === 'pt'
        ? ['Equipamentos afiados diariamente', 'Padrão uniforme de corte com listras', 'Remoção limpa de aparas e resíduos']
        : ['Daily-sharpened commercial blades', 'Clean estate striping pattern', 'Zero clippings left in mulch beds'],
      image: '/src/assets/images/hero_lawn_grounds_1791310984617.jpg',
      badge: lang === 'pt' ? 'Serviço Principal' : 'Signature Recurring Service',
    },
    {
      id: 'landscape',
      span: 'lg:col-span-4',
      tag: '02',
      title: t.svcDesign,
      description: lang === 'pt'
        ? 'Projetos completos com plantas aclimatadas, plantio de mudas nobres, terra vegetal adubada e cobertura de canteiros.'
        : 'Architectural planting plans, premium sod installation, native perennials, and specimen tree placement tailored to local soil.',
      features: lang === 'pt'
        ? ['Seleção de espécies resistentes', 'Nivelamento e correção do solo']
        : ['Zone-hardy botanical selection', 'Soil grading and conditioning'],
      badge: lang === 'pt' ? 'Transformação' : 'Design & Build',
    },
    {
      id: 'hardscape',
      span: 'lg:col-span-4',
      tag: '03',
      title: t.svcHardscape,
      description: lang === 'pt'
        ? 'Pátios de pedra, caminhos de lajota, degraus estruturais e fogueiras de chão com drenagem eficiente.'
        : 'Natural flagstone and paver patios, retaining walls, walkways, fire pits, and integrated permeable drainage.',
      features: lang === 'pt'
        ? ['Base de brita compactada', 'Garantia estrutural de 5 anos']
        : ['Compacted aggregate foundation', '5-year structural settling guarantee'],
      image: '/src/assets/images/garden_patio_hardscape_1791310996946.jpg',
      badge: lang === 'pt' ? 'Construção Externa' : 'Masonry & Living',
    },
    {
      id: 'irrigation',
      span: 'lg:col-span-4',
      tag: '04',
      title: t.svcIrrigation,
      description: lang === 'pt'
        ? 'Automatização e regulagem de aspersores, sensores de chuva inteligentes e revisão para evitar desperdício de água.'
        : 'Smart-controller installs, zone pressure diagnostics, drip line additions, and seasonal spring startup and winterization.',
      features: lang === 'pt'
        ? ['Economia de até 35% de água', 'Troca e alinhamento de bicos']
        : ['Up to 35% water conservation', 'Nozzle repairs & head alignment'],
      badge: lang === 'pt' ? 'Eficiência Hídrica' : 'Water Efficiency',
    },
    {
      id: 'beds',
      span: 'lg:col-span-4',
      tag: '05',
      title: t.svcBeds,
      description: lang === 'pt'
        ? 'Capina detalhada, adubação de canteiros, poda ornamental e reposição de casca de pinus ou cobertura orgânica.'
        : 'Trench edging, hand weeding, shrub shaping, deadheading, and nutrient-rich dark hardwood mulch refresh.',
      features: lang === 'pt'
        ? ['Canteiros sempre desenhados', 'Controle manual de ervas']
        : ['Defined deep shovel trench lines', 'Eco-friendly organic weed block'],
      badge: lang === 'pt' ? 'Acabamento Fino' : 'Botanical Care',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-[#e5eae6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2b7a45] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.svcEyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14311f] font-display">
            {t.svcTitle}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5d6a60]">
            {t.svcSub}
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {services.map((svc) => {
            const waQuery = encodeURIComponent(
              lang === 'pt'
                ? `Olá! Gostaria de um orçamento específico para o serviço: ${svc.title}.`
                : `Hi! I would like to get a quote specifically for: ${svc.title}.`
            );

            return (
              <div
                key={svc.id}
                className={`${svc.span} group bg-[#fafbfa] hover:bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8e4] hover:border-[#2b7a45]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold text-[#2b7a45]">
                      {svc.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-[#5d6a60] bg-white px-2.5 py-1 rounded-md border border-[#e5eae6]">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#14311f] font-display mb-3 group-hover:text-[#2b7a45] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-[#5d6a60] leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[#394d40]">
                        <Check className="w-3.5 h-3.5 text-[#2b7a45] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#e8eee9] flex items-center justify-between">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#2b7a45] hover:text-[#14311f] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 fill-[#25d366] text-[#25d366]" />
                    <span>{t.cardMore}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
