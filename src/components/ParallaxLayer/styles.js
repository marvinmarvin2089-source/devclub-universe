import styled from "styled-components";

export const Layer = styled.div`
  position: absolute;
  inset: 0;

  transition: transform .25s ease-out;

  will-change: transform;
`;