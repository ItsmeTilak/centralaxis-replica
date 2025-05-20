import { Inter } from 'next/font/google';
import '../styles/globals.css';

// Initialize the Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'CentralAxis - Data Center Infrastructure Management',
  description: 'Advanced data center infrastructure management solutions for modern enterprises.',
  keywords: 'data center, infrastructure management, DCIM, network monitoring, asset management',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body suppressHydrationWarning={true} className={inter.className}>
        {children}
      </body>
    </html>
  );
}