import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;

  inset: 0;

  display: flex;

  z-index: 200;

  background: rgba(2, 3, 10, 0.72);

  backdrop-filter: blur(10px);

  opacity: ${({ $open }) =>
    $open ? 1 : 0};

  visibility: ${({ $open }) =>
    $open ? "visible" : "hidden"};

  pointer-events: ${({ $open }) =>
    $open ? "auto" : "none"};

  transition:
    opacity 450ms ease,
    visibility 450ms ease;
`;

export const Panel = styled.aside`
  position: relative;

  width: min(560px, 92vw);
  height: 100%;

  padding:
    clamp(32px, 6vw, 70px)
    clamp(26px, 5vw, 58px);

  overflow-y: auto;

  border-right:
    1px solid rgba(255, 255, 255, 0.16);

  background:
    radial-gradient(
      circle at 15% 8%,
      rgba(123, 47, 247, 0.2),
      transparent 34%
    ),
    radial-gradient(
      circle at 75% 85%,
      rgba(0, 245, 160, 0.08),
      transparent 38%
    ),
    rgba(7, 8, 19, 0.96);

  box-shadow:
    30px 0 100px rgba(0, 0, 0, 0.55),
    inset -1px 0 0 rgba(255, 255, 255, 0.05);

  transform: ${({ $open }) =>
    $open
      ? "translateX(0)"
      : "translateX(-105%)"};

  transition:
    transform 650ms
      cubic-bezier(.22, 1, .36, 1);
`;

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 24px;

  margin-bottom: 50px;
`;

export const Eyebrow = styled.span`
  display: block;

  margin-bottom: 13px;

  color: #00f5a0;

  font-size: 0.75rem;
  font-weight: 700;

  letter-spacing: 0.2em;

  text-transform: uppercase;
`;

export const Title = styled.h2`
  margin: 0;

  color: #ffffff;

  font-size: clamp(2.8rem, 7vw, 4.8rem);
  line-height: 0.95;

  letter-spacing: -0.05em;
`;

export const CloseButton = styled.button`
  display: grid;
  place-items: center;

  flex: 0 0 auto;

  width: 46px;
  height: 46px;

  border:
    1px solid rgba(255, 255, 255, 0.16);

  border-radius: 50%;

  color: #ffffff;

  font-size: 1.8rem;
  line-height: 1;

  background: rgba(255, 255, 255, 0.055);

  cursor: pointer;

  transition:
    transform 250ms ease,
    background 250ms ease,
    border-color 250ms ease;

  &:hover {
    transform: rotate(90deg);

    border-color:
      rgba(255, 255, 255, 0.4);

    background:
      rgba(255, 255, 255, 0.1);
  }
`;

export const Description = styled.p`
  margin: 0 0 26px;

  color: rgba(255, 255, 255, 0.7);

  font-size: 1.05rem;
  line-height: 1.85;
`;

export const Highlight = styled.p`
  margin: 40px 0;

  padding-left: 24px;

  border-left: 2px solid #00f5a0;

  color: #ffffff;

  font-size: clamp(1.35rem, 3vw, 1.8rem);
  font-weight: 650;

  line-height: 1.45;
`;

export const Stats = styled.div`
  display: grid;
  grid-template-columns:
    repeat(3, minmax(0, 1fr));

  gap: 12px;

  margin-top: 52px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Stat = styled.div`
  padding: 20px 14px;

  border:
    1px solid rgba(255, 255, 255, 0.1);

  border-radius: 18px;

  background:
    rgba(255, 255, 255, 0.035);
`;

export const StatNumber = styled.strong`
  display: block;

  color: #ffffff;

  font-size: 1.45rem;
`;

export const StatLabel = styled.span`
  display: block;

  margin-top: 7px;

  color: rgba(255, 255, 255, 0.48);

  font-size: 0.72rem;
  line-height: 1.4;
`;

export const FooterText = styled.p`
  margin: 52px 0 0;

  color: rgba(255, 255, 255, 0.45);

  font-size: 0.86rem;
  font-style: italic;

  line-height: 1.7;
`;