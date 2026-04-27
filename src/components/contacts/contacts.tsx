import {
  ContactSection,
  ContactInner,
  ContactGrid,
  ContactLeft,
  ContactEyebrow,
  ContactTitle,
  ContactSub,
  Buttons,
  BtnPrimary,
  BtnSecondary,
  ContactRight,
  InfoRow,
  InfoLabel,
  InfoValue,
  EmailLink,
} from "./contacts.styles";

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContactInner>
        <ContactGrid>
          <ContactLeft>
            <ContactEyebrow>Nous contacter</ContactEyebrow>
            <ContactTitle>
              Vous envisagez une implantation en Serbie ?
            </ContactTitle>
            <ContactSub>
              Réservez un appel découverte de 30 minutes — sans engagement — ou
              écrivez-nous directement.
            </ContactSub>
            <Buttons>
              <BtnPrimary href="mailto:jcgm@actonbrotherslondon.com?subject=Appel découverte Djeeling">
                Appel découverte 30 min →
              </BtnPrimary>
              <BtnSecondary href="mailto:jcgm@actonbrotherslondon.com">
                Écrire un message
              </BtnSecondary>
            </Buttons>
          </ContactLeft>

          <ContactRight>
            <InfoRow>
              <InfoLabel>Bureau</InfoLabel>
              <InfoValue>Belgrade, Serbie</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Email</InfoLabel>
              <EmailLink href="mailto:jcgm@actonbrotherslondon.com">
                jcgm@actonbrotherslondon.com
              </EmailLink>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Langues</InfoLabel>
              <InfoValue>Français · English</InfoValue>
            </InfoRow>
            <InfoRow>
              <InfoLabel>Groupe</InfoLabel>
              <InfoValue>Acton Brothers Holding</InfoValue>
            </InfoRow>
          </ContactRight>
        </ContactGrid>
      </ContactInner>
    </ContactSection>
  );
}
