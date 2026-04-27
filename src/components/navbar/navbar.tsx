import {
  Djeeling,
  IconSymbioseLinkContainer,
  Nav,
  NavContainer,
  TopBar,
} from "./navabar.styles";

export default function Navbar() {
  return (
    <TopBar>
      {/* <Logo href="/">Djeeling</Logo>
      <CtaLink href="#contact">Prendre contact</CtaLink> */}
      <NavContainer>
        <IconSymbioseLinkContainer href="/">
          <Djeeling>DJEELING GROUP</Djeeling>
        </IconSymbioseLinkContainer>
      </NavContainer>
    </TopBar>
  );
}
