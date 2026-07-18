import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
  0%{
    opacity:.25;
    transform:scale(.8);
    filter:blur(0px);
  }

  25%{
    opacity:.6;
    transform:scale(1);
  }

  50%{
    opacity:1;
    transform:scale(1.8);

    filter:blur(.3px);

    box-shadow:
      0 0 12px rgba(255,255,255,.9),
      0 0 22px rgba(91,140,255,.7),
      0 0 40px rgba(123,44,255,.5);
  }

  75%{
    opacity:.6;
    transform:scale(1.1);
  }

  100%{
    opacity:.25;
    transform:scale(.8);
    filter:blur(0px);
  }
`;

export const Star = styled.div`
  position:absolute;

  width:${({ size }) => size}px;
  height:${({ size }) => size}px;

  top:${({ top }) => top}%;
  left:${({ left }) => left}%;

  border-radius:50%;

  background:${({ color }) => color};

  animation:${twinkle} ${({ duration }) => duration}s ease-in-out infinite;

  box-shadow:
    0 0 8px rgba(255,255,255,.8),
    0 0 18px rgba(255,255,255,.5);

  will-change:transform, opacity;

  pointer-events:none;
`;