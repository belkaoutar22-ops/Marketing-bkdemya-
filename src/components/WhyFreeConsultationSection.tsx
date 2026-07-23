import React from 'react';
import { ShieldAlert, HeartHandshake, Eye, Check } from 'lucide-react';

export const WhyFreeConsultationSection: React.FC = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#1E3A2B] to-[#14281E] text-white shadow-2xl relative overflow-hidden">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#E86A33]/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 text-center sm:text-right">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-[#10B981] font-semibold text-xs mb-6 backdrop-blur-sm border border-white/10">
              <HeartHandshake className="w-4 h-4" />
              <span>مبدأ الشفافية والشراكة في BKDEMYA</span>
            </div>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 font-['Tajawal'] text-white">
              لماذا نبدأ باستشارة مجانية؟
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
              <p>
                لأننا نؤمن أن لكل نشاط احتياجات مختلفة.
              </p>
              <p>
                لهذا لا نقدم حلولاً جاهزة للجميع، بل نبدأ بفهم طبيعة نشاطك، ثم نقترح ما يناسبه.
              </p>
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-[#10B981]/40 text-emerald-300 font-bold text-sm sm:text-base flex items-center gap-3 mt-4">
                <Eye className="w-5 h-5 shrink-0 text-[#10B981]" />
                <span>
                  وإذا رأينا أن الإعلانات ليست الخيار المناسب في هذه المرحلة، سنخبرك بذلك بكل شفافية.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
