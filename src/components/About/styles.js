import styled from "styled-components";

export const Section = styled.section`
  padding: 140px 6vw;

  position: relative;

  z-index: 15;
`;

export const Content = styled.div`
  max-width: 900px;

  margin: 0 auto;

  text-align: center;
`;

export const Eyebrow = styled.span`
  display: inline-block;

  margin-bottom: 20px;

  color: #00f5a0;

  font-size: 0.8rem;
  font-weight: 700;

  letter-spacing: 0.22em;
`;

export const Title = styled.h2`
  margin: 0;

  color: white;

  font-size: clamp(2.4rem, 5vw, 4.5rem);

  line-height: 1.08;
`;

export const Description = styled.p`
  margin-top: 28px;

  color: rgba(255,255,255,.72);

  font-size: 1.08rem;

  line-height: 1.9;
`;

export const Stats = styled.div`
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 20px;

  max-width: 1100px;

  margin:
    90px auto
    0;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  padding: 36px;

  border-radius: 24px;

  background:
    rgba(255,255,255,.04);

  border:
    1px solid
    rgba(255,255,255,.08);

  backdrop-filter:
    blur(12px);

  transition:
    transform .3s ease;

  &:hover {
    transform:
      translateY(-6px);
  }
`;

export const Number = styled.h3`
  margin: 0;

  color: white;

  font-size: 2.2rem;
`;

export const Label = styled.p`
  margin-top: 12px;

  color:
    rgba(255,255,255,.65);

  font-size: .95rem;
`;