import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Certifications } from "@/components/sections/Certifications";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://abhinavtiwary.online";

export const metadata: Metadata = {
  title:
    "Certifications — Abhinav Tiwary, Full-Stack Developer & Gen AI Builder",
  description:
    "View Abhinav Tiwary's professional certifications in full-stack development, cloud, and AI — from platforms like Google, Meta, Coursera, and more.",
  alternates: {
    canonical: `${SITE_URL}/certifications`,
  },
  openGraph: {
    title: "Certifications — Abhinav Tiwary",
    description:
      "Professional certifications earned by Abhinav Tiwary across full-stack development, cloud computing, and artificial intelligence.",
    url: `${SITE_URL}/certifications`,
    type: "website",
  },
};

export default function CertificationsPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Certifications />
      </main>
      <Footer />
    </>
  );
}
