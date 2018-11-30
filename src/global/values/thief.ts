import { ISkill } from "./_skillValues.interfaces";

export const SpiritThief: ISkill = {
  name: "Spirit Thief",
  attr: "spirit-thief",
  prop: "spiritThief",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
  values: {
  },
};

export const MindStealer: ISkill = {
  name: "Mind Stealer",
  attr: "mind-stealer",
  prop: "mindStealer",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
  values: {
  },
};

export const DoubleSlash: ISkill = {
  name: "Double Slash",
  attr: "double-slash",
  prop: "doubleSlash",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    cunning: [7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
};

export const PoisonEdge: ISkill = {
  name: "Poison Edge",
  attr: "poison-edge",
  prop: "poisonEdge",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    firstDamage: [68, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104],
    fifthDamage: [72, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126],
  },
};

export const PoisonVial: ISkill = {
  name: "Poison Vial",
  attr: "poison-vial",
  prop: "poisonVial",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [{
    skill: DoubleSlash,
    level: 3,
  }, {
    skill: PoisonEdge,
    level: 3,
  }],
  values: {
    damage: [45, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72],
    dot: [35, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62],
  },
};

export const SurpriseAttack: ISkill = {
  name: "Surprise Attack",
  attr: "surprise-attack",
  prop: "surpriseAttack",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: PoisonEdge,
    level: 6,
  }, {
    skill: PoisonVial,
    level: 4,
  }],
  values: {
    damage: [101, 101, 108, 115, 122, 129, 136, 143, 150, 157, 164],
    additionalDamage: [313, 313, 336, 359, 382, 405, 428, 451, 474, 497, 520],
  },
};

export const RuthlessGuile: ISkill = {
  name: "Ruthless Guile",
  attr: "ruthless-guile",
  prop: "ruthlessGuile",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: PoisonEdge,
    level: 6,
  }, {
    skill: PoisonVial,
    level: 6,
  }],
  values: {
    damage: [2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
};

export const CunningTactics: ISkill = {
  name: "Cunning Tactics",
  attr: "cunning-tactics",
  prop: "cunningTactics",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  skillRequirements: [],
  values: {
    spirit: [20, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35],
    cooldown: [23, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14],
  },
};

export const BladeDance: ISkill = {
  name: "Blade Dance",
  attr: "blade-dance",
  prop: "bladeDance",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: CunningTactics,
    level: 2,
  }],
  values: {
    firstDamage: [42, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69],
    thirdDamage: [56, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83],
  },
};

export const Retaliation: ISkill = {
  name: "Retaliation",
  attr: "retaliation",
  prop: "retaliation",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: BladeDance,
    level: 2,
  }],
  values: {
    spirit: [12, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
    attack: [4.5, 4.5, 6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18],
    evasion: [6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
};

export const SomersaultKick: ISkill = {
  name: "Somersault Kick",
  attr: "somersault-kick",
  prop: "somersaultKick",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [238, 238, 254, 270, 286, 302, 318, 334, 350, 366, 382],
    movement: [30, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45],
    jump: [30, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45],
  },
};

export const QuickStep: ISkill = {
  name: "Quick Step",
  attr: "quick-step",
  prop: "quickStep",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [],
  values: {
    spirit: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
  },
};

export const MesoguardPlus: ISkill = {
  name: "Mesoguard Plus",
  attr: "mesoguard-plus",
  prop: "mesoguardPlus",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: QuickStep,
    level: 2,
  }],
  values: {
    reduction: [26, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80],
  },
};

export const MindBreaker: ISkill = {
  name: "Mind Breaker",
  attr: "mind-breaker",
  prop: "mindBreaker",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [],
  values: {
    damage: [50, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
  },
};

export const ViciousCuts: ISkill = {
  name: "Vicious Cuts",
  attr: "vicious-cuts",
  prop: "viciousCuts",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: SomersaultKick,
    level: 2,
  }, {
    skill: MindBreaker,
    level: 2,
  }],
  values: {
    damage: [35, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62],
  },
};

export const Haste: ISkill = {
  name: "Haste",
  attr: "haste",
  prop: "haste",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: MindBreaker,
    level: 5,
  }, {
    skill: ViciousCuts,
    level: 3,
  }],
  values: {
    movement: [13, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    attack: [8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
};

export const DeftCombatant: ISkill = {
  name: "Deft Combatant",
  attr: "deft-combatant",
  prop: "deftCombatant",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  skillRequirements: [{
    skill: ViciousCuts,
    level: 5,
  }, {
    skill: Haste,
    level: 3,
  }],
  values: {
    damage: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
  },
};
