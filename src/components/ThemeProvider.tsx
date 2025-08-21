"use client";

import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function NextThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
      {children}
    </ThemeProvider>
  );
}
