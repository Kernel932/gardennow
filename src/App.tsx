/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ServicesSection } from './components/ServicesSection';
import { QuoteSection } from './components/QuoteSection';
import { SegmentsSection } from './components/SegmentsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';

export default function App() {
  const [lang, setLang] = useState<Language>('pt'); // Defaulting to Portuguese as requested in prompt, easily switched to English

  return (
    <div className="min-h-screen flex flex-col bg-[#E8EFDF] text-[#1c241f] selection:bg-[#a8d94b]/30 selection:text-[#14311f]">
      {/* Top Bar Reassurance & Phone link */}
      <TopBar lang={lang} onLanguageChange={setLang} />

      {/* Main Top Bar Contract Navigation */}
      <Navbar lang={lang} onOpenWhatsAppModal={() => {}} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Proposition & Focal Hero with Lead WhatsApp Form */}
        <Hero lang={lang} />

        {/* Core Services Bento Grid */}
        <ServicesSection lang={lang} />

        {/* Fixed Quote Form Section (placed after Services component) */}
        <QuoteSection lang={lang} />

        {/* Proven Craftsmanship: Interactive Before & After Slider */}
        <BeforeAfterSlider lang={lang} />

        {/* 6. Residential vs Commercial Plans */}
        <SegmentsSection lang={lang} />

        {/* 7. Interactive Service Area Coverage & Schedule */}
        <ServiceAreaSection lang={lang} />

        {/* 8. Attributable Reviews & Neighbor Stories */}
        <TestimonialsSection lang={lang} />

        {/* 9. Straightforward FAQ Accordion */}
        <FaqSection lang={lang} />
      </main>

      {/* Quiet Footer with Navigation Mirror & Legal */}
      <Footer lang={lang} />

      {/* Pulsing Floating WhatsApp Widget with Quick Drawer */}
      <WhatsAppFab lang={lang} />
    </div>
  );
}
