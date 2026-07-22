import { useEffect, useState } from "react";

import {
  Section,
  SectionHeader,
  Eyebrow,
  Title,
  Description,
  Capsules,
  Capsule,
  CapsuleGlow,
  ScanLine,
  Status,
  Avatar,
  Initials,
  StudentName,
  StudentRole,
  Company,
  Quote,
  TransmitButton,
  FinalMessage,
  Overlay,
  Modal,
  ModalHeader,
  Signal,
  CloseButton,
  VideoArea,
  PlaySymbol,
  ModalContent,
  ModalName,
  ModalRole,
  ModalCompany,
  ModalQuote,
} from "./styles";

const students = [
  {
    id: 1,
    initials: "A1",
    name: "Aluno 01",
    role: "Front-End Developer",
    company: "Empresa de Tecnologia",
    quote:
      "Minha vida mudou quando decidi acreditar que também poderia trabalhar com tecnologia.",
    videoUrl: "",
  },
  {
    id: 2,
    initials: "A2",
    name: "Aluno 02",
    role: "Full Stack Developer",
    company: "Startup de Tecnologia",
    quote:
      "Descobri que era capaz de construir coisas que antes pareciam impossíveis.",
    videoUrl: "",
  },
  {
    id: 3,
    initials: "A3",
    name: "Aluno 03",
    role: "Back-End Developer",
    company: "Software House",
    quote:
      "A programação abriu portas que eu nunca imaginei que existissem.",
    videoUrl: "",
  },
  {
    id: 4,
    initials: "A4",
    name: "Aluno 04",
    role: "Desenvolvedor de Software",
    company: "Empresa Internacional",
    quote:
      "Toda grande transformação começa com a coragem de dar o primeiro passo.",
    videoUrl: "",
  },
];

function Voices() {
  const [selectedStudent, setSelectedStudent] =
    useState(null);

  function closeTransmission() {
    setSelectedStudent(null);
  }

  useEffect(() => {
    if (!selectedStudent) return undefined;

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeTransmission();
      }
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    window.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.body.style.overflow =
        previousOverflow;

      window.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [selectedStudent]);

  return (
    <>
      <Section id="depoimentos">
        <SectionHeader>
          <Eyebrow>Vozes do universo</Eyebrow>

          <Title>
            Histórias transmitidas por quem
            <br />
            já viveu essa transformação.
          </Title>

          <Description>
            Milhares de pessoas já começaram uma
            nova jornada por meio da tecnologia.
            Estas cápsulas guardam algumas dessas
            histórias.
          </Description>
        </SectionHeader>

        <Capsules>
          {students.map((student, index) => (
            <Capsule
              key={student.id}
              $position={index}
            >
              <CapsuleGlow />

              <ScanLine />

              <Status>
                <span />
                Transmissão disponível
              </Status>

              <Avatar>
                <Initials>
                  {student.initials}
                </Initials>
              </Avatar>

              <StudentName>
                {student.name}
              </StudentName>

              <StudentRole>
                {student.role}
              </StudentRole>

              <Company>
                {student.company}
              </Company>

              <Quote>
                “{student.quote}”
              </Quote>

              <TransmitButton
                type="button"
                onClick={() =>
                  setSelectedStudent(student)
                }
              >
                <span aria-hidden="true">▶</span>
                Transmitir história
              </TransmitButton>
            </Capsule>
          ))}
        </Capsules>

        <FinalMessage>
          A próxima história transmitida por este
          universo pode ser a sua.
        </FinalMessage>
      </Section>

      <Overlay
        $open={Boolean(selectedStudent)}
        onClick={closeTransmission}
        aria-hidden={!selectedStudent}
      >
        {selectedStudent && (
          <Modal
            onClick={(event) =>
              event.stopPropagation()
            }
            role="dialog"
            aria-modal="true"
            aria-labelledby="voice-modal-title"
          >
            <ModalHeader>
              <Signal>
                <span />
                Transmissão estabelecida
              </Signal>

              <CloseButton
                type="button"
                onClick={closeTransmission}
                aria-label="Fechar transmissão"
              >
                ×
              </CloseButton>
            </ModalHeader>

            <VideoArea>
              {selectedStudent.videoUrl ? (
                <iframe
                  src={selectedStudent.videoUrl}
                  title={`Depoimento de ${selectedStudent.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <PlaySymbol>▶</PlaySymbol>

                  <p>
                    Vídeo do aluno será inserido
                    aqui.
                  </p>
                </>
              )}
            </VideoArea>

            <ModalContent>
              <ModalName id="voice-modal-title">
                {selectedStudent.name}
              </ModalName>

              <ModalRole>
                {selectedStudent.role}
              </ModalRole>

              <ModalCompany>
                {selectedStudent.company}
              </ModalCompany>

              <ModalQuote>
                “{selectedStudent.quote}”
              </ModalQuote>
            </ModalContent>
          </Modal>
        )}
      </Overlay>
    </>
  );
}

export default Voices;