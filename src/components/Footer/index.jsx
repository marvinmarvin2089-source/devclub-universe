import {
  Container,
  Top,
  Brand,
  BrandMark,
  BrandContent,
  BrandName,
  BrandDescription,
  Navigation,
  NavigationGroup,
  NavigationTitle,
  NavigationLink,
  BackToTop,
  Divider,
  Bottom,
  Copyright,
  CreatedBy,
  Status,
} from "./styles";

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container>
      <Top>
        <Brand>
          <BrandMark>
            <span>&lt;</span>
            DC
            <span>/&gt;</span>
          </BrandMark>

          <BrandContent>
            <BrandName>DevClub Universe</BrandName>

            <BrandDescription>
              Onde conhecimento, tecnologia e novas
              oportunidades ganham vida.
            </BrandDescription>
          </BrandContent>
        </Brand>

        <Navigation>
          <NavigationGroup>
            <NavigationTitle>
              Explore
            </NavigationTitle>

            <NavigationLink href="#formacoes">
              Formações
            </NavigationLink>

            <NavigationLink href="#tutores">
              Tutores
            </NavigationLink>

            <NavigationLink href="#depoimentos">
              Vozes do Universo
            </NavigationLink>
          </NavigationGroup>

          <NavigationGroup>
            <NavigationTitle>
              Sua jornada
            </NavigationTitle>

            <NavigationLink href="#alunos">
              Área do Aluno
            </NavigationLink>

            <NavigationLink href="#parceiros">
              Parceiros
            </NavigationLink>

            <NavigationLink
              href="https://wa.me/5511951957674"
              target="_blank"
              rel="noreferrer"
              >
              WhatsApp
            </NavigationLink>

           <NavigationLink
              href="https://wa.me/5511951957674"
              target="_blank"
              rel="noreferrer"
              >
              Quero ser aluno
            </NavigationLink>
          </NavigationGroup>
        </Navigation>

        <BackToTop
          type="button"
          onClick={scrollToTop}
          aria-label="Voltar ao início da página"
        >
          <span aria-hidden="true">↑</span>

          Voltar ao início
        </BackToTop>
      </Top>

      <Divider />

      <Bottom>
        <Copyright>
          © 2026 DevClub Universe.
          Uma experiência criada para mostrar que
          cada desenvolvedor pode construir seu
          próprio universo.
        </Copyright>

        <CreatedBy>
          Criado por Marcus Vinícius para o concurso
          DevClub Full Stack 2026.
          Construído com React, Styled Components
          e muita energia.
          <span aria-hidden="true">🥤🚀</span>
        </CreatedBy>

        <Status>
          <span />

          Sistema operacional: ONLINE
        </Status>
      </Bottom>
    </Container>
  );
}

export default Footer;