import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://www.abhinavtiwary.online";

export const metadata: Metadata = {
  title: "About — Abhinav Tiwary, Full-Stack Developer & Gen AI Builder",
  description:
    "Learn about Abhinav Tiwary — a Full-Stack Developer and Gen AI Builder from Greater Noida, India, passionate about building intelligent web experiences with Next.js, TypeScript, and AI.",
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: "About — Abhinav Tiwary",
    description:
      "Full-Stack Developer & Gen AI Builder. Discover Abhinav's story, values, and what drives him to build at the intersection of AI and web.",
    url: `${SITE_URL}/about`,
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <About />
      </main>
      <Footer />
    </>
  );
}
