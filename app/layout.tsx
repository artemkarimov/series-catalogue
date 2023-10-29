import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import ThemeProvider from '@/app/components/ThemeProvider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Series Catalogue',
  description: 'App for displaying information about series',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <main>
        <ThemeProvider>{children}</ThemeProvider>
      </main>
    </body>
  </html>
);

export default RootLayout;
