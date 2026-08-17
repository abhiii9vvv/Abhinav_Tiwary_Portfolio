import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { profile } from "@/content/profile";
import { StructuredData } from "@/components/StructuredData";
import { ResumeFab } from "@/components/ResumeFab";
import "./globals.css";

const SITE_URL = "https://www.abhinavtiwary.online";
const OG_TITLE = "Abhinav Tiwary, Full-Stack Developer & Gen AI Builder";
const OG_DESCRIPTION = profile.headline;

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: OG_TITLE,
  description: OG_DESCRIPTION,
  keywords: [
    "Abhinav Tiwary",
    "Full-Stack Developer",
    "Gen AI Builder",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Generative AI",
    "AI Agents",
    "Web Developer Portfolio",
    "Sharda University",
    "Greater Noida",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  publisher: profile.name,
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: `${profile.name}, Portfolio`,
    images: [
      {
        url: "/social/og-image.png",
        width: 1200,
        height: 630,
        alt: profile.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/social/twitter-card.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.abhinavtiwary.online",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} antialiased`}>
      <head>
        <StructuredData />
      </head>
      <body>
        <div className="lg:pl-[120px]">{children}</div>
        <ResumeFab />
      </body>
    </html>
  );
}
