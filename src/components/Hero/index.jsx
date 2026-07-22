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

function Hero() {
  const { phase } = useUniverse();

  const visible = phase === STORY_PHASES.READY;

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
        <PrimaryButton>
          Quero ser aluno
        </PrimaryButton>

        <SecondaryButton>
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