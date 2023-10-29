'use client';

import { ReactNode } from 'react';
import { ThemeProvider as Provider } from 'styled-components';

import theme from '@/styles/theme';

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <Provider theme={theme}>{children}</Provider>;
};

export default ThemeProvider;
