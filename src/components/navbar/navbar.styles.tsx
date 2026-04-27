"use client";

import Link from "next/link";
import styled from "styled-components";

export const NavWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--bg) 85%, transparent);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 0.5px solid var(--border);
`;

export const NavInner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 18px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled(Link)`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const BrandName = styled.span`
  font-family: var(--font-serif);
  font-size: 19px;
  font-weight: 500;
  color: var(--text);
  letter-spacing: -0.02em;
`;

export const BrandDot = styled.span`
  width: 4px;
  height: 4px;
  background: var(--accent);
  border-radius: 50%;
  display: inline-block;
`;

export const BrandSub = styled.span`
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 28px;
  align-items: center;

  @media (max-width: 640px) {
    gap: 18px;
  }
`;

export const NavLink = styled(Link)`
  font-size: 13px;
  color: var(--text);
  transition: color 0.2s;

  &:hover {
    color: var(--accent);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavLinkAccent = styled(Link)`
  font-size: 13px;
  color: var(--accent);
  font-weight: 500;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.75;
  }
`;
