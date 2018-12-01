import { ISkill } from "./_skillValues.interfaces";

export const SteadfastFaith: ISkill = {
  name: "Steadfast Faith",
  attr: "steadfast-faith",
  prop: "steadfastFaith",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
  values: {
  },
};

export const HeavenlyWings: ISkill = {
  name: "Heavenly Wings",
  attr: "heavenly-wings",
  prop: "heavenlyWings",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
  values: {
  },
};

export const CelestialLight: ISkill = {
  name: "Celestial Light",
  attr: "celestial-light",
  prop: "celestialLight",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [53, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89],
    additionalDamage: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  },
};

export const HolyBlast: ISkill = {
  name: "Holy Blast",
  attr: "holy-blast",
  prop: "holyBlast",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [147, 147, 157, 167, 177, 187, 197, 207, 217, 227, 237],
    range: [6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8],
    additionalDamage: [71, 71, 75, 79, 83, 87, 91, 95, 99, 103, 107],
  },
};

export const ShieldOfTheArchon: ISkill = {
  name: "Shield of the Archon",
  attr: "shield-of-the-archon",
  prop: "shieldOfTheArchon",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  skillRequirements: [{
    skill: CelestialLight,
    level: 3,
  }, {
    skill: HolyBlast,
    level: 3,
  }],
  values: {
    resistance: [165, 165, 220, 275, 330, 385, 440, 495, 550, 605, 660],
    damage: [80, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125],
  },
};

export const HolyRelic: ISkill = {
  name: "Holy Relic",
  attr: "holy-relic",
  prop: "holyRelic",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: ShieldOfTheArchon,
    level: 3,
  }],
  values: {
    damage: [174, 174, 186, 198, 210, 222, 234, 246, 258, 270, 282],
  },
};

export const HealingPrayer: ISkill = {
  name: "Healing Prayer",
  attr: "healing-prayer",
  prop: "healingPrayer",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    healing: [160, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232],
  },
};

export const ScourgingWave: ISkill = {
  name: "Scourging Wave",
  attr: "scourging-wave",
  prop: "scourgingWave",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: HealingPrayer,
    level: 2,
  }],
  values: {
    damage: [180, 180, 193, 206, 219, 232, 245, 258, 271, 284, 297],
  },
};

export const Sanctuary: ISkill = {
  name: "Sanctuary",
  attr: "sanctuary",
  prop: "sanctuary",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: HealingPrayer,
    level: 3,
  }, {
    skill: ScourgingWave,
    level: 3,
  }],
  values: {
    range: [5, 5, 5, 9, 9, 13, 13, 13, 13, 13, 13],
    damage: [227, 227, 242, 257, 272, 287, 302, 317, 332, 347, 362],
    healing: [60, 60, 67, 74, 81, 88, 95, 102, 109, 116, 123],
  },
};

export const SmitingAura: ISkill = {
  name: "Smiting Aura",
  attr: "smiting-aura",
  prop: "smitingAura",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: CelestialLight,
    level: 4,
  }, {
    skill: Sanctuary,
    level: 3,
  }],
  values: {
    damage: [124, 124, 132, 140, 148, 156, 164, 172, 180, 188, 196],
    damageIncrease: [1, 1, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4],
  },
};

export const CelestialGuardian: ISkill = {
  name: "Celestial Guardian",
  attr: "celestial-guardian",
  prop: "celestialGuardian",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [],
  values: {
    attack: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

export const CelestialBlessings: ISkill = {
  name: "Celestial Blessings",
  attr: "celestial-blessings",
  prop: "celestialBlessings",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: CelestialGuardian,
    level: 3,
  }],
  values: {
    resistance: [10, 10, 30, 50, 70, 90, 110, 130, 150, 170, 190],
    attack: [1, 3201, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
    healing: [320, 320, 352, 384, 416, 448, 480, 512, 544, 576, 608],
  },
};

export const HolySymbol: ISkill = {
  name: "Holy Symbol",
  attr: "holy-symbol",
  prop: "holySymbol",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: CelestialGuardian,
    level: 6,
  }, {
    skill: CelestialBlessings,
    level: 3,
  }],
  values: {
    spirit: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    increase: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    accuracy: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
  },
};

export const Disciple: ISkill = {
  name: "Disciple",
  attr: "disciple",
  prop: "disciple",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  skillRequirements: [{
    skill: CelestialBlessings,
    level: 6,
  }, {
    skill: HolySymbol,
    level: 4,
  }],
  values: {
    duration: [30, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
  },
};

export const ScepterMastery: ISkill = {
  name: "Scepter Mastery",
  attr: "scepter-mastery",
  prop: "scepterMastery",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [],
  values: {
    attack: [1, 1, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4],
  },
};

export const HealingMastery: ISkill = {
  name: "Healing Mastery",
  attr: "healing-mastery",
  prop: "healingMastery",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: ScepterMastery,
    level: 4,
  }],
  values: {
    recovery: [4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  },
};

export const AngelicRay: ISkill = {
  name: "Angelic Ray",
  attr: "angelic-ray",
  prop: "angelicRay",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: ScepterMastery,
    level: 4,
  }],
  values: {
    damage: [662, 662, 708, 754, 800, 846, 892, 938, 984, 1030, 1076],
    healing: [365, 365, 391, 417, 443, 469, 495, 521, 547, 573, 599],
  },
};
