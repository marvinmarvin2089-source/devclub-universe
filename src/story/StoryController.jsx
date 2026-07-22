import { useEffect, useRef } from "react";

import { useUniverse } from "../context/useUniverse";
import { STORY_PHASES } from "../constants/storyPhases";

import { TIMELINE } from "./timeline";

function StoryController() {
  const { phase, setPhase } = useUniverse();

  const phaseRef = useRef(phase);
  const currentStep = useRef(0);
  const interactionLocked = useRef(false);
  const timers = useRef([]);

  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);

  useEffect(() => {
    function scheduleAutomaticPhases(step) {
      if (!step.automaticPhases) return;

      step.automaticPhases.forEach(
        ({ delay, phase: automaticPhase }) => {
          const timer = window.setTimeout(() => {
            setPhase(automaticPhase);
          }, delay);

          timers.current.push(timer);
        }
      );
    }

    function handleStoryInteraction(event) {
      if (phaseRef.current === STORY_PHASES.READY) {
        return;
      }

      if (
        event.pointerType === "mouse" &&
        event.button !== 0
      ) {
        return;
      }

      const interactiveElement =
        event.target instanceof Element
          ? event.target.closest(
              "button, a, input, textarea, select, [role='button'], [data-story-ignore]"
            )
          : null;

      if (interactiveElement) return;

      if (interactionLocked.current) return;

      const nextStep = TIMELINE[currentStep.current];

      if (!nextStep) return;

      setPhase(nextStep.phase);

      scheduleAutomaticPhases(nextStep);

      currentStep.current += 1;

      if (nextStep.lockFor) {
        interactionLocked.current = true;

        const unlockTimer = window.setTimeout(() => {
          interactionLocked.current = false;
        }, nextStep.lockFor);

        timers.current.push(unlockTimer);
      }
    }

    window.addEventListener(
      "pointerdown",
      handleStoryInteraction
    );

    return () => {
      window.removeEventListener(
        "pointerdown",
        handleStoryInteraction
      );

      timers.current.forEach((timer) => {
        window.clearTimeout(timer);
      });

      timers.current = [];
    };
  }, [setPhase]);

  return null;
}

export default StoryController;