import styled, { keyframes } from "styled-components";

const statusPulse = keyframes`
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

const markGlow = keyframes`
  0%,
  100% {
    filter:
      drop-shadow(
        0 0 6px rgba(255, 255, 255, .18)
      )
      drop-shadow(
        0 0 14px rgba(123, 47, 247, .15)
      );
  }

  50% {
    filter:
      drop-shadow(
        0 0 10px rgba(255, 255, 255, .32)
      )
      drop-shadow(
        0 0 24px rgba(123, 47, 247, .3)
      );
  }
`;

export const Container = styled.footer`
  position: relative;

  width: 100%;

  padding: 80px 6vw 34px;

  overflow: hidden;

  border-top:
    1px solid rgba(255, 255, 255, 0.08);

  background:
    radial-gradient(
      circle at 10% 20%,
      rgba(123, 47, 247, 0.11),
      transparent 30%
    ),
    radial-gradient(
      circle at 90% 80%,
      rgba(0, 245, 160, 0.05),
      transparent 30%
    ),
    rgba(3, 4, 12, 0.99);

  z-index: 15;

  &::before {
    content: "";

    position: absolute;

    top: 0;
    left: 10%;

    width: 80%;
    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      rgba(123, 47, 247, 0.65),
      rgba(255, 255, 255, 0.65),
      rgba(0, 245, 160, 0.5),
      transparent
    );

    box-shadow:
      0 0 16px rgba(123, 47, 247, 0.35);

    pointer-events: none;
  }

  @media (max-width: 700px) {
    padding: 65px 22px 28px;
  }
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns:
    minmax(260px, 1.2fr)
    minmax(310px, 1fr)
    auto;

  align-items: start;

  gap: clamp(45px, 7vw, 110px);

  width: min(1240px, 100%);

  margin: 0 auto;

  @media (max-width: 1000px) {
    grid-template-columns:
      minmax(260px, 1fr)
      minmax(300px, 1fr);

    ${"" /* Botão ocupará a largura inferior */}
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: flex-start;

  gap: 20px;
`;

export const BrandMark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;

  min-width: 92px;
  height: 62px;

  padding: 0 14px;

  border:
    1px solid rgba(255, 255, 255, 0.16);

  border-radius: 18px;

  color: #ffffff;

  font-family: "Orbitron", sans-serif;
  font-size: 0.88rem;
  font-weight: 850;

  letter-spacing: 0.05em;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.1),
      rgba(123, 47, 247, 0.06)
    );

  box-shadow:
    inset 0 1px 0
      rgba(255, 255, 255, 0.08),
    0 18px 45px rgba(0, 0, 0, 0.26);

  animation: ${markGlow}
    5s ease-in-out infinite;

  span {
    margin: 0 4px;

    color: #00f5a0;
  }
`;

export const BrandContent = styled.div``;

export const BrandName = styled.h2`
  margin: 2px 0 0;

  color: #ffffff;

  font-size: 1.25rem;
  font-weight: 750;

  letter-spacing: -0.02em;
`;

export const BrandDescription = styled.p`
  max-width: 330px;

  margin: 14px 0 0;

  color: rgba(255, 255, 255, 0.47);

  font-size: 0.85rem;
  line-height: 1.7;
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns:
    repeat(2, minmax(120px, 1fr));

  gap: 42px;

  @media (max-width: 420px) {
    grid-template-columns: 1fr;

    gap: 30px;
  }
`;

export const NavigationGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 13px;
`;

export const NavigationTitle = styled.h3`
  margin: 0 0 5px;

  color: rgba(255, 255, 255, 0.82);

  font-size: 0.74rem;
  font-weight: 750;

  letter-spacing: 0.13em;
  text-transform: uppercase;
`;

export const NavigationLink = styled.a`
  position: relative;

  color: rgba(255, 255, 255, 0.48);

  font-size: 0.82rem;

  text-decoration: none;

  transition:
    color 250ms ease,
    transform 250ms ease;

  &::before {
    content: "";

    position: absolute;

    top: 50%;
    left: -13px;

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background: #00f5a0;

    opacity: 0;

    transform:
      translateY(-50%)
      scale(0);

    box-shadow:
      0 0 10px rgba(0, 245, 160, 0.8);

    transition:
      opacity 250ms ease,
      transform 250ms ease;
  }

  &:hover {
    color: #ffffff;

    transform: translateX(7px);
  }

  &:hover::before {
    opacity: 1;

    transform:
      translateY(-50%)
      scale(1);
  }
`;

export const BackToTop = styled.button`
  display: inline-flex;
  align-items: center;

  gap: 11px;

  padding: 13px 18px;

  border:
    1px solid rgba(255, 255, 255, 0.15);

  border-radius: 999px;

  color: rgba(255, 255, 255, 0.74);

  font-size: 0.78rem;
  font-weight: 700;

  background:
    rgba(255, 255, 255, 0.04);

  backdrop-filter: blur(12px);

  cursor: pointer;

  transition:
    transform 250ms ease,
    color 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;

  span {
    color: #00f5a0;

    font-size: 1rem;
  }

  &:hover {
    transform: translateY(-4px);

    color: #ffffff;

    border-color:
      rgba(255, 255, 255, 0.35);

    box-shadow:
      0 0 26px rgba(123, 47, 247, 0.17);
  }

  @media (max-width: 1000px) {
    justify-self: start;
  }
`;

export const Divider = styled.div`
  width: min(1240px, 100%);
  height: 1px;

  margin: 64px auto 28px;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
`;

export const Bottom = styled.div`
  display: grid;
  grid-template-columns:
    1fr auto auto;

  align-items: center;

  gap: 30px;

  width: min(1240px, 100%);

  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    gap: 13px;

    text-align: center;
  }
`;

export const Copyright = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.32);

  font-size: 0.72rem;
  line-height: 1.6;
`;

export const CreatedBy = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.43);

  font-size: 0.72rem;

  span {
    margin-left: 5px;
  }
`;

export const Status = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: rgba(255, 255, 255, 0.37);

  font-size: 0.65rem;
  font-weight: 700;

  letter-spacing: 0.11em;
  text-transform: uppercase;

  span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #00f5a0;

    box-shadow:
      0 0 11px rgba(0, 245, 160, 0.85);

    animation: ${statusPulse}
      1.8s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;