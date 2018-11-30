import { ISkill } from "./_skillValues.interfaces";

export const IronDefense: ISkill = {
  name: "Iron Defense",
  attr: "iron-defense",
  prop: "ironDefense",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const ShieldCharge: ISkill = {
  name: "Shield Charge",
  attr: "shield-charge",
  prop: "shieldCharge",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const CrossCut: ISkill = {
  name: "Cross Cut",
  attr: "cross-cut",
  prop: "crossCut",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [79, 79, 85, 91, 97, 103, 109, 115, 121, 127, 133],
  },
};

export const TornadoSlash: ISkill = {
  name: "Tornado Slash",
  attr: "tornado-slash",
  prop: "tornadoSlash",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [81, 81, 86, 91, 96, 101, 106, 111, 116, 121, 126],
  },
};

export const DivineStrike: ISkill = {
  name: "Divine Strike",
  attr: "divine-strike",
  prop: "divineStrike",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [{
    skill: TornadoSlash,
    level: 2,
  }, {
    skill: CrossCut,
    level: 2,
  }],
  values: {
    damage: [501, 501, 536, 571, 606, 641, 676, 711, 746, 781, 816],
  },
};

export const StingingFlurry: ISkill = {
  name: "Stinging Flurry",
  attr: "stinging-flurry",
  prop: "stingingFlurry",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: CrossCut,
    level: 5,
  }, {
    skill: DivineStrike,
    level: 5,
  }],
  values: {
    damage: [83, 83, 89, 95, 101, 107, 113, 119, 125, 131, 137],
  },
};

export const DrillThrust: ISkill = {
  name: "Drill Thrust",
  attr: "drill-thrust",
  prop: "drillThrust",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: DivineStrike,
    level: 6,
  }],
  values: {
    damage: [412, 412, 441, 470, 499, 528, 557, 586, 615, 644, 673],
  },
};

export const LongswordMastery: ISkill = {
  name: "Longsword Mastery",
  attr: "longsword-mastery",
  prop: "longswordMastery",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  skillRequirements: [{
    skill: CrossCut,
    level: 6,
  }, {
    skill: DrillThrust,
    level: 2,
  }],
  values: {
    attack: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
  },
};

export const TyphoonSlash: ISkill = {
  name: "Typhoon Slash",
  attr: "typhoon-slash",
  prop: "typhoonSlash",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  skillRequirements: [{
    skill: TornadoSlash,
    level: 3,
  }],
  values: {
    damage: [147, 147, 158, 169, 180, 191, 202, 213, 224, 235, 246],
  },
};

export const IronShield: ISkill = {
  name: "IronShield",
  attr: "iron-shield",
  prop: "ironShield",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    reduction: [25, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
  },
};

export const ShieldToss: ISkill = {
  name: "Shield Toss",
  attr: "shield-toss",
  prop: "shieldToss",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: IronShield,
    level: 4,
  }, {
    skill: TyphoonSlash,
    level: 4,
  }],
  values: {
    damage: [60, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
    reduction: [1.0, 1.0, 1.2, 2.2, 2.2, 3.2, 4.0, 4.2, 5.2, 5.8, 6.4],
  },
};

export const ShieldMastery: ISkill = {
  name: "Shield Mastery",
  attr: "shield-mastery",
  prop: "shieldMastery",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: IronShield,
    level: 4,
  }],
  values: {
    evasion: [9, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    perfectGuard: [5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    increaseChance: [40, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76],
    damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
};

export const ShieldBooster: ISkill = {
  name: "Shield Booster",
  attr: "shield-booster",
  prop: "shieldBooster",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: ShieldMastery,
    level: 2,
  }],
  values: {
    damage: [190, 190, 204, 218, 232, 246, 260, 274, 288, 302, 316],
    increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
};

export const ShieldWall: ISkill = {
  name: "Shield Wall",
  attr: "shield-wall",
  prop: "shieldWall",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [],
  values: {
    resistance: [90, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
  },
};

export const Warhorn: ISkill = {
  name: "Warhorn",
  attr: "warhorn",
  prop: "warhorn",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: ShieldWall,
    level: 3,
  }],
  values: {
    allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
};

export const Bulwark: ISkill = {
  name: "Bulwark",
  attr: "bulwark",
  prop: "bulwark",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: ShieldWall,
    level: 4,
  }, {
    skill: Warhorn,
    level: 3,
  }],
  values: {
    allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    cooldown: [130, 130, 120, 110, 100, 90, 80, 70, 60, 55, 50],
  },
};

export const DefenderOfTheFaith: ISkill = {
  name: "Defender of the Faith",
  attr: "defender-of-the-faith",
  prop: "defenderOfTheFaith",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: ShieldWall,
    level: 4,
  }, {
    skill: Warhorn,
    level: 3,
  }],
  values: {
    allies: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    cooldown: [130, 130, 120, 110, 100, 90, 80, 70, 60, 55, 50],
  },
};
