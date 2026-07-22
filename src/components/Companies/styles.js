import styled from "styled-components";
export const Section = styled.section`
  min-height: 100vh;

  padding: 120px 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
 margin: 0 0 20px;

  font-size: clamp(2.5rem, 5vw, 4rem);
 
  color: #ffffff;

  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  max-width: 700px;

  text-align: center;

  color: rgba(255,255,255,.7);

  margin-bottom: 80px;

  line-height: 1.8;
`;

export const CompaniesGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(260px, 1fr));

  gap: 30px;

  width: min(1200px, 100%);
`;

export const CompanyCard = styled.div`
  padding: 32px;

  border-radius: 24px;

  background:
    rgba(255,255,255,.05);

  border:
    1px solid rgba(255,255,255,.1);

  backdrop-filter: blur(20px);

  transition: .3s;

  &:hover{
    transform:
      translateY(-10px)
      scale(1.03);

    box-shadow:
      0 0 30px rgba(123,47,247,.4);
  }
`;

export const CompanyName = styled.h3`
  margin: 0 0 20px;

  color: #00f5a0;

  font-size: 1.8rem;

`;

export const StudentName = styled.p`
margin: 0 0 20px;

color: #ffffff;

  font-size: 1.1rem;

  
`;

export const Role = styled.p`
  margin: 0 0 20px;
  
  color: rgba(255,255,255,.7);

  line-height: 1.6;
`;