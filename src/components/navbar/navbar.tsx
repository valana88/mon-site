import { CtaLink, Logo, Nav } from "./navabar.styles";

export default function Navbar() {
  return (
    <Nav>
      <Logo href="/">Djeeling</Logo>
      <CtaLink href="#contact">Prendre contact</CtaLink>
    </Nav>
  );
}
