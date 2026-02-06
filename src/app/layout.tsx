import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praxis-Marketing für Ärzte & Zahnärzte | Blue Monkeys Medical",
  description:
    "Websites, SEO und Werbung speziell für Arztpraxen und Zahnarztpraxen. Full-Service Agentur aus Wien. Jetzt kostenlose Erstberatung.",
  keywords: [
    "Praxis-Marketing",
    "Arzt Website",
    "Zahnarzt Website",
    "SEO für Ärzte",
    "Medical Marketing",
    "Praxis-Website",
    "Wien",
    "Österreich",
  ],
  authors: [{ name: "Blue Monkeys" }],
  openGraph: {
    title: "Praxis-Marketing für Ärzte & Zahnärzte | Blue Monkeys Medical",
    description:
      "Websites, SEO und Werbung speziell für Arztpraxen. Full-Service Agentur aus Wien.",
    url: "https://medical.bluemonkeys.at",
    siteName: "Blue Monkeys Medical",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praxis-Marketing für Ärzte & Zahnärzte",
    description: "Full-Service Digital-Agentur für Arztpraxen aus Wien.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6798df",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
