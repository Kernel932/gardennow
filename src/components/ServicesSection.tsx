import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { Language } from '../types';
import { translations, WHATSAPP_NUMBER } from '../i18n/translations';

interface ServicesSectionProps {
  lang: Language;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const services = [
    {
      id: 'svc-landscaping',
      span: 'lg:col-span-6',
      tag: '01',
      title: lang === 'pt' ? 'Paisagismo e Reformas Externas' : 'Landscaping & Outdoor Renovations',
      description: lang === 'pt'
        ? 'Planejamento e transformação de áreas externas com seleção de plantas, composição de canteiros, gramados naturais ou sintéticos, pedras decorativas e outros elementos paisagísticos.'
        : 'Comprehensive planning and outdoor space transformation featuring curated plant selection, custom garden beds, natural sod or artificial turf, decorative stones, and tailored landscape elements.',
      features: lang === 'pt'
        ? ['Seleção de espécies resistentes', 'Composição botânica personalizada', 'Acabamento refinado e pedras nobres']
        : ['Curated zone-hardy plantings', 'Custom botanical architecture', 'Decorative stones and sod grooming'],
      badge: lang === 'pt' ? 'Planejamento & Execução' : 'Design & Build',
      image: 'public/Paisagismoereformasexternas.png',
    },
    {
      id: 'svc-pavers',
      span: 'lg:col-span-6',
      tag: '02',
      title: lang === 'pt' ? 'Pavers e Pavimentação' : 'Pavers & Paving',
      description: lang === 'pt'
        ? 'Instalação de pavers em entradas de veículos, calçadas, pátios e áreas de convivência, com composição durável e acabamento profissional.'
        : 'Paver installation for driveways, walkways, patios, and outdoor living areas, featuring durable base construction and professional craftsmanship.',
      features: lang === 'pt'
        ? ['Base compactada de alta resistência', 'Garantia estrutural de assentamento', 'Design personalizado para cada espaço']
        : ['Compacted high-load base', 'Settling warranty protection', 'Custom pattern and border layouts'],
      badge: lang === 'pt' ? 'Pavimentação' : 'Hardscape & Pavers',
      image: 'public/Paverspavimentacao2.png',
    },
    {
      id: 'svc-irrigation',
      span: 'lg:col-span-6',
      tag: '03',
      title: lang === 'pt' ? 'Irrigação Inteligente' : 'Smart Irrigation',
      description: lang === 'pt'
        ? 'Projeto, instalação, atualização e reparo de sistemas conforme o solo, as plantas e a exposição solar, incluindo controladores, sensores de chuva, aspersores, válvulas e irrigação por gotejamento.'
        : 'Design, installation, upgrades, and repair tailored to soil type, plant varieties, and sun exposure—including smart timers, rain sensors, rotary heads, valves, and precision drip irrigation.',
      features: lang === 'pt'
        ? ['Economia de até 35% de água', 'Controladores inteligentes com Wi-Fi', 'Calibração precisa por setor']
        : ['Up to 35% water conservation', 'Smart Wi-Fi controllers & weather sensors', 'Precision zone calibration'],
      badge: lang === 'pt' ? 'Eficiência Hídrica' : 'Smart Irrigation',
      image: 'public/Irrigacaointeligente.png',
    },
    {
      id: 'svc-drainage',
      span: 'lg:col-span-6',
      tag: '04',
      title: lang === 'pt' ? 'Soluções de Drenagem' : 'Drainage Solutions',
      description: lang === 'pt'
        ? 'Soluções subterrâneas e superficiais para controlar alagamentos e erosão, incluindo drenos franceses, tubulações, caixas coletoras, canaletas, poços de infiltração, drenagem de telhados e correção de áreas alagadas.'
        : 'Subsurface and surface solutions to eliminate flooding and erosion, including French drains, piping, catch basins, channel drains, dry wells, roof drainage, and flooded zone grading.',
      features: lang === 'pt'
        ? ['Drenos franceses e caixas coletoras', 'Drenagem de calhas e telhados', 'Eliminação de pontos de alagamento']
        : ['French drains & catch basins', 'Downspout redirection', 'Standing water elimination'],
      badge: lang === 'pt' ? 'Proteção de Solo' : 'Drainage Engineering',
      image: 'public/Solucoesdedrenagem.png',
    },
    {
      id: 'svc-turf',
      span: 'lg:col-span-6',
      tag: '05',
      title: lang === 'pt' ? 'Instalação de Grama Sintética' : 'Synthetic Turf Installation',
      description: lang === 'pt'
        ? 'Instalação profissional para jardins, quintais, piscinas, condomínios, áreas para animais de estimação e espaços esportivos, com beleza, praticidade e baixa manutenção.'
        : 'Professional installation for lawns, backyards, pool surrounds, HOAs, pet areas, and sports spaces, delivering beauty, convenience, and low maintenance.',
      features: lang === 'pt'
        ? ['Gramado verde o ano todo', 'Drenagem ultra-rápida e sem lama', 'Seguro para crianças e pets']
        : ['Lush evergreen look year-round', 'Rapid permeable drainage', 'Pet & child friendly turf'],
      badge: lang === 'pt' ? 'Zero Manutenção' : 'Synthetic Turf',
      image: 'public/gramasintetica.png',
    },
    {
      id: 'svc-structures',
      span: 'lg:col-span-6',
      tag: '06',
      title: lang === 'pt' ? 'Telas, Calhas e Estruturas Externas' : 'Screens, Gutters & Outdoor Structures',
      description: lang === 'pt'
        ? 'Instalação e melhorias em áreas teladas, além de calhas e estruturas para direcionar a água da chuva e proporcionar mais conforto e proteção.'
        : 'Installation and improvements for screen enclosures, plus gutters and structures to properly divert rainwater and provide greater comfort and protection.',
      features: lang === 'pt'
        ? ['Proteção contra insetos e folhas', 'Calhas contínuas sem emendas', 'Mais conforto na área externa']
        : ['Screen enclosure maintenance', 'Seamless gutter installation', 'Weather & debris protection'],
      badge: lang === 'pt' ? 'Estruturas' : 'Screens & Gutters',
      image: 'public/telascalhas.png',
    },
    {
      id: 'svc-lighting',
      span: 'lg:col-span-6',
      tag: '07',
      title: lang === 'pt' ? 'Iluminação de Jardim e Destaque' : 'Landscape & Accent Lighting',
      description: lang === 'pt'
        ? 'Projetos de iluminação externa para valorizar plantas, caminhos, entradas e áreas de convivência, unindo segurança, funcionalidade e beleza.'
        : 'Custom outdoor lighting designs to highlight plants, walkways, entryways, and gathering areas—combining safety, functionality, and nighttime elegance.',
      features: lang === 'pt'
        ? ['LEDs de baixo consumo e longa vida útil', 'Destaque arquitetônico e botânico', 'Maior segurança para sua família']
        : ['Low-voltage architectural LEDs', 'Pathway & botanical uplighting', 'Enhanced property security'],
      badge: lang === 'pt' ? 'Iluminação' : 'Accent Lighting',
      image: 'public/Iluminacaom.png',
    },
    {
      id: 'svc-retaining-walls',
      span: 'lg:col-span-6',
      tag: '08',
      title: lang === 'pt' ? 'Muros de Contenção' : 'Retaining Walls',
      description: lang === 'pt'
        ? 'Construção de estruturas para estabilizar o terreno, controlar desníveis e aproveitar melhor os espaços externos.'
        : 'Engineered wall construction to stabilize soil, manage grade changes, prevent erosion, and maximize usable outdoor living spaces.',
      features: lang === 'pt'
        ? ['Blocos e pedras de alta durabilidade', 'Nivelamento e aproveitamento de espaço', 'Drenagem integrada para alívio de pressão']
        : ['Engineered concrete & natural stone', 'Slope stabilization & terracing', 'Integrated weep hole drainage'],
      badge: lang === 'pt' ? 'Estrutural' : 'Retaining Walls',
      image: 'public/muroconten.png',
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#E8EFDF] border-b border-[#d4decb]" style={{ backgroundColor: '#E8EFDF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14311f] font-display">
            {t.svcTitle}
          </h2>
          <p id="about" className="mt-4 text-base sm:text-lg text-[#5d6a60] scroll-mt-28">
            {t.svcSub}
          </p>
          <h3 id="services-solutions" className="mt-8 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#14311f] font-display scroll-mt-28">
            {t.svcSolutionsTitle}
          </h3>
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
                id={svc.id}
                className={`${svc.span} scroll-mt-28 group bg-[#fafbfa] hover:bg-white rounded-3xl p-6 sm:p-8 border border-[#e2e8e4] hover:border-[#2b7a45]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
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
