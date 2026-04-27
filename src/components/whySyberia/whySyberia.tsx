import { SectionCenterLabel } from "../about/about.styles";
import {
  Grid,
  Note,
  SectionWhySerbia,
  StatCard,
  StatLabel,
  stats,
  StatVal,
} from "./whySiberia.styles";

export default function WhySerbia() {
  return (
    <SectionWhySerbia>
      <SectionCenterLabel>Pourquoi la Serbie ?</SectionCenterLabel>

      <Note>
        {/* Candidate officielle à l'UE.  */}
        Un environnement fiscal parmi les plus favorables d'Europe.
      </Note>

      <Grid>
        {stats.map((s) => (
          <StatCard key={s.label}>
            <StatVal>{s.val}</StatVal>
            <StatLabel>{s.label}</StatLabel>
          </StatCard>
        ))}
      </Grid>
    </SectionWhySerbia>
  );
}
