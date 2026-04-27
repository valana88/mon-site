import {
  Section,
  Tags,
  Tag,
  Title,
  Subtitle,
  Buttons,
  BtnSecondary,
  BtnPrimary,
} from "./hero.styles";

export default function Hero() {
  return (
    <Section>
      <div>
        <Tags>
          <Tag>Belgrade, Serbie</Tag>
          <Tag>Français & English</Tag>
          <Tag>Djeeling Group</Tag>
        </Tags>

        <Title>
          Implantez-vous en Serbie —{" "}
          <span style={{ color: "var(--green)" }}>sans perdre 6 mois</span> dans
          les démarches.
        </Title>

        <Subtitle>
          Je suis Jean Christian GIRERD, fondateur de Djeeling Group (Acton
          Brothers Holding). Basé à Belgrade, bilingue, j'accompagne les
          entrepreneurs et dirigeants francophones dans leur implantation en
          Serbie.
        </Subtitle>

        <Buttons>
          <BtnPrimary href="#contact">
            Réserver un appel découverte →
          </BtnPrimary>
          <BtnSecondary href="mailto:jcgm@actonbrotherslondon.com">
            Écrire directement
          </BtnSecondary>
        </Buttons>
      </div>
    </Section>
  );
}
