import React from 'react';
import { BarChart3, Target, TrendingUp, DollarSign, Lightbulb, ShieldCheck, ArrowRightLeft } from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  const cards = [
    {
      icon: BarChart3,
      title: "تحليل نشاطك التجاري",
      desc: "نحلل نقاط القوة في خدماتك وسلوك عملائك الحاليين لبناء أساس متين لأي حملة إعلانية.",
      color: "from-[#FFF2EC] to-[#FFE5D8]",
      iconColor: "text-[#E86A33]",
      borderColor: "border-[#E86A33]/20"
    },
    {
      icon: Target,
      title: "استهداف أكثر دقة",
      desc: "نصل إلى الفئات الأكثر استعداداً للشراء والتعامل معك، بدلاً من إهدار الميزانية على نقرات غير مجدية.",
      color: "from-[#ECFDF5] to-[#D1FAE5]",
      iconColor: "text-[#10B981]",
      borderColor: "border-[#10B981]/25"
    },
    {
      icon: TrendingUp,
      title: "تحسين أداء الحملات",
      desc: "متابعة يومية دقيقة وتحسين مستمر للزوايا الإعلانية والنصوص الترويجية لرفع معدل التحويل.",
      color: "from-[#FFF2EC] to-[#FFE5D8]",
      iconColor: "text-[#E86A33]",
      borderColor: "border-[#E86A33]/20"
    },
    {
      icon: DollarSign,
      title: "خفض تكلفة الحصول على العميل",
      desc: "رفع جودة العائد الإعلاني وإدارة الميزانيات بكفاءة لتقليل التكلفة لكل عميل محتمل مؤهل.",
      color: "from-[#ECFDF5] to-[#D1FAE5]",
      iconColor: "text-[#10B981]",
      borderColor: "border-[#10B981]/25"
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-[#E86A33] via-[#10B981] to-[#1E3A2B]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E3A2B]/5 text-[#1E3A2B] font-bold text-xs mb-4">
            <Lightbulb className="w-3.5 h-3.5 text-[#E86A33]" />
            <span>لماذا BKDEMYA؟</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-6 font-['Tajawal'] leading-tight">
            نجاح حملتك يبدأ قبل إطلاق الإعلان.
          </h2>

          <div className="space-y-3 text-base sm:text-lg text-[#475569] leading-relaxed">
            <p>
              الكثير من الشركات تعتقد أن المشكلة في الميزانية أو في تصميم الإعلان، بينما السبب الحقيقي غالباً يكون في غياب استراتيجية واضحة.
            </p>
            <p className="text-sm sm:text-base text-[#64748B]">
              في <strong className="text-[#E86A33]">BKDEMYA</strong> نبدأ أولاً بفهم نشاطك التجاري، وتحليل جمهورك، ثم نبني استراتيجية تساعدك على الوصول إلى العملاء الأكثر اهتماماً بخدماتك.
            </p>
          </div>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className={`group relative p-6 sm:p-7 rounded-2xl bg-white border ${card.borderColor} shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Background soft glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 bg-gradient-to-br from-white via-[#FAF9F6] to-[#FFF2EC]/30"></div>

                <div>
                  {/* Card Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} ${card.iconColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xs`}>
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3 font-['Tajawal'] group-hover:text-[#E86A33] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom subtle bar */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#1E3A2B]/70">
                  <span>منهجية BKDEMYA</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
