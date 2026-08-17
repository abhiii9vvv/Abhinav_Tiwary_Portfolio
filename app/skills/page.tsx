import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Skills } from "@/components/sections/Skills";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://www.abhinavtiwary.online";

export const metadata: Metadata = {
  title: "Skills — Abhinav Tiwary, Full-Stack Developer & Gen AI Builder",
  description:
    "Explore Abhinav Tiwary's technical skill set — including Next.js, React, TypeScript, Node.js, Python, LLMs, and modern AI tooling for building full-stack applications.",
  alternates: {
    canonical: `${SITE_URL}/skills`,
  },
  openGraph: {
    title: "Skills — Abhinav Tiwary",
    description:
      "A deep dive into the technologies and tools Abhinav uses — from React and Next.js to Generative AI, LangChain, and cloud platforms.",
    url: `${SITE_URL}/skills`,
    type: "website",
  },
};

export default function SkillsPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Skills />
      </main>
      <Footer />
    </>
  );
}
