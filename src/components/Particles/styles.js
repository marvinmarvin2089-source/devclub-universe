import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%{
    transform:scale(.9);
    opacity:.4;
  }

  50%{
    transform:scale(1.6);
    opacity:1;
  }

  100%{
    transform:scale(.9);
    opacity:.4;
  }
`;

export const Particle = styled.div`
  position: absolute;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border-radius: 50%;

  background: ${({ color }) => color};

  filter: blur(1px);

  animation: ${pulse} 2.5s ease-in-out infinite;

  pointer-events: none;

  will-change: left, top;
`;