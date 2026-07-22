import {
  Section,
  Glow,
  Content,
  Eyebrow,
  Title,
  Description,
  Actions,
  PrimaryButton,
  SecondaryButton,
  Dashboard,
  DashboardHeader,
  Status,
  Profile,
  Avatar,
  ProfileInfo,
  StudentName,
  StudentLevel,
  ProgressArea,
  ProgressHeader,
  ProgressLabel,
  ProgressValue,
  ProgressTrack,
  ProgressBar,
  Modules,
  Module,
  ModuleIcon,
  ModuleContent,
  ModuleTitle,
  ModuleDescription,
  ModuleStatus,
} from "./styles";

const modules = [
  {
    icon: "</>",
    title: "Formações",
    description:
      "Continue sua trilha e acompanhe as aulas disponíveis.",
    status: "Em andamento",
  },
  {
    icon: "▶",
    title: "Aulas ao vivo",
    description:
      "Participe de encontros, mentorias e conteúdos exclusivos.",
    status: "Disponível",
  },
  {
    icon: "◎",
    title: "Comunidade",
    description:
      "Conecte-se com alunos, tutores e profissionais de tecnologia.",
    status: "Online",
  },
];

const studentPlatformUrl =
  "https://loja.devclub.com.br/devclub/users/signin";

function StudentArea() {
  function scrollToFormations(event) {
    event.preventDefault();

    const formationsSection =
      document.querySelector("#formacoes");

    formationsSection?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  return (
    <Section id="alunos">
      <Glow />

      <Content>
        <Eyebrow>Central de comando</Eyebrow>

        <Title>
          Sua jornada continua
          <br />
          na Área do Aluno.
        </Title>

        <Description>
          Acesse suas formações, acompanhe sua evolução,
          participe da comunidade e encontre tudo o que
          precisa para avançar na tecnologia.
        </Description>

        <Actions>
          <PrimaryButton
            href={studentPlatformUrl}
            target="_blank"
            rel="noreferrer"
          >
            Acessar plataforma

            <span aria-hidden="true">↗</span>
          </PrimaryButton>

          <SecondaryButton
            href="#formacoes"
            onClick={scrollToFormations}
          >
            Explorar formações
          </SecondaryButton>
        </Actions>
      </Content>

      <Dashboard>
        <DashboardHeader>
          <Status>
            <span />
            Sistema online
          </Status>

          <p>DEVCLUB // STUDENT HUB</p>
        </DashboardHeader>

        <Profile>
          <Avatar>DV</Avatar>

          <ProfileInfo>
            <StudentName>Futuro Dev</StudentName>

            <StudentLevel>
              Jornada em evolução
            </StudentLevel>
          </ProfileInfo>
        </Profile>

        <ProgressArea>
          <ProgressHeader>
            <ProgressLabel>
              Progresso da missão
            </ProgressLabel>

            <ProgressValue>72%</ProgressValue>
          </ProgressHeader>

          <ProgressTrack>
            <ProgressBar />
          </ProgressTrack>
        </ProgressArea>

        <Modules>
          {modules.map((module) => (
            <Module key={module.title}>
              <ModuleIcon>
                {module.icon}
              </ModuleIcon>

              <ModuleContent>
                <ModuleTitle>
                  {module.title}
                </ModuleTitle>

                <ModuleDescription>
                  {module.description}
                </ModuleDescription>
              </ModuleContent>

              <ModuleStatus>
                {module.status}
              </ModuleStatus>
            </Module>
          ))}
        </Modules>
      </Dashboard>
    </Section>
  );
}

export default StudentArea;