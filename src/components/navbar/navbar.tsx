import {
  NavWrapper,
  NavInner,
  Brand,
  BrandName,
  BrandDot,
  BrandSub,
  NavLinks,
  NavLink,
  NavLinkAccent,
} from "./navbar.styles";

export default function Navbar() {
  return (
    <NavWrapper>
      <NavInner>
        <Brand href="/">
          <BrandName>Djeeling</BrandName>
          <BrandDot />
          <BrandSub>Group</BrandSub>
        </Brand>
        <NavLinks>
          <NavLink href="#about">À propos</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#serbia">Serbie</NavLink>
          <NavLinkAccent href="#contact">Contact ↗</NavLinkAccent>
        </NavLinks>
      </NavInner>
    </NavWrapper>
  );
}
