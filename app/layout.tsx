import type { Metadata, Viewport } from "next";
import { Ubuntu, Ubuntu_Mono } from "next/font/google";
import { profile } from "@/content/profile";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/Reveal";
import { CommandPalette } from "@/components/overlays/CommandPalette";
import { RecruiterView } from "@/components/overlays/RecruiterView";
import { themeBootScript } from "@/lib/theme";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const OG_TITLE = `${profile.name} (Tiwari) | ${profile.role}`;
const OG_DESCRIPTION =
  "Abhinav Tiwary (Abhinav Tiwari), full-stack developer and Gen AI builder in Delhi NCR. TechOps Intern at Paytm. Projects, experience, and resume.";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-ubuntu",
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f3" },
    { media: "(prefers-color-scheme: dark)", color: "#121110" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: OG_TITLE,
    template: `%s | ${profile.name}`,
  },
  description: OG_DESCRIPTION,
  keywords: [
    "Abhinav Tiwary",
    "Abhinav Tiwari",
    "Abhinav Tiwary portfolio",
    "Abhinav Tiwari developer",
    "abhiii9vvv",
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
    "Delhi NCR",
  ],
  authors: [{ name: profile.name, url: profile.github }],
  creator: profile.name,
  publisher: profile.name,
  openGraph: {
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    url: SITE_URL,
    siteName: `${profile.name}, Portfolio`,
    images: [{ url: "/social/og-image.png", width: 1200, height: 630, alt: `${profile.name}, ${profile.role}` }],
    locale: "en_IN",
    type: "profile",
    firstName: "Abhinav",
    lastName: "Tiwary",
    username: "abhiii9vvv",
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: ["/social/og-image.png"],
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
    canonical: SITE_URL,
  },
  applicationName: profile.name,
  category: "technology",
  formatDetection: { telephone: false },
  verification: {
    // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the token from Google Search Console.
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${ubuntu.variable} ${ubuntuMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootScript }} />
      </head>
      <body className="min-h-[100dvh]">
        <Nav />
        <main id="main-content">{children}</main>
        <Footer />
        <CommandPalette />
        <RecruiterView />
        <RevealObserver />
      </body>
    </html>
  );
}
