import {
  Container,
  Mouse,
  Message,
  SkipButton,
} from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function StoryGuide() {
  const { phase, setPhase } = useUniverse();

  const isVisible = phase === STORY_PHASES.IDLE;

  function skipIntroduction(event) {
    event.stopPropagation();

    setPhase(STORY_PHASES.READY);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }

  if (!isVisible) {
    return null;
  }

  return (
    <Container data-story-ignore>
      <Mouse aria-hidden="true">
        <span />
      </Mouse>

      <Message>
        Clique para despertar a primeira luz
      </Message>

      <SkipButton
        type="button"
        onClick={skipIntroduction}
        data-story-ignore
      >
        Pular introdução
      </SkipButton>
    </Container>
  );
}

export default StoryGuide;