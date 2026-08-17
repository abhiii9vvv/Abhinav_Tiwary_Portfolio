import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://abhinavtiwary.online";

export const metadata: Metadata = {
  title: "Experience — Abhinav Tiwary, Full-Stack Developer & Gen AI Builder",
  description:
    "Browse Abhinav Tiwary's professional experience — internships, freelance projects, and roles where he built production-grade full-stack and AI-powered applications.",
  alternates: {
    canonical: `${SITE_URL}/experience`,
  },
  openGraph: {
    title: "Experience — Abhinav Tiwary",
    description:
      "Abhinav's professional journey — roles, projects, and impact across full-stack development and generative AI.",
    url: `${SITE_URL}/experience`,
    type: "website",
  },
};

export default function ExperiencePage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Experience />
      </main>
      <Footer />
    </>
  );
}
