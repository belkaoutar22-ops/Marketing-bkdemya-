import React, { useState, useEffect } from 'react';
import { Calendar, MessageCircle, X } from 'lucide-react';
import { GOOGLE_CALENDAR_URL, WHATSAPP_URL } from '../types';

export const StickyBottomBar: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350 && !dismissed) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 sm:right-auto sm:left-6 sm:bottom-6 z-40 max-w-md mx-auto animate-in fade-in slide-in-from-bottom-6 duration-300">
      <div className="p-3.5 sm:p-4 bg-white/95 backdrop-blur-xl border-2 border-[#E86A33]/30 rounded-2xl shadow-2xl flex items-center justify-between gap-3">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#FFF2EC] text-[#E86A33] flex items-center justify-center shrink-0 font-bold">
            <Calendar className="w-5 h-5 animate-bounce" />
          </div>
          <div>
            <div className="text-xs font-bold text-[#1E293B]">استشارة مجانية (30 دقيقة)</div>
            <div className="text-[11px] text-[#64748B]">اختر الموعد المناسب مع BKDEMYA</div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={GOOGLE_CALENDAR_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shine px-4 py-2 text-xs font-bold text-white bg-[#E86A33] hover:bg-[#D0531E] rounded-xl shadow-md transition-all"
          >
            احجز الآن
          </a>

          <button
            onClick={() => setDismissed(true)}
            className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg"
            aria-label="إغلاق"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
