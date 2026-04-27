"use client";

import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--bg);
  border-top: 0.5px solid var(--border);
`;

export const FooterInner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 28px 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 640px) {
    justify-content: center;
    text-align: center;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FooterRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FooterText = styled.p`
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--text-muted);
  margin: 0;
`;

export const FooterDot = styled.span`
  width: 3px;
  height: 3px;
  background: var(--accent);
  border-radius: 50%;
  display: inline-block;
`;
