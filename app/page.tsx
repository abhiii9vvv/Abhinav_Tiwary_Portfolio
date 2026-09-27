import { Hero } from "@/components/home/Hero";
import { Proof } from "@/components/home/Proof";
import { Work } from "@/components/home/Work";
import { Experience } from "@/components/home/Experience";
import { Ops } from "@/components/home/Ops";
import { Stack } from "@/components/home/Stack";
import { Recognition } from "@/components/home/Recognition";
import { About } from "@/components/home/About";
import { Contact } from "@/components/home/Contact";
import { StructuredData } from "@/components/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      {/* Hero, tools strip, and numbers share the first screen on desktop. */}
      <div className="flex flex-col lg:min-h-[calc(100dvh-4rem)]">
        <Hero />
        <Proof />
      </div>
      <Work />
      <Experience />
      <Ops />
      <Stack />
      <Recognition />
      <About />
      <Contact />
    </>
  );
}
