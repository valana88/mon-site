import {
  Arrow,
  Item,
  ItemDesc,
  ItemText,
  ItemTitle,
  Label,
  List,
  Section,
} from "./services.styles";

const services = [
  {
    title: "Domiciliation à Belgrade",
    desc: "Adresse professionnelle dans le centre historique de Belgrade pour votre société.",
  },
  {
    title: "Création de D.O.O (SARL serbe)",
    desc: "Constitution de votre structure juridique serbe de A à Z — statuts, immatriculation, compte bancaire.",
  },
  {
    title: "Installation personnelle",
    desc: "Accompagnement résidence, ouverture de compte, intégration dans le réseau local francophone.",
  },
];

export default function Services() {
  return (
    <Section>
      <Label>Ce que j'accompagne</Label>
      <List>
        {services.map((s) => (
          <Item key={s.title}>
            <Arrow>→</Arrow>
            <ItemText>
              <ItemTitle>{s.title}</ItemTitle>
              <ItemDesc>{s.desc}</ItemDesc>
            </ItemText>
          </Item>
        ))}
      </List>
    </Section>
  );
}
