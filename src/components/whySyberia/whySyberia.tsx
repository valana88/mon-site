import {
  WhySection,
  WhyInner,
  WhyEyebrow,
  WhyTitle,
  WhyTitleAccent,
  WhyLead,
  StatsBand,
  StatItem,
  StatVal,
  StatValSuffix,
  StatItemLabel,
} from "./whySiberia.styles";

const stats = [
  { val: "10", suffix: "%", label: "Flat tax sur revenus" },
  { val: "0", suffix: "%", label: "Wealth tax" },
  { val: "−40", suffix: "%", label: "Coût de vie vs France" },
  { val: "UE", suffix: "", label: "Candidate officielle" },
];

export default function WhySerbia() {
  return (
    <WhySection id="serbia">
      <WhyInner>
        <WhyEyebrow>La Serbie, en bref</WhyEyebrow>
        <WhyTitle>
          Un environnement fiscal{" "}
          <WhyTitleAccent>parmi les plus favorables</WhyTitleAccent> d'Europe.
        </WhyTitle>
        <WhyLead>
          Encore peu exploité par les francophones — un marché en pleine
          croissance, candidate officielle à Union européenne.
        </WhyLead>
      </WhyInner>

      <StatsBand>
        {stats.map((s) => (
          <StatItem key={s.label}>
            <StatVal>
              {s.val}
              {s.suffix && <StatValSuffix>{s.suffix}</StatValSuffix>}
            </StatVal>
            <StatItemLabel>{s.label}</StatItemLabel>
          </StatItem>
        ))}
      </StatsBand>
    </WhySection>
  );
}
