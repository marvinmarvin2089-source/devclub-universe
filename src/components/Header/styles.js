import styled from "styled-components";

export const Container = styled.header`
  position: fixed;

  top: 24px;
  right: 32px;

  z-index: 100;

  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  transform: ${({ $visible }) =>
    $visible
      ? "translateY(0)"
      : "translateY(-18px)"};

  transition:
    opacity 800ms ease,
    transform 800ms cubic-bezier(.22, 1, .36, 1);

  pointer-events: ${({ $visible }) =>
    $visible ? "auto" : "none"};

  @media (max-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;

  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  position: relative;

  color: rgba(255, 255, 255, 0.82);

  font-size: 0.95rem;
  font-weight: 500;

  text-decoration: none;

  transition:
    color 250ms ease,
    transform 250ms ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 100%;
    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      #ffffff,
      #7b2ff7,
      transparent
    );

    transform: scaleX(0);
    transform-origin: center;

    transition: transform 300ms ease;
  }

  &:hover {
    color: #ffffff;

    transform: translateY(-2px);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const NavButton = styled.button`
  position: relative;

  padding: 0;

  border: none;

  color: rgba(255, 255, 255, 0.82);

  font-family: inherit;
  font-size: 0.95rem;
  font-weight: 500;

  background: transparent;

  cursor: pointer;

  transition:
    color 250ms ease,
    transform 250ms ease;

  &::after {
    content: "";

    position: absolute;

    left: 0;
    bottom: -7px;

    width: 100%;
    height: 1px;

    background: linear-gradient(
      90deg,
      transparent,
      #ffffff,
      #7b2ff7,
      transparent
    );

    transform: scaleX(0);
    transform-origin: center;

    transition: transform 300ms ease;
  }

  &:hover {
    color: #ffffff;

    transform: translateY(-2px);
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const StudentButton = styled.a`
  padding: 12px 20px;

  border: 1px solid rgba(255, 255, 255, 0.38);
  border-radius: 999px;

  color: #ffffff;

  font-size: 0.92rem;
  font-weight: 600;

  text-decoration: none;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.13),
    rgba(123, 47, 247, 0.16)
  );

  box-shadow:
    inset 0 0 14px rgba(255, 255, 255, 0.08),
    0 0 18px rgba(123, 47, 247, 0.16);

  backdrop-filter: blur(12px);

  transition:
    transform 250ms ease,
    border-color 250ms ease,
    box-shadow 250ms ease;

  &:hover {
    transform: translateY(-3px);

    border-color: rgba(255, 255, 255, 0.7);

    box-shadow:
      inset 0 0 16px rgba(255, 255, 255, 0.12),
      0 0 30px rgba(123, 47, 247, 0.34);
  }
`;

export const MenuButton = styled.button`
  display: none;

  width: 48px;
  height: 48px;

  padding: 0;

  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;

  background:
    linear-gradient(
      145deg,
      rgba(255, 255, 255, 0.12),
      rgba(123, 47, 247, 0.12)
    );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 12px 30px rgba(0, 0, 0, 0.28),
    0 0 24px rgba(123, 47, 247, 0.14);

  backdrop-filter: blur(16px);

  cursor: pointer;

  span {
    display: block;

    width: 20px;
    height: 2px;

    margin: 4px auto;

    border-radius: 999px;

    background: linear-gradient(
      90deg,
      #ffffff,
      #00f5a0
    );

    box-shadow:
      0 0 8px rgba(0, 245, 160, 0.25);
  }

  transition:
    transform 250ms ease,
    border-color 250ms ease;

  &:hover {
    transform: translateY(-2px);

    border-color: rgba(255, 255, 255, 0.42);
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MenuOverlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 400;

  background: rgba(2, 3, 10, 0.76);

  backdrop-filter: blur(12px);

  opacity: ${({ $open }) => ($open ? 1 : 0)};

  visibility: ${({ $open }) =>
    $open ? "visible" : "hidden"};

  pointer-events: ${({ $open }) =>
    $open ? "auto" : "none"};

  transition:
    opacity 400ms ease,
    visibility 400ms ease;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileMenu = styled.aside`
  position: absolute;

  top: 0;
  right: 0;

  width: min(360px, 88vw);
  height: 100%;

  padding: 26px 24px;

  overflow-y: auto;

  border-left: 1px solid rgba(255, 255, 255, 0.14);

  background:
    radial-gradient(
      circle at 85% 8%,
      rgba(123, 47, 247, 0.22),
      transparent 32%
    ),
    radial-gradient(
      circle at 15% 88%,
      rgba(0, 245, 160, 0.07),
      transparent 34%
    ),
    rgba(6, 7, 18, 0.98);

  box-shadow:
    -30px 0 100px rgba(0, 0, 0, 0.55);

  transform: ${({ $open }) =>
    $open
      ? "translateX(0)"
      : "translateX(105%)"};

  transition:
    transform 600ms cubic-bezier(.22, 1, .36, 1);
`;

export const MobileMenuHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;

  padding-bottom: 26px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
`;

export const MenuStatus = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: rgba(255, 255, 255, 0.48);

  font-size: 0.65rem;
  font-weight: 700;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: #00f5a0;

    box-shadow:
      0 0 12px rgba(0, 245, 160, 0.85);
  }
