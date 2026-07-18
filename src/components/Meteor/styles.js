import styled, { keyframes } from "styled-components";

const shoot = keyframes`
  0%{
    transform:translate(0,0) rotate(-35deg);
    opacity:0;
  }

  8%{
    opacity:1;
  }

  90%{
    opacity:1;
  }

  100%{
    transform:translate(-1200px,1200px) rotate(-35deg);
    opacity:0;
  }
`;

export const Meteor = styled.div`
  position:absolute;

  top:${({ top }) => top}%;
  left:${({ left }) => left}%;

  width:${({ width }) => width}px;
  height:2px;

  opacity:${({ opacity }) => opacity};

  background:linear-gradient(
    to left,
    rgba(255,255,255,1),
    rgba(180,220,255,.8),
    rgba(255,255,255,0)
  );

  border-radius:999px;

  box-shadow:
    0 0 8px rgba(255,255,255,.8),
    0 0 18px rgba(91,140,255,.5);

  animation:${shoot} ${({ duration }) => duration}s linear infinite;

  animation-delay:${({ delay }) => delay}s;

  pointer-events:none;

  will-change:transform;
`;