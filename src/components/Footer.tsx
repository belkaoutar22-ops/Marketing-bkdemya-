import React from 'react';
import { Calendar, MessageCircle, Code2, Phone, Heart } from 'lucide-react';
import { GOOGLE_CALENDAR_URL, WHATSAPP_URL, PHONE_DISPLAY } from '../types';

interface FooterProps {
  onOpenPayhipModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPayhipModal }) => {
  return (
    <footer className="bg-[#1E3A2B] text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-col">
              <span className="text-3xl font-black tracking-wider text-[#E86A33] font-['Tajawal']">
                BKDEMYA
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-[#10B981] uppercase font-['Readex_Pro']">
                BUSINESS STRATEGY SOLUTIONS
              </span>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
              وكالة متخصصة في مساعدة الشركات على جذب عملاء محتملين مؤهلين وتحسين العائد الإعلاني من خلال استراتيجيات مدروسة على منصات Meta.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenPayhipModal}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#10B981] bg-white/5 border border-[#10B981]/30 rounded-xl hover:bg-[#10B981] hover:text-white transition-all"
              >
                <Code2 className="w-4 h-4" />
                <span>نسخ كود Payhip Embed (HTML كامل)</span>
              </button>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Tajawal']">
              روابط سريعة
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#why-us" className="hover:text-[#E86A33] transition-colors">
                  لماذا BKDEMYA؟
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#E86A33] transition-colors">
                  كيف نعمل؟
                </a>
              </li>
              <li>
                <a href="#target-audience" className="hover:text-[#E86A33] transition-colors">
                  قطاعات الأعمال
                </a>
              </li>
              <li>
                <a href="#consultation-perks" className="hover:text-[#E86A33] transition-colors">
                  الاستشارة المجانية
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Calendar */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-['Tajawal']">
              حجز الموعد والتواصل
            </h4>
            <div className="space-y-3">
              <a
                href={GOOGLE_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#E86A33] hover:bg-[#E86A33]/10 transition-all text-sm text-gray-200"
              >
                <Calendar className="w-5 h-5 text-[#E86A33]" />
                <span>حجز موعد عبر Google Calendar</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#10B981] hover:bg-[#10B981]/10 transition-all text-sm text-gray-200"
              >
                <MessageCircle className="w-5 h-5 text-[#10B981]" />
                <span>تواصل عبر واتساب: {PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <div>
            © {new Date().getFullYear()} BKDEMYA. جميع الحقوق محفوظة.
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            تم التصميم والإنشاء بأعلى معايير الأداء والتحويل لـ BKDEMYA
          </div>
        </div>

      </div>
    </footer>
  );
};
