import styled from "styled-components";

export const Dot = styled.div`
  position: absolute;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  border-radius: 50%;

  background: ${({ color }) => color};

  box-shadow: 0 0 8px currentColor;

  transform: translate(-50%, -50%);
`;