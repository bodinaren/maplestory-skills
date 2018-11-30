import { ISkill } from "./_skillValues.interfaces";

export const DarkAura: ISkill = {
  name: "Dark Aura",
  attr: "dark-aura",
  prop: "darkAura",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const XSlash: ISkill = {
  name: "X Slash",
  attr: "x-slash",
  prop: "xSlash",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const RagingSlash: ISkill = {
  name: "Raging Slash",
  attr: "raging-slash",
  prop: "ragingSlash",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [56, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83],
  },
};

export const DeathSpin: ISkill = {
  name: "Death Spin",
  attr: "death-spin",
  prop: "deathSpin",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [69, 69, 74, 79, 84, 89, 94, 99, 104, 109, 114],
  },
};

export const GroundBreaker: ISkill = {
  name: "Ground Breaker",
  attr: "ground-breaker",
  prop: "groundBreaker",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  skillRequirements: [{
    skill: RagingSlash,
    level: 4,
  }, {
    skill: DeathSpin,
    level: 3,
  }],
  values: {
    damage: [218, 218, 233, 248, 263, 278, 293, 308, 323, 338, 353],
  },
};

export const DarkMight: ISkill = {
  name: "Dark Might",
  attr: "dark-might",
  prop: "darkMight",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: RagingSlash,
    level: 6,
  }, {
    skill: GroundBreaker,
    level: 6,
  }],
  values: {
    increase: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  },
};

export const VoidSlash: ISkill = {
  name: "Void Slash",
  attr: "void-slash",
  prop: "voidSlash",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    firstDamage: [257, 257, 274, 291, 308, 325, 342, 359, 376, 393, 410],
    secondDamage: [97, 97, 103, 109, 115, 121, 127, 133, 139, 145, 151],
  },
};

export const DarkBreaker: ISkill = {
  name: "Dark Breaker",
  attr: "dark-breaker",
  prop: "darkBreaker",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: RagingSlash,
    level: 4,
  }, {
    skill: VoidSlash,
    level: 3,
  }],
  values: {
    damage: [357, 357, 382, 407, 432, 457, 482, 507, 532, 557, 582],
    dot: [148, 148, 158, 168, 178, 188, 198, 208, 218, 228, 238],
  },
};

export const WarriorsInstinct: ISkill = {
  name: "Warrior's Instinct",
  attr: "warriors-instinct",
  prop: "warriorsInstinct",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: VoidSlash,
    level: 6,
  }, {
    skill: DarkBreaker,
    level: 5,
  }],
  values: {
    resistance: [15, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    piercing: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
  },
};

export const Bloodlust: ISkill = {
  name: "Bloodlust",
  attr: "bloodlust",
  prop: "bloodlust",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [{
    skill: RagingSlash,
    level: 2,
  }],
  values: {
    damage: [129, 129, 138, 147, 156, 165, 174, 183, 192, 201, 210],
    health: [7, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43],
  },
};

export const AdrenalineRush: ISkill = {
  name: "Adrenaline Rush",
  attr: "adrenaline-rush",
  prop: "adrenalineRush",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: Bloodlust,
    level: 4,
  }],
  values: {
    stage1: [1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4],
    stage2: [2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5],
    stage3: [3, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6],
  },
};

export const BloodPrice: ISkill = {
  name: "Blood Price",
  attr: "blood-price",
  prop: "bloodPrice",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: Bloodlust,
    level: 6,
  }, {
    skill: AdrenalineRush,
    level: 2,
  }],
  values: {
    damage: [5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
  },
};

export const InhumanEndurance: ISkill = {
  name: "Inhuman Endurance",
  attr: "inhuman-endurance",
  prop: "inhumanEndurance",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  skillRequirements: [{
    skill: AdrenalineRush,
    level: 3,
  }, {
    skill: BloodPrice,
    level: 1,
  }],
  values: {
    resistance: [100, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550],
  },
};

export const GreatswordMastery: ISkill = {
  name: "Greatsword Mastery",
  attr: "greatsword-mastery",
  prop: "greatswordMastery",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [{
    skill: RagingSlash,
    level: 3,
  }],
  values: {
    attack: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
  },
};

export const Intimidation: ISkill = {
  name: "Intimidation",
  attr: "intimidation",
  prop: "intimidation",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: GreatswordMastery,
    level: 4,
  }],
  values: {
    damage: [121, 121, 129, 137, 145, 153, 161, 169, 177, 185, 193],
    attack: [9, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    movement: [9, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
  },
};

export const DeepWounds: ISkill = {
  name: "Deep Wounds",
  attr: "deep-wounds",
  prop: "deepWounds",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: GreatswordMastery,
    level: 6,
  }, {
    skill: Intimidation,
    level: 4,
  }],
  values: {
    damage: [4, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31],
  },
};

export const Earthquake: ISkill = {
  name: "Earthquake",
  attr: "earthquake",
  prop: "earthquake",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: DeepWounds,
    level: 2,
  }],
  values: {
    damage: [298, 298, 319, 340, 361, 382, 403, 424, 445, 466, 487],
  },
};
