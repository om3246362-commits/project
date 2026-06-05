import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Printer,
  BookOpen,
  CreditCard,
  FileText,
  Monitor,
  Layers,
  GraduationCap,
  Copy,
  CheckCircle,
  ArrowLeft,
  Phone,
  MessageCircle,
  StickyNote,
} from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

export const metadata: Metadata = {
  title: 'خدماتنا - PrintPro',
  description: 'جميع خدمات الطباعة الاحترافية: نسخ المستندات، طباعة الكتب، بطاقات العمل، اللافتات والمزيد',
};

const services = [
  {
    icon: StickyNote,
    title: 'نسخ وطباعة المستندات',
    desc: 'نقدم خدمة نسخ وطباعة المستندات بجميع أحجام الأوراق (A4، A3، A5) بالأبيض والأسود أو الألوان الكاملة. نستخدم أجود أنواع الحبر والورق لضمان وضوح الطباعة.',
    features: ['طباعة A4 / A3 / A5', 'أبيض وأسود أو ألوان', 'ورق فاخر بمختلف الأوزان', 'خدمة عاجلة متاحة'],
    color: 'blue',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: BookOpen,
    title: 'طباعة الكتب والكتيبات',
    desc: 'طباعة الكتب والمجلات والكتيبات بجودة نشر احترافية مع خيارات تجليد متعددة. مناسبة للناشرين والمؤسسات التعليمية والشركات.',
    features: ['تجليد لاصق أو دبابيس', 'غلاف فاخر مقوى', 'طباعة بالألوان الكاملة', 'كميات كبيرة بأسعار مخفضة'],
    color: 'blue',
    image: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: CreditCard,
    title: 'بطاقات العمل',
    desc: 'بطاقات أعمال احترافية تعكس هوية علامتك التجارية. نقدم تصاميم مبتكرة على مواد متنوعة من الورق الفاخر إلى البلاستيك الشفاف.',
    features: ['ورق فاخر 400 جرام', 'تشطيب لامع أو مطفي', 'بطاقات بلاستيكية', 'حواف مذهبة أو فضية'],
    color: 'orange',
    image: 'https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: FileText,
    title: 'الفلايرز والبروشورات',
    desc: 'فلايرز وبروشورات دعائية بألوان زاهية وتصاميم جذابة تسوّق لعملك بفاعلية. مثالية للحملات التسويقية والمعارض والفعاليات.',
    features: ['طي ثنائي أو ثلاثي', 'ورق لامع أو مطفي', 'أحجام متعددة', 'طباعة وجهين'],
    color: 'orange',
    image: 'https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Monitor,
    title: 'لافتات ورول أب',
    desc: 'لافتات وبانرات ضخمة ورول أب ستاندات احترافية للمعارض والفعاليات والمحلات التجارية. مواد متينة تتحمل الاستخدام اليومي.',
    features: ['طباعة عالية الدقة', 'مواد خارجية مقاومة للماء', 'رول أب بحامل معدني', 'أحجام مخصصة'],
    color: 'blue',
    image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Layers,
    title: 'الطباعة الكبيرة الحجم',
    desc: 'طباعة فورمات كبيرة على مواد متنوعة: الفينيل، القماش، الفوم بورد والكانفاس. مناسبة للواجهات والمعارض والديكور الداخلي.',
    features: ['فينيل لاصق للواجهات', 'طباعة على الكانفاس', 'فوم بورد للمعارض', 'لوحات خارجية متينة'],
    color: 'blue',
    image: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: GraduationCap,
    title: 'الطباعة التعليمية والمكتبية',
    desc: 'خدمات طباعة شاملة للمدارس والجامعات والمكاتب: مناهج، نماذج، ملفات تعريف، شهادات، وجميع المطبوعات الرسمية.',
    features: ['مناهج ومذكرات', 'شهادات وجوائز مذهبة', 'استمارات رسمية', 'مطبوعات دورية'],
    color: 'orange',
    image: 'https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Printer,
    title: 'طباعة المنيو والقوائم',
    desc: 'قوائم طعام ومشروبات بتصاميم فاخرة تعكس هوية مطعمك أو مقهاك. خيارات تشطيب متعددة مقاومة للماء والبقع.',
    features: ['مغلفة بلاستيكية', 'حلقات معدنية', 'ورق مقوى مقاوم', 'تحديث دوري بسهولة'],
    color: 'orange',
    image: 'https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const process = [
  { step: '01', title: 'تواصل معنا', desc: 'أرسل لنا تفاصيل طلبك عبر الهاتف أو واتساب أو النموذج' },
  { step: '02', title: 'استلام التصميم', desc: 'أرسل ملف التصميم أو نقوم نحن بتصميمه لك باحترافية' },
  { step: '03', title: 'الطباعة والإنتاج', desc: 'نبدأ عملية الطباعة بأحدث المعدات وأجود المواد' },
  { step: '04', title: 'التسليم', desc: 'نسلمك طلبك في الموعد المحدد أو يمكنك استلامه من مكتبنا' },
];

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="hero-gradient pt-28 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-orange-400 font-bold text-sm tracking-widest uppercase mb-3">خدماتنا</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
            حلول طباعة شاملة لكل احتياج
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            من بطاقات العمل الأنيقة إلى اللافتات الضخمة، نقدم طيفاً واسعاً من خدمات الطباعة الاحترافية بأعلى معايير الجودة
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((s, idx) => (
              <div
                key={s.title}
                className={`bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                }`}
              >
                {/* Image */}
                <div className="lg:w-2/5 flex-shrink-0">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center flex-1">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    s.color === 'blue' ? 'bg-blue-100' : 'bg-orange-100'
                  }`}>
                    <s.icon className={`w-7 h-7 ${s.color === 'blue' ? 'text-blue-600' : 'text-orange-500'}`} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3">{s.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-6">{s.desc}</p>
                  <ul className="grid grid-cols-2 gap-2 mb-6">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={`self-start inline-flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:-translate-y-0.5 ${
                      s.color === 'blue'
                        ? 'bg-blue-700 hover:bg-blue-800 text-white hover:shadow-lg hover:shadow-blue-700/30'
                        : 'bg-orange-500 hover:bg-orange-600 text-white hover:shadow-lg hover:shadow-orange-500/30'
                    }`}
                  >
                    احصل على سعر
                    <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">كيف نعمل</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">خطوات بسيطة لنتيجة مثالية</h2>
          </div>
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-10 left-16 right-16 h-0.5 bg-gradient-to-r from-blue-200 via-orange-300 to-blue-200" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((p, i) => (
                <div key={p.step} className="relative text-center">
                  <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-2xl font-extrabold mb-4 shadow-lg ${
                    i % 2 === 0 ? 'bg-blue-700 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    {p.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white mb-4">مستعد للبدء؟</h2>
          <p className="text-blue-200 mb-8 text-lg">تواصل معنا الآن للحصول على عرض سعر مجاني</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+966500000000" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5">
              <Phone className="w-5 h-5" />
              اتصل الآن
            </a>
            <a href="https://wa.me/966500000000" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:-translate-y-0.5">
              <MessageCircle className="w-5 h-5" />
              واتساب
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
