import Services from "../services/services";
import {
  AboutSection,
  AboutInner,
  AboutGrid,
  AboutMain,
  Eyebrow,
  EyebrowLine,
  Title,
  TitleAccent,
  Lead,
  CtaRow,
  BtnPrimary,
  BtnSecondary,
  StatBox,
  StatNumber,
  StatPercent,
  StatLabel,
} from "./about.styles";

export default function About() {
  return (
    <AboutSection id="about">
      <AboutInner>
        <Eyebrow>
          {/* <EyebrowLine /> */}
          Conseil &middot; Belgrade
        </Eyebrow>

        <AboutGrid>
          <AboutMain>
            <Title>
              Implantez-vous en Serbie
              <br />
              <TitleAccent>sans perdre six mois</TitleAccent>
              <br />
              en démarches.
            </Title>

            <Lead>
              <strong>Djeeling Group</strong> est une société de conseil fondée
              au Royaume-Uni, opérée depuis Belgrade, membre du groupe{" "}
              <strong>Acton Brothers Holding</strong>. Nous accompagnons les
              entrepreneurs et dirigeants francophones dans leur implantation en
              Serbie.
            </Lead>

            <CtaRow>
              <BtnPrimary href="mailto:jcgm@actonbrotherslondon.com?subject=Appel découverte Djeeling">
                Appel découverte 30 min →
              </BtnPrimary>
              <BtnSecondary href="#services">Voir les services</BtnSecondary>
            </CtaRow>
          </AboutMain>

          <StatBox>
            <StatNumber>
              15<StatPercent>%</StatPercent>
            </StatNumber>
            <StatLabel>IS en Serbie</StatLabel>
          </StatBox>
        </AboutGrid>
      </AboutInner>

      <Services />
    </AboutSection>
  );
}
