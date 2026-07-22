import styled from "styled-components";

export const Container = styled.main`
  position: relative;

  width: 100%;
  min-height: 100vh;

  overflow-x: hidden;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(123, 47, 247, 0.16),
      transparent 38%
    ),
    radial-gradient(
      circle at 50% 100%,
      rgba(0, 245, 160, 0.07),
      transparent 40%
    ),
    ${({ theme }) => theme.colors.background};
`;

export const HeroStage = styled.section`
  position: relative;

  width: 100%;
  height: 92vh;
  min-height: 680px;

  z-index: 10;
`;