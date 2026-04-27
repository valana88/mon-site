import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 2rem;
  background: var(--bg-secondary);
`;

export const Inner = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Label = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 1.25rem;
`;

export const Card = styled.div`
  background: var(--bg);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 1.75rem;
  border-left: 3px solid var(--green);
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.75;
  color: var(--text);
`;

export const Highlight = styled.span`
  font-weight: 500;
  color: var(--green-dark);
`;
