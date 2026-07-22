import styled, { keyframes } from "styled-components";

const corePulse = keyframes`
  0%,
  100% {
    transform: scale(1);
    filter: brightness(1);
  }

  50% {
    transform: scale(1.06);
    filter: brightness(1.2);
  }
`;

const partnerFloat = keyframes`
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-12px);
  }
`;

const orbitRotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Section = styled.section`
  position: relative;

  width: 100%;

  padding: 150px 6vw 170px;

  overflow: hidden;

  z-index: 15;

  background:
    radial-gradient(
      circle at 50% 55%,
      rgba(123, 47, 247, 0.16),
      transparent 32%
    ),
    radial-gradient(
      circle at 20% 80%,
      rgba(0, 245, 160, 0.06),
      transparent 28%
    ),
    rgba(4, 5, 14, 0.99);

  scroll-margin-top: 110px;

  @media (max-width: 700px) {
    padding: 105px 22px 125px;
  }
`;

export const SectionHeader = styled.div`
  width: min(900px, 100%);

  margin: 0 auto 90px;

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

  color: rgba(255, 255, 255, 0.65);

  font-size: 1.06rem;
  line-height: 1.8;

  text-wrap: balance;
`;

export const Orbit = styled.div`
  position: relative;

  width: min(920px, 88vw);
  height: 620px;

  margin: 0 auto;

  border: 1px solid rgba(255, 255, 255, 0.055);
  border-radius: 50%;

  &::before,
  &::after {
    content: "";

    position: absolute;

    inset: 12%;

    border: 1px dashed rgba(255, 255, 255, 0.07);
    border-radius: 50%;

    pointer-events: none;
  }

  &::before {
    animation: ${orbitRotate} 55s linear infinite;
  }

  &::after {
    inset: 29%;

    border-style: solid;
    border-color: rgba(123, 47, 247, 0.12);

    animation: ${orbitRotate} 38s linear infinite reverse;
  }

  @media (max-width: 760px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 16px;

    width: 100%;
    height: auto;

    border: none;

    &::before,
    &::after {
      display: none;
    }
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Center = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  display: grid;
  place-items: center;

  transform: translate(-50%, -50%);

  z-index: 3;

  @media (max-width: 760px) {
    position: relative;

    top: auto;
    left: auto;

    grid-column: 1 / -1;

    margin-bottom: 22px;

    transform: none;
  }
`;

export const CenterCore = styled.div`
  display: grid;
  place-items: center;

  width: 150px;
  height: 150px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 50%;

  color: #ffffff;

  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  font-weight: 900;

  background:
    radial-gradient(
      circle at 35% 28%,
      rgba(255, 255, 255, 0.24),
      rgba(123, 47, 247, 0.19) 42%,
      rgba(5, 6, 16, 0.96) 75%
    );

  box-shadow:
    inset 0 0 35px rgba(255, 255, 255, 0.08),
    0 0 40px rgba(123, 47, 247, 0.28),
    0 0 90px rgba(0, 245, 160, 0.08);

  animation: ${corePulse} 4s ease-in-out infinite;
`;

export const CenterLabel = styled.span`
  margin-top: 18px;

  color: rgba(255, 255, 255, 0.56);

  font-size: 0.75rem;
  font-weight: 700;

  letter-spacing: 0.11em;
  text-transform: uppercase;
`;

export const Partner = styled.article`
  position: absolute;

  ${({ $position }) => {
    const positions = [
      "top: 2%; left: 39%;",
      "top: 25%; right: 1%;",
      "bottom: 10%; right: 14%;",
      "bottom: 4%; left: 37%;",
      "bottom: 15%; left: 5%;",
      "top: 22%; left: 0%;",
    ];

    return positions[$position];
  }}

  display: grid;
  place-items: center;

  width: 165px;

  animation: ${partnerFloat}
    ${({ $position }) => 4.8 + $position * 0.45}s
    ease-in-out infinite;

  animation-delay: ${({ $position }) =>
    $position * -0.6}s;

  transition:
    filter 300ms ease,
    transform 300ms ease;

  &:hover {
    animation-play-state: paused;

    filter: brightness(1.3);
  }

  @media (max-width: 760px) {
    position: relative;

    top: auto;
    right: auto;
    bottom: auto;
    left: auto;

    width: 100%;
  }
`;

export const PartnerMark = styled.div`
  display: grid;
  place-items: center;

  width: 116px;
  height: 78px;

  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;

  color: rgba(255, 255, 255, 0.72);

  font-family: "Orbitron", sans-serif;
  font-size: 0.88rem;
  font-weight: 800;

  letter-spacing: 0.08em;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.1),
      rgba(123, 47, 247, 0.035)
    );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 20px 45px rgba(0, 0, 0, 0.22),
    0 0 28px rgba(123, 47, 247, 0.08);

  backdrop-filter: blur(16px);
`;

export const PartnerName = styled.span`
  margin-top: 12px;

  color: rgba(255, 255, 255, 0.38);

  font-size: 0.7rem;
  font-weight: 600;

  text-align: center;
`;

export const FooterMessage = styled.p`
  margin: 80px auto 0;

  color: rgba(255, 255, 255, 0.43);

  font-size: 0.92rem;
  font-style: italic;

  letter-spacing: 0.05em;

  text-align: center;
`;