import styled from "styled-components";

export const SectionWhySerbia = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 2.5rem;
`;

export const Grid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin-top: 1.25rem;
  border: 4px solid orange;
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
  display: flex;
  justify-content: center;
  font-size: 17px;
  color: var(--text-muted);
  line-height: 1.7;
  /* margin-top: 1rem; */
  /* padding-top: 1rem; */
  border: 2px solid black;
  /* border-top: 0.5px solid var(--border); */
`;

export const stats = [
  { val: "15 %", label: "Impôt sur les sociétés" },
  { val: "10 %", label: "Flat tax sur revenus" },
  { val: "0 %", label: "Wealth tax" },
  { val: "−40 %", label: "Coût de vie vs France" },
];
