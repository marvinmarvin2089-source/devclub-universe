import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%,
  100% {
    box-shadow:
      0 0 0 0 rgba(0, 245, 160, 0.18),
      0 16px 42px rgba(0, 0, 0, 0.34),
      0 0 28px rgba(0, 245, 160, 0.22);
  }

  50% {
    box-shadow:
      0 0 0 12px rgba(0, 245, 160, 0),
      0 18px 48px rgba(0, 0, 0, 0.4),
      0 0 38px rgba(0, 245, 160, 0.34);
  }
`;

export const Button = styled.a`
  position: fixed;

  right: 26px;
  bottom: 26px;

  display: grid;
  place-items: center;

  width: 58px;
  height: 58px;

  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 50%;

  color: #ffffff;

  text-decoration: none;

  background:
    linear-gradient(
      145deg,
      rgba(0, 245, 160, 0.95),
      rgba(0, 160, 105, 0.94)
    );

  opacity: ${({ $visible }) =>
    $visible ? 1 : 0};

  transform: ${({ $visible }) =>
    $visible
      ? "translateY(0) scale(1)"
      : "translateY(22px) scale(.82)"};

  visibility: ${({ $visible }) =>
    $visible ? "visible" : "hidden"};

  pointer-events: ${({ $visible }) =>
    $visible ? "auto" : "none"};

  z-index: 180;

  animation: ${pulse} 2.6s ease-in-out infinite;

  transition:
    opacity 500ms ease,
    transform 500ms cubic-bezier(.22, 1, .36, 1),
    visibility 500ms ease,
    filter 250ms ease;

  &:hover {
    transform: translateY(-4px) scale(1.06);

    filter: brightness(1.1);
  }

  &:focus-visible {
    outline: 3px solid #ffffff;
    outline-offset: 5px;
  }

  @media (max-width: 600px) {
    right: 18px;
    bottom: 18px;

    width: 54px;
    height: 54px;
  }
`;

export const Icon = styled.span`
  display: grid;
  place-items: center;

  width: 34px;
  height: 34px;

  border: 2px solid rgba(255, 255, 255, 0.92);
  border-radius: 50%;

  font-family: Arial, sans-serif;
  font-size: 1rem;
  font-weight: 900;
`;

export const Tooltip = styled.span`
  position: absolute;

  top: 50%;
  right: calc(100% + 13px);

  width: max-content;

  padding: 9px 13px;

  border: 1px solid rgba(255, 255, 255, 0.13);
  border-radius: 999px;

  color: rgba(255, 255, 255, 0.84);

  font-size: 0.72rem;
  font-weight: 650;

  background: rgba(7, 8, 19, 0.9);

  backdrop-filter: blur(12px);

  opacity: 0;

  transform:
    translateY(-50%)
    translateX(8px);

  pointer-events: none;

  transition:
    opacity 250ms ease,
    transform 250ms ease;

  ${Button}:hover & {
    opacity: 1;

    transform:
      translateY(-50%)
      translateX(0);
  }

  @media (max-width: 600px) {
    display: none;
  }
`;