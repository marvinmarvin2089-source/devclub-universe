import styled, { keyframes } from "styled-components";

const explode = keyframes`
  0%{
    transform:translate(-50%,-50%) scale(.05);
    opacity:0;
    filter:blur(25px);
  }

  20%{
    opacity:1;
  }

  100%{
    transform:translate(-50%,-50%) scale(30);
    opacity:0;
    filter:blur(2px);
  }
`;

export const Explosion = styled.div`
  position:absolute;

  top:50%;
  left:50%;

  width:40px;
  height:40px;

  border-radius:50%;

  transform:translate(-50%,-50%);

  background:radial-gradient(
    circle,
    #ffffff 0%,
    #d8ebff 18%,
    #8fc5ff 35%,
    #7b2cff 60%,
    transparent 100%
  );

  pointer-events:none;

  animation:${explode} .9s ease-out forwards;

  z-index:9997;
`;