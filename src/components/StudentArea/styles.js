import styled, { keyframes } from "styled-components";

const progressLoad = keyframes`
  from {
    width: 0;
  }

  to {
    width: 72%;
  }
`;

const pulse = keyframes`
  0%,
  100% {
    opacity: .45;
    transform: scale(.92);
  }

  50% {
    opacity: 1;
    transform: scale(1.12);
  }
`;

export const Section = styled.section`
  position: relative;

  display: grid;
  grid-template-columns:
    minmax(0, 0.9fr)
    minmax(480px, 1.1fr);

  align-items: center;

  gap: clamp(60px, 8vw, 130px);

  width: 100%;

  padding: 150px 7vw 170px;

  overflow: hidden;

  z-index: 15;

  background:
    radial-gradient(
      circle at 15% 35%,
      rgba(0, 245, 160, 0.09),
      transparent 34%
    ),
    radial-gradient(
      circle at 85% 55%,
      rgba(123, 47, 247, 0.15),
      transparent 38%
    ),
    rgba(4, 5, 14, 0.98);

  scroll-margin-top: 110px;

  @media (max-width: 1050px) {
    grid-template-columns: 1fr;

    padding: 120px 6vw 140px;
  }

  @media (max-width: 600px) {
    padding: 100px 22px 120px;
  }
`;

export const Glow = styled.div`
  position: absolute;

  top: 50%;
  right: -180px;

  width: 520px;
  height: 520px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(123, 47, 247, 0.2),
    rgba(0, 245, 160, 0.05) 45%,
    transparent 72%
  );

  filter: blur(20px);

  pointer-events: none;
`;

export const Content = styled.div`
  position: relative;

  z-index: 2;
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

  font-size: clamp(2.8rem, 5vw, 5rem);
  font-weight: 850;

  line-height: 1.05;
  letter-spacing: -0.045em;

  text-wrap: balance;

  text-shadow:
    0 0 24px rgba(255, 255, 255, 0.1),
    0 0 60px rgba(0, 245, 160, 0.08);
`;

export const Description = styled.p`
  max-width: 620px;

  margin: 30px 0 0;

  color: rgba(255, 255, 255, 0.66);

  font-size: 1.08rem;
  line-height: 1.85;
`;

export const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 16px;

  margin-top: 42px;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;

  gap: 10px;

  padding: 15px 24px;

  border-radius: 999px;

  color: #ffffff;

  font-size: 0.92rem;
  font-weight: 700;

  text-decoration: none;

  background: linear-gradient(
    135deg,
    #00f5a0,
    #7b2ff7
  );

  box-shadow:
    0 0 28px rgba(123, 47, 247, 0.28),
    0 0 40px rgba(0, 245, 160, 0.1);

  transition:
    transform 250ms ease,
    box-shadow 250ms ease;

  &:hover {
    transform: translateY(-4px);

    box-shadow:
      0 0 38px rgba(123, 47, 247, 0.42),
      0 0 52px rgba(0, 245, 160, 0.16);
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;

  padding: 15px 24px;

  border:
    1px solid rgba(255, 255, 255, 0.17);

  border-radius: 999px;

  color: #ffffff;

  font-size: 0.92rem;
  font-weight: 700;

  text-decoration: none;

  background:
    rgba(255, 255, 255, 0.045);

  backdrop-filter: blur(12px);

  transition:
    transform 250ms ease,
    border-color 250ms ease,
    background 250ms ease;

  &:hover {
    transform: translateY(-4px);

    border-color:
      rgba(255, 255, 255, 0.38);

    background:
      rgba(255, 255, 255, 0.08);
  }
`;

export const Dashboard = styled.div`
  position: relative;

  width: 100%;

  padding: 28px;

  overflow: hidden;

  border:
    1px solid rgba(255, 255, 255, 0.14);

  border-radius: 32px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.085),
      rgba(255, 255, 255, 0.018)
    );

  box-shadow:
    inset 0 1px 0
      rgba(255, 255, 255, 0.1),
    0 35px 110px
      rgba(0, 0, 0, 0.42),
    0 0 70px
      rgba(123, 47, 247, 0.12);

  backdrop-filter: blur(24px);

  z-index: 2;

  &::before {
    content: "";

    position: absolute;

    inset: 0;

    background:
      linear-gradient(
        90deg,
        transparent 0%,
        rgba(255, 255, 255, 0.05) 50%,
        transparent 100%
      );

    transform: translateX(-100%);

    animation: dashboardScan 6s linear infinite;

    pointer-events: none;
  }

  @keyframes dashboardScan {
    to {
      transform: translateX(100%);
    }
  }

  @media (max-width: 600px) {
    padding: 20px;

    border-radius: 24px;
  }
