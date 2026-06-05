'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ZoomIn } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

const categories = ['الكل', 'كتب ومجلات', 'لافتات وبانرات', 'بطاقات العمل', 'فلايرز وبروشورات', 'طباعة كبيرة', 'مطبوعات تعليمية'];

const projects = [
  {
    id: 1,
    title: 'كتاب تقرير سنوي شركة الأفق',
    category: 'كتب ومجلات',
    img: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'تقرير سنوي احترافي بـ 120 صفحة بألوان كاملة',
  },
  {
    id: 2,
    title: 'لافتة معرض تقني',
    category: 'لافتات وبانرات',
    img: 'https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'لافتة ضخمة بقياس 3×6 متر للمعرض الدولي',
  },
  {
    id: 3,
    title: 'بطاقات أعمال فندق النخبة',
    category: 'بطاقات العمل',
    img: 'https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'بطاقات أعمال فاخرة بورق 400 جرام مع حواف ذهبية',
  },
  {
    id: 4,
    title: 'بروشور مجمع سكني',
    category: 'فلايرز وبروشورات',
    img: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'بروشور طي ثلاثي بتصميم هندسي أنيق',
  },
  {
    id: 5,
    title: 'مجلة شهرية للأعمال',
    category: 'كتب ومجلات',
    img: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'مجلة أعمال شهرية 64 صفحة بغلاف مقوى',
  },
  {
    id: 6,
    title: 'رول أب ستاند لسلسلة مطاعم',
    category: 'لافتات وبانرات',
    img: 'https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'رول أب ستاند بأبعاد 85×200 سم مع حامل معدني',
  },
  {
    id: 7,
    title: 'مناهج مدرسة خاصة',
    category: 'مطبوعات تعليمية',
    img: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'طباعة مناهج دراسية بجودة عالية لـ 500 طالب',
  },
  {
    id: 8,
    title: 'فلاير مطعم شرقي',
    category: 'فلايرز وبروشورات',
    img: 'https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'فلاير ترويجي لمطعم شرقي بتصميم عصري',
  },
  {
    id: 9,
    title: 'لوحة واجهة محل تجاري',
    category: 'طباعة كبيرة',
    img: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'لوحة فينيل لاصق لواجهة محل إلكترونيات',
  },
  {
    id: 10,
    title: 'بطاقات أعمال مكتب المحاماة',
    category: 'بطاقات العمل',
    img: 'https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'بطاقات راقية بتشطيب مطفي وحواف فضية',
  },
  {
    id: 11,
    title: 'كتالوج منتجات شركة صناعية',
    category: 'كتب ومجلات',
    img: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'كتالوج منتجات 80 صفحة مع فهرس وأسعار',
  },
  {
    id: 12,
    title: 'شهادات تقدير مؤتمر',
    category: 'مطبوعات تعليمية',
    img: 'https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=800',
    desc: 'شهادات تقدير مذهبة لمؤتمر تقني دولي',
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('الكل');

  const filtered = activeCategory === 'الكل'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-orange-400 font-bold text-sm tracking-widest uppercase mb-3">معرض الأعمال</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">أعمالنا تتحدث عنا</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            استعرض مجموعة مختارة من مشاريعنا المنجزة في مختلف مجالات الطباعة
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/30'
                    : 'text-gray-500 hover:text-blue-700 hover:bg-blue-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="portfolio-item group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={400}
                    height={280}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="portfolio-overlay absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                      <ZoomIn className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.category}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 mb-1 text-sm">{p.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">لا توجد أعمال في هذا التصنيف حالياً</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">هل تريد إضافة مشروعك إلى قائمتنا؟</h2>
          <p className="text-gray-500 mb-8">تواصل معنا الآن وسنحول فكرتك إلى واقع مطبوع احترافي</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-blue-700/30 hover:-translate-y-0.5"
          >
            ابدأ مشروعك الآن
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
