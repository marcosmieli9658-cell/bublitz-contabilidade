import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bublitz Contabilidade | Soluções contábeis para o seu crescimento',
  description: 'Contabilidade, fiscal, departamento pessoal, consultoria, MEI, imposto de renda e regularização em São José dos Campos.',
  icons: { icon: './bublitz-logo-escuro.jpeg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html>;
}
