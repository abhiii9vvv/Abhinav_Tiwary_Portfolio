import type { Metadata } from "next";
import { Experience } from "@/components/home/Experience";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "Abhinav Tiwary's experience | Full-Stack & Gen AI Developer";
const DESCRIPTION = "Experience of Abhinav Tiwary: TechOps Intern at Paytm, Technology & Operations Associate at The ARambha, and full-stack internships.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/experience` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/experience` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/experience" pageName="Experience" />
      <PageHeader title="Abhinav Tiwary's experience" intro={DESCRIPTION} />
      <Experience />
      <Contact />
    </>
  );
}
