import {
  Section,
  Header,
  Eyebrow,
  Title,
  Description,
  Grid,
  Card,
  CardGlow,
  CardNumber,
  CardIcon,
  CardTitle,
  CardDescription,
  CardTags,
  Tag,
  CardLink,
} from "./styles";

const formations = [
  {
    number: "01",
    icon: "</>",
    title: "Front-End",
    description:
      "Crie interfaces modernas, responsivas e interativas utilizando as tecnologias mais requisitadas do mercado.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "02",
    icon: "{ }",
    title: "Back-End",
    description:
      "Construa APIs, sistemas seguros e aplicações capazes de processar dados em grande escala.",
    tags: ["Node.js", "APIs", "Banco de Dados"],
  },
  {
    number: "03",
    icon: "∞",
    title: "Full Stack",
    description:
      "Domine o desenvolvimento completo de uma aplicação, desde a interface até o servidor.",
    tags: ["Front-End", "Back-End", "Deploy"],
  },
  {
    number: "04",
    icon: "IA",
    title: "Inteligência Artificial",
    description:
      "Aprenda a utilizar inteligência artificial para criar soluções, produtos e novos fluxos de trabalho.",
    tags: ["IA", "Prompts", "Agentes"],
  },
  {
    number: "05",
    icon: "▥",
    title: "Dados e Power BI",
    description:
      "Transforme dados em decisões por meio de análises, dashboards e visualizações profissionais.",
    tags: ["Dados", "Power BI", "Dashboards"],
  },
  {
    number: "06",
    icon: "⚡",
    title: "Automações com N8N",
    description:
      "Automatize processos e conecte ferramentas para criar fluxos inteligentes sem tarefas repetitivas.",
    tags: ["N8N", "Automação", "Integrações"],
  },
];

function Formations() {
  return (
    <Section id="formacoes">
      <Header>
        <Eyebrow>Explore novos universos</Eyebrow>

        <Title>
          Formações para transformar
          <br />
          conhecimento em oportunidade.
        </Title>

        <Description>
          Escolha sua rota, desenvolva habilidades reais e construa
          projetos capazes de abrir novas portas na tecnologia.
        </Description>
      </Header>

      <Grid>
        {formations.map((formation) => (
          <Card key={formation.title}>
            <CardGlow />

            <CardNumber>{formation.number}</CardNumber>

            <CardIcon>{formation.icon}</CardIcon>

            <CardTitle>{formation.title}</CardTitle>

            <CardDescription>
              {formation.description}
            </CardDescription>

            <CardTags>
              {formation.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </CardTags>

            <CardLink
              href="https://wa.me/5511951957674?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20formações%20do%20DevClub."
              target="_blank"
              rel="noreferrer"
              >
              Conhecer formação
              <span aria-hidden="true">↗</span>
            </CardLink>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Formations;