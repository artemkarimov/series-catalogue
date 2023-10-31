import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import theme from '@/styles/theme';
import Providers from './providers';
import StyledComponentsRegistry from './registry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Series Catalogue',
  description: 'App for displaying information about series',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <Providers>
        <StyledComponentsRegistry>
          <NextTopLoader color={theme.colors.lightGray} />
          {children}
        </StyledComponentsRegistry>
      </Providers>
    </body>
  </html>
);

export default RootLayout;
