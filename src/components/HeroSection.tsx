import React from 'react';
import { Calendar, MessageCircle, CheckCircle2, TrendingUp, Target, ShieldCheck, ArrowLeft, BarChart3, Users } from 'lucide-react';
import { GOOGLE_CALENDAR_URL, WHATSAPP_URL } from '../types';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 lg:pb-24 overflow-hidden">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-[#E86A33]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow"></div>
      <div className="absolute top-40 left-10 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right Column (Text Content - RTL First) */}
          <div className="lg:col-span-7 text-right">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFF2EC] border border-[#E86A33]/25 text-[#E86A33] font-semibold text-xs sm:text-sm mb-6 shadow-xs animate-float">
              <span className="flex h-2 w-2 rounded-full bg-[#E86A33] animate-ping"></span>
              <span>🚀 BKDEMYA | شريكك في تنمية أعمالك</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-black leading-[1.25] text-[#1E293B] mb-6 font-['Tajawal']">
              هل تستثمر في الإعلانات...{' '}
              <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#E86A33] via-[#F0652B] to-[#1E3A2B]">
                ولكن لا تحصل على العملاء الذين تبحث عنهم؟
              </span>
            </h1>

            {/* Subheading / Description Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#475569] leading-relaxed mb-8 max-w-2xl">
              <p>
                في <strong className="text-[#E86A33] font-bold">BKDEMYA</strong> نساعد الشركات على جذب عملاء محتملين مؤهلين من خلال استراتيجيات إعلانية مدروسة على منصات Meta.
              </p>
              <p className="text-sm sm:text-base text-[#64748B] border-r-2 border-[#10B981] pr-3">
                لا نعتمد على زيادة الميزانية بشكل عشوائي، بل نركز على تحسين جودة العملاء، وخفض تكلفة الحصول عليهم، وتحقيق نتائج قابلة للقياس تساعد نشاطك على النمو بثقة.
              </p>
            </div>

            {/* Primary & Secondary Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={GOOGLE_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine group flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#E86A33] to-[#D0531E] rounded-2xl shadow-xl shadow-[#E86A33]/20 hover:shadow-2xl hover:shadow-[#E86A33]/30 hover:-translate-y-1 transition-all duration-200"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>احجز استشارة مجانية</span>
                <ArrowLeft className="w-4 h-4 opacity-75 group-hover:-translate-x-1 transition-transform" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-[#1E3A2B] bg-white border-2 border-[#10B981]/30 rounded-2xl hover:border-[#10B981] hover:bg-[#ECFDF5] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <MessageCircle className="w-5 h-5 text-[#10B981]" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>

            {/* 3 Value Proposition Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-200/80">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                  تحليل مجاني لنشاطك التجاري
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#ECFDF5] text-[#10B981] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                  خطة أولية تناسب أهدافك
                </span>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-gray-100 shadow-xs">
                <div className="w-7 h-7 rounded-lg bg-[#FFF2EC] text-[#E86A33] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#1E293B]">
                  استشارة مجانية لمدة 30 دقيقة
                </span>
              </div>
            </div>

          </div>

          {/* Left Column (Hero Custom Image & Floating SaaS Cards) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Decorative Gradient Border Container */}
              <div className="p-2 sm:p-3 rounded-3xl bg-gradient-to-bl from-[#E86A33]/30 via-white to-[#10B981]/30 shadow-2xl shadow-gray-900/10 backdrop-blur-xs">
                <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100">
                  
                  {/* Generated Hero Image */}
                  <img
                    src="/src/assets/images/hero_marketing_dashboard_1784819593550.jpg"
                    alt="BKDEMYA Meta Ads Strategy & Lead Generation Dashboard"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover min-h-[300px] sm:min-h-[380px] hover:scale-105 transition-transform duration-700"
                  />

                  {/* Dark Gradient Overlay at bottom for readable metrics */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A2B]/90 via-transparent to-transparent"></div>

                  {/* Bottom Text inside image */}
                  <div className="absolute bottom-4 right-4 left-4 text-white p-3 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-emerald-300 font-medium">نتائج حملات Meta Ads</div>
                      <div className="text-sm font-bold font-['Tajawal']">جذب عملاء مؤهلين +140%</div>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-bold bg-[#E86A33] text-white rounded-lg">
                      BKDEMYA Meta ROI
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Badge 1: High Converting Leads */}
              <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-md border border-[#E86A33]/20 p-3 rounded-2xl shadow-xl flex items-center gap-3 animate-float hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-[#FFF2EC] text-[#E86A33] flex items-center justify-center font-bold">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">استهداف دقيق</div>
                  <div className="text-sm font-bold text-[#1E293B]">عملاء مهتمون فعلياً</div>
                </div>
              </div>

              {/* Floating Badge 2: Cost Reduction Card */}
              <div className="absolute -bottom-6 -left-4 bg-white/95 backdrop-blur-md border border-[#10B981]/25 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-[#ECFDF5] text-[#10B981] flex items-center justify-center font-bold">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">تكلفة العميل (CPL)</div>
                  <div className="text-sm font-bold text-[#10B981]">انخفاض حتى 45%</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
