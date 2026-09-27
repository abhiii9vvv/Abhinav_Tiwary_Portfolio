import type { Metadata } from "next";
import { Ops } from "@/components/home/Ops";
import { Stack } from "@/components/home/Stack";
import { Contact } from "@/components/home/Contact";
import { PageHeader } from "@/components/ui";
import { StructuredData } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site";

const TITLE = "Abhinav Tiwary's tech stack | Software & Cloud Engineer";
const DESCRIPTION = "The tech stack Abhinav Tiwary works with: Linux, Bash, AWS, Google Cloud, Docker, Kubernetes, PostgreSQL, Node.js, and React.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/skills` },
  openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}/skills` },
  twitter: { title: TITLE, description: DESCRIPTION },
};

export default function Page() {
  return (
    <>
      <StructuredData path="/skills" pageName="Tech stack" />
      <PageHeader title="Abhinav Tiwary's tech stack" intro={DESCRIPTION} />
      <Ops />
      <Stack />
      <Contact />
    </>
  );
}
