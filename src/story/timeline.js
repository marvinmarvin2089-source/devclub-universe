import { STORY_PHASES } from "../constants/storyPhases";

export const TIMELINE = [
  {
    phase: STORY_PHASES.CORE_LIGHT,
  },

  {
    phase: STORY_PHASES.GRAVITY,
  },

  {
    phase: STORY_PHASES.COLLAPSE,
  },

  {
    phase: STORY_PHASES.FLASH,

    automaticPhases: [
      {
        delay: 220,
        phase: STORY_PHASES.BIG_BANG,
      },
    ],

    lockFor: 2300,
  },

  {
    phase: STORY_PHASES.LOGO_FORMATION,
  },

  {
    phase: STORY_PHASES.LOGO_REVEAL,

    automaticPhases: [
      {
        delay: 1500,
        phase: STORY_PHASES.MOVE_LOGO,
      },

      {
        delay: 3200,
        phase: STORY_PHASES.READY,
      },
    ],

    lockFor: 3200,
  },
];