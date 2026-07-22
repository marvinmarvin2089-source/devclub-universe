import {
  Section,
  SectionHeader,
  Eyebrow,
  Title,
  Description,
  Grid,
  Card,
  CardGlow,
  AvatarArea,
  Avatar,
  Initials,
  Status,
  Content,
  TutorNumber,
  TutorName,
  TutorRole,
  TutorDescription,
  Technologies,
  Technology,
} from "./styles";

const tutors = [
  {
    number: "01",
    initials: "FE",
    name: "Tutor Front-End",
    role: "Desenvolvimento de interfaces",
    description:
      "Aprenda a transformar ideias em experiências modernas, responsivas e interativas.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    number: "02",
    initials: "BE",
    name: "Tutor Back-End",
    role: "APIs e sistemas escaláveis",
    description:
      "Conheça os fundamentos usados para construir servidores, APIs e aplicações seguras.",
    technologies: ["Node.js", "APIs", "SQL", "Docker"],
  },
  {
    number: "03",
    initials: "IA",
    name: "Tutor de Inteligência Artificial",
    role: "IA aplicada e automações",
    description:
      "Descubra como usar inteligência artificial para criar soluções e acelerar processos.",
    technologies: ["IA", "Agentes", "Prompts", "Automação"],
  },
  {
    number: "04",
    initials: "DA",
    name: "Tutor de Dados",
    role: "Análise e visualização",
    description:
      "Transforme informações complexas em análises claras, úteis e visualmente impactantes.",
    technologies: ["Dados", "Power BI", "Dashboards"],
  },
];

function Tutors() {
  return (
    <Section id="tutores">
      <SectionHeader>
        <Eyebrow>Guias da sua jornada</Eyebrow>

        <Title>
          Aprenda com quem vive
          <br />
          a tecnologia todos os dias.
        </Title>

        <Description>
          Professores preparados para transformar conceitos complexos
          em conhecimento prático, projetos reais e evolução profissional.
        </Description>
      </SectionHeader>

      <Grid>
        {tutors.map((tutor) => (
          <Card key={tutor.number}>
            <CardGlow />

            <AvatarArea>
              <Avatar>
                <Initials>{tutor.initials}</Initials>
              </Avatar>

              <Status>
                <span />
                Tutor DevClub
              </Status>
            </AvatarArea>

            <Content>
              <TutorNumber>{tutor.number}</TutorNumber>

              <TutorName>{tutor.name}</TutorName>

              <TutorRole>{tutor.role}</TutorRole>

              <TutorDescription>
                {tutor.description}
              </TutorDescription>

              <Technologies>
                {tutor.technologies.map((technology) => (
                  <Technology key={technology}>
                    {technology}
                  </Technology>
                ))}
              </Technologies>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Tutors;