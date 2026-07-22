import styled, { keyframes } from "styled-components";

const logoBreath = keyframes`
  0%{
    transform:translateY(0px) scale(1);
    filter:brightness(1);
  }

  50%{
    transform:translateY(-2px) scale(1.015);
    filter:brightness(1.08);
  }

  100%{
    transform:translateY(0px) scale(1);
    filter:brightness(1);
  }
`;

export const Container = styled.div`
  position: absolute;

  inset: 0;

  pointer-events: none;

  z-index: 20;

  animation: ${logoBreath} 4s ease-in-out infinite;

  transform-origin: center;

  will-change: transform, filter;
`;