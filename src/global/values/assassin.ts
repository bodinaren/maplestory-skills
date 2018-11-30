import { ISkill } from "./_skillValues.interfaces";

export const ShadowChaser: ISkill = {
  name: "Shadow Chaser",
  attr: "shadow-chaser",
  prop: "shadowChaser",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const Dash: ISkill = {
  name: "Dash",
  attr: "dash",
  prop: "dash",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const LuckyStars: ISkill = {
  name: "Lucky Stars",
  attr: "lucky-stars",
  prop: "luckyStars",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [76, 76, 81, 86, 91, 96, 101, 106, 111, 116, 121],
    aoe: [76, 76, 81, 86, 91, 96, 101, 106, 111, 116, 121],
  },
};

export const FragmentedStar: ISkill = {
  name: "Fragmented Star",
  attr: "fragmented-star",
  prop: "fragmentedStar",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [215, 215, 229, 243, 257, 271, 285, 299, 313, 327, 341],
  },
};

export const StarChaser: ISkill = {
  name: "Star Chaser",
  attr: "star-chaser",
  prop: "starChaser",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  skillRequirements: [{
    skill: FragmentedStar,
    level: 4,
  }],
  values: {
    damage: [39, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66],
  },
};

export const StarFlurry: ISkill = {
  name: "Star Flurry",
  attr: "star-flurry",
  prop: "starFlurry",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: LuckyStars,
    level: 4,
  }, {
    skill: StarChaser,
    level: 3,
  }],
  values: {
    damage: [59, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86],
  },
};

export const ThrownWeaponMastery: ISkill = {
  name: "Thrown Weapon Mastery",
  attr: "thrown-weapon-mastery",
  prop: "thrownWeaponMastery",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: FragmentedStar,
    level: 5,
  }, {
    skill: StarFlurry,
    level: 4,
  }],
  values: {
    attack: [1, 1, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 5.8, 6.4],
  },
};

export const ShadowCutter: ISkill = {
  name: "Shadow Cutter",
  attr: "shadow-cutter",
  prop: "shadowCutter",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [99, 99, 106, 113, 120, 127, 134, 141, 148, 155, 162],
  },
};

export const ShadowBurst: ISkill = {
  name: "Shadow Burst",
  attr: "shadow-burst",
  prop: "shadowBurst",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: ShadowCutter,
    level: 4,
  }],
  values: {
    damage: [211, 211, 225, 239, 253, 267, 281, 295, 309, 323, 337],
    additionalDamage: [211, 211, 225, 239, 253, 267, 281, 295, 309, 323, 337],
  },
};

export const SoulGrind: ISkill = {
  name: "Soul Grind",
  attr: "soul-grind",
  prop: "soulGrind",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: LuckyStars,
    level: 4,
  }, {
    skill: ShadowBurst,
    level: 3,
  }],
  values: {
    damage: [97, 97, 103, 109, 115, 121, 127, 133, 139, 145, 151],
  },
};

export const ShadowArts: ISkill = {
  name: "Shadow Arts",
  attr: "shadow-Arts",
  prop: "shadowArts",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  skillRequirements: [{
    skill: ShadowCutter,
    level: 5,
  }, {
    skill: SoulGrind,
    level: 4,
  }],
  values: {
    damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  },
};

export const DarkCloak: ISkill = {
  name: "Dark Cloak",
  attr: "dark-clock",
  prop: "darkCloak",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [],
  values: {
    movement: [21, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39],
    cooldown: [33, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15],
  },
};

export const MarkOfDeath: ISkill = {
  name: "Mark of Death",
  attr: "mark-of-death",
  prop: "markOfDeath",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: DarkCloak,
    level: 2,
  }],
  values: {
    damage: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

export const DeathSentence: ISkill = {
  name: "Death Sentence",
  attr: "death-sentence",
  prop: "deathSentence",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: MarkOfDeath,
    level: 3,
  }],
  values: {
    damage: [83, 83, 88, 93, 98, 103, 108, 113, 118, 123, 128],
  },
};

export const FatalStrikes: ISkill = {
  name: "Fatl Strikes",
  attr: "fatal-strikes",
  prop: "fatalStrikes",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [],
  values: {
    duration: [8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
};

export const ShadowWeb: ISkill = {
  name: "Shadow Web",
  attr: "shadow-web",
  prop: "shadowWeb",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: FatalStrikes,
    level: 2,
  }],
  values: {
    damage: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    additionalDamage: [14, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    movement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  },
};

export const MirrorImageDarkBlade: ISkill = {
  name: "Mirror Image: Dark Blade",
  attr: "mirror-image-dark-blade",
  prop: "mirrorImageDarkBlade",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: ShadowWeb,
    level: 2,
  }],
  values: {
    damage: [236, 236, 252, 268, 284, 300, 316, 332, 348, 364, 380],
  },
};
