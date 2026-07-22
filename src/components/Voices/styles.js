import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%,
  100% {
    transform: translateY(0) rotate(-1deg);
  }

  50% {
    transform: translateY(-16px) rotate(1deg);
  }
`;

const scan = keyframes`
  0% {
    top: -12%;
    opacity: 0;
  }

  15% {
    opacity: .85;
  }

  85% {
    opacity: .85;
  }

  100% {
    top: 112%;
    opacity: 0;
  }
`;

const signalPulse = keyframes`
  0%,
  100% {
    opacity: .45;
    transform: scale(.9);
  }

  50% {
    opacity: 1;
    transform: scale(1.15);
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
      circle at 15% 30%,
      rgba(123, 47, 247, 0.14),
      transparent 32%
    ),
    radial-gradient(
      circle at 82% 70%,
      rgba(0, 245, 160, 0.08),
      transparent 34%
    ),
    rgba(4, 5, 14, 0.98);

  scroll-margin-top: 110px;

  @media (max-width: 700px) {
    padding: 110px 22px 130px;
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

  font-size: clamp(2.5rem, 5vw, 4.7rem);
  font-weight: 850;

  line-height: 1.08;
  letter-spacing: -0.04em;

  text-wrap: balance;

  text-shadow:
    0 0 24px rgba(255, 255, 255, 0.1),
    0 0 65px rgba(123, 47, 247, 0.15);
`;

export const Description = styled.p`
  width: min(700px, 100%);

  margin: 28px auto 0;

  color: rgba(255, 255, 255, 0.66);

  font-size: 1.07rem;
  line-height: 1.8;

  text-wrap: balance;
`;

export const Capsules = styled.div`
  display: grid;

  grid-template-columns:
    repeat(12, minmax(0, 1fr));

  gap: 28px;

  width: min(1180px, 100%);

  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

export const Capsule = styled.article`
  position: relative;

  grid-column: ${({ $position }) =>
    $position === 0
      ? "2 / span 5"
      : $position === 1
      ? "7 / span 5"
      : $position === 2
      ? "1 / span 5"
      : "8 / span 5"};

  min-height: 440px;

  padding: 30px;

  overflow: hidden;

  border: 1px solid
    rgba(255, 255, 255, 0.13);

  border-radius: 30px;

  background:
    linear-gradient(
      150deg,
      rgba(255, 255, 255, 0.085),
      rgba(123, 47, 247, 0.035)
    );

  box-shadow:
    inset 0 1px 0
      rgba(255, 255, 255, 0.1),
    0 30px 90px rgba(0, 0, 0, 0.32),
    0 0 45px rgba(123, 47, 247, 0.08);

  backdrop-filter: blur(20px);

  animation: ${float}
    ${({ $position }) => 5 + $position * 0.8}s
    ease-in-out infinite;

  animation-delay: ${({ $position }) =>
    $position * -0.7}s;

  transition:
    border-color 350ms ease,
    box-shadow 350ms ease;

  &:hover {
    animation-play-state: paused;

    border-color:
      rgba(255, 255, 255, 0.3);

    box-shadow:
      inset 0 1px 0
        rgba(255, 255, 255, 0.16),
      0 36px 110px rgba(0, 0, 0, 0.4),
      0 0 55px rgba(123, 47, 247, 0.17),
      0 0 35px rgba(0, 245, 160, 0.07);
  }

  @media (max-width: 900px) {
    grid-column: auto;
  }
`;

export const CapsuleGlow = styled.div`
  position: absolute;

  top: -120px;
  right: -110px;

  width: 290px;
  height: 290px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(123, 47, 247, 0.38),
    rgba(0, 245, 160, 0.08) 48%,
    transparent 72%
  );

  filter: blur(10px);

  pointer-events: none;
`;

export const ScanLine = styled.span`
  position: absolute;

  top: -12%;
  left: 5%;

  width: 90%;
  height: 2px;

  border-radius: 999px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(123, 47, 247, 0.9),
    rgba(255, 255, 255, 1),
    rgba(0, 245, 160, 0.75),
    transparent
  );

  box-shadow:
    0 0 8px rgba(255, 255, 255, 0.9),
    0 0 22px rgba(123, 47, 247, 0.7);

  animation: ${scan} 3.4s
    ease-in-out infinite;

  pointer-events: none;
`;

export const Status = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 9px;

  color: rgba(255, 255, 255, 0.5);

  font-size: 0.68rem;
  font-weight: 700;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #00f5a0;

    box-shadow:
      0 0 12px rgba(0, 245, 160, 0.9);

    animation: ${signalPulse}
      1.8s ease-in-out infinite;
  }
`;

export const Avatar = styled.div`
  display: grid;
  place-items: center;

  width: 96px;
  height: 96px;

  margin: 36px 0 28px;

  border: 1px solid
    rgba(255, 255, 255, 0.22);

  border-radius: 50%;

  background:
    radial-gradient(
      circle at 35% 28%,
      rgba(255, 255, 255, 0.23),
      rgba(123, 47, 247, 0.18) 45%,
      rgba(5, 6, 16, 0.94) 78%
    );

  box-shadow:
    inset 0 0 25px
      rgba(255, 255, 255, 0.08),
    0 0 30px rgba(123, 47, 247, 0.22);
`;

export const Initials = styled.span`
  color: #ffffff;

  font-family: "Orbitron", sans-serif;
  font-size: 1.25rem;
  font-weight: 800;

  letter-spacing: 0.08em;
