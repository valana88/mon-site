import {
  ServicesSection,
  ServicesInner,
  ServicesHeader,
  ServicesEyebrow,
  ServicesTitle,
  ServicesGrid,
  ServiceCard,
  ServiceNum,
  ServiceTitle,
  ServiceDesc,
} from "./services.styles";

const services = [
  {
    num: "01",
    title: "Domiciliation à Belgrade",
    desc: "Adresse dans le centre-ville historique, gestion du courrier, permanence téléphonique.",
  },
  {
    num: "02",
    title: "Création de D.O.O",
    desc: "Structure juridique serbe — de l'immatriculation APR à l'ouverture du compte bancaire, clé en main.",
  },
  {
    num: "03",
    title: "Installation personnelle",
    desc: "Résidence temporaire, logement, banque, assurance — accompagnement de bout en bout.",
  },
  {
    num: "04",
    title: "Suivi & réseau local",
    desc: "Accès à mon réseau d'avocats, comptables et notaires serbes anglophones, suivi mensuel.",
  },
];

export default function Services() {
  return (
    <ServicesSection id="services">
      <ServicesInner>
        <ServicesHeader>
          <ServicesEyebrow>Services</ServicesEyebrow>
          <ServicesTitle>Nous vous accompagnons, de A à Z</ServicesTitle>
        </ServicesHeader>

        <ServicesGrid>
          {services.map((s) => (
            <ServiceCard key={s.num}>
              <ServiceNum>{s.num}</ServiceNum>
              <ServiceTitle>{s.title}</ServiceTitle>
              <ServiceDesc>{s.desc}</ServiceDesc>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesInner>
    </ServicesSection>
  );
}
