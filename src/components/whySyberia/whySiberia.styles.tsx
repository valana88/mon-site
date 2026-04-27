"use client";

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
  margin-bottom: 1rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin: 1.5rem 0;
`;

export const StatCard = styled.div`
  background: var(--bg);
  border-radius: 8px;
  border: 0.5px solid var(--border);
  padding: 1.25rem 1rem;
`;

export const StatVal = styled.div`
  font-size: 28px;
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

export const Note = styled.p`
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 0.5px solid var(--border);
`;

export const stats = [
  { val: "15 %", label: "Impôt sur les sociétés" },
  { val: "10 %", label: "Flat tax sur revenus" },
  { val: "0 %", label: "Wealth tax" },
  { val: "−40 %", label: "Coût de vie vs France" },
];
