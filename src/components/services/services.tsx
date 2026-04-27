import {
  ServicesContainer,
  SectionLabel,
  ServicesList,
  ServiceItem,
  ServiceArrow,
  ServiceText,
  ServiceTitle,
  ServiceDesc,
} from "../about/about.styles";

const services = [
  {
    title: "La domiciliation commerciale à Belgrade",
    desc: "Adresse centre-ville, gestion courrier, permanence téléphonique.",
  },
  {
    title: "La création de D.O.O (structure juridique serbe)",
    desc: "De l'immatriculation APR à l'ouverture de compte bancaire, clé en main.",
  },
  {
    title: "L'Installation personnelle en Serbie",
    desc: "Résidence temporaire, logement, banque, assurance — accompagnement de bout en bout.",
  },
  {
    title: "Le suivi mensuel & mise en relation",
    desc: "Accès à mon réseau d'avocats, comptables et notaires locaux anglophones.",
  },
];

export default function About() {
  return (
    <ServicesContainer>
      <SectionLabel>Djeeling Group vous accompagne dans :</SectionLabel>

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
    </ServicesContainer>
  );
}
