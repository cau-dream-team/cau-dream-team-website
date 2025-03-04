import '@/app/globals.css';
import { Providers } from '@/app/providers';
import type { Metadata } from 'next';
import type { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Lato } from 'next/font/google';
import type { ReactNode } from 'react';

const lato: NextFontWithVariable = Lato({
  variable: '--font-lato',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dream Team',
  description: 'Chung-Ang University Dream Team',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" suppressHydrationWarning>
    <body className={`${lato.variable} flex min-h-screen items-center justify-center antialiased`}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
