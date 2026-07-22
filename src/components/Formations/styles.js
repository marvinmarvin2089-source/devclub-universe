import styled from "styled-components";

export const Section = styled.section`
  position: relative;

  width: 100%;

  padding: 220px 6vw 150px;

  z-index: 15;

  background:
    radial-gradient(
      circle at 15% 20%,
      rgba(123, 47, 247, 0.12),
      transparent 30%
    ),
    radial-gradient(
      circle at 85% 75%,
      rgba(0, 245, 160, 0.07),
      transparent 34%
    ),
    linear-gradient(
      180deg,
      rgba(4, 5, 14, 0) 0%,
      rgba(4, 5, 14, 0.94) 15%,
      rgba(4, 5, 14, 0.98) 100%
    );

  scroll-margin-top: 100px;

  @media (max-width: 700px) {
    padding: 100px 22px 120px;
  }
`;

export const Header = styled.div`
  max-width: 900px;

  margin: 0 auto 72px;

  text-align: center;
`;

export const Eyebrow = styled.span`
  display: inline-block;

  margin-bottom: 22px;

  color: #00f5a0;

  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0;

  color: #ffffff;

  font-size: clamp(2.5rem, 5vw, 4.7rem);
  font-weight: 850;
  line-height: 1.08;
  letter-spacing: -0.04em;

  text-wrap: balance;

  text-shadow:
    0 0 26px rgba(255, 255, 255, 0.1),
    0 0 60px rgba(123, 47, 247, 0.12);
`;

export const Description = styled.p`
  max-width: 700px;

  margin: 28px auto 0;

  color: rgba(255, 255, 255, 0.68);

  font-size: 1.08rem;
  line-height: 1.8;

  text-wrap: balance;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  gap: 24px;

  width: min(1180px, 100%);

  margin: 0 auto;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  position: relative;

  min-height: 390px;

  padding: 30px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 26px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.075),
      rgba(255, 255, 255, 0.018)
    );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 24px 70px rgba(0, 0, 0, 0.24);

  backdrop-filter: blur(18px);

  transition:
    transform 400ms cubic-bezier(.22, 1, .36, 1),
    border-color 400ms ease,
    box-shadow 400ms ease;

  &:hover {
    transform: translateY(-10px);

    border-color: rgba(255, 255, 255, 0.26);

    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.14),
      0 30px 90px rgba(0, 0, 0, 0.35),
      0 0 45px rgba(123, 47, 247, 0.12);
  }

  &:hover > div:first-child {
    opacity: 1;
    transform: translate3d(-8%, -5%, 0) scale(1.08);
  }
`;

export const CardGlow = styled.div`
  position: absolute;

  top: -40%;
  right: -35%;

  width: 260px;
  height: 260px;

  border-radius: 50%;

  opacity: 0.45;

  background: radial-gradient(
    circle,
    rgba(123, 47, 247, 0.35),
    rgba(0, 245, 160, 0.08) 45%,
    transparent 72%
  );

  filter: blur(8px);

  pointer-events: none;

  transition:
    opacity 400ms ease,
    transform 500ms cubic-bezier(.22, 1, .36, 1);
`;

export const CardNumber = styled.span`
  position: absolute;

  top: 28px;
  right: 28px;

  color: rgba(255, 255, 255, 0.2);

  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
`;

export const CardIcon = styled.div`
  display: grid;
  place-items: center;

  width: 58px;
  height: 58px;

  margin-bottom: 34px;

  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 17px;

  color: #ffffff;

  font-family: "Orbitron", monospace;
  font-size: 1rem;
  font-weight: 800;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.12),
      rgba(123, 47, 247, 0.1)
    );

  box-shadow:
    inset 0 0 14px rgba(255, 255, 255, 0.05),
    0 0 24px rgba(123, 47, 247, 0.1);
`;

export const CardTitle = styled.h3`
  margin: 0;

  color: #ffffff;

  font-size: 1.55rem;
  font-weight: 750;
`;

export const CardDescription = styled.p`
  min-height: 100px;

  margin: 18px 0 0;

  color: rgba(255, 255, 255, 0.62);

  font-size: 0.98rem;
  line-height: 1.7;
`;

export const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 22px;
`;

export const Tag = styled.span`
  padding: 7px 10px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;

  color: rgba(255, 255, 255, 0.62);

  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.04em;

  background: rgba(255, 255, 255, 0.035);
`;

export const CardLink = styled.a`
  display: inline-flex;
  align-items: center;

  gap: 9px;

  margin-top: 28px;

  color: #ffffff;

  font-size: 0.9rem;
  font-weight: 650;

  text-decoration: none;

  transition:
    color 250ms ease,
    gap 250ms ease;

  span {
    color: #00f5a0;
  }

  &:hover {
    gap: 14px;

    color: #00f5a0;
  }
`;