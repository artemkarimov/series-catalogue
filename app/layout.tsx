import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';

import Providers from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Series Catalogue',
  description: 'App for displaying information about series',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
