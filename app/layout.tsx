import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'VeluxePay | Global Payments & Digital Wallet', description: 'VeluxePay digital wallet experience. Secure wallet features powered by approved integrations.' };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
