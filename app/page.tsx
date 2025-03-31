import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Events from "@/components/Events/Events";
import Gallery from "@/components/Gallery/Gallery";
import Hero from "@/components/Hero/Hero";
import Members from "@/components/Members/Members";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Members />
      <Gallery />
      <Contact />
    </main>
  );
}
