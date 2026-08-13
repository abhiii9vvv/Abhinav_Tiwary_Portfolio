import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { profile } from "@/content/profile";
import { StructuredData } from "@/components/StructuredData";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

const SITE_URL = "https://abhinavtiwary.online";
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
        url: profile.headshot,
        width: 512,
        height: 512,
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
    images: [profile.headshot],
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
    canonical: "/",
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
        <ScrollProgress />
        <div className="lg:pl-[88px]">{children}</div>
      </body>
    </html>
  );
}
