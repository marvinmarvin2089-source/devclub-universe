import styled from "styled-components";

export const Container = styled.section`
  position: absolute;

  top: 54%;
  left: 50%;

  width: min(820px, 88vw);

  transform: ${({ $visible }) =>
    $visible
      ? "translate(-50%, -50%) translateY(0)"
      : "translate(-50%, -50%) translateY(34px)"};

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  text-align: center;

  z-index: 40;

  pointer-events: ${({ $visible }) =>
    $visible ? "auto" : "none"};

  transition:
    opacity 1.2s ease,
    transform 1.2s cubic-bezier(.22, 1, .36, 1);

  @media (max-width: 900px) {
    top: 55%;

    width: min(760px, 90vw);
  }

  @media (max-width: 600px) {
    top: 57%;

    width: 92vw;
  }
`;

export const Title = styled.h1`
  margin: 0;

  font-size: clamp(2.8rem, 5vw, 4.9rem);
  line-height: 1.04;
  font-weight: 900;

  color: #ffffff;

  text-wrap: balance;

  text-shadow:
    0 0 20px rgba(255, 255, 255, 0.22),
    0 0 48px rgba(123, 47, 247, 0.18);

  @media (max-width: 600px) {
    font-size: clamp(2.35rem, 12vw, 3.7rem);
    line-height: 1.08;
  }
`;

export const Subtitle = styled.p`
  max-width: 680px;

  margin: 28px auto 0;

  font-size: 1.08rem;
  line-height: 1.75;

  color: rgba(255, 255, 255, 0.8);

  text-wrap: balance;

  @media (max-width: 600px) {
    margin-top: 22px;

    font-size: 0.98rem;
    line-height: 1.65;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 18px;

  margin-top: 38px;

  @media (max-width: 600px) {
    gap: 14px;

    margin-top: 30px;
  }
`;

export const PrimaryButton = styled.a`
  padding: 15px 27px;

  border: none;
  border-radius: 999px;

  color: #ffffff;

  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;

  background: linear-gradient(
    135deg,
    #00f5a0,
    #7b2ff7
  );

  box-shadow:
    0 0 20px rgba(123, 47, 247, 0.4),
    0 0 35px rgba(0, 245, 160, 0.12);

  cursor: pointer;

  transition:
    transform 250ms ease,
    box-shadow 250ms ease;

  &:hover {
    transform: translateY(-3px);

    box-shadow:
      0 0 28px rgba(123, 47, 247, 0.55),
      0 0 45px rgba(0, 245, 160, 0.2);
  }
`;

export const SecondaryButton = styled.a`
  padding: 15px 27px;

  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;

  color: #ffffff;

  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;

  background: rgba(255, 255, 255, 0.05);

  backdrop-filter: blur(10px);

  cursor: pointer;

  transition:
    transform 250ms ease,
    border-color 250ms ease,
    background 250ms ease;

  &:hover {
    transform: translateY(-3px);

    border-color: rgba(255, 255, 255, 0.55);

    background: rgba(255, 255, 255, 0.09);
  }
`;

export const Quote = styled.p`
  margin-top: 50px;

  color: rgba(255, 255, 255, 0.48);

  font-size: 0.92rem;
  font-style: italic;
  letter-spacing: 0.07em;

  @media (max-width: 600px) {
    margin-top: 38px;
  }
`;