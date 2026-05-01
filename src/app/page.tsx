import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import About from "@/components/sections/About";
import Process from "@/components/sections/Process";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}