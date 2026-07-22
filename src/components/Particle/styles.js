import styled, { keyframes, css } from "styled-components";

const born = keyframes`
  0%{
    transform:translate(-50%,-50%) scale(1);
    filter:brightness(1);
  }

  40%{
    transform:translate(-50%,-50%) scale(2.8);

    filter:brightness(2.4);

    box-shadow:
      0 0 12px currentColor,
      0 0 25px currentColor,
      0 0 45px currentColor;
  }

  100%{
    transform:translate(-50%,-50%) scale(1);

    filter:brightness(1);

    box-shadow:
      0 0 8px currentColor;
  }
`;

export const Dot = styled.div`
  position: absolute;

  border-radius: 50%;

  transform: translate(-50%, -50%);

  transition:
    opacity 900ms ease,
    transform 900ms ease,
    box-shadow 900ms ease;

  ${({ $born }) =>
    $born &&
    css`
      animation: ${born} 700ms ease-out;
    `}
`;