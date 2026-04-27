import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 2rem 6rem;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`;

export const Sub = styled.p`
  font-size: 15px;
  color: var(--text-muted);
  margin-bottom: 2rem;
  line-height: 1.6;
`;

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2rem;
`;

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-muted);
`;

export const InfoIcon = styled.span`
  font-size: 16px;
  flex-shrink: 0;
`;

export const EmailLink = styled.a`
  color: var(--green-dark);
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BtnPrimary = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 7px;
  background: var(--green);
  color: var(--green-deepest);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--green-dark);
    color: #fff;
  }
`;

export const BtnSecondary = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 7px;
  background: transparent;
  color: var(--text);
  font-size: 14px;
  border: 0.5px solid var(--border);
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--bg-secondary);
  }
`;
