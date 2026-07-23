import React from 'react';
import { Stethoscope, Building2, Sparkles, Briefcase, ShoppingBag, Rocket, CheckCircle } from 'lucide-react';

export const TargetAudienceSection: React.FC = () => {
  const sectors = [
    { title: "العيادات والمراكز الطبية", icon: Stethoscope, tag: "خدمات طبية وتجميلية" },
    { title: "شركات المقاولات والبناء", icon: Building2, tag: "مشاريع وتجهيزات" },
    { title: "شركات التنظيف والخدمات المنزلية", icon: Sparkles, tag: "خدمات سريعة ومستمرة" },
    { title: "الشركات الخدمية (B2B / B2C)", icon: Briefcase, tag: "استشارات وخدمات تخصصية" },
    { title: "المتاجر الإلكترونية", icon: ShoppingBag, tag: "مبيعات مباشرة وزيادة سلة الشراء" },
    { title: "المشاريع الصغيرة والمتوسطة", icon: Rocket, tag: "نمو الأعمال وتوسيع القاعدة" }
  ];

  return (
    <section id="target-audience" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ECFDF5] text-[#10B981] font-bold text-xs mb-3 border border-[#10B981]/20">
            <span>القطاعات المستهدفة</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1E293B] mb-4 font-['Tajawal']">
            هل هذه الخدمة مناسبة لك؟
          </h2>

          <p className="text-[#475569] text-base sm:text-lg leading-relaxed">
            إذا كنت تقدم خدمات أو منتجات وتبحث عن زيادة فرص الوصول إلى عملاء جدد، فقد تكون هذه الخدمة مناسبة لك.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200/70 hover:bg-white hover:border-[#E86A33]/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 text-[#E86A33] flex items-center justify-center shrink-0 group-hover:bg-[#E86A33] group-hover:text-white transition-colors duration-300 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-[#10B981] bg-[#ECFDF5] px-2 py-0.5 rounded-md">
                      {sector.tag}
                    </span>
                    <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  </div>

                  <h3 className="text-lg font-bold text-[#1E293B] font-['Tajawal'] group-hover:text-[#E86A33] transition-colors">
                    ✔ {sector.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
