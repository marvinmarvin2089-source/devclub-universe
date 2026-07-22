import styled, { keyframes } from "styled-components";

const sweep = keyframes`
  0% {
    transform: translateX(-130%);
    opacity: 0;
  }

  15% {
    opacity: 1;
  }

  85% {
    opacity: 1;
  }

  100% {
    transform: translateX(130%);
    opacity: 0;
  }
`;

export const Beam = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;

  width: min(760px, 78vw);
  height: 180px;

  transform: translate(-50%, -50%);

  overflow: hidden;

  border-radius: 999px;

  pointer-events: none;

  z-index: 30;

  &::before {
    content: "";

    position: absolute;

    top: 0;
    bottom: 0;
    left: 0;

    width: 32%;

    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.15) 20%,
      rgba(255, 255, 255, 0.95) 43%,
      rgba(0, 245, 160, 0.72) 58%,
      rgba(123, 47, 247, 0.68) 72%,
      transparent 100%
    );

    filter: blur(18px);

    animation: ${sweep} 1800ms
      cubic-bezier(.22, 1, .36, 1) forwards;
  }
`;