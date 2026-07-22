import styled, {
  css,
  keyframes,
} from "styled-components";

const logoAppear = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(.9);
    filter: blur(14px);
  }

  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    filter: blur(0);
  }
`;

const metalShine = keyframes`
  0% {
    background-position: -250% 50%;
  }

  100% {
    background-position: 250% 50%;
  }
`;

const subtleGlow = keyframes`
  0%,
  100% {
    filter:
      drop-shadow(0 0 6px rgba(255, 255, 255, .18))
      drop-shadow(0 0 14px rgba(123, 47, 247, .12));
  }

  50% {
    filter:
      drop-shadow(0 0 10px rgba(255, 255, 255, .32))
      drop-shadow(0 0 24px rgba(123, 47, 247, .24));
  }
`;

export const Container = styled.button`
  position: absolute;

  top: ${({ $move }) => ($move ? "18px" : "45%")};
  left: ${({ $move }) => ($move ? "18px" : "50%")};

  display: flex;
  align-items: center;

  gap: 24px;

  width: max-content;

  padding: 0;

  border: none;

  color: inherit;

  background: transparent;

  transform: ${({ $move }) =>
    $move
      ? "translate(0, 0) scale(.27)"
      : "translate(-50%, -50%) scale(1)"};

  transform-origin: top left;

  pointer-events: ${({ $clickable }) =>
    $clickable ? "auto" : "none"};

  cursor: ${({ $clickable }) =>
    $clickable ? "pointer" : "default"};

  z-index: 90;

  transition:
    top 1.6s cubic-bezier(.22, 1, .36, 1),
    left 1.6s cubic-bezier(.22, 1, .36, 1),
    transform 1.6s cubic-bezier(.22, 1, .36, 1),
    filter 1.6s ease;

  ${({ $move }) =>
    !$move &&
    css`
      animation: ${logoAppear} 800ms ease forwards;
    `}

  ${({ $move }) =>
    $move &&
    css`
      animation: ${subtleGlow} 5s ease-in-out infinite;
    `}

  ${({ $clickable }) =>
    $clickable &&
    css`
      &:hover {
        filter:
          brightness(1.18)
          drop-shadow(
            0 0 18px rgba(255, 255, 255, 0.32)
          );
      }

      &:focus-visible {
        outline: 3px solid rgba(0, 245, 160, 0.75);
        outline-offset: 18px;
        border-radius: 24px;
      }
    `}
`;

export const BrandName = styled.div`
  display: flex;
  align-items: center;

  font-family:
    "Orbitron",
    "Space Grotesk",
    sans-serif;

  font-size: 5rem;
  font-weight: 900;

  line-height: 1;

  letter-spacing: 0.09em;

  text-transform: uppercase;

  background: linear-gradient(
    110deg,
    #747b86 0%,
    #d9dfe7 18%,
    #ffffff 29%,
    #969eaa 42%,
    #f9fbff 54%,
    #a6aeba 67%,
    #ffffff 80%,
    #747b86 100%
  );

  background-size: 300% 100%;

  background-clip: text;
  -webkit-background-clip: text;

  color: transparent;
  -webkit-text-fill-color: transparent;

  animation: ${metalShine} 6s linear infinite;

  filter:
    drop-shadow(
      0 0 8px rgba(255, 255, 255, 0.22)
    )
    drop-shadow(
      0 0 18px rgba(190, 205, 230, 0.12)
    );
`;

export const DevText = styled.span`
  display: inline-block;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 82%,
    92% 100%,
    0 100%
  );
`;

export const ClubText = styled.span`
  display: inline-block;

  margin-left: 0.08em;
`;

export const Hint = styled.span`
  position: absolute;

  top: calc(100% + 30px);
  left: 50%;

  width: max-content;

  padding: 9px 14px;

  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 999px;

  color: rgba(255, 255, 255, 0.78);

  font-family: sans-serif;
  font-size: 2.5rem;
  font-weight: 600;

  letter-spacing: 0.03em;

  background: rgba(8, 9, 20, 0.72);

  backdrop-filter: blur(12px);

  opacity: ${({ $visible }) =>
    $visible ? 0 : 0};

  transform: translateX(-50%) translateY(-6px);

  pointer-events: none;

  transition:
    opacity 300ms ease,
    transform 300ms ease;

  ${Container}:hover & {
    opacity: ${({ $visible }) =>
      $visible ? 1 : 0};

    transform: translateX(-50%) translateY(0);
  }
`;