import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Intl App",
  description: "Made with love by Nelli",
};

interface LocaleLayoutProps {
  children: React.ReactNode;
  locale: string;
}

/* interface LocaleLayoutProps {
  children: React.ReactNode;
  params?: { locale: string };
} */

export default function LocaleLayout({ children, locale }: LocaleLayoutProps) {
  /*   export default function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const locale = params?.locale || "en"; */

  return (
    <html lang={locale}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