`;

export const StudentName = styled.h3`
  margin: 0;

  color: #ffffff;

  font-size: 1.45rem;
  font-weight: 760;
`;

export const StudentRole = styled.p`
  margin: 10px 0 0;

  color: #00f5a0;

  font-size: 0.82rem;
  font-weight: 650;
`;

export const Company = styled.p`
  margin: 6px 0 0;

  color: rgba(255, 255, 255, 0.42);

  font-size: 0.76rem;
`;

export const Quote = styled.p`
  min-height: 90px;

  margin: 26px 0 0;

  color: rgba(255, 255, 255, 0.68);

  font-size: 0.94rem;
  font-style: italic;
  line-height: 1.7;
`;

export const TransmitButton = styled.button`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  margin-top: 25px;

  padding: 13px 18px;

  border: 1px solid
    rgba(255, 255, 255, 0.16);

  border-radius: 999px;

  color: #ffffff;

  font-size: 0.78rem;
  font-weight: 700;

  letter-spacing: 0.05em;

  background:
    linear-gradient(
      135deg,
      rgba(123, 47, 247, 0.18),
      rgba(0, 245, 160, 0.08)
    );

  cursor: pointer;

  transition:
    transform 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;

  span {
    color: #00f5a0;
  }

  &:hover {
    transform: translateY(-3px);

    border-color:
      rgba(255, 255, 255, 0.38);

    box-shadow:
      0 0 28px rgba(123, 47, 247, 0.22);
  }
`;

export const FinalMessage = styled.p`
  margin: 110px auto 0;

  color: rgba(255, 255, 255, 0.46);

  font-size: 0.95rem;
  font-style: italic;

  letter-spacing: 0.06em;

  text-align: center;
`;

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  display: grid;
  place-items: center;

  padding: 24px;

  z-index: 300;

  background: rgba(2, 3, 10, 0.82);

  backdrop-filter: blur(14px);

  opacity: ${({ $open }) =>
    $open ? 1 : 0};

  visibility: ${({ $open }) =>
    $open ? "visible" : "hidden"};

  pointer-events: ${({ $open }) =>
    $open ? "auto" : "none"};

  transition:
    opacity 400ms ease,
    visibility 400ms ease;
`;

export const Modal = styled.div`
  width: min(920px, 100%);

  max-height: 92vh;

  overflow-y: auto;

  border: 1px solid
    rgba(255, 255, 255, 0.16);

  border-radius: 28px;

  background:
    radial-gradient(
      circle at 15% 5%,
      rgba(123, 47, 247, 0.17),
      transparent 34%
    ),
    rgba(7, 8, 19, 0.98);

  box-shadow:
    0 45px 140px rgba(0, 0, 0, 0.65),
    0 0 65px rgba(123, 47, 247, 0.13);
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding: 22px 26px;

  border-bottom: 1px solid
    rgba(255, 255, 255, 0.09);
`;

export const Signal = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 9px;

  color: rgba(255, 255, 255, 0.6);

  font-size: 0.72rem;
  font-weight: 700;

  letter-spacing: 0.12em;

  text-transform: uppercase;

  span {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #00f5a0;

    box-shadow:
      0 0 14px rgba(0, 245, 160, 0.9);
  }
`;

export const CloseButton = styled.button`
  display: grid;
  place-items: center;

  width: 42px;
  height: 42px;

  border: 1px solid
    rgba(255, 255, 255, 0.15);

  border-radius: 50%;

  color: #ffffff;

  font-size: 1.6rem;

  background:
    rgba(255, 255, 255, 0.05);

  cursor: pointer;

  transition:
    transform 250ms ease,
    background 250ms ease;

  &:hover {
    transform: rotate(90deg);

    background:
      rgba(255, 255, 255, 0.1);
  }
`;

export const VideoArea = styled.div`
  display: grid;
  place-items: center;

  aspect-ratio: 16 / 9;

  margin: 24px;

  overflow: hidden;

  border: 1px solid
    rgba(255, 255, 255, 0.1);

  border-radius: 22px;

  color: rgba(255, 255, 255, 0.46);

  background:
    radial-gradient(
      circle,
      rgba(123, 47, 247, 0.15),
      rgba(4, 5, 14, 0.96) 65%
    );

  text-align: center;

  iframe {
    width: 100%;
    height: 100%;

    border: none;
  }

  p {
    margin-top: 18px;

    font-size: 0.9rem;
  }
`;

export const PlaySymbol = styled.span`
  display: grid;
  place-items: center;

  width: 78px;
  height: 78px;

  border: 1px solid
    rgba(255, 255, 255, 0.2);

  border-radius: 50%;

  color: #00f5a0;

  font-size: 1.5rem;

  background:
    rgba(255, 255, 255, 0.05);

  box-shadow:
    0 0 35px rgba(123, 47, 247, 0.2);
`;

export const ModalContent = styled.div`
  padding: 10px 30px 36px;
`;

export const ModalName = styled.h3`
  margin: 0;

  color: #ffffff;

  font-size: 2rem;
`;

export const ModalRole = styled.p`
  margin: 10px 0 0;

  color: #00f5a0;

  font-weight: 650;
`;

export const ModalCompany = styled.p`
  margin: 6px 0 0;

  color: rgba(255, 255, 255, 0.45);

  font-size: 0.88rem;
`;

export const ModalQuote = styled.p`
  margin: 28px 0 0;

  color: rgba(255, 255, 255, 0.68);

  font-size: 1.02rem;
  font-style: italic;
  line-height: 1.75;
`;