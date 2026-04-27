"use client";

import styled from "styled-components";

export const Back = styled.main`
  background: var(--bg);
  color: var(--text);
  min-height: 100vh;
`;

export const AboutSection = styled.section`
  padding: 80px 0 0;
`;

export const AboutInner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem 64px;
`;

export const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 28px;
  font-weight: 500;
`;

export const EyebrowLine = styled.span`
  display: inline-block;
  width: 28px;
  height: 1px;
  background: var(--accent);
  margin-right: 12px;
`;

export const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 220px;
  gap: 56px;
  align-items: end;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
    align-items: start;
  }
`;

export const AboutMain = styled.div``;

export const Title = styled.h1`
  font-family: var(--font-serif);
  font-size: clamp(36px, 5.5vw, 56px);
  line-height: 1.05;
  font-weight: 400;
  color: var(--text);
  letter-spacing: -0.025em;
  margin: 0 0 24px;
`;

export const TitleAccent = styled.em`
  color: var(--accent);
  font-style: italic;
  font-weight: 400;
`;

export const Lead = styled.p`
  font-size: 16px;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0 0 32px;
  max-width: 540px;

  strong {
    color: var(--text);
    font-weight: 500;
  }
`;

export const CtaRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  background: var(--text);
  color: var(--bg);
  padding: 14px 26px;
  border-radius: 4px;
  font-size: 13px;
  font-weight: 500;
  transition:
    background 0.2s,
    transform 0.1s;

  &:hover {
    background: var(--accent);
    color: var(--cream);
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const BtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  border: 0.5px solid var(--text);
  color: var(--text);
  padding: 14px 26px;
  border-radius: 4px;
  font-size: 13px;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: var(--text);
    color: var(--bg);
  }
`;

export const StatBox = styled.div`
  text-align: right;

  @media (max-width: 768px) {
    text-align: left;
    border-top: 0.5px solid var(--border);
    padding-top: 24px;
  }
`;

export const StatNumber = styled.p`
  font-family: var(--font-serif);
  font-size: 64px;
  color: var(--accent);
  margin: 0;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.03em;
`;

export const StatPercent = styled.span`
  font-size: 28px;
`;

export const StatLabel = styled.p`
  font-size: 11px;
  color: var(--text-muted);
  margin: 8px 0 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
