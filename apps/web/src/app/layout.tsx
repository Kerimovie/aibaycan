import type { ReactNode } from 'react';
import './globals.css';

// Root layout — `[locale]/layout.tsx` əsl <html> struktununu təyin edir.
// Bu, Next.js-in root layout tələbini ödəyir (children passthrough).
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
