import Link from 'next/link';
import { Printer, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const services = [
  { label: 'نسخ وطباعة المستندات', href: '/services' },
  { label: 'طباعة الكتب والكتيبات', href: '/services' },
  { label: 'بطاقات العمل', href: '/services' },
  { label: 'الفلايرز والبروشورات', href: '/services' },
  { label: 'اللافتات والرول أب', href: '/services' },
  { label: 'الطباعة الكبيرة', href: '/services' },
];

const quickLinks = [
  { label: 'الرئيسية', href: '/' },
  { label: 'خدماتنا', href: '/services' },
  { label: 'أعمالنا', href: '/portfolio' },
  { label: 'من نحن', href: '/about' },
  { label: 'اتصل بنا', href: '/contact' },
];

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1HDXJWk2Vx/?mibextid=wwXIfr', label: 'فيسبوك', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: 'https://www.instagram.com/__maaanaa_56?igsh=MTNsbnkxd2VyaW9seQ%3D%3D&utm_source=qr', label: 'إنستغرام', color: 'hover:bg-pink-600' },
  { icon: Twitter, href: '#', label: 'تويتر', color: 'hover:bg-sky-500' },
  { icon: Youtube, href: '#', label: 'يوتيوب', color: 'hover:bg-red-600' },
];

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Printer className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-extrabold text-white">Print</span>
                <span className="text-2xl font-extrabold text-orange-400">Pro</span>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              شركة طباعة احترافية متخصصة في تقديم أعلى مستويات الجودة في جميع خدمات الطباعة منذ أكثر من 15 عاماً.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`w-9 h-9 bg-blue-900 ${color} rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 pb-2 border-b border-blue-800">خدماتنا</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-blue-200 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition-transform flex-shrink-0" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 pb-2 border-b border-blue-800">روابط سريعة</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-blue-200 hover:text-orange-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full group-hover:scale-125 transition-transform flex-shrink-0" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-5 pb-2 border-b border-blue-800">تواصل معنا</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+201148780854" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors mt-0.5">
                    <Phone className="w-4 h-4 text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 mb-0.5">هاتف</p>
                    <p className="text-blue-100 text-sm font-medium">01148780854</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:om3246362@gmail.com" className="flex items-start gap-3 group">
                  <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors mt-0.5">
                    <Mail className="w-4 h-4 text-orange-400 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 mb-0.5">البريد الإلكتروني</p>
                    <p className="text-blue-100 text-sm font-medium">om3246362@gmail.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 mb-0.5">العنوان</p>
                    <p className="text-blue-100 text-sm">شارع احمد عبدالحفيظ، المعادي،القاهرة</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} PrintPro. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-blue-300 hover:text-orange-400 text-xs transition-colors">سياسة الخصوصية</a>
            <span className="text-blue-700">|</span>
            <a href="#" className="text-blue-300 hover:text-orange-400 text-xs transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