`;

export const DashboardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  padding-bottom: 24px;

  border-bottom:
    1px solid rgba(255, 255, 255, 0.09);

  p {
    margin: 0;

    color: rgba(255, 255, 255, 0.25);

    font-family: "Orbitron", sans-serif;
    font-size: 0.66rem;

    letter-spacing: 0.12em;
  }

  @media (max-width: 480px) {
    p {
      display: none;
    }
  }
`;

export const Status = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 9px;

  color: rgba(255, 255, 255, 0.54);

  font-size: 0.69rem;
  font-weight: 700;

  letter-spacing: 0.11em;

  text-transform: uppercase;

  span {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: #00f5a0;

    box-shadow:
      0 0 14px rgba(0, 245, 160, 0.9);

    animation: ${pulse}
      1.8s ease-in-out infinite;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  gap: 18px;

  margin-top: 30px;
`;

export const Avatar = styled.div`
  display: grid;
  place-items: center;

  flex: 0 0 auto;

  width: 66px;
  height: 66px;

  border:
    1px solid rgba(255, 255, 255, 0.2);

  border-radius: 20px;

  color: #ffffff;

  font-family: "Orbitron", sans-serif;
  font-weight: 800;

  background:
    linear-gradient(
      145deg,
      rgba(123, 47, 247, 0.28),
      rgba(0, 245, 160, 0.08)
    );

  box-shadow:
    inset 0 0 18px
      rgba(255, 255, 255, 0.07),
    0 0 28px
      rgba(123, 47, 247, 0.18);
`;

export const ProfileInfo = styled.div``;

export const StudentName = styled.h3`
  margin: 0;

  color: #ffffff;

  font-size: 1.18rem;
`;

export const StudentLevel = styled.p`
  margin: 7px 0 0;

  color: rgba(255, 255, 255, 0.45);

  font-size: 0.78rem;
`;

export const ProgressArea = styled.div`
  margin-top: 32px;
`;

export const ProgressHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProgressLabel = styled.span`
  color: rgba(255, 255, 255, 0.57);

  font-size: 0.78rem;
`;

export const ProgressValue = styled.strong`
  color: #00f5a0;

  font-size: 0.82rem;
`;

export const ProgressTrack = styled.div`
  width: 100%;
  height: 7px;

  margin-top: 12px;

  overflow: hidden;

  border-radius: 999px;

  background:
    rgba(255, 255, 255, 0.07);
`;

export const ProgressBar = styled.div`
  height: 100%;

  border-radius: inherit;

  background: linear-gradient(
    90deg,
    #00f5a0,
    #7b2ff7
  );

  box-shadow:
    0 0 16px rgba(0, 245, 160, 0.45);

  animation: ${progressLoad}
    1.8s cubic-bezier(.22, 1, .36, 1)
    forwards;
`;

export const Modules = styled.div`
  display: grid;

  gap: 12px;

  margin-top: 30px;
`;

export const Module = styled.article`
  display: grid;
  grid-template-columns:
    auto 1fr auto;

  align-items: center;

  gap: 16px;

  padding: 17px;

  border:
    1px solid rgba(255, 255, 255, 0.08);

  border-radius: 18px;

  background:
    rgba(255, 255, 255, 0.028);

  transition:
    transform 250ms ease,
    border-color 250ms ease,
    background 250ms ease;

  &:hover {
    transform: translateX(6px);

    border-color:
      rgba(255, 255, 255, 0.2);

    background:
      rgba(255, 255, 255, 0.055);
  }

  @media (max-width: 520px) {
    grid-template-columns:
      auto 1fr;

    ${"" /* O status passa para baixo no celular */}
  }
`;

export const ModuleIcon = styled.div`
  display: grid;
  place-items: center;

  width: 42px;
  height: 42px;

  border:
    1px solid rgba(255, 255, 255, 0.13);

  border-radius: 13px;

  color: #ffffff;

  font-family: "Orbitron", sans-serif;
  font-size: 0.72rem;
  font-weight: 800;

  background:
    rgba(123, 47, 247, 0.1);
`;

export const ModuleContent = styled.div``;

export const ModuleTitle = styled.h4`
  margin: 0;

  color: #ffffff;

  font-size: 0.91rem;
`;

export const ModuleDescription = styled.p`
  margin: 6px 0 0;

  color: rgba(255, 255, 255, 0.43);

  font-size: 0.72rem;
  line-height: 1.5;
`;

export const ModuleStatus = styled.span`
  color: #00f5a0;

  font-size: 0.66rem;
  font-weight: 700;

  white-space: nowrap;

  @media (max-width: 520px) {
    grid-column: 2;

    margin-top: 4px;
  }
`;