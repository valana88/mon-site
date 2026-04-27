import Services from "../services/services";
import {
  PresentationBack,
  Weight,
  PresentationContainer,
} from "./about.styles";

export default function About() {
  return (
    <PresentationBack>
      {/* <SectionLabel>À propos</SectionLabel>

        <PageTitle>Djeeling Group</PageTitle> */}

      <PresentationContainer>
        <Weight>Djeeling Group </Weight>est une société de conseil fondée au
        Royaume-Uni, opérée depuis Belgrade, membre du groupe{" "}
        <Weight>Acton Brothers Holding</Weight> qui guide et accompagne les
        entrepreneurs et dirigeants francophones dans leur implantation en
        Serbie.
      </PresentationContainer>

      <Services />
    </PresentationBack>
  );
}
