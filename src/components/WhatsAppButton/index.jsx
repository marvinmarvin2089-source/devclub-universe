import {
  Button,
  Icon,
  Tooltip,
} from "./styles";

import { useUniverse } from "../../context/useUniverse";
import { STORY_PHASES } from "../../constants/storyPhases";

function WhatsAppButton() {
  const { phase } = useUniverse();

  const isVisible = phase === STORY_PHASES.READY;

  const whatsappMessage = encodeURIComponent(
    "Olá! Conheci o DevClub Universe e quero saber mais sobre as formações."
  );

  const whatsappUrl =
    `https://wa.me/5511951957674?text=${whatsappMessage}`;

  return (
    <Button
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      $visible={isVisible}
      aria-label="Falar com o suporte da DevClub pelo WhatsApp"
    >
      <Icon aria-hidden="true">W</Icon>

      <Tooltip>
        Falar com a DevClub
      </Tooltip>
    </Button>
  );
}

export default WhatsAppButton;