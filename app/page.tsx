'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Printer,
  BookOpen,
  CreditCard,
  FileText,
  Monitor,
  Layers,
  GraduationCap,
  ArrowLeft,
  CheckCircle,
  Star,
  Users,
  Award,
  Clock,
  ChevronRight,
  Phone,
  MessageCircle,
  Zap,
  Shield,
  Truck,
  HeadphonesIcon,
  StickyNote,
} from 'lucide-react';
import SiteLayout from '@/components/SiteLayout';

const services = [
  {
    icon: StickyNote,
    title: 'استيكرات',
    desc: 'جميع انواع الاستيكر',
    color: 'from-blue-500 to-blue-700',
    bg: 'bg-blue-50',
  },
  {
    icon: BookOpen,
    title: 'طباعة الكتب والكتيبات',
    desc: 'طباعة كتب ومجلات وكتيبات بجودة عالية وتجليد متميز',
    color: 'from-blue-600 to-blue-800',
    bg: 'bg-blue-50',
  },
  {
    icon: CreditCard,
    title: 'بطاقات العمل',
    desc: 'تصميم وطباعة بطاقات أعمال احترافية بمختلف المواد',
    color: 'from-orange-400 to-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: FileText,
    title: 'فلايرز وبروشورات',
    desc: 'فلايرز وبروشورات ملونة بتصاميم جذابة وطباعة عالية الدقة',
    color: 'from-orange-500 to-red-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Monitor,
    title: 'لافتات ورول أب',
    desc: 'لافتات ضخمة ورول أب متين لمختلف المناسبات والمعارض',
    color: 'from-blue-500 to-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    icon: Layers,
    title: 'الطباعة الكبيرة',
    desc: 'طباعة كبيرة الحجم على الفينيل والمواد الخارجية',
    color: 'from-blue-700 to-blue-900',
    bg: 'bg-blue-50',
  },
];

const whyUs = [
  { icon: Zap, title: 'تسليم سريع', desc: 'نلتزم بالمواعيد ونوفر خيارات تسليم عاجل' },
  { icon: Shield, title: 'جودة مضمونة', desc: 'نستخدم أفضل المواد والمعدات لضمان الجودة' },
  { icon: Truck, title: 'خدمة التوصيل', desc: 'نوصل طلباتك مباشرة إلى بابك في المنطقة' },
  { icon: HeadphonesIcon, title: 'دعم على مدار الساعة', desc: 'فريق دعم متخصص جاهز للمساعدة في أي وقت' },
  { icon: Award, title: 'خبرة 15+ عاماً', desc: 'نمتلك خبرة واسعة في صناعة الطباعة' },
  { icon: Users, title: 'آلاف العملاء الراضين', desc: 'ثقة أكثر من 5000 عميل في جميع أنحاء المملكة' },
];

const projects = [
  {
    img: 'https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'تصميم وطباعة كتاب',
    cat: 'كتب ومجلات',
  },
  {
    img: 'https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'لافتات إعلانية ضخمة',
    cat: 'لافتات',
  },
  {
    img: 'https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'بطاقات أعمال فاخرة',
    cat: 'بطاقات العمل',
  },
  {
    img: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'بروشورات تسويقية',
    cat: 'بروشورات',
  },
];

const testimonials = [
  {
    name: 'أحمد محمد العمري',
    role: 'مدير تسويق - شركة الأفق',
    rating: 5,
    text: 'تعاملت مع PrintPro لطباعة مواد التسويق لمؤتمرنا السنوي. الجودة كانت ممتازة والتسليم في الوقت المحدد. أنصح بهم بشدة!',
    avatar: 'أ',
  },
  {
    name: 'سارة عبدالله الغامدي',
    role: 'صاحبة مطعم',
    rating: 5,
    text: 'طلبت قوائم طعام وبطاقات أعمال، والنتيجة فاقت توقعاتي. الألوان واضحة ومميزة والمواد متينة. سأكرر التجربة حتماً.',
    avatar: 'س',
  },
  {
    name: 'خالد إبراهيم الشمري',
    role: 'مدير مدرسة خاصة',
    rating: 5,
    text: 'نتعامل مع PrintPro منذ 3 سنوات لطباعة الكتب المدرسية. خدمة رائعة وأسعار تنافسية. الشركة المفضلة لدينا دائماً.',
    avatar: 'خ',
  },
];

const stats = [
  { value: '5000+', label: 'عميل راضٍ' },
  { value: '15+', label: 'سنة خبرة' },
  { value: '50K+', label: 'مشروع منجز' },
  { value: '24/7', label: 'دعم متواصل' },
];

export default function HomePage() {
  return (
    <SiteLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen hero-gradient hero-pattern flex items-center overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="text-right">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in-up">
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                الشريك الأمثل لجميع احتياجاتك الطباعية
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
                طباعة احترافية
                <span className="block text-orange-400 mt-1">بجودة لا تُضاهى</span>
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-xl animate-fade-in-up delay-200">
                نقدم خدمات طباعة شاملة للشركات والأفراد — من بطاقات العمل الأنيقة إلى اللافتات الضخمة، بأعلى معايير الجودة وأسرع وقت تسليم.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1 text-base"
                >
                  احصل على عرض سعر
                  <ArrowLeft className="w-5 h-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 text-base"
                >
                  استكشف خدماتنا
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-6 mt-10 animate-fade-in-up delay-400">
                {stats.slice(0, 3).map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-2xl font-extrabold text-orange-400">{s.value}</div>
                    <div className="text-blue-200 text-sm">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="hidden lg:flex justify-center relative animate-fade-in-right delay-200">
              <div className="relative w-full max-w-lg">
                {/* Main image */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 animate-float">
                  <Image
                    src="https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="طباعة احترافية"
                    width={580}
                    height={400}
                    className="w-full h-80 object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                </div>

                {/* Floating cards */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-fade-in-up delay-500">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">طلب مكتمل!</p>
                    <p className="text-gray-500 text-xs">500 بطاقة عمل جاهزة</p>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3 animate-fade-in-left delay-500">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">تقييم 4.9/5</p>
                    <p className="text-gray-500 text-xs">من 2000+ تقييم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">خدماتنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              كل ما تحتاجه في مكان واحد
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              نقدم طيفاً واسعاً من خدمات الطباعة الاحترافية التي تلبي احتياجاتك الشخصية والتجارية
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Link
                key={s.title}
                href="/services"
                className={`card-hover group p-6 rounded-2xl ${s.bg} border border-transparent hover:border-blue-200 flex flex-col gap-4`}
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-blue-600 text-sm font-semibold mt-auto group-hover:gap-2 transition-all">
                  <span>اعرف أكثر</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-blue-700/30 hover:-translate-y-0.5"
            >
              جميع الخدمات
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-14 bg-gradient-to-r from-blue-800 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-2">{s.value}</div>
                <div className="text-blue-200 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Image side */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="طباعة احترافية"
                  width={300}
                  height={350}
                  className="rounded-2xl w-full h-52 object-cover shadow-lg"
                />
                <Image
                  src="https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="طباعة لافتات"
                  width={300}
                  height={350}
                  className="rounded-2xl w-full h-52 object-cover shadow-lg mt-8"
                />
                <Image
                  src="https://images.pexels.com/photos/6476586/pexels-photo-6476586.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="بطاقات العمل"
                  width={300}
                  height={350}
                  className="rounded-2xl w-full h-44 object-cover shadow-lg -mt-4"
                />
                <Image
                  src="https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="طباعة الكتب"
                  width={300}
                  height={350}
                  className="rounded-2xl w-full h-44 object-cover shadow-lg mt-4"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-sm font-bold px-6 py-3 rounded-full shadow-lg whitespace-nowrap">
                15+ سنة من الخبرة والتميز
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 lg:order-2">
              <span className="inline-block text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">لماذا نحن؟</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                نختلف عن غيرنا بالجودة والالتزام
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                نحن لسنا مجرد مطبعة — نحن شريكك الاستراتيجي لبناء الهوية البصرية لعملك. نجمع بين التقنية الحديثة والخبرة المتراكمة.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-orange-500 font-bold text-sm tracking-widest uppercase mb-3">أعمالنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">مشاريع مميزة أنجزناها</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">نماذج حقيقية من أعمالنا التي تعكس مستوى الجودة والاحترافية التي نقدمها</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="portfolio-item group relative overflow-hidden rounded-2xl shadow-md cursor-pointer">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="portfolio-overlay absolute inset-0 flex flex-col justify-end p-4">
                  <span className="text-orange-300 text-xs font-bold uppercase tracking-wider mb-1">{p.cat}</span>
                  <h3 className="text-white font-bold">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200"
            >
              عرض جميع الأعمال
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-orange-400 font-bold text-sm tracking-widest uppercase mb-3">آراء عملائنا</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">ماذا يقول عملاؤنا؟</h2>
            <p className="text-blue-200 text-lg max-w-xl mx-auto">رأي عملائنا هو أكبر جائزة نحصل عليها</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-blue-800/50 backdrop-blur-sm border border-blue-700/50 rounded-2xl p-6 hover:bg-blue-800/70 transition-colors">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-orange-400 fill-orange-400" />
                  ))}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-5">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{t.name}</p>
                    <p className="text-blue-300 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">هل أنت مستعد لطباعة مشروعك؟</h2>
              <p className="text-blue-200 text-lg mb-8 max-w-xl mx-auto">
                تواصل معنا الآن واحصل على عرض سعر مجاني. فريقنا جاهز لتحويل أفكارك إلى واقع مطبوع.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1"
                >
                  <Phone className="w-5 h-5" />
                  اتصل بنا الآن
                </Link>
                <a
                  href="https://wa.me/966500000000"
                  className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3.5 rounded-xl transition-all hover:shadow-xl hover:shadow-green-500/40 hover:-translate-y-1"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
