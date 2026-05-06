import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Page() {
  return (
    <>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1 left-1/2 w-75 h-75 md:w-125 md:h-125 bg-primary/20 blur-[120px] rounded-full -translate-x-1/2"></div>
      </div>
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
