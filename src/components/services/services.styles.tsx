"use client";

import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 2rem;
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

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Item = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 1.25rem 0;
  border-bottom: 0.5px solid var(--border);

  &:first-child {
    border-top: 0.5px solid var(--border);
  }
`;

export const Arrow = styled.span`
  color: var(--green);
  font-size: 18px;
  flex-shrink: 0;
  margin-top: 1px;
`;

export const ItemText = styled.div``;

export const ItemTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: var(--text);
  margin-bottom: 4px;
`;

export const ItemDesc = styled.p`
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
`;
