import styled, { keyframes } from "styled-components";

const breathe = keyframes`
  0%{
    transform:translate(-50%,-50%) scale(.9);
    opacity:.5;
    filter:blur(6px);
  }

  50%{
    transform:translate(-50%,-50%) scale(1.4);
    opacity:1;
    filter:blur(2px);
  }

  100%{
    transform:translate(-50%,-50%) scale(.9);
    opacity:.5;
    filter:blur(6px);
  }
`;

const auraPulse = keyframes`
  0%{
    transform:translate(-50%,-50%) scale(1);
    opacity:.15;
  }

  50%{
    transform:translate(-50%,-50%) scale(1.35);
    opacity:.45;
  }

  100%{
    transform:translate(-50%,-50%) scale(1);
    opacity:.15;
  }
`;

export const Light = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  width: ${({ $gravity }) => ($gravity ? "30px" : "18px")};
  height: ${({ $gravity }) => ($gravity ? "30px" : "18px")};

  border-radius: 50%;

  transform: translate(-50%, -50%);

  background: white;

  box-shadow:
    0 0 20px #ffffff,
    0 0 60px #5b8cff,
    0 0 120px #7b2cff,
    0 0 220px rgba(91,140,255,.6);

  animation: ${breathe} 3s ease-in-out infinite;

  transition: all 2s ease;

  z-index: 10;
`;

export const Aura = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  width: ${({ $gravity }) => ($gravity ? "500px" : "320px")};
  height: ${({ $gravity }) => ($gravity ? "500px" : "320px")};

  border-radius: 50%;

  transform: translate(-50%, -50%);

  background: radial-gradient(
    circle,
    rgba(91,140,255,.28) 0%,
    rgba(123,44,255,.12) 35%,
    transparent 75%
  );

  animation: ${auraPulse} 3s ease-in-out infinite;

  transition: all 2s ease;

  pointer-events: none;

  z-index: 2;
`;