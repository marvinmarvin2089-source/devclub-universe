import styled, { keyframes } from "styled-components";

const birth = keyframes`
  0%{
    transform:translate(-50%,-50%) scale(0);
    opacity:0;
  }

  100%{
    transform:translate(-50%,-50%) scale(1);
    opacity:1;
  }
`;

const corePulse = keyframes`
  0%{
    transform:translate(-50%,-50%) scale(1);
    box-shadow:
      0 0 20px #ffffff,
      0 0 45px #7b2cff,
      0 0 80px #5b8cff;
  }

  50%{
    transform:translate(-50%,-50%) scale(1.35);

    box-shadow:
      0 0 35px #ffffff,
      0 0 70px #7b2cff,
      0 0 120px #5b8cff,
      0 0 180px rgba(91,140,255,.5);
  }

  100%{
    transform:translate(-50%,-50%) scale(1);

    box-shadow:
      0 0 20px #ffffff,
      0 0 45px #7b2cff,
      0 0 80px #5b8cff;
  }
`;

const auraPulse = keyframes`
  0%{
    transform:translate(-50%,-50%) scale(.8);
    opacity:.15;
  }

  50%{
    transform:translate(-50%,-50%) scale(1.7);
    opacity:.45;
  }

  100%{
    transform:translate(-50%,-50%) scale(.8);
    opacity:.15;
  }
`;

export const Explosion = styled.div`
  position:absolute;

  top:50%;
  left:50%;

  width:12px;
  height:12px;

  border-radius:50%;

  background:#fff;

  transform:translate(-50%,-50%);

  animation:
    ${birth} 2.5s ease forwards,
    ${corePulse} 4s ease-in-out infinite 2.5s;

  box-shadow:
    0 0 20px #ffffff,
    0 0 45px #7b2cff,
    0 0 80px #5b8cff;

  z-index:9;

  &::before{
    content:"";

    position:absolute;

    top:50%;
    left:50%;

    width:120px;
    height:120px;

    border-radius:50%;

    background:radial-gradient(
      circle,
      rgba(91,140,255,.25) 0%,
      rgba(123,44,255,.12) 45%,
      transparent 75%
    );

    transform:translate(-50%,-50%);

    animation:${auraPulse} 4s ease-in-out infinite;

    z-index:-1;
  }
`;