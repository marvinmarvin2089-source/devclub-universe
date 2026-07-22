import styled, { keyframes } from "styled-components";

const cellAppear = keyframes`
  0%{
    opacity: 0;
    transform: scale(.2) rotate(25deg);
    filter: blur(5px);
  }

  70%{
    opacity: 1;
    transform: scale(1.15) rotate(0deg);
    filter: blur(0);
  }

  100%{
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
`;

const scan = keyframes`
  0%{
    top: -20%;
    opacity: 0;
  }

  15%{
    opacity: .9;
  }

  85%{
    opacity: .9;
  }

  100%{
    top: 110%;
    opacity: 0;
  }
`;

export const Grid = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;

  width: 112px;
  height: 112px;

  padding: 10px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.38);
  border-radius: 16px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.18),
      rgba(90, 90, 110, 0.08)
    );

  box-shadow:
    inset 0 0 20px rgba(255, 255, 255, 0.12),
    0 0 20px rgba(213, 226, 255, 0.25),
    0 0 45px rgba(123, 47, 247, 0.16);

  backdrop-filter: blur(8px);
`;

export const Cell = styled.span`
  display: block;

  border-radius: 3px;

  opacity: ${({ $active }) => ($active ? 1 : 0.08)};

  background: ${({ $active }) =>
    $active
      ? `linear-gradient(
          145deg,
          #ffffff 0%,
          #dce5ef 35%,
          #8d96a3 68%,
          #f7fbff 100%
        )`
      : "rgba(255, 255, 255, 0.08)"};

  box-shadow: ${({ $active }) =>
    $active
      ? `
        0 0 5px rgba(255,255,255,.75),
        inset 0 0 4px rgba(255,255,255,.6)
      `
      : "none"};

  animation: ${cellAppear} 600ms ease-out both;
  animation-delay: ${({ $delay }) => $delay}ms;
`;

export const ScannerLight = styled.span`
  position: absolute;

  top: -20%;
  left: 5%;

  width: 90%;
  height: 3px;

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
    0 0 20px rgba(123, 47, 247, 0.7);

  animation: ${scan} 2.4s ease-in-out 900ms infinite;

  pointer-events: none;
`;