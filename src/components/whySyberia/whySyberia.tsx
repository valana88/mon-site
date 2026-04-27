import {
  Grid,
  Inner,
  Label,
  Note,
  Section,
  StatCard,
  StatLabel,
  stats,
  StatVal,
} from "./whySiberia.styles";

export default function WhySerbia() {
  return (
    <Section>
      <Inner>
        <Label>Pourquoi la Serbie ?</Label>
        <Grid>
          {stats.map((s) => (
            <StatCard key={s.label}>
              <StatVal>{s.val}</StatVal>
              <StatLabel>{s.label}</StatLabel>
            </StatCard>
          ))}
        </Grid>
        <Note>
          Candidate officielle à l'UE. Un environnement fiscal parmi les plus
          favorables d'Europe — encore peu exploité par les francophones.
        </Note>
      </Inner>
    </Section>
  );
}
