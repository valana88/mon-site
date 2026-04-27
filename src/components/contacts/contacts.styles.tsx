import styled from "styled-components";

export const ContactSection = styled.section`
  background: var(--bg);
  padding: 96px 0;
`;

export const ContactInner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ContactLeft = styled.div``;

export const ContactRight = styled.div`
  border-left: 0.5px solid var(--border);
  padding-left: 48px;

  @media (max-width: 768px) {
    border-left: none;
    border-top: 0.5px solid var(--border);
    padding-left: 0;
    padding-top: 32px;
  }
`;

export const ContactEyebrow = styled.p`
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0 0 22px;
  font-weight: 500;
`;

export const ContactTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: clamp(28px, 4vw, 40px);
  line-height: 1.15;
  font-weight: 400;
  color: var(--text);
  letter-spacing: -0.025em;
  margin: 0 0 22px;
  max-width: 480px;
`;

export const ContactSub = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: var(--text-muted);
  margin: 0 0 32px;
  max-width: 480px;
`;

export const Buttons = styled.div`
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

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 16px;
  padding: 18px 0;
  border-bottom: 0.5px solid var(--border);

  &:last-child {
    border-bottom: none;
  }
`;

export const InfoLabel = styled.span`
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  padding-top: 2px;
`;

export const InfoValue = styled.span`
  font-size: 14px;
  color: var(--text);
`;

export const EmailLink = styled.a`
  font-size: 14px;
  color: var(--accent);
  word-break: break-word;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;
