import React from 'react';
import { Calendar, MessageCircle, Sparkles, ShieldCheck, ArrowLeft, Clock } from 'lucide-react';
import { GOOGLE_CALENDAR_URL, WHATSAPP_URL } from '../types';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF9F6] relative overflow-hidden">
      {/* Decorative Blob Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[#E86A33]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF2EC] border border-[#E86A33]/30 text-[#E86A33] font-bold text-xs sm:text-sm mb-6 animate-pulse-glow">
          <Sparkles className="w-4 h-4" />
          <span>خطوة واحدة تفصلك عن تنظيم حملاتك الإعلانية</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1E293B] mb-6 font-['Tajawal'] leading-tight">
          جاهز لتنمية أعمالك؟
        </h2>

        {/* Descriptive Copy */}
        <p className="text-base sm:text-xl text-[#475569] leading-relaxed max-w-2xl mx-auto mb-10">
          ابدأ بخطوة بسيطة قد تُحدث فرقاً في طريقة حصولك على العملاء.
          <br className="hidden sm:inline" />
          احجز استشارة مجانية لمدة 30 دقيقة، ودعنا نناقش أهدافك، ونستعرض الفرص المتاحة، ونقترح عليك أفضل نقطة انطلاق.
        </p>

        {/* Big Buttons Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={GOOGLE_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 text-lg font-black text-white bg-gradient-to-r from-[#E86A33] via-[#F0652B] to-[#D0531E] rounded-2xl shadow-2xl shadow-[#E86A33]/30 hover:shadow-3xl hover:shadow-[#E86A33]/40 hover:-translate-y-1 transition-all duration-300"
          >
            <Calendar className="w-6 h-6" />
            <span>احجز استشارتك المجانية الآن</span>
            <ArrowLeft className="w-5 h-5" />
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-8 py-5 text-base font-bold text-[#1E3A2B] bg-white border-2 border-[#10B981]/40 rounded-2xl hover:border-[#10B981] hover:bg-[#ECFDF5] transition-all duration-200 shadow-sm"
          >
            <MessageCircle className="w-5 h-5 text-[#10B981]" />
            <span>تواصل عبر واتساب</span>
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-semibold text-[#64748B]">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#E86A33]" />
            <span>مدتها 30 دقيقة</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>100% مجانية وبدون أي التزام</span>
          </div>
          <span className="text-gray-300">•</span>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#10B981]" />
            <span>عبر Google Calendar</span>
          </div>
        </div>

      </div>
    </section>
  );
};
