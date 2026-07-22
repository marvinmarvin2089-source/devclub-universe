import styled, { keyframes } from "styled-components";

const bracketGlow = keyframes`
  0%,
  100%{
    filter:
      drop-shadow(0 0 5px rgba(255,255,255,.35))
      drop-shadow(0 0 12px rgba(123,47,247,.25));
  }

  50%{
    filter:
      drop-shadow(0 0 9px rgba(255,255,255,.7))
      drop-shadow(0 0 24px rgba(123,47,247,.65));
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  pointer-events: none;
`;

const Bracket = styled.span`
  font-family: "Orbitron", "Space Grotesk", sans-serif;
  font-size: 3.2rem;
  font-weight: 800;

  line-height: 1;

  background: linear-gradient(
    145deg,
    #ffffff,
    #aeb5c0 45%,
    #f8fbff 70%,
    #838b98
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  animation: ${bracketGlow} 4s ease-in-out infinite;
`;

export const LeftBracket = styled(Bracket)``;

export const RightBracket = styled(Bracket)`
  background: linear-gradient(
    145deg,
    #ffffff,
    #a688ff 35%,
    #7b2ff7 65%,
    #e8deff
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;