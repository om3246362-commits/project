'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, Loader2 } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

const services = [
  'نسخ وطباعة المستندات',
  'طباعة الكتب والكتيبات',
  'بطاقات العمل',
  'الفلايرز والبروشورات',
  'لافتات ورول أب',
  'الطباعة الكبيرة',
  'مطبوعات تعليمية',
];

const hours = [
  { day: 'السبت - الأربعاء', time: '8:00 ص - 10:00 م' },
  { day: 'الخميس', time: '8:00 ص - 8:00 م' },
  { day: 'الجمعة', time: '2:00 م - 8:00 م' },
];

type FormState = 'idle' | 'sending' | 'success';

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    await new Promise((r) => setTimeout(r, 1500));
    setFormState('success');
    setForm({ name: '', phone: '', email: '', service: '', message: '' });
  };

  return (
    <SiteLayout>
      <section className="hero-gradient pt-28 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">نحن هنا لمساعدتك</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            تواصل معنا بأي طريقة وسنكون سعداء بالمساعدة
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 -mt-16">
            <a href="tel:+966500000000" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 group hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">الهاتف</h3>
              <p className="text-blue-700 font-semibold text-sm">+966 50 000 0000</p>
            </a>
            <a href="https://wa.me/966500000000" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 group hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-green-100 text-green-700 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">واتساب</h3>
              <p className="text-green-700 font-semibold text-sm">ردود فورية</p>
            </a>
            <a href="mailto:info@printpro.sa" className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100 group hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">البريد</h3>
              <p className="text-orange-600 font-semibold text-sm">info@printpro.sa</p>
            </a>
            <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">العنوان</h3>
              <p className="text-blue-700 font-semibold text-sm">الرياض، السعودية</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2">أرسل لنا طلبك</h2>
                <p className="text-gray-500 mb-8">أكمل النموذج وسنتواصل معك في أقرب وقت</p>

                {formState === 'success' ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-3">تم إرسال طلبك!</h3>
                    <p className="text-gray-500">شكراً لك، سنتواصل معك قريباً</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="الاسم" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10" />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="الجوال" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10" />
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="البريد" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10" />
                    </div>
                    <select name="service" value={form.service} onChange={handleChange} required className="w-full border border-gray-200 rounded-xl px-4 py-3 bg-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10">
                      <option value="">اختر الخدمة</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="التفاصيل..." className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 resize-none" />
                    <button type="submit" disabled={formState === 'sending'} className="w-full flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 disabled:bg-blue-400 text-white font-bold px-7 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-700/30 hover:-translate-y-0.5 disabled:cursor-not-allowed">
                      {formState === 'sending' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          جارٍ الإرسال...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          إرسال الطلب
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-5">
                  <Clock className="w-5 h-5 text-blue-700" />
                  <h3 className="font-bold text-gray-900">ساعات العمل</h3>
                </div>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between items-center text-sm">
                      <span className="text-gray-600 font-medium">{h.day}</span>
                      <span className="text-blue-700 font-semibold">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://wa.me/966500000000" className="block bg-green-500 hover:bg-green-600 text-white rounded-2xl p-6 text-center transition-all hover:shadow-xl hover:shadow-green-500/30 hover:-translate-y-1 whatsapp-pulse">
                <MessageCircle className="w-10 h-10 mx-auto mb-3" />
                <h3 className="font-extrabold text-xl mb-1">تحدث عبر واتساب</h3>
                <p className="text-green-100 text-sm">رد سريع في دقائق</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
