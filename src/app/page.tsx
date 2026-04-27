import Contact from "@/components/contacts/contacts";
import Distinction from "@/components/distinction/distinction";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/services";
import WhySerbia from "@/components/whySyberia/whySyberia";
import { TextsContainer } from "./landing.styles";

export default function Home() {
  return (
    <main>
      {/* <TextsContainer> */}
      <Hero />
      <WhySerbia />
      <Services />
      <Distinction />
      <Contact />
      {/* </TextsContainer> */}
    </main>
  );
}
