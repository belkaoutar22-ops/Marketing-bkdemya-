import React from 'react';
import { Search, Compass, Rocket, Sliders, Check } from 'lucide-react';

export const HowWeWorkSection: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "تحليل نشاطك",
      desc: "نتعرف على خدماتك، جمهورك، وأهدافك التجارية قبل البدء بأي حملة.",
      icon: Search,
      badge: "الخطوة الأولى"
    },
    {
      num: "2",
      title: "إعداد الاستراتيجية",
      desc: "نضع خطة إعلانية تناسب نشاطك وميزانيتك وأهدافك.",
      icon: Compass,
      badge: "التخطيط المالي والإعلاني"
    },
    {
      num: "3",
      title: "إطلاق الحملات",
      desc: "نطلق الحملات الإعلانية وفق أفضل الممارسات مع متابعة الأداء منذ اليوم الأول.",
      icon: Rocket,
      badge: "التنفيذ والمتابعة"
    },
    {
      num: "4",
      title: "التحسين المستمر",
      desc: "نعتمد على البيانات الفعلية لتحسين النتائج، وزيادة جودة العملاء المحتملين مع مرور الوقت.",
      icon: Sliders,
      badge: "تنمية النتائج المستدامة"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2EC] text-[#E86A33] font-bold text-xs mb-3 border border-[#E86A33]/20">
            <span>كيف نعمل؟</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4 font-['Tajawal']">
            خطوات واضحة... ونتائج قابلة للقياس.
          </h2>

          <p className="text-[#64748B] text-base">
            منهجية عمل منظمة تضمن أعلى كفاءة لاستثمارك الإعلاني وتجنبك التخبط العشوائي.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-[#E86A33] font-['Tajawal'] bg-[#FFF2EC] w-12 h-12 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E86A33] group-hover:text-white transition-all duration-300">
                      0{step.num}
                    </span>
                    <span className="text-[11px] font-semibold text-[#1E3A2B] bg-[#ECFDF5] px-2.5 py-1 rounded-full border border-[#10B981]/20">
                      {step.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1E293B] mb-3 font-['Tajawal'] group-hover:text-[#E86A33] transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#475569] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom Icon */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-gray-50 text-[#1E3A2B] flex items-center justify-center group-hover:text-[#10B981] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <Check className="w-4 h-4 text-[#10B981]" />
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