`;

export const MobileMenuTitle = styled.h2`
  margin: 12px 0 0;

  color: #ffffff;

  font-size: 1.7rem;
  font-weight: 800;

  letter-spacing: -0.03em;
`;

export const CloseButton = styled.button`
  display: grid;
  place-items: center;

  flex: 0 0 auto;

  width: 44px;
  height: 44px;

  border: 1px solid rgba(255, 255, 255, 0.16);
  border-radius: 50%;

  color: #ffffff;

  font-size: 1.7rem;

  background: rgba(255, 255, 255, 0.05);

  cursor: pointer;

  transition:
    transform 250ms ease,
    background 250ms ease,
    border-color 250ms ease;

  &:hover {
    transform: rotate(90deg);

    border-color: rgba(255, 255, 255, 0.38);

    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MobileNavigation = styled.nav`
  display: flex;
  flex-direction: column;

  gap: 8px;

  margin-top: 32px;
`;

export const MobileNavLink = styled.a`
  display: flex;
  align-items: center;

  gap: 16px;

  padding: 17px 12px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  color: rgba(255, 255, 255, 0.82);

  font-size: 1.05rem;
  font-weight: 600;

  text-decoration: none;

  transition:
    color 250ms ease,
    transform 250ms ease,
    background 250ms ease;

  span {
    color: #00f5a0;

    font-family: "Orbitron", sans-serif;
    font-size: 0.68rem;

    opacity: 0.65;
  }

  &:hover {
    color: #ffffff;

    transform: translateX(6px);

    background: rgba(255, 255, 255, 0.025);
  }
`;

export const MobileNavButton = styled.button`
  display: flex;
  align-items: center;

  gap: 16px;

  width: 100%;

  padding: 17px 12px;

  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);

  color: rgba(255, 255, 255, 0.82);

  font-family: inherit;
  font-size: 1.05rem;
  font-weight: 600;

  text-align: left;

  background: transparent;

  cursor: pointer;

  transition:
    color 250ms ease,
    transform 250ms ease,
    background 250ms ease;

  span {
    color: #00f5a0;

    font-family: "Orbitron", sans-serif;
    font-size: 0.68rem;

    opacity: 0.65;
  }

  &:hover {
    color: #ffffff;

    transform: translateX(6px);

    background: rgba(255, 255, 255, 0.025);
  }
`;

export const MobileStudentButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  margin-top: 24px;

  padding: 16px 20px;

  border: 1px solid rgba(255, 255, 255, 0.23);
  border-radius: 999px;

  color: #ffffff;

  font-size: 0.95rem;
  font-weight: 750;

  text-decoration: none;

  background: linear-gradient(
    135deg,
    rgba(0, 245, 160, 0.22),
    rgba(123, 47, 247, 0.35)
  );

  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.12),
    0 0 32px rgba(123, 47, 247, 0.2);

  span {
    color: #00f5a0;

    font-size: 1.1rem;
  }

  transition:
    transform 250ms ease,
    box-shadow 250ms ease;

  &:hover {
    transform: translateY(-3px);

    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.16),
      0 0 42px rgba(123, 47, 247, 0.32);
  }
`;