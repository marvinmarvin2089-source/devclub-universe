import { useEffect } from "react";

import {
  Overlay,
  Panel,
  Header,
  Eyebrow,
  Title,
  CloseButton,
  Description,
  Highlight,
  Stats,
  Stat,
  StatNumber,
  StatLabel,
  FooterText,
} from "./styles";

import { useUniverse } from "../../context/useUniverse";

function AboutPanel() {
  const {
    isAboutOpen,
    closeAbout,
  } = useUniverse();

  useEffect(() => {
    if (!isAboutOpen) return undefined;

    function handleEscape(event) {
      if (event.key === "Escape") {
        closeAbout();
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
  }, [isAboutOpen, closeAbout]);

  return (
    <Overlay
      $open={isAboutOpen}
      onClick={closeAbout}
      aria-hidden={!isAboutOpen}
    >
      <Panel
        $open={isAboutOpen}
        onClick={(event) =>
          event.stopPropagation()
        }
        role="dialog"
        aria-modal="true"
        aria-labelledby="about-title"
      >
        <Header>
          <div>
            <Eyebrow>
              Conheça nossa história
            </Eyebrow>

            <Title id="about-title">
              Quem somos
            </Title>
          </div>

          <CloseButton
            type="button"
            onClick={closeAbout}
            aria-label="Fechar painel"
          >
            ×
          </CloseButton>
        </Header>

        <Description>
          A DevClub nasceu para mostrar que
          programação pode transformar histórias,
          abrir caminhos e criar oportunidades
          reais.
        </Description>

        <Highlight>
          Mais do que ensinar tecnologia, ajudamos
          pessoas a acreditarem que também podem
          construir o próprio futuro.
        </Highlight>

        <Description>
          Por meio de formações práticas,
          professores experientes e uma comunidade
          que cresce junto, transformamos
          curiosidade em conhecimento e conhecimento
          em carreira.
        </Description>

        <Stats>
          <Stat>
            <StatNumber>15 mil+</StatNumber>
            <StatLabel>alunos impactados</StatLabel>
          </Stat>

          <Stat>
            <StatNumber>500+</StatNumber>
            <StatLabel>novas oportunidades</StatLabel>
          </Stat>

          <Stat>
            <StatNumber>4.9</StatNumber>
            <StatLabel>avaliação da comunidade</StatLabel>
          </Stat>
        </Stats>

        <FooterText>
          Toda transformação começa com uma
          decisão. Talvez a próxima história seja a
          sua.
        </FooterText>
      </Panel>
    </Overlay>
  );
}

export default AboutPanel;