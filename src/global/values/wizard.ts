import { ISkill } from "./_skillValues.interfaces";

export const ManaFont: ISkill = {
  name: "Mana Font",
  attr: "mana-font",
  prop: "manaFont",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const Teleport: ISkill = {
  name: "Teleport",
  attr: "teleport",
  prop: "teleport",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const PhantomClaw: ISkill = {
  name: "Phantom Claw",
  attr: "phantom-claw",
  prop: "phantomClaw",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [71, 71, 77, 83, 89, 95, 101, 107, 113, 119, 125],
  },
};

export const ArcaneBlast: ISkill = {
  name: "Arcane Blast",
  attr: "arcane-blast",
  prop: "arcaneBlast",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [260, 260, 279, 298, 317, 336, 355, 374, 393, 412, 431],
  },
};

export const FlameWave: ISkill = {
  name: "Flame Wave",
  attr: "flame-wave",
  prop: "flameWave",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [175, 175, 188, 201, 214, 227, 240, 253, 266, 279, 292],
    dot: [21, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39],
  },
};

export const FlameTornado: ISkill = {
  name: "Flame Tornado",
  attr: "flame-tornado",
  prop: "flameTornado",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: FlameWave,
    level: 4,
  }],
  values: {
    damage: [142, 142, 152, 162, 172, 182, 192, 202, 212, 222, 232],
  },
};

export const Pyromancy: ISkill = {
  name: "Pyromancy",
  attr: "pyromancy",
  prop: "pyromancy",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: FlameWave,
    level: 5,
  }, {
    skill: FlameTornado,
    level: 5,
  }],
  values: {
    damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
};

export const ManaClaw: ISkill = {
  name: "Mana Claw",
  attr: "mana-claw",
  prop: "manaClaw",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: ArcaneBlast,
    level: 3,
  }],
  values: {
    firstDamage: [149, 149, 159, 169, 179, 189, 199, 209, 219, 229, 239],
    thirdDamage: [246, 246, 263, 280, 297, 314, 331, 348, 365, 382, 399],
  },
};

export const IceSpear: ISkill = {
  name: "Ice Spear",
  attr: "ice-spear",
  prop: "iceSpear",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [{
    skill: FlameWave,
    level: 4,
  }],
  values: {
    damage: [171, 171, 184, 197, 210, 223, 236, 249, 262, 275, 288],
  },
};

export const IceStorm: ISkill = {
  name: "Ice Storm",
  attr: "ice-storm",
  prop: "iceStorm",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: IceSpear,
    level: 4,
  }],
  values: {
    damage: [152, 152, 163, 174, 185, 196, 207, 218, 229, 240, 251],
  },
};

export const Cryomancy: ISkill = {
  name: "Cryomancy",
  attr: "cryomancy",
  prop: "cryomancy",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: IceSpear,
    level: 5,
  }, {
    skill: IceStorm,
    level: 5,
  }],
  values: {
    damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
};

export const ChainLightning: ISkill = {
  name: "Chain Lightning",
  attr: "chain-lightning",
  prop: "chainLightning",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [],
  values: {
    damage: [62, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98],
    additionalDamage: [288, 288, 308, 328, 348, 368, 388, 408, 428, 448, 468],
  },
};

export const Thunderbolt: ISkill = {
  name: "Thunderbolt",
  attr: "thunderbolt",
  prop: "thunderbolt",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: ChainLightning,
    level: 4,
  }],
  values: {
    damage: [611, 611, 656, 701, 746, 791, 836, 881, 926, 971, 1016],
  },
};

export const Electromancy: ISkill = {
  name: "Electromancy",
  attr: "electromancy",
  prop: "electromancy",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: ChainLightning,
    level: 5,
  }, {
    skill: Thunderbolt,
    level: 5,
  }],
  values: {
    damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  },
};

export const MagicArmor: ISkill = {
  name: "Magic Armor",
  attr: "magic-armor",
  prop: "magicArmor",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  skillRequirements: [],
  values: {
    barrier: [6, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
  },
};

export const FocusSeal: ISkill = {
  name: "Focus Seal",
  attr: "focus-seal",
  prop: "focusSeal",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: MagicArmor,
    level: 4,
  }],
  values: {
    increaseAllies: [1, 1, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6],
    increaseSelf: [0.5, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3],
  },
};

export const ElementalMaster: ISkill = {
  name: "Elemental Master",
  attr: "elemental-master",
  prop: "elementalMaster",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  skillRequirements: [],
  values: {
    damage: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};
