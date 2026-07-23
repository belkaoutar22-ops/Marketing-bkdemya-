import React, { useState } from 'react';
import { X, Copy, Check, Code2, Download, FileCode } from 'lucide-react';
import { GOOGLE_CALENDAR_URL, WHATSAPP_URL, PHONE_DISPLAY } from '../types';

interface PayhipEmbedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PayhipEmbedModal: React.FC<PayhipEmbedModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Standalone single HTML file code formatted specifically for Payhip Embed Code
  const standaloneHtmlCode = `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BKDEMYA | شريكك في تنمية أعمالك</title>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Readex+Pro:wght@300;400;500;600;700&family=Tajawal:wght@400;500;700;800;900&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body {
      font-family: 'Readex Pro', 'Tajawal', sans-serif;
      background-color: #FAF9F6;
      color: #1E293B;
      margin: 0;
      padding: 0;
      scroll-behavior: smooth;
    }
    .brand-orange { color: #E86A33; }
    .bg-brand-orange { background-color: #E86A33; }
    .brand-green { color: #1E3A2B; }
    .bg-brand-green { background-color: #1E3A2B; }
    .emerald-accent { color: #10B981; }
    .bg-emerald-accent { background-color: #10B981; }
    
    .btn-shine {
      position: relative;
      overflow: hidden;
    }
    .btn-shine::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -75%;
      width: 50%;
      height: 200%;
      background: linear-gradient(60deg, rgba(255,255,255,0) 20%, rgba(255,255,255,0.35) 50%, rgba(255,255,255,0) 80%);
      transform: rotate(30deg);
      animation: shine 4s infinite;
    }
    @keyframes shine { 100% { left: 125%; } }
  </style>
</head>
<body class="antialiased">

  <!-- Header / Navigation -->
  <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E86A33]/10 py-4 shadow-xs">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
      <div className="flex flex-col">
        <span className="text-2xl font-black text-[#E86A33]">BKDEMYA</span>
        <span className="text-[9px] font-bold text-[#1E3A2B] uppercase tracking-widest">BUSINESS STRATEGY SOLUTIONS</span>
      </div>
      <a href="${GOOGLE_CALENDAR_URL}" target="_blank" class="btn-shine px-5 py-2.5 text-xs font-bold text-white bg-[#E86A33] rounded-xl hover:bg-[#D0531E] transition-all">
        احجز استشارة مجانية
      </a>
    </div>
  </header>

  <main class="pt-24">
    <!-- Hero Section -->
    <section class="py-16 max-w-7xl mx-auto px-4 text-center lg:text-right grid lg:grid-cols-12 gap-8 items-center">
      <div class="lg:col-span-7">
        <div class="inline-block px-4 py-1.5 rounded-full bg-[#FFF2EC] text-[#E86A33] font-semibold text-xs mb-4">
          🚀 BKDEMYA | شريكك في تنمية أعمالك
        </div>
        <h1 class="text-3xl sm:text-5xl font-black text-[#1E293B] mb-6 leading-tight">
          هل تستثمر في الإعلانات... <br><span class="text-[#E86A33]">ولكن لا تحصل على العملاء الذين تبحث عنهم؟</span>
        </h1>
        <p class="text-base sm:text-lg text-[#475569] mb-4">
          في <strong>BKDEMYA</strong> نساعد الشركات على جذب عملاء محتملين مؤهلين من خلال استراتيجيات إعلانية مدروسة على منصات Meta.
        </p>
        <p class="text-sm sm:text-base text-[#64748B] mb-8 border-r-2 border-[#10B981] pr-3">
          لا نعتمد على زيادة الميزانية بشكل عشوائي، بل نركز على تحسين جودة العملاء، وخفض تكلفة الحصول عليهم، وتحقيق نتائج قابلة للقياس تساعد نشاطك على النمو بثقة.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 mb-8">
          <a href="${GOOGLE_CALENDAR_URL}" target="_blank" class="btn-shine px-8 py-4 text-center font-bold text-white bg-[#E86A33] rounded-2xl hover:bg-[#D0531E]">
            احجز استشارة مجانية
          </a>
          <a href="${WHATSAPP_URL}" target="_blank" class="px-6 py-4 text-center font-bold text-[#1E3A2B] bg-white border border-[#10B981]/30 rounded-2xl hover:bg-[#ECFDF5]">
            تواصل عبر واتساب
          </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-semibold text-[#1E293B]">
          <div class="p-3 bg-white rounded-xl border border-gray-100">✅ تحليل مجاني لنشاطك التجاري</div>
          <div class="p-3 bg-white rounded-xl border border-gray-100">✅ خطة أولية تناسب أهدافك</div>
          <div class="p-3 bg-white rounded-xl border border-gray-100">✅ استشارة مجانية لمدة 30 دقيقة</div>
        </div>
      </div>
      <div class="lg:col-span-5">
        <img src="https://picsum.photos/seed/bkdemya/600/400" alt="BKDEMYA Marketing Strategy" class="rounded-3xl shadow-xl w-full">
      </div>
    </section>

    <!-- Section 2: Why Us -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-extrabold text-[#1E293B] mb-4">نجاح حملتك يبدأ قبل إطلاق الإعلان.</h2>
        <p class="max-w-3xl mx-auto text-[#64748B] mb-12">
          الكثير من الشركات تعتقد أن المشكلة في الميزانية أو في تصميم الإعلان، بينما السبب الحقيقي غالباً يكون في غياب استراتيجية واضحة.
          في BKDEMYA نبدأ أولاً بفهم نشاطك التجاري، وتحليل جمهورك، ثم نبني استراتيجية تساعدك على الوصول إلى العملاء الأكثر اهتماماً بخدماتك.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200">📊 تحليل نشاطك التجاري</div>
          <div class="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200">🎯 استهداف أكثر دقة</div>
          <div class="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200">📈 تحسين أداء الحملات</div>
          <div class="p-6 rounded-2xl bg-[#FAF9F6] border border-gray-200">💰 خفض تكلفة الحصول على العميل</div>
        </div>
      </div>
    </section>

    <!-- Section 3: How We Work -->
    <section class="py-16 bg-[#FAF9F6]">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-[#1E293B] mb-12">خطوات واضحة... ونتائج قابلة للقياس.</h2>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 text-right">
          <div class="p-6 bg-white rounded-2xl border">
            <span class="text-2xl font-black text-[#E86A33]">1️⃣</span>
            <h3 class="font-bold text-lg my-2">تحليل نشاطك</h3>
            <p class="text-xs text-gray-600">نتعرف على خدماتك، جمهورك، وأهدافك التجارية قبل البدء بأي حملة.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border">
            <span class="text-2xl font-black text-[#E86A33]">2️⃣</span>
            <h3 class="font-bold text-lg my-2">إعداد الاستراتيجية</h3>
            <p class="text-xs text-gray-600">نضع خطة إعلانية تناسب نشاطك وميزانيتك وأهدافك.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border">
            <span class="text-2xl font-black text-[#E86A33]">3️⃣</span>
            <h3 class="font-bold text-lg my-2">إطلاق الحملات</h3>
            <p class="text-xs text-gray-600">نطلق الحملات الإعلانية وفق أفضل الممارسات مع متابعة الأداء منذ اليوم الأول.</p>
          </div>
          <div class="p-6 bg-white rounded-2xl border">
            <span class="text-2xl font-black text-[#E86A33]">4️⃣</span>
            <h3 class="font-bold text-lg my-2">التحسين المستمر</h3>
            <p class="text-xs text-gray-600">نعتمد على البيانات الفعلية لتحسين النتائج، وزيادة جودة العملاء المحتملين مع مرور الوقت.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Target Audience -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-[#1E293B] mb-4">هل هذه الخدمة مناسبة لك؟</h2>
        <p class="text-gray-600 mb-8">إذا كنت تقدم خدمات أو منتجات وتبحث عن زيادة فرص الوصول إلى عملاء جدد، فقد تكون هذه الخدمة مناسبة لك.</p>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-right font-bold text-sm">
          <div class="p-4 bg-[#FAF9F6] rounded-xl">✔ العيادات</div>
          <div class="p-4 bg-[#FAF9F6] rounded-xl">✔ شركات المقاولات</div>
          <div class="p-4 bg-[#FAF9F6] rounded-xl">✔ شركات التنظيف</div>
          <div class="p-4 bg-[#FAF9F6] rounded-xl">✔ الشركات الخدمية</div>
          <div class="p-4 bg-[#FAF9F6] rounded-xl">✔ المتاجر الإلكترونية</div>
          <div class="p-4 bg-[#FAF9F6] rounded-xl">✔ المشاريع الصغيرة والمتوسطة</div>
        </div>
      </div>
    </section>

    <!-- Section 5: Consultation Perks -->
    <section class="py-16 bg-[#FAF9F6]">
      <div class="max-w-4xl mx-auto px-4 text-center bg-white p-8 rounded-3xl border shadow-lg">
        <h2 class="text-3xl font-bold text-[#1E293B] mb-4">ماذا ستحصل خلال الاستشارة المجانية؟</h2>
        <div class="p-4 bg-[#FFF2EC] text-[#E86A33] font-bold rounded-2xl mb-8">
          ليست جلسة بيع... بل جلسة عملية تساعدك على رؤية الصورة بشكل أوضح.
        </div>
        <div class="space-y-3 text-right font-semibold text-sm">
          <div class="p-3 bg-[#FAF9F6] rounded-xl">✅ تحليل وضع نشاطك الحالي.</div>
          <div class="p-3 bg-[#FAF9F6] rounded-xl">✅ مراجعة طريقة جذب العملاء لديك.</div>
          <div class="p-3 bg-[#FAF9F6] rounded-xl">✅ تحديد أبرز نقاط التحسين.</div>
          <div class="p-3 bg-[#FAF9F6] rounded-xl">✅ اقتراح استراتيجية أولية تناسب نشاطك.</div>
          <div class="p-3 bg-[#FAF9F6] rounded-xl">✅ الإجابة عن جميع استفساراتك.</div>
        </div>
      </div>
    </section>

    <!-- Section 6: Why Free -->
    <section class="py-16 bg-white">
      <div class="max-w-3xl mx-auto px-4 bg-[#1E3A2B] text-white p-8 rounded-3xl text-right">
        <h2 class="text-2xl font-bold mb-4">لماذا نبدأ باستشارة مجانية؟</h2>
        <p class="mb-4">لأننا نؤمن أن لكل نشاط احتياجات مختلفة. لهذا لا نقدم حلولاً جاهزة للجميع، بل نبدأ بفهم طبيعة نشاطك، ثم نقترح ما يناسبه.</p>
        <p class="text-emerald-300 font-bold">وإذا رأينا أن الإعلانات ليست الخيار المناسب في هذه المرحلة، سنخبرك بذلك بكل شفافية.</p>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 text-center bg-[#FAF9F6]">
      <h2 class="text-4xl font-black mb-4 text-[#1E293B]">جاهز لتنمية أعمالك؟</h2>
      <p class="max-w-xl mx-auto text-gray-600 mb-8">
        ابدأ بخطوة بسيطة قد تُحدث فرقاً في طريقة حصولك على العملاء.احجز استشارة مجانية لمدة 30 دقيقة، ودعنا نناقش أهدافك، ونستعرض الفرص المتاحة، ونقترح عليك أفضل نقطة انطلاق.
      </p>
      <a href="${GOOGLE_CALENDAR_URL}" target="_blank" class="btn-shine px-10 py-5 text-xl font-bold text-white bg-[#E86A33] rounded-2xl hover:bg-[#D0531E] inline-block shadow-xl">
        احجز استشارتك المجانية الآن
      </a>
    </section>
  </main>

  <footer class="bg-[#1E3A2B] text-white py-8 text-center text-xs">
    © 2026 BKDEMYA | Business Strategy Solutions. جميع الحقوق محفوظة.
  </footer>
</body>
</html>`;

  const handleCopy = () => {
    navigator.clipboard.writeText(standaloneHtmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleDownload = () => {
    const blob = new Blob([standaloneHtmlCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bkdemya-payhip-landing.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-gray-100 overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#1E3A2B] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#E86A33] flex items-center justify-center text-white font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold font-['Tajawal']">كود الدمج (Payhip Embed Code)</h3>
              <p className="text-xs text-gray-300">ملف HTML واحد كامل يتضمن جميع الأقسام والتصاميم جاهز للنسخ المباشر</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs text-slate-700 bg-slate-900 text-slate-200 dir-ltr text-left">
          <pre className="whitespace-pre-wrap break-all p-4 rounded-xl bg-slate-950 border border-slate-800 text-[11px] leading-relaxed max-h-96 overflow-y-auto">
            {standaloneHtmlCode}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-gray-500 font-medium">
            ✅ كود مستقل يحتوي على Tailwind CSS والأخطاط والروابط
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDownload}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#1E3A2B] bg-white border border-gray-300 rounded-xl hover:bg-gray-100 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>تحميل bkdemya.html</span>
            </button>

            <button
              onClick={handleCopy}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#E86A33] hover:bg-[#D0531E] rounded-xl shadow-md transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>تم النسخ بنجاح!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>نسخ الكود بالكامل</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
