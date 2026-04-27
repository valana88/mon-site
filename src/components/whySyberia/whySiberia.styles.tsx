"use client";

import styled from "styled-components";

export const WhySection = styled.section`
  background: var(--navy);
  color: var(--cream);
  padding: 96px 0 0;
`;

export const WhyInner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem 56px;
`;

export const WhyEyebrow = styled.p`
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 22px;
  font-weight: 500;
`;

export const WhyTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: clamp(28px, 4.5vw, 44px);
  line-height: 1.15;
  font-weight: 400;
  color: var(--cream);
  letter-spacing: -0.025em;
  margin: 0 0 22px;
  max-width: 760px;
`;

export const WhyTitleAccent = styled.em`
  color: var(--accent);
  font-style: italic;
  font-weight: 400;
`;

export const WhyLead = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: rgba(250, 250, 247, 0.7);
  margin: 0;
  max-width: 580px;
`;

export const StatsBand = styled.div`
  background: var(--navy-deep);
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const StatItem = styled.div`
  padding: 36px 32px;
  border-right: 0.5px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    border-right: none;
  }

  @media (max-width: 768px) {
    &:nth-child(2) {
      border-right: none;
    }
    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: 0.5px solid rgba(255, 255, 255, 0.08);
    }
  }
`;

export const StatVal = styled.p`
  font-family: var(--font-serif);
  font-size: 44px;
  color: var(--accent);
  margin: 0;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.025em;
`;

export const StatValSuffix = styled.span`
  font-size: 22px;
  margin-left: 2px;
`;

export const StatItemLabel = styled.p`
  font-size: 12px;
  color: rgba(250, 250, 247, 0.6);
  margin: 14px 0 0;
  letter-spacing: 0.04em;
`;
