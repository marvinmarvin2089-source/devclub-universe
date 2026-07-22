import styled, { keyframes } from "styled-components";

const guideFloat = keyframes`
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }

  50% {
    transform: translateX(-50%) translateY(-6px);
  }
`;

const wheelMove = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-3px);
  }

  35% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    transform: translateY(7px);
  }
`;

export const Container = styled.div`
  position: fixed;

  left: 50%;
  bottom: max(28px, env(safe-area-inset-bottom));

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;

  width: max-content;
  max-width: calc(100vw - 32px);

  padding: 12px 20px 10px;

  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 22px;

  background:
    linear-gradient(
      145deg,
      rgba(8, 9, 22, 0.72),
      rgba(20, 10, 42, 0.55)
    );

  box-shadow:
    0 18px 55px rgba(0, 0, 0, 0.35),
    0 0 28px rgba(123, 47, 247, 0.12);

  backdrop-filter: blur(14px);

  z-index: 250;

  animation: ${guideFloat}
    2.8s ease-in-out infinite;

  pointer-events: none;

  @media (max-width: 600px) {
    bottom: max(18px, env(safe-area-inset-bottom));

    padding: 10px 16px 8px;
  }
`;

export const Mouse = styled.div`
  position: relative;

  width: 20px;
  height: 30px;

  border: 1px solid rgba(255, 255, 255, 0.48);
  border-radius: 999px;

  box-shadow:
    0 0 14px rgba(123, 47, 247, 0.22);

  span {
    position: absolute;

    top: 6px;
    left: 50%;

    width: 3px;
    height: 6px;

    border-radius: 999px;

    background: #00f5a0;

    box-shadow:
      0 0 9px rgba(0, 245, 160, 0.8);

    transform: translateX(-50%);

    animation: ${wheelMove}
      1.5s ease-in-out infinite;
  }
`;

export const Message = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.84);

  font-size: 0.72rem;
  font-weight: 700;

  letter-spacing: 0.11em;

  text-align: center;
  text-transform: uppercase;

  text-shadow:
    0 0 14px rgba(255, 255, 255, 0.2);

  @media (max-width: 500px) {
    max-width: 280px;

    font-size: 0.64rem;
    line-height: 1.5;
  }
`;

export const SkipButton = styled.button`
  padding: 4px 10px;

  border: none;

  color: rgba(255, 255, 255, 0.48);

  font-family: inherit;
  font-size: 0.68rem;
  font-weight: 600;

  background: transparent;

  cursor: pointer;

  pointer-events: auto;

  transition:
    color 250ms ease,
    transform 250ms ease;

  &:hover {
    color: #00f5a0;

    transform: translateY(-2px);
  }

  &:focus-visible {
    outline: 1px solid #00f5a0;
    outline-offset: 3px;

    border-radius: 6px;
  }
`;