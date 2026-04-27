import {
  Card,
  Inner,
  Label,
  Section,
  Highlight,
  Text,
} from "./distinction.styles";

export default function Distinction() {
  return (
    <Section>
      <Inner>
        <Label>Ce qui me distingue</Label>
        <Card>
          <Text>
            Je ne pilote pas vos démarches depuis Paris.{" "}
            <Highlight>Je suis sur place à Belgrade</Highlight>, disponible en
            français, avec un réseau d'avocats, comptables et notaires serbes
            anglophones que j'ai sélectionnés moi-même.
          </Text>
        </Card>
      </Inner>
    </Section>
  );
}
