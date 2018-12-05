import { ISkill } from "./_skillValues.interfaces";

export const MantraRelease: ISkill = {
  name: "Mantra Release",
  attr: "mantra-release",
  prop: "mantraRelease",
  row: 1,
  column: 3,
  minLevel: 1,
  maxLevel: 1,
  description: `

  `,
};

export const Illusion: ISkill = {
  name: "Illusion",
  attr: "illusion",
  prop: "illusion",
  row: 1,
  column: 4,
  minLevel: 1,
  maxLevel: 1,
  description: `

  `,
};

export const ChainSpear: ISkill = {
  name: "Chain Spear",
  attr: "chain-spear",
  prop: "chainSpear",
  row: 1,
  column: 1,
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  values: {
    damage: [38, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65],
    aoe: [170, 170, 182, 194, 206, 218, 230, 242, 254, 266, 278],
  },
  description: `

  `,
};

export const RayStorm: ISkill = {
  name: "Ray Storm",
  attr: "ray-storm",
  prop: "rayStorm",
  row: 2,
  column: 1,
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  values: {
    damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
  },
  description: `

  `,
};

export const ExpansionBall: ISkill = {
  name: "Expansion Ball",
  attr: "expansion-ball",
  prop: "expansionBall",
  row: 3,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [{
    skill: ChainSpear,
    level: 2,
  }, {
    skill: RayStorm,
    level: 2,
  }],
  values: {
    damage: [625, 625, 669, 713, 757, 801, 845, 889, 933, 977, 1021],
  },
  description: `

  `,
};

export const FlashStrike: ISkill = {
  name: "Flash Strike",
  attr: "flash-strike",
  prop: "flashStrike",
  row: 4,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: ExpansionBall,
    level: 5,
  }],
  values: {
    damage: [688, 688, 736, 784, 832, 880, 928, 976, 1024, 1072, 1120],
  },
  description: `

  `,
};

export const ShootingStar: ISkill = {
  name: "Shooting Star",
  attr: "shooting-star",
  prop: "shootingStar",
  row: 5,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: RayStorm,
    level: 6,
  }, {
    skill: FlashStrike,
    level: 4,
  }],
  description: `

  `,
};

export const ChainExplosion: ISkill = {
  name: "Chain Explosion",
  attr: "chain-explosion",
  prop: "chainExplosion",
  row: 6,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [42, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
  skillRequirements: [{
    skill: ChainSpear,
    level: 8,
  }],
  values: {
    damage: [179, 179, 191, 203, 215, 227, 239, 251, 263, 275, 287],
  },
  description: `

  `,
};

export const CycloneBomber: ISkill = {
  name: "Cyclone Bomber",
  attr: "cyclone-bomber",
  prop: "cycloneBomber",
  row: 3,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [{
    skill: ChainSpear,
    level: 4,
  }],
  values: {
    dot: [23, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41],
    additionalDamage: [68, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104],
    reduction: [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4],
  },
  description: `

  `,
};

export const EnergyStream: ISkill = {
  name: "Energy Stream",
  attr: "energy-stream",
  prop: "energyStream",
  row: 4,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [], // TODO: Should this have requirements?
  values: {
    damage: [44, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71],
    reduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  description: `

  `,
};

export const ElectricEnergyDischarge: ISkill = {
  name: "Electric Energy Discharge",
  attr: "electric-energy-discharge",
  prop: "electricEnergyDischarge",
  row: 5,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: CycloneBomber,
    level: 6,
  }, {
    skill: EnergyStream,
    level: 2,
  }],
  values: {
    damage: [44, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71],
    reduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  description: `

  `,
};

export const SplitBarrier: ISkill = {
  name: "Split Barrier",
  attr: "split-barrier",
  prop: "splitBarrier",
  row: 3,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  description: `

  `,
};

export const LifeString: ISkill = {
  name: "Life String",
  attr: "life-string",
  prop: "lifeString",
  row: 4,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: SplitBarrier,
    level: 4,
  }],
  description: `

  `,
};

export const ZoneOfRenewal: ISkill = {
  name: "Zone Of Renewal",
  attr: "zone-of-renewal",
  prop: "zoneOfRenewal",
  row: 6,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: LifeString,
    level: 4,
  }],
  description: `

  `,
};

export const OrbMastery: ISkill = {
  name: "Orb Mastery",
  attr: "orb-mastery",
  prop: "orbMastery",
  row: 3,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  description: `

  `,
};

export const NarubashanLiberation: ISkill = {
  name: "Narubashan Liberation",
  attr: "narubashan-iberation",
  prop: "narubashanLiberation",
  row: 5,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: OrbMastery,
    level: 4,
  }],
  values: {},
  description: `

  `,
};

export const AnimusFocus: ISkill = {
  name: "Animus Focus",
  attr: "animus-focus",
  prop: "animusFocus",
  row: 6,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: OrbMastery,
    level: 6,
  }, {
    skill: NarubashanLiberation,
    level: 3,
  }],
  values: {
    damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    recovery: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
  description: `

  `,
};
