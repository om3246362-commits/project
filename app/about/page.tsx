import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Target, Heart, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'من نحن - PrintPro',
  description: 'تعرف على شركة PrintPro - رائدة في خدمات الطباعة الاحترافية',
};

const stats = [
  { icon: Users, value: '5000+', label: 'عميل راضٍ' },
  { icon: Award, value: '50K+', label: 'مشروع منجز' },
  { icon: Star, value: '4.9', label: 'متوسط التقييم' },
];

export default function AboutPage() {
  return (
    <SiteLayout>
      <section className="hero-gradient pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <span className="inline-block text-orange-400 font-bold text-sm tracking-widest uppercase mb-3">من نحن</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                شركاؤك في الطباعة الاحترافية منذ 2009
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                PrintPro هي شركة طباعة رائدة أسسها مجموعة من المتخصصين الشغوفين بعالم الطباعة والتصميم.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1"
              >
                تواصل معنا
                <ArrowLeft className="w-5 h-5" />
              </Link>
            </div>
            <div className="hidden lg:block">
              <Image
                src="https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="فريق PrintPro"
                width={600}
                height={420}
                className="rounded-2xl shadow-2xl shadow-blue-900/50 w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center group">
                <div className="w-14 h-14 mx-auto bg-blue-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-blue-700 transition-colors">
                  <s.icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                </div>
                <div className="text-3xl font-extrabold text-gray-900 mb-1">{s.value}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative">
                <Target className="w-6 h-6 text-white mb-4" />
                <h2 className="text-2xl font-extrabold mb-4">مهمتنا</h2>
                <p className="text-blue-100 leading-relaxed">
                  تقديم خدمات طباعة استثنائية تساعد الأفراد والشركات على التميز والنجاح
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="relative">
                <Star className="w-6 h-6 text-white mb-4" />
                <h2 className="text-2xl font-extrabold mb-4">رؤيتنا</h2>
                <p className="text-orange-100 leading-relaxed">
                  أن نكون الشركة الطباعية الأولى والأكثر ثقة في المملكة العربية السعودية
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
