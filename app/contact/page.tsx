'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, lang: 'ar' }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Something went wrong');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'فشل إرسال الرسالة، حاول مرة أخرى');
    }
  };

  return (
    <main className="min-h-screen bg-black text-white py-28 px-6" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* رأس الصفحة */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 text-xs font-bold tracking-wider uppercase">
            تواصل معنا
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            نحن هنا لمساعدتك والإجابة عن استفساراتك
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            تواصل معنا عبر النموذج أدناه أو عبر قنوات الاتصال المباشرة وسنجيبك في أسرع وقت.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* معلومات التواصل */}
          <div className="lg:col-span-5 bg-neutral-950 border border-neutral-800 p-8 sm:p-10 rounded-3xl shadow-2xl space-y-8">
            <h3 className="text-2xl font-black text-white mb-4">
              معلومات الاتصال المباشر
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0 font-bold text-lg">
                  📞
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-400">اتصل بنا أو واتساب</h4>
                  <a href="https://wa.me/201270506511" target="_blank" rel="noopener noreferrer" className="text-white font-extrabold text-base hover:text-blue-400 transition">
                    +20 127 050 6511
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0 font-bold text-lg">
                  ✉️
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-400">البريد الإلكتروني</h4>
                  <a href="mailto:godyslem139@gmail.com" className="text-white font-extrabold text-base hover:text-blue-400 transition">
                    godyslem139@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0 font-bold text-lg">
                  📍
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-400">العنوان</h4>
                  <p className="text-white font-extrabold text-base">
                    الإسكندرية، مصر
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-neutral-800">
              <h4 className="text-sm font-bold text-zinc-400 mb-4">تابعنا على المنصات</h4>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/uniquews" target="_blank" rel="noopener noreferrer" title="Facebook" className="w-10 h-10 rounded-full bg-black border border-blue-500/50 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
                </a>
                <a href="http://linkedin.com/in/ghada-salem-51b146153" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="w-10 h-10 rounded-full bg-black border border-blue-500/50 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
              </div>
            </div>
          </div>

          {/* نموذج الإرسال (Form) */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {status === 'success' && (
                <div className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-sm font-bold text-center">
                  تم إرسال رسالتك بنجاح! سنقوم بالتواصل معك قريباً.
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-bold text-center">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل اسمك"
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-neutral-800 text-white focus:border-blue-500 focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-neutral-800 text-white focus:border-blue-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+20 ..."
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-neutral-800 text-white focus:border-blue-500 focus:outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-400 mb-2">
                    الموضوع
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="موضوع الرسالة"
                    className="w-full px-4 py-3.5 rounded-xl bg-black border border-neutral-800 text-white focus:border-blue-500 focus:outline-none text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 mb-2">
                  الرسالة *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="اكتب رسالتك هنا بالتفصيل..."
                  className="w-full px-4 py-3.5 rounded-xl bg-black border border-neutral-800 text-white focus:border-blue-500 focus:outline-none text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm transition shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50"
              >
                {status === 'loading' ? 'جاري الإرسال...' : 'إرسال الرسالة الآن ↗'}
              </button>

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}