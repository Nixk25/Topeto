import About from "@/components/About/About";
import Events from "@/components/Events/Events";
import Hero from "@/components/Hero/Hero";
import Members from "@/components/Members/Members";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Events />
      <Members />
    </main>
  );
}
