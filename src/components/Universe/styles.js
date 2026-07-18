import styled, { keyframes } from "styled-components";

const universeBreath = keyframes`
  0%{
    transform:scale(1);
    filter:brightness(1);
  }

  50%{
    transform:scale(1.008);
    filter:brightness(1.03);
  }

  100%{
    transform:scale(1);
    filter:brightness(1);
  }
`;

const energyWave = keyframes`
  0%,80%,100%{
    opacity:0;
  }

  88%{
    opacity:.08;
  }

  92%{
    opacity:.15;
  }

  96%{
    opacity:.05;
  }
`;

export const Container = styled.div`
  position:absolute;
  inset:0;
  overflow:hidden;
  z-index:1;

  animation:${universeBreath} 8s ease-in-out infinite;

  transform-origin:center;

  will-change:transform;

  &::after{
    content:"";

    position:absolute;
    inset:0;

    background:radial-gradient(
      circle,
      rgba(91,140,255,.12),
      rgba(123,44,255,.05),
      transparent 70%
    );

    pointer-events:none;

    animation:${energyWave} 8s ease-in-out infinite;
  }
`;