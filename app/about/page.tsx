import type { Metadata } from "next";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "About Abhinav Tiwary | Full-Stack & Gen AI Developer";
const DESCRIPTION = "Abhinav Tiwary (Abhinav Tiwari) is a full-stack developer and Gen AI builder in Delhi NCR, and a final-year B.Tech CSE student at Sharda University.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/about` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/about" pageName="About" />
      <PageHeader title="About Abhinav Tiwary" intro={DESCRIPTION} />
      <About />
      <Contact />
    </>
  );
}
