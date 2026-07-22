import {
  Section,
  Content,
  Eyebrow,
  Title,
  Description,
  Stats,
  StatCard,
  Number,
  Label,
} from "./styles";

function About() {
  return (
    <Section id="faculdade">
      <Content>
        <Eyebrow>
          MAIS DO QUE ENSINAR PROGRAMAÇÃO
        </Eyebrow>

        <Title>
          Nós ajudamos pessoas a
          <br />
          reescreverem suas histórias.
        </Title>

        <Description>
          O DevClub nasceu com a missão de tornar
          a tecnologia acessível para todos.
          Acreditamos que aprender programação não
          deveria depender de onde você nasceu,
          quanto você ganha ou quantas vezes a vida
          disse "não".
        </Description>

        <Description>
          Transformamos curiosidade em carreira,
          conhecimento em oportunidade e sonhos em
          realidade. Porque toda grande jornada
          começa com a coragem de dar o primeiro
          passo.
        </Description>
      </Content>

      <Stats>
        <StatCard>
          <Number>15.000+</Number>

          <Label>Alunos</Label>
        </StatCard>

        <StatCard>
          <Number>500+</Number>

          <Label>Contratações</Label>
        </StatCard>

        <StatCard>
          <Number>50+</Number>

          <Label>Países</Label>
        </StatCard>

        <StatCard>
          <Number>4.9 ★</Number>

          <Label>Avaliação Média</Label>
        </StatCard>
      </Stats>
    </Section>
  );
}

export default About;