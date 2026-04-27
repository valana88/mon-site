"use client";

import styled from "styled-components";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 2rem 4rem;
  max-width: var(--max-width);
  margin: 0 auto;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;
  border: 0.5px solid var(--border);
  color: var(--text-muted);
  background: var(--bg-secondary);
`;

export const Title = styled.h1`
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 500;
  line-height: 1.25;
  color: var(--text);
  margin-bottom: 1.25rem;
  letter-spacing: -0.02em;
`;

export const Subtitle = styled.p`
  font-size: 17px;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 580px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const BtnPrimary = styled.a`
  display: inline-block;
  padding: 11px 22px;
  border-radius: 7px;
  background: var(--green);
  color: var(--green-deepest);
  font-size: 14px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: var(--green-dark);
    color: #fff;
  }
`;

export const BtnSecondary = styled.a`
  display: inline-block;
  padding: 11px 22px;
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
