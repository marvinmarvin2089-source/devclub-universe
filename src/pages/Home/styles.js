import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background:
  radial-gradient(
    circle at top,
    rgba(123, 47, 247, 0.18),
    transparent 45%
  ),
  radial-gradient(
    circle at bottom,
    rgba(0, 245, 160, 0.08),
    transparent 50%
  ),
  ${({ theme }) => theme.colors.background};

    position: relative;

    overflow: hidden;
`;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 6rem);

  font-weight: 700;

  letter-spacing: 2px;

  color: ${({ theme }) => theme.colors.primary};

  text-shadow:
    0 0 10px rgba(0, 245, 160, 0.6),
    0 0 20px rgba(0, 245, 160, 0.4),
    0 0 40px rgba(0, 245, 160, 0.2);

  transition: .3s;
`;

export const Subtitle = styled.p`
  margin-top: 20px;

  max-width: 700px;

  font-size: 1.3rem;

  line-height: 1.8;

  color: ${({ theme }) => theme.colors.text};
`;

export const Button = styled.button`
  margin-top: 40px;

  padding: 16px 40px;

  border-radius: 999px;

  background: ${({ theme }) => theme.colors.primary};

  color: ${({ theme }) => theme.colors.background};

  font-size: 1rem;

  font-weight: 700;

  transition: all .3s ease;

  box-shadow:
    0 0 15px rgba(0,245,160,.35);

  &:hover{
    transform: translateY(-4px);

    box-shadow:
      0 0 30px rgba(0,245,160,.6);
  }
`;