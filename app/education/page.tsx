import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "Abhinav Tiwary's education | Full-Stack & Gen AI Developer";
const DESCRIPTION = "Abhinav Tiwary (Abhinav Tiwari) is pursuing a B.Tech in Computer Science Engineering at Sharda University, Greater Noida (2023-2027).";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/education` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/education` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/education" pageName="Education" />
      <PageHeader title="Abhinav Tiwary's education" intro={DESCRIPTION} />
      <About />
      <Contact />
    </>
  );
}
