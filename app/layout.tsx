import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://bublitzcontabilidade.com.br'),
  title: 'Contabilidade em São José dos Campos | Bublitz',
  description: 'Contabilidade em São José dos Campos para empresas, MEIs, prestadores de serviços e pessoas físicas. Conheça as soluções da Bublitz.',
  alternates: {
    canonical: '/',
    languages: { 'pt-BR': '/', 'x-default': '/' },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Bublitz Contabilidade',
    title: 'Contabilidade em São José dos Campos | Bublitz',
    description: 'Soluções contábeis, fiscais e trabalhistas para empresas, MEIs, prestadores de serviços e pessoas físicas.',
    url: '/',
    images: [{ url: '/bublitz-logo-escuro.jpeg', width: 1280, height: 1101, alt: 'Bublitz Contabilidade' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contabilidade em São José dos Campos | Bublitz',
    description: 'Soluções contábeis, fiscais e trabalhistas para empresas, MEIs, prestadores de serviços e pessoas físicas.',
    images: ['/bublitz-logo-escuro.jpeg'],
  },
  icons: {
    icon: [
      { url: './bublitz-icon-96.png', type: 'image/png', sizes: '96x96' },
      { url: './bublitz-icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: './apple-touch-icon.png', type: 'image/png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html>;
}
