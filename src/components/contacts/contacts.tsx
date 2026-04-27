import { SectionCenterLabel } from "../about/about.styles";
import {
  BtnPrimary,
  BtnSecondary,
  Buttons,
  EmailLink,
  InfoIcon,
  InfoList,
  InfoRow,
  Label,
  Section,
  Sub,
  Title,
} from "./contacts.styles";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionCenterLabel>Nous contacter</SectionCenterLabel>
      <Title>Vous envisagez une implantation en Serbie ?</Title>
      <Sub>
        Réservez un appel découverte de 30 min (sans engagement) ou écrivez-nous
        directement.
      </Sub>

      <InfoList>
        <InfoRow>
          <InfoIcon>📍</InfoIcon>
          <span>Belgrade, Serbie</span>
        </InfoRow>
        <InfoRow>
          <InfoIcon>✉️</InfoIcon>
          <EmailLink href="mailto:jcgm@actonbrotherslondon.com">
            jcgm@actonbrotherslondon.com
          </EmailLink>
        </InfoRow>
        <InfoRow>
          <InfoIcon>🌐</InfoIcon>
          <span>Djeeling Group — Acton Brothers Holding</span>
        </InfoRow>
      </InfoList>

      <Buttons>
        <BtnPrimary href="mailto:jcgm@actonbrotherslondon.com?subject=Appel découverte Djeeling">
          Appel découverte 30 min →
        </BtnPrimary>
        <BtnSecondary href="mailto:jcgm@actonbrotherslondon.com">
          Écrire un message
        </BtnSecondary>
      </Buttons>
    </Section>
  );
}
