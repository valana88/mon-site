import {
  FooterWrapper,
  FooterInner,
  FooterLeft,
  FooterRight,
  FooterText,
  FooterDot,
} from "./footer.styles";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterLeft>
          <FooterText>© {new Date().getFullYear()} Djeeling Group</FooterText>
          <FooterDot />
          <FooterText>Acton Brothers Holding</FooterText>
        </FooterLeft>
        <FooterRight>
          <FooterText>Belgrade, Serbie</FooterText>
          <FooterDot />
          <FooterText>Français · English</FooterText>
        </FooterRight>
      </FooterInner>
    </FooterWrapper>
  );
}
