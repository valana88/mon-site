import About from "@/components/about/about";
import { Back } from "@/components/about/about.styles";
import Contact from "@/components/contacts/contacts";
import WhySerbia from "@/components/whySyberia/whySyberia";

export default function Home() {
  return (
    <Back>
      <About />
      <WhySerbia />
      <Contact />
    </Back>
  );
}
