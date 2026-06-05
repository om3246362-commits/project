import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PrintPro - خدمات الطباعة الاحترافية',
  description: 'شركة طباعة احترافية متخصصة في طباعة الكتب والمطبوعات التجارية واللافتات والبطاقات وجميع خدمات الطباعة',
  keywords: 'طباعة، بطاقات عمل، لافتات، كتب، بروشورات، فلايرز، طباعة احترافية',
  openGraph: {
    title: 'PrintPro - خدمات الطباعة الاحترافية',
    description: 'شركة طباعة احترافية متخصصة في جميع خدمات الطباعة',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
