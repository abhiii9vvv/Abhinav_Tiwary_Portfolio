import type { Metadata } from "next";
import { Sidebar } from "@/components/Sidebar";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

const SITE_URL = "https://www.abhinavtiwary.online";

export const metadata: Metadata = {
  title: "Contact — Abhinav Tiwary, Full-Stack Developer & Gen AI Builder",
  description:
    "Get in touch with Abhinav Tiwary — open to freelance projects, collaborations, internships, and full-time opportunities in full-stack development and AI.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact — Abhinav Tiwary",
    description:
      "Reach out to Abhinav Tiwary for collaborations, freelance work, or just to say hello. Available for full-stack and AI projects.",
    url: `${SITE_URL}/contact`,
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      <Sidebar />
      <main id="main-content">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
