import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: { icon: "/logo_bm.svg" },
  title: "Blue Monkeys Medical | Premium Marketing für Arztpraxen",
  description:
    "Websites, SEO und Werbung speziell für Ärzte und Zahnärzte. Full-Service Agentur aus Wien. Mehr Patienten. Bessere Patienten.",
  keywords: [
    "Praxis-Marketing",
    "Arzt Website",
    "Zahnarzt Website",
    "SEO für Ärzte",
    "Medical Marketing",
    "Wien",
  ],
  authors: [{ name: "Blue Monkeys" }],
  openGraph: {
    title: "Blue Monkeys Medical | Premium Marketing für Arztpraxen",
    description: "Websites, SEO und Werbung speziell für Arztpraxen. Full-Service Agentur aus Wien.",
    url: "https://medical.bluemonkeys.at",
    siteName: "Blue Monkeys Medical",
    locale: "de_AT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Monkeys Medical",
    description: "Premium Marketing für Arztpraxen aus Wien.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">
        {/* Noise Overlay */}
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}
