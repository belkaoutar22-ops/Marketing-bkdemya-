import React from 'react';
import { Calendar, CheckCircle2, ShieldCheck, Clock, ArrowLeft } from 'lucide-react';
import { GOOGLE_CALENDAR_URL } from '../types';

export const ConsultationPerksSection: React.FC = () => {
  const perks = [
    { title: "تحليل وضع نشاطك الحالي.", desc: "تقييم واقعي لأدائك التسويقي والإعلاني والفرص المهشمة." },
    { title: "مراجعة طريقة جذب العملاء لديك.", desc: "فحص مسار العميل من رؤية الإعلان حتى التواصل أو الشراء." },
    { title: "تحديد أبرز نقاط التحسين.", desc: "تشخيص المشاكل التي تسببت في هدر الميزانية أو ضعف التحويل." },
    { title: "اقتراح استراتيجية أولية تناسب نشاطك.", desc: "خطة عمل مبدئية محددة الخطوات ومخصصة لنوع نشاطك." },
    { title: "الإجابة عن جميع استفساراتك.", desc: "جلسة تفاعلية تجيب فيها على كل الأسئلة التي تشغل بالك بوضوح." }
  ];

  return (
    <section id="consultation-perks" className="py-20 bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card Wrapper */}
        <div className="bg-white rounded-3xl border border-[#E86A33]/20 shadow-2xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          
          {/* Top Banner Callout */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1E3A2B] text-white font-bold text-xs sm:text-sm mb-4 shadow-md">
              <Clock className="w-4 h-4 text-[#10B981]" />
              <span>استشارة مجانية (30 دقيقة عبر Google Calendar)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#1E293B] mb-4 font-['Tajawal']">
              ماذا ستحصل خلال الاستشارة المجانية؟
            </h2>

            {/* High-Impact Highlight */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[#FFF2EC] via-[#FFF8F5] to-[#ECFDF5] border border-[#E86A33]/25 text-[#1E293B] font-bold text-base sm:text-lg max-w-2xl mx-auto shadow-xs">
              💡 ليست جلسة بيع... <span className="text-[#E86A33] font-black">بل جلسة عملية</span> تساعدك على رؤية الصورة بشكل أوضح.
            </div>
          </div>

          {/* List Items */}
          <div className="space-y-4 max-w-3xl mx-auto mb-10">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-2xl bg-[#FAF9F6] border border-gray-100 hover:border-[#E86A33]/30 hover:bg-white transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-xl bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#1E293B] font-['Tajawal']">
                    ✅ {perk.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] mt-1">
                    {perk.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Booking CTA */}
          <div className="text-center pt-6 border-t border-gray-100">
            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#E86A33] to-[#D0531E] rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-[#E86A33]/30 hover:-translate-y-0.5 transition-all"
            >
              <Calendar className="w-5 h-5" />
              <span>اختر الموعد المناسب لك الآن</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
