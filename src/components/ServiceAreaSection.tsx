import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2 } from 'lucide-react';
import { Language, TownRoute } from '../types';
import { translations } from '../i18n/translations';

interface ServiceAreaSectionProps {
  lang: Language;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ lang }) => {
  const t = translations[lang];

  const towns: TownRoute[] = [
    { name: 'Ashford', activeDays: 'Tuesday & Friday', isPopular: true, status: 'active' },
    { name: 'Bexley', activeDays: 'Monday & Thursday', isPopular: true, status: 'active' },
    { name: 'Cedar Park', activeDays: 'Wednesday & Saturday', status: 'active' },
    { name: 'Dover Heights', activeDays: 'Tuesday & Friday', status: 'active' },
    { name: 'Eastvale', activeDays: 'Monday & Thursday', status: 'active' },
    { name: 'Fairmount', activeDays: 'Wednesday & Friday', status: 'active' },
    { name: 'Glenwood', activeDays: 'Daily Metro Route', isPopular: true, status: 'active' },
    { name: 'Harborview', activeDays: 'Tuesday & Thursday', status: 'active' },
    { name: 'Ironwood', activeDays: 'Monday & Wednesday', status: 'active' },
    { name: 'Kingsport', activeDays: 'Bi-Weekly Route', status: 'expanding' },
    { name: 'Lakeside', activeDays: 'Tuesday & Friday', isPopular: true, status: 'active' },
    { name: 'Millbrook', activeDays: 'Weekly Regional Route', status: 'expanding' },
  ];

  const [search, setSearch] = useState('');
  const [selectedTown, setSelectedTown] = useState<TownRoute>(towns[0]);

  const filteredTowns = towns.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="areas" className="py-20 bg-[#E8EFDF] border-b border-[#d4decb]" style={{ backgroundColor: '#E8EFDF' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Description & Search */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#2b7a45] mb-3">
                <MapPin className="w-3.5 h-3.5" />
                <span>{t.areaEyebrow}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#14311f] font-display">
                {t.areaTitle}
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5d6a60]">
                {t.areaSub}
              </p>
            </div>

            {/* Quick Town Search Input */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-[#7b8c80] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t.areaSearchPlaceholder}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#d8deda] focus:border-[#2b7a45] focus:ring-2 focus:ring-[#2b7a45]/20 text-sm bg-[#fafbfa] transition-all"
              />
            </div>

            {/* Selected Town Route Status Card */}
            <div className="bg-[#edf6ef] border border-[#c6dfcb] rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-[#14311f] text-lg font-display">
                  <MapPin className="w-5 h-5 text-[#2b7a45]" />
                  <span>{selectedTown.name}</span>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-white text-[#2b7a45] border border-[#b4d5bb]">
                  {selectedTown.status === 'active' ? 'Active Route' : 'Expanding Route'}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#3b5242]">
                {selectedTown.status === 'active' ? t.areaSelectedActive : t.areaSelectedWaitlist}
              </p>

              <div className="text-xs text-[#2b7a45] font-semibold">
                Scheduled Crew Service: <span className="font-bold">{selectedTown.activeDays}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Towns Grid */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#f1f7f2] to-[#fafdfa] border border-[#d8e6db] rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#48604f] mb-4">
              {lang === 'pt' ? 'Clique para inspecionar a rota' : 'Click to inspect route schedule'}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {filteredTowns.map((town) => {
                const isSelected = selectedTown.name === town.name;
                return (
                  <button
                    key={town.name}
                    type="button"
                    onClick={() => setSelectedTown(town)}
                    className={`py-3 px-3 rounded-xl text-xs font-bold transition-all text-center flex flex-col items-center justify-center gap-1 ${
                      isSelected
                        ? 'bg-[#2b7a45] text-white shadow-md scale-[1.02]'
                        : town.status === 'expanding'
                        ? 'bg-white/70 text-[#718778] border border-[#e2ece4] hover:bg-white'
                        : 'bg-white text-[#2b4433] border border-[#d8e4db] hover:border-[#2b7a45] hover:bg-[#f4f9f5]'
                    }`}
                  >
                    <span>{town.name}</span>
                    <span className={`text-[9px] font-normal ${isSelected ? 'text-[#cfe4d5]' : 'text-[#849a8b]'}`}>
                      {town.activeDays.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {filteredTowns.length === 0 && (
              <div className="py-8 text-center text-xs text-[#5d6a60]">
                {lang === 'pt'
                  ? 'Cidade não listada? Atendemos sob consulta pelo WhatsApp.'
                  : 'Town not listed? We regularly expand custom routes upon WhatsApp request.'}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
