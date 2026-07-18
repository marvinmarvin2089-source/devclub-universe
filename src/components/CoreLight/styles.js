import styled, { keyframes } from "styled-components";

const breathe = keyframes`
  0%{
    transform:translate(-50%,-50%) scale(.95);
    opacity:.55;
    filter:blur(4px);
  }

  25%{
    transform:translate(-50%,-50%) scale(1.02);
    opacity:.75;
    filter:blur(3px);
  }

  50%{
    transform:translate(-50%,-50%) scale(1.12);
    opacity:1;
    filter:blur(2px);
  }

  75%{
    transform:translate(-50%,-50%) scale(1.03);
    opacity:.8;
    filter:blur(3px);
  }

  100%{
    transform:translate(-50%,-50%) scale(.95);
    opacity:.55;
    filter:blur(4px);
  }
`;

export const Light = styled.div`
  position:absolute;

  top:50%;
  left:50%;

  width:14px;
  height:14px;

  border-radius:50%;

  transform:translate(-50%,-50%);

  background:#fff;

  box-shadow:
      0 0 15px #ffffff,
      0 0 35px #5b8cff,
      0 0 60px #7b2cff;

  animation:${breathe} 4s ease-in-out infinite;

  z-index:8;
`;

export const Aura = styled.div`
  position:absolute;

  top:50%;
  left:50%;

  width:250px;
  height:250px;

  border-radius:50%;

  transform:translate(-50%,-50%);

  background:radial-gradient(
      circle,
      rgba(91,140,255,.15) 0%,
      rgba(123,44,255,.08) 35%,
      transparent 75%
  );

  pointer-events:none;

  z-index:2;
`;