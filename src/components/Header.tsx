import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, Menu, X, Code2, Sparkles, PhoneCall } from 'lucide-react';
import { GOOGLE_CALENDAR_URL, WHATSAPP_URL } from '../types';

interface HeaderProps {
  onOpenPayhipModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenPayhipModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E86A33]/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#E86A33] font-['Tajawal'] group-hover:scale-[1.02] transition-transform">
                  BKDEMYA
                </span>
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-[#1E3A2B] uppercase -mt-1 font-['Readex_Pro']">
                BUSINESS STRATEGY SOLUTIONS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#334155]">
            <a
              href="#why-us"
              className="hover:text-[#E86A33] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#E86A33] hover:after:w-full after:transition-all"
            >
              لماذا BKDEMYA؟
            </a>
            <a
              href="#how-it-works"
              className="hover:text-[#E86A33] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#E86A33] hover:after:w-full after:transition-all"
            >
              كيف نعمل؟
            </a>
            <a
              href="#target-audience"
              className="hover:text-[#E86A33] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#E86A33] hover:after:w-full after:transition-all"
            >
              قطاعات الأعمال
            </a>
            <a
              href="#consultation-perks"
              className="hover:text-[#E86A33] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-0.5 after:bg-[#E86A33] hover:after:w-full after:transition-all"
            >
              تفاصيل الاستشارة
            </a>
          </nav>

          {/* Header Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenPayhipModal}
              title="كود الرمز المدمج Payhip Embed"
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-[#1E3A2B] bg-[#ECFDF5] border border-[#10B981]/30 rounded-xl hover:bg-[#10B981] hover:text-white transition-all shadow-xs"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>كود Payhip</span>
            </button>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-[#1E3A2B] bg-[#10B981]/10 border border-[#10B981]/30 rounded-xl hover:bg-[#10B981] hover:text-white transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 text-[#10B981] group-hover:text-white" />
              <span>واتساب</span>
            </a>

            <a
              href={GOOGLE_CALENDAR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#E86A33] to-[#D0531E] rounded-xl hover:shadow-lg hover:shadow-[#E86A33]/25 hover:-translate-y-0.5 transition-all duration-200"
            >
              <Calendar className="w-4 h-4" />
              <span>احجز استشارة مجانية</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenPayhipModal}
              className="p-2 text-xs text-[#1E3A2B] bg-[#ECFDF5] border border-[#10B981]/30 rounded-lg flex items-center gap-1"
            >
              <Code2 className="w-4 h-4 text-[#10B981]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-gray-700 hover:text-[#E86A33] focus:outline-none rounded-xl border border-gray-200 bg-white"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 bg-white/95 backdrop-blur-xl border border-[#E86A33]/15 rounded-2xl shadow-xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200">
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-[#FFF2EC] hover:text-[#E86A33] rounded-xl transition-colors"
            >
              لماذا BKDEMYA؟
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-[#FFF2EC] hover:text-[#E86A33] rounded-xl transition-colors"
            >
              كيف نعمل؟
            </a>
            <a
              href="#target-audience"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-[#FFF2EC] hover:text-[#E86A33] rounded-xl transition-colors"
            >
              قطاعات الأعمال
            </a>
            <a
              href="#consultation-perks"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2.5 text-sm font-medium text-gray-800 hover:bg-[#FFF2EC] hover:text-[#E86A33] rounded-xl transition-colors"
            >
              تفاصيل الاستشارة
            </a>

            <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={GOOGLE_CALENDAR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine flex items-center justify-center gap-2 py-3 text-sm font-bold text-white bg-gradient-to-r from-[#E86A33] to-[#D0531E] rounded-xl shadow-md text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>احجز استشارة مجانية (30 دقيقة)</span>
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-[#1E3A2B] bg-[#ECFDF5] border border-[#10B981]/30 rounded-xl text-center"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
