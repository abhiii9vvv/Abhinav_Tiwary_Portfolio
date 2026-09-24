import type { Metadata } from "next";
import { Recognition } from "@/components/home/Recognition";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "Abhinav Tiwary's certifications | Full-Stack & Gen AI Developer";
const DESCRIPTION = "Certifications held by Abhinav Tiwary (Abhinav Tiwari), including Google Cloud Generative AI Leader, NPTEL Elite (99%), and the JPMorgan Chase software engineering simulation.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/certifications` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/certifications` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/certifications" pageName="Certifications" />
      <PageHeader title="Abhinav Tiwary's certifications" intro={DESCRIPTION} />
      <Recognition />
      <Contact />
    </>
  );
}
