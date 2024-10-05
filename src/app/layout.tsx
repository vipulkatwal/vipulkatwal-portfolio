import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google'
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vipul Katwal: Portfolio",
  description: "Web developer portfolio showcasing responsive and user-friendly interfaces",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${calistoga.variable}`}>
      <body className="bg-gray-900 text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}