import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%{
    margin-top:0px;
    margin-left:0px;
  }

  50%{
    margin-top:-20px;
    margin-left:10px;
  }

  100%{
    margin-top:0px;
    margin-left:0px;
  }
`;

export const Cloud = styled.div`
  position: absolute;

  width: 700px;
  height: 700px;

  border-radius: 50%;

  background: radial-gradient(
    circle,
    rgba(123,47,247,.18) 0%,
    rgba(123,47,247,.08) 40%,
    transparent 75%
  );

  filter: blur(90px);

  top: -250px;
  right: -200px;

  animation: ${float} 18s ease-in-out infinite;

  pointer-events: none;
`;