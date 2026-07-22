import styled, { keyframes } from "styled-components";

const expand = keyframes`
  0%{
    width:0;
    height:0;
    opacity:.9;
  }

  70%{
    opacity:.4;
  }

  100%{
    width:220vmax;
    height:220vmax;
    opacity:0;
  }
`;

export const Wave = styled.div`
  position:absolute;

  top:50%;
  left:50%;

  transform:translate(-50%,-50%);

  width:0;
  height:0;

  border-radius:50%;

  border:2px solid rgba(255,255,255,.9);

  box-shadow:
    0 0 40px rgba(255,255,255,.9),
    0 0 120px rgba(91,140,255,.6);

  pointer-events:none;

  animation:${expand} 1.4s ease-out forwards;

  z-index:9998;
`;