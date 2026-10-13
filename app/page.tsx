import { Hero } from "@/components/home/Hero";
import { Proof } from "@/components/home/Proof";
import { Work } from "@/components/home/Work";
import { Experience } from "@/components/home/Experience";
import { Showreel } from "@/components/home/Showreel";
import { Pipeline } from "@/components/home/Pipeline";
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
      <div aria-hidden="true" className="scroll-progress" />
      {/* Hero, tools strip, and numbers share the first screen on desktop. */}
      <div className="flex flex-col lg:min-h-[calc(100dvh-4rem)]">
        <Hero />
        <Proof />
      </div>
      <Showreel />
      <Work />
      <Experience />
      <Pipeline />
      <Ops />
      <Stack />
      <Recognition />
      <About />
      <Contact />
    </>
  );
}
