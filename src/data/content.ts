export interface TrailCheckpoint {
  id: string;
  name: string;
  icon: string;
  text: string;
}

export interface LetterItem {
  id: string;
  title: string;
  message: string;
}

export interface NoticedItem {
  id: string;
  title: string;
  icon: string;
  text: string;
}

export interface GameCollectible {
  step: number;
  name: string;
  icon: string;
  note: string;
}

export interface TrailBackContent {
  recipient: string;
  sender: string;
  hero: {
    title: string;
    subtitle: string;
    dedication: string;
  };
  trail: TrailCheckpoint[];
  letters: LetterItem[];
  noticedCards: NoticedItem[];
  summitGame: {
    title: string;
    subtitle: string;
    totalSteps: number;
    collectibles: GameCollectible[];
    completionMessage: string;
  };
  ending: {
    heading: string;
    subheading: string;
    paragraphs: string[];
    closing: string;
    signature: string;
    bedtimeNote: string;
  };
}

export const content: TrailBackContent = {
  recipient: "Alisha",
  sender: "Biswadip",

  hero: {
    title: "Get well soon, Alisha",
    // TODO: Personalize this short note if you'd like
    subtitle:
      "Taking things one day at a time. The trails aren't going anywhere, and we still have that next hike to do.",
    // Second line below the subtitle
    dedication: "For the girl who never backs down.",
  },

  trail: [
    {
      id: "cp-1",
      name: "Base Camp",
      icon: "Tent",
      // TODO: Edit this sentence
      text: "Resting up and letting your body heal at its own pace.",
    },
    {
      id: "cp-2",
      name: "The Ridge",
      icon: "TrendingUp",
      // TODO: Edit this sentence
      text: "Quiet days in bed, saving up your energy for later.",
    },
    {
      id: "cp-3",
      name: "The Clearing",
      icon: "Sun",
      // TODO: Edit this sentence
      text: "Feeling a little more like yourself every single day.",
    },
    {
      id: "cp-4",
      name: "The Trailhead",
      icon: "Footprints",
      // TODO: Edit this sentence
      text: "Ready to step outside again whenever you feel ready.",
    },
    {
      id: "cp-5",
      name: "The Summit",
      icon: "Mountain",
      // TODO: Edit this sentence
      text: "Standing above the clouds once you're fully healed.",
    },
  ],

  // 5 tap-to-open letters in Biswadip's voice (3 to 5 sentences each)
  letters: [
    {
      id: "rest",
      title: "Open when you need to rest",
      // TODO: Personalize with a real memory from your trek
      message:
        "Don't rush to get back on your feet. Even on our hike, taking a breather at the turn made all the difference. Right now, sleeping and taking it easy is the only job you have. The mountain will still be there when you're completely ready.",
    },
    {
      id: "low",
      title: "Open when you feel low",
      // TODO: Personalize
      message:
        "Hospital days can feel endless and draining, and it's completely okay to feel fed up with it. You don't have to pretend to be upbeat every minute. Just remember how tough you are when things get steep. I'm right here in your corner whenever you want to talk.",
    },
    {
      id: "outdoors",
      title: "Open when you miss the outdoors",
      // TODO: Personalize with what you both experienced
      message:
        "Remember that cool mountain breeze right when we broke through the trees at the viewpoint? The smell of pine needles, the crunch of gravel under our boots, and how wide open the sky felt. That whole world is waiting patiently for you. We'll be back on a trail soon enough.",
    },
    {
      id: "sleep",
      title: "Open when you can't sleep",
      // TODO: Personalize
      message:
        "Hospital rooms at night have strange noises and unfamiliar lights, and it's hard to settle down. Close your eyes and picture a quiet campsite high on a ridge under a sky full of stars. You don't need to solve anything tonight or think about tomorrow. Just loosen your shoulders, breathe slow, and let yourself drift off.",
    },
    {
      id: "smile",
      title: "Open when you need a smile",
      // TODO: Personalize
      message:
        "I still remember you telling me on the trail that you were going to take me on even steeper hikes next time. I haven't forgotten that promise! You're the expedition guide here, so heal up well because you've got a rookie hiker waiting for his next lesson.",
    },
  ],

  // 4 to 5 short cards: specific things I like or admire about her
  noticedCards: [
    {
      id: "grit",
      icon: "Flame",
      title: "Your quiet grit",
      // TODO: Personalize
      text: "When our hike got steep, you didn't complain once. You just set your pace, smiled, and kept moving.",
    },
    {
      id: "energy",
      icon: "Sparkles",
      title: "The energy you bring",
      // TODO: Personalize
      text: "You have this effortless way of making an exhausting uphill trail feel fun and lighthearted for everyone.",
    },
    {
      id: "curiosity",
      icon: "Compass",
      title: "How you look at trails",
      // TODO: Personalize
      text: "You're always curious about what's around the next bend, noticing small wildflowers and viewpoints most people walk right past.",
    },
    {
      id: "resilience",
      icon: "Heart",
      title: "How resilient you are",
      // TODO: Personalize
      text: "Being stuck in hospital is tough, but you face tricky situations with genuine grace and patience.",
    },
  ],

  // Calm, one-thumb tap game: "Reach the Summit"
  summitGame: {
    title: "Reach the Summit",
    subtitle: "Tap anywhere on the path to take a step forward. Pick up small memories along the climb.",
    totalSteps: 18,
    collectibles: [
      {
        step: 5,
        name: "Wildflower by the Path",
        icon: "Flower2",
        // TODO: Edit note
        note: "Growing right out of the gravel. A reminder of how resilient life is, even on rough ground.",
      },
      {
        step: 10,
        name: "Water Break at the Rock",
        icon: "Droplets",
        // TODO: Edit note
        note: "Sitting on a cold boulder, taking a long sip, and looking at how far we climbed already.",
      },
      {
        step: 14,
        name: "Camera at the Viewpoint",
        icon: "Camera",
        // TODO: Edit note
        note: "Stopping to capture the view. I still remember the huge smile on your face when the clouds opened up.",
      },
      {
        step: 18,
        name: "The Summit Cairn",
        icon: "Flag",
        // TODO: Edit note
        note: "The top of the ridge. High above the valley, wind in our hair.",
      },
    ],
    completionMessage: "You made it. Rest well.",
  },

  // Sincere, calm ending
  ending: {
    heading: "Rest easy tonight, Alisha",
    subheading: "Another day of healing behind you.",
    // TODO: Personalize this note
    paragraphs: [
      "There is nothing you have to prove, nowhere you have to rush to, and no mountains to climb today. Just resting and letting your body heal is more than enough.",
      "I know hospital days can feel long and frustrating, but you are doing so well. Every quiet hour you spend resting is bringing your strength back.",
      "Whenever you feel tired, close your eyes, take a slow breath, and get some deep, peaceful sleep. I'm rooting for you every single day.",
    ],
    closing: "Thinking of you always,",
    signature: "Biswadip",
    bedtimeNote: "Sleep well. The world will be right here when you wake up.",
  },
};
