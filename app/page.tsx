import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Management from "@/components/sections/Management";
import Ideology from "@/components/sections/Ideolody";
import Services from "@/components/sections/Service";
import Process from "@/components/sections/Process";
import Engagement from "@/components/sections/Engagement";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Management />
      <Ideology />
      <Services />
      <Process />
      <Engagement />
      <Clients />
      <Contact />
    </>
  );
}
