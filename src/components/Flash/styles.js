import styled, { keyframes } from "styled-components";

const flash = keyframes`
  0%{
    opacity:0;
  }

  15%{
    opacity:1;
  }

  100%{
    opacity:0;
  }
`;

export const FlashScreen = styled.div`
  position: fixed;

  inset: 0;

  background: white;

  opacity: 0;

  pointer-events: none;

  z-index: 9999;

  animation: ${flash} .18s linear forwards;
`;