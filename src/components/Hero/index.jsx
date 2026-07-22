import {
  Container,
  Title,
  Subtitle,
  Buttons,
  PrimaryButton,
  SecondaryButton,
  Quote,
} from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

const whatsappMessage = encodeURIComponent(
  "Olá! Conheci o DevClub Universe e quero saber mais sobre as formações."
);

const whatsappUrl =
  `https://wa.me/5511951957674?text=${whatsappMessage}`;

function Hero() {
  const { phase } = useUniverse();

  const visible = phase === STORY_PHASES.READY;

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
    <Container $visible={visible}>
      <Title>
        O universo muda
        <br />
        quando você aprende
        <br />
        a criar.
      </Title>

      <Subtitle>
        Da primeira linha de código ao seu primeiro
        trabalho em tecnologia. Formações completas,
        professores incríveis e uma comunidade pronta
        para transformar vidas.
      </Subtitle>

      <Buttons>
        <PrimaryButton
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          Quero ser aluno
        </PrimaryButton>

        <SecondaryButton
          href="#formacoes"
          onClick={scrollToFormations}
        >
          Explorar formações
        </SecondaryButton>
      </Buttons>

      <Quote>
        "Toda estrela começou como uma pequena
        faísca."
      </Quote>
    </Container>
  );
}

export default Hero;