import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { WhyUsSection } from './components/WhyUsSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { TargetAudienceSection } from './components/TargetAudienceSection';
import { ConsultationPerksSection } from './components/ConsultationPerksSection';
import { WhyFreeConsultationSection } from './components/WhyFreeConsultationSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';
import { PayhipEmbedModal } from './components/PayhipEmbedModal';

export default function App() {
  const [payhipModalOpen, setPayhipModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1E293B] font-['Readex_Pro'] selection:bg-[#E86A33] selection:text-white">
      {/* Sticky Header */}
      <Header onOpenPayhipModal={() => setPayhipModalOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Why BKDEMYA */}
        <WhyUsSection />

        {/* Section 3: How We Work */}
        <HowWeWorkSection />

        {/* Section 4: Target Audience */}
        <TargetAudienceSection />

        {/* Section 5: What You Get in Free Consultation */}
        <ConsultationPerksSection />

        {/* Section 6: Why Start with Free Consultation */}
        <WhyFreeConsultationSection />

        {/* Section 7: Final High-Converting CTA */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer onOpenPayhipModal={() => setPayhipModalOpen(true)} />

      {/* Scroll Floating Booking Bar */}
      <StickyBottomBar />

      {/* Payhip Embed Code Modal */}
      <PayhipEmbedModal
        isOpen={payhipModalOpen}
        onClose={() => setPayhipModalOpen(false)}
      />
    </div>
  );
}

