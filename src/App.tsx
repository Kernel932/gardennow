/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Language } from './types';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { QuoteCalculator } from './components/QuoteCalculator';
import { ServicesSection } from './components/ServicesSection';
import { SegmentsSection } from './components/SegmentsSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { WhatsAppFab } from './components/WhatsAppFab';

export default function App() {
  const [lang, setLang] = useState<Language>('pt'); // Defaulting to Portuguese as requested in prompt, easily switched to English

  return (
    <div className="min-h-screen flex flex-col bg-[#fafaf7] text-[#1c241f] selection:bg-[#a8d94b]/30 selection:text-[#14311f]">
      {/* Top Bar Reassurance & Phone link */}
      <TopBar lang={lang} onLanguageChange={setLang} />

      {/* Main Top Bar Contract Navigation */}
      <Navbar lang={lang} onOpenWhatsAppModal={() => {}} />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 1. Proposition & Focal Hero with Lead WhatsApp Form */}
        <Hero lang={lang} />

        {/* 3. Proven Craftsmanship: Interactive Before & After Slider */}
        <BeforeAfterSlider lang={lang} />

        {/* 4. Interactive Instant Quote & Price Estimator */}
        <QuoteCalculator lang={lang} />

        {/* 5. Core Services Bento Grid */}
        <ServicesSection lang={lang} />

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
