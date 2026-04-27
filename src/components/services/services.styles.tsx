import styled from "styled-components";

export const ServicesSection = styled.section`
  padding: 64px 0 96px;
`;

export const ServicesInner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ServicesHeader = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 56px;
  margin-bottom: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const ServicesEyebrow = styled.p`
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 0;
  font-weight: 500;
`;

export const ServicesTitle = styled.h2`
  font-family: var(--font-serif);
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.25;
  color: var(--text);
  margin: 0;
  font-weight: 400;
  letter-spacing: -0.02em;
  max-width: 520px;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 0.5px solid var(--border);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const ServiceCard = styled.article`
  padding: 28px 28px 28px 0;
  border-bottom: 0.5px solid var(--border);
  transition: background 0.2s;

  &:hover {
    background: color-mix(in srgb, var(--accent) 4%, transparent);
  }

  &:nth-child(odd) {
    border-right: 0.5px solid var(--border);

    @media (max-width: 640px) {
      border-right: none;
    }
  }

  &:nth-child(even) {
    padding: 28px 0 28px 28px;

    @media (max-width: 640px) {
      padding: 28px 0;
    }
  }
`;

export const ServiceNum = styled.p`
  font-family: var(--font-serif);
  font-size: 13px;
  color: var(--accent);
  margin: 0 0 12px;
  font-weight: 400;
  letter-spacing: 0.04em;
`;

export const ServiceTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
`;

export const ServiceDesc = styled.p`
  font-size: 13.5px;
  color: var(--text-muted);
  line-height: 1.6;
  margin: 0;
`;
