import {
  PageWrapper,
  Inner,
  SectionLabel,
  PageTitle,
  Intro,
  ServicesList,
  ServiceItem,
  ServiceArrow,
  ServiceText,
  ServiceTitle,
  ServiceDesc,
  Divider,
  StatsGrid,
  StatCard,
  StatVal,
  StatLabel,
  StatNote,
  CtaBlock,
  CtaText,
  CtaBtn,
} from "./about.styles";

const services = [
  {
    title: "Domiciliation commerciale à Belgrade",
    desc: "Adresse centre-ville, gestion courrier, permanence téléphonique.",
  },
  {
    title: "Création de D.O.O (structure juridique serbe)",
    desc: "De l'immatriculation APR à l'ouverture de compte bancaire, clé en main.",
  },
  {
    title: "Installation personnelle en Serbie",
    desc: "Résidence temporaire, logement, banque, assurance — accompagnement de bout en bout.",
  },
  {
    title: "Suivi mensuel & mise en relation",
    desc: "Accès à mon réseau d'avocats, comptables et notaires locaux anglophones.",
  },
];

const stats = [
  { val: "15 %", label: "Impôt sur les sociétés" },
  { val: "10 %", label: "Flat tax sur revenus" },
  { val: "0 %", label: "Wealth tax" },
  { val: "−40 %", label: "Coût de vie vs France" },
];

export default function About() {
  return (
    <PageWrapper>
      <Inner>
        <SectionLabel>À propos</SectionLabel>

        <PageTitle>Djeeling Group</PageTitle>

        <Intro>
          Société de conseil fondée au Royaume-Uni, opérée depuis Belgrade,
          membre du groupe <strong>Acton Brothers Holding</strong>. Je guide les
          entrepreneurs et dirigeants francophones dans leur implantation en
          Serbie.
        </Intro>

        <Divider />

        <SectionLabel>Ce que j'accompagne</SectionLabel>

        <ServicesList>
          {services.map((s) => (
            <ServiceItem key={s.title}>
              <ServiceArrow>→</ServiceArrow>
              <ServiceText>
                <ServiceTitle>{s.title}</ServiceTitle>
                <ServiceDesc>{s.desc}</ServiceDesc>
              </ServiceText>
            </ServiceItem>
          ))}
        </ServicesList>

        <Divider />

        <SectionLabel>La Serbie en chiffres</SectionLabel>

        <StatsGrid>
          {stats.map((s) => (
            <StatCard key={s.label}>
              <StatVal>{s.val}</StatVal>
              <StatLabel>{s.label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>

        <StatNote>
          Un marché en pleine croissance, encore sous-exploité par les
          francophones. Candidate officielle à l'UE.
        </StatNote>

        <Divider />

        <CtaBlock>
          <CtaText>
            Vous envisagez une domiciliation ou une implantation en Serbie ?
          </CtaText>
          <CtaBtn href="mailto:jcgm@actonbrotherslondon.com?subject=Appel découverte Djeeling">
            Réserver un appel découverte →
          </CtaBtn>
        </CtaBlock>
      </Inner>
    </PageWrapper>
  );
}
