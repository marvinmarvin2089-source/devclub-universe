import styled from "styled-components";

export const Section = styled.section`
  position: relative;

  width: 100%;

  padding: 140px 6vw 160px;

  overflow: hidden;

  z-index: 15;

  background:
    radial-gradient(
      circle at 10% 30%,
      rgba(0, 245, 160, 0.07),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 65%,
      rgba(123, 47, 247, 0.12),
      transparent 34%
    ),
    rgba(4, 5, 14, 0.98);

  scroll-margin-top: 110px;

  @media (max-width: 700px) {
    padding: 105px 22px 120px;
  }
`;

export const SectionHeader = styled.div`
  width: min(900px, 100%);

  margin: 0 auto 76px;

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

  font-size: clamp(2.5rem, 5vw, 4.6rem);
  font-weight: 850;

  line-height: 1.08;
  letter-spacing: -0.04em;

  text-wrap: balance;

  text-shadow:
    0 0 24px rgba(255, 255, 255, 0.1),
    0 0 65px rgba(123, 47, 247, 0.14);
`;

export const Description = styled.p`
  width: min(700px, 100%);

  margin: 28px auto 0;

  color: rgba(255, 255, 255, 0.67);

  font-size: 1.07rem;
  line-height: 1.8;

  text-wrap: balance;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 22px;

  width: min(1240px, 100%);

  margin: 0 auto;

  @media (max-width: 1120px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  position: relative;

  min-height: 490px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.11);
  border-radius: 28px;

  background:
    linear-gradient(
      155deg,
      rgba(255, 255, 255, 0.075),
      rgba(255, 255, 255, 0.018)
    );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 28px 80px rgba(0, 0, 0, 0.28);

  backdrop-filter: blur(18px);

  transition:
    transform 450ms cubic-bezier(.22, 1, .36, 1),
    border-color 400ms ease,
    box-shadow 400ms ease;

  &:hover {
    transform: translateY(-12px);

    border-color: rgba(255, 255, 255, 0.25);

    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.14),
      0 34px 100px rgba(0, 0, 0, 0.38),
      0 0 48px rgba(123, 47, 247, 0.13);
  }

  &:hover > div:first-child {
    opacity: 1;
    transform: translate3d(-5%, 5%, 0) scale(1.08);
  }
`;

export const CardGlow = styled.div`
  position: absolute;

  top: -110px;
  right: -110px;

  width: 280px;
  height: 280px;

  border-radius: 50%;

  opacity: 0.45;

  background: radial-gradient(
    circle,
    rgba(123, 47, 247, 0.35),
    rgba(0, 245, 160, 0.08) 46%,
    transparent 72%
  );

  filter: blur(10px);

  pointer-events: none;

  transition:
    opacity 400ms ease,
    transform 550ms cubic-bezier(.22, 1, .36, 1);
`;

export const AvatarArea = styled.div`
  position: relative;

  display: grid;
  place-items: center;

  min-height: 215px;

  padding: 34px 24px 24px;

  background:
    radial-gradient(
      circle at center,
      rgba(123, 47, 247, 0.13),
      transparent 57%
    );
`;

export const Avatar = styled.div`
  position: relative;

  display: grid;
  place-items: center;

  width: 126px;
  height: 126px;

  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 50%;

  background:
    radial-gradient(
      circle at 35% 28%,
      rgba(255, 255, 255, 0.25),
      rgba(123, 47, 247, 0.17) 42%,
      rgba(4, 5, 14, 0.9) 76%
    );

  box-shadow:
    inset 0 0 28px rgba(255, 255, 255, 0.08),
    0 0 28px rgba(123, 47, 247, 0.2),
    0 0 60px rgba(0, 245, 160, 0.06);

  &::after {
    content: "";

    position: absolute;

    inset: -10px;

    border: 1px dashed rgba(255, 255, 255, 0.16);
    border-radius: 50%;
  }
`;

export const Initials = styled.span`
  color: #ffffff;

  font-family: "Orbitron", sans-serif;
  font-size: 1.65rem;
  font-weight: 800;

  letter-spacing: 0.08em;

  text-shadow:
    0 0 14px rgba(255, 255, 255, 0.35),
    0 0 28px rgba(123, 47, 247, 0.35);
`;

export const Status = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;

  margin-top: 24px;

  color: rgba(255, 255, 255, 0.5);

  font-size: 0.72rem;
  font-weight: 600;

  letter-spacing: 0.08em;
  text-transform: uppercase;

  span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #00f5a0;

    box-shadow: 0 0 12px rgba(0, 245, 160, 0.8);
  }
`;

export const Content = styled.div`
  position: relative;

  padding: 18px 28px 30px;
`;

export const TutorNumber = styled.span`
  position: absolute;

  top: 20px;
  right: 28px;

  color: rgba(255, 255, 255, 0.18);

  font-size: 0.72rem;
  font-weight: 700;

  letter-spacing: 0.15em;
`;

export const TutorName = styled.h3`
  max-width: 80%;

  margin: 0;

  color: #ffffff;

  font-size: 1.3rem;
  font-weight: 750;

  line-height: 1.25;
`;

export const TutorRole = styled.p`
  margin: 10px 0 0;

  color: #00f5a0;

  font-size: 0.78rem;
  font-weight: 650;

  letter-spacing: 0.04em;
`;

export const TutorDescription = styled.p`
  min-height: 92px;

  margin: 20px 0 0;

  color: rgba(255, 255, 255, 0.58);

  font-size: 0.91rem;
  line-height: 1.65;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 7px;

  margin-top: 20px;
`;

export const Technology = styled.span`
  padding: 6px 9px;

  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 999px;

  color: rgba(255, 255, 255, 0.53);

  font-size: 0.65rem;
  font-weight: 600;

  background: rgba(255, 255, 255, 0.03);
`;