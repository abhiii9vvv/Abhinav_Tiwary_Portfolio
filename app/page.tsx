import { Hero } from "@/components/home/Hero";
import { Proof } from "@/components/home/Proof";
import { Work } from "@/components/home/Work";
import { Experience } from "@/components/home/Experience";
import { Stack } from "@/components/home/Stack";
import { Recognition } from "@/components/home/Recognition";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <Proof />
      <Work />
      <Experience />
      <Stack />
      <Recognition />
      <About />
      <Contact />
    </>
  );
}
