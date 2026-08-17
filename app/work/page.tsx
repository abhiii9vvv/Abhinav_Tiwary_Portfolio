import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { StrongProjects } from "@/components/sections/StrongProjects";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://abhinavtiwary.online";

export const metadata: Metadata = {
  title: "Work — Abhinav Tiwary, Full-Stack Developer & Gen AI Builder",
  description:
    "Discover Abhinav Tiwary's featured projects and portfolio work — full-stack web apps, AI integrations, and open-source contributions built with Next.js, React, and modern AI tools.",
  alternates: {
    canonical: `${SITE_URL}/work`,
  },
  openGraph: {
    title: "Work — Abhinav Tiwary",
    description:
      "Featured projects and portfolio work by Abhinav Tiwary — spanning full-stack development, generative AI, and scalable web applications.",
    url: `${SITE_URL}/work`,
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <FeaturedWork />
        <StrongProjects />
      </main>
      <Footer />
    </>
  );
}
