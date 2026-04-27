import Services from "../services/services";
import {
  PresentationBack,
  // Weight,
  PresentationContainer,
} from "./about.styles";

export default function About() {
  return (
    <PresentationBack>
      <PresentationContainer>
        <strong>Djeeling Group </strong> est une société de conseil fondée au
        Royaume-Uni, opérée depuis Belgrade, membre du groupe{" "}
        <strong>Acton Brothers Holding </strong>qui guide et accompagne les
        entrepreneurs et dirigeants francophones dans leur implantation en
        Serbie.
      </PresentationContainer>

      <Services />
    </PresentationBack>
  );
}
