import {
  Section,
  SectionHeader,
  Eyebrow,
  Title,
  Description,
  Orbit,
  Center,
  CenterCore,
  CenterLabel,
  Partner,
  PartnerMark,
  PartnerName,
  FooterMessage,
} from "./styles";

const partners = [
  {
    id: 1,
    abbreviation: "RE",
    name: "React",
  },
  {
    id: 2,
    abbreviation: "VI",
    name: "Vite",
  },
  {
    id: 3,
    abbreviation: "SC",
    name: "Styled Components",
  },
  {
    id: 4,
    abbreviation: "JS",
    name: "JavaScript",
  },
  {
    id: 5,
    abbreviation: "GH",
    name: "GitHub",
  },
  {
    id: 6,
    abbreviation: "AI",
    name: "Inteligência Artificial",
  },
];

function Partners() {
  return (
    <Section id="parceiros">
      <SectionHeader>
        <Eyebrow>Ecossistema DevClub</Eyebrow>

        <Title>
          Tecnologias que impulsionam
          <br />
          este universo.
        </Title>

        <Description>
          Ferramentas modernas que transformam ideias em
          experiências, produtos e novas oportunidades.
        </Description>
      </SectionHeader>

      <Orbit>
        <Center>
          <CenterCore>DC</CenterCore>

          <CenterLabel>
            Ecossistema DevClub
          </CenterLabel>
        </Center>

        {partners.map((partner, index) => (
          <Partner
            key={partner.id}
            $position={index}
          >
            <PartnerMark>
              {partner.abbreviation}
            </PartnerMark>

            <PartnerName>
              {partner.name}
            </PartnerName>
          </Partner>
        ))}
      </Orbit>

      <FooterMessage>
        Grandes ideias crescem quando tecnologia,
        comunidade e oportunidade orbitam o mesmo
        propósito.
      </FooterMessage>
    </Section>
  );
}

export default Partners;