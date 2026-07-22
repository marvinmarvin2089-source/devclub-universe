import {
  Section,
  Title,
  Subtitle,
  CompaniesGrid,
  CompanyCard,
  CompanyName,
  StudentName,
  Role,
} from "./styles";

const companies = [
  {
    name: "Google",
    student: "Ana Costa",
    role: "Front-End Developer",
  },
  {
    name: "Microsoft",
    student: "Pedro Lima",
    role: "Software Engineer",
  },
  {
    name: "Nubank",
    student: "Lucas Mendes",
    role: "Full Stack Developer",
  },
  {
    name: "OpenAI",
    student: "João Martins",
    role: "AI Engineer",
  },
  {
    name: "Spotify",
    student: "Camila Rocha",
    role: "Developer Advocate",
  },
  {
    name: "GitHub",
    student: "Marina Alves",
    role: "Platform Engineer",
  },
];

function Companies() {
  return (
    <Section id="empresas">
      <Title>Empresas do Universo</Title>

      <Subtitle>
        Milhares de alunos começaram sua jornada.
        Alguns hoje ajudam a construir o futuro.
      </Subtitle>

      <CompaniesGrid>
        {companies.map((company) => (
          <CompanyCard key={company.name}>
            <CompanyName>
              {company.name}
            </CompanyName>

            <StudentName>
              {company.student}
            </StudentName>

            <Role>
              {company.role}
            </Role>
          </CompanyCard>
        ))}
      </CompaniesGrid>
    </Section>
  );
}

export default Companies;