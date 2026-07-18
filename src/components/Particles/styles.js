import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%{
    transform:
      translate(0px,0px)
      scale(1);

    opacity:.4;
  }

  50%{
    transform:
      translate(-8px,-8px)
      scale(1.8);

    opacity:1;
  }

  100%{
    transform:
      translate(-15px,-15px)
      scale(1);

    opacity:.5;
  }
`;

export const Particle = styled.div`
  position:absolute;

  width:${({ size }) => size}px;
  height:${({ size }) => size}px;

  top:${({ top }) => top}%;
  left:${({ left }) => left}%;

  border-radius:50%;

  background:${({ color }) => color};

  filter:blur(1px);

  animation:${pulse}
      ${({ duration }) => duration}s
      ease-in-out
      infinite;
`;