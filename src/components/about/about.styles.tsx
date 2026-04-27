import styled from "styled-components";

export const Back = styled.div`
  /* display: flex;
  flex-direction: column; */
  margin: 5rem;
`;

export const PresentationBack = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ServicesContainer = styled.div`
  border: 4px solid blue;
  padding: 1rem;
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
`;

export const SectionLabel = styled.p`
  display: flex;
  /* justify-content: center; */
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding-bottom: 1rem;
`;

export const SectionCenterLabel = styled(SectionLabel)`
  justify-content: center;
`;

export const PageTitle = styled.h1`
  font-size: clamp(30px, 5vw, 44px);
  font-weight: 500;
  letter-spacing: -0.02em;
  color: var(--text);
  margin-bottom: 1.25rem;
  line-height: 1.2;
`;

export const PresentationContainer = styled.div`
  font-size: 17px;
  color: var(--text-muted);
  line-height: 1.75;
  max-width: 600px;
  border: 3px solid black;
  padding: 1rem;

  strong {
    color: var(--text);
    font-weight: 500;
  }
`;

export const Weight = styled.span`
  font-weight: 600;
  font-size: 17px;
`;

export const Divider = styled.hr`
  border: none;
  border-top: 0.5px solid var(--border);
  margin: 3rem 0;
`;

export const ServicesList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ServiceItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 1.25rem 0;
  border-bottom: 0.5px solid var(--border);

  &:first-child {
    border-top: 0.5px solid var(--border);
  }
`;

export const ServiceArrow = styled.span`
  color: var(--green);
  font-size: 18px;
  font-weight: 500;
  flex-shrink: 0;
  margin-top: 2px;
`;

export const ServiceText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ServiceTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
  line-height: 1.4;
`;

export const ServiceDesc = styled.p`
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin-bottom: 1.25rem;
`;

export const StatCard = styled.div`
  background: var(--bg-secondary);
  border-radius: 8px;
  border: 0.5px solid var(--border);
  padding: 1.25rem 1rem;
`;

export const StatVal = styled.div`
  font-size: 26px;
  font-weight: 500;
  color: var(--green);
  letter-spacing: -0.02em;
`;

export const StatLabel = styled.div`
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 6px;
  line-height: 1.4;
`;

export const StatNote = styled.p`
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  padding-top: 1rem;
  border-top: 0.5px solid var(--border);
`;

export const CtaBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CtaText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: var(--text);
  line-height: 1.5;
  max-width: 480px;
`;

export const CtaBtn = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 7px;
  background: var(--green);
  color: var(--green-deepest);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  align-self: flex-start;
  transition:
    background 0.2s,
    color 0.2s;

  &:hover {
    background: var(--green-dark);
    color: #fff;
  }
`;
