import styled, {
  css,
  keyframes,
} from "styled-components";

const shootFromRight = keyframes`
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(-35deg);

    opacity: 0;
  }

  8% {
    opacity: 1;
  }

  78% {
    opacity: 1;
  }

  100% {
    transform:
      translate3d(-120vw, 115vh, 0)
      rotate(-35deg);

    opacity: 0;
  }
`;

const shootFromLeft = keyframes`
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(35deg);

    opacity: 0;
  }

  8% {
    opacity: 1;
  }

  78% {
    opacity: 1;
  }

  100% {
    transform:
      translate3d(120vw, 110vh, 0)
      rotate(35deg);

    opacity: 0;
  }
`;

const shootFromTop = keyframes`
  0% {
    transform:
      translate3d(0, 0, 0)
      rotate(58deg);

    opacity: 0;
  }

  8% {
    opacity: 1;
  }

  78% {
    opacity: 1;
  }

  100% {
    transform:
      translate3d(72vw, 120vh, 0)
      rotate(58deg);

    opacity: 0;
  }
`;

function getMeteorAnimation(direction) {
  if (direction === "left") {
    return css`
      animation-name: ${shootFromLeft};
    `;
  }

  if (direction === "top") {
    return css`
      animation-name: ${shootFromTop};
    `;
  }

  return css`
    animation-name: ${shootFromRight};
  `;
}

function getMeteorGradient(direction) {
  if (direction === "left") {
    return `
      linear-gradient(
        to right,
        rgba(255, 255, 255, 1),
        rgba(180, 220, 255, 0.8),
        rgba(255, 255, 255, 0)
      )
    `;
  }

  return `
    linear-gradient(
      to left,
      rgba(255, 255, 255, 1),
      rgba(180, 220, 255, 0.8),
      rgba(255, 255, 255, 0)
    )
  `;
}

export const Meteor = styled.div`
  position: absolute;

  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;

  width: ${({ $size }) => $size}px;
  height: 2px;

  opacity: 0;

  border-radius: 999px;

  background: ${({ $direction }) =>
    getMeteorGradient($direction)};

  box-shadow:
    0 0 8px rgba(255, 255, 255, 0.8),
    0 0 18px rgba(91, 140, 255, 0.5),
    0 0 30px rgba(123, 47, 247, 0.16);

  ${({ $direction }) =>
    getMeteorAnimation($direction)}

  animation-duration:
    ${({ $duration }) => $duration}s;

  animation-timing-function: linear;

  animation-iteration-count: infinite;

  animation-delay:
    ${({ $delay }) => $delay}s;

  animation-fill-mode: backwards;

  pointer-events: none;

  will-change:
    transform,
    opacity;

  z-index: 4;

  @media (max-width: 700px) {
    width: ${({ $size }) =>
      Math.max($size * 0.7, 90)}px;
  }

  @media (prefers-reduced-motion: reduce) {
    display: none;
  }
`;