import { ISkill } from "./_skillValues.interfaces";

export const Snipe: ISkill = {
  name: "Snipe",
  attr: "snipe",
  prop: "snipe",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const EagleGlide: ISkill = {
  name: "Eagle Glide",
  attr: "eagle-glide",
  prop: "eagleGlide",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const ArrowStream: ISkill = {
  name: "Arrow Stream",
  attr: "arrow-stream",
  prop: "arrowStream",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [32, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
    hits: [3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5],
  },
};

export const ArrowBarrage: ISkill = {
  name: "Arrow Barrage",
  attr: "arrow-barrage",
  prop: "arrowBarrage",
  minLevel: 1,
  maxLevel: 10,
  skillRequirements: [],
  values: {
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    firstDamage: [153, 153, 164, 175, 186, 197, 208, 219, 230, 241, 252],
    thirdDamage: [82, 82, 87, 92, 97, 102, 107, 112, 117, 122, 127],
  },
};

export const RapidShot: ISkill = {
  name: "Rapid Shot",
  attr: "rapid-shot",
  prop: "rapidShot",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [{
    skill: ArrowStream,
    level: 3,
  }, {
    skill: ArrowBarrage,
    level: 3,
  }],
  values: {
    damage: [42, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69],
  },
};

export const ArrowStorm: ISkill = {
  name: "Arrow Storm",
  attr: "arrow-storm",
  prop: "arrowStorm",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: ArrowBarrage,
    level: 5,
  }, {
    skill: RapidShot,
    level: 3,
  }],
  values: {
    damage: [39, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66],
  },
};

export const ScrewdriverShot: ISkill = {
  name: "Screwdriver Shot",
  attr: "screwdriver-shot",
  prop: "screwdriverShot",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  skillRequirements: [{
    skill: RapidShot,
    level: 8,
  }],
  values: {
    stage1: [372, 372, 399, 426, 453, 480, 507, 534, 561, 588, 615],
    stage2: [725, 725, 777, 829, 881, 933, 985, 1037, 1089, 1141, 1193],
    stage3: [1078, 1078, 1155, 1232, 1309, 1386, 1463, 1540, 1617, 1694, 1771],
  },
};

export const EvasiveSalvo: ISkill = {
  name: "Evasive Salvo",
  attr: "evasive-salvo",
  prop: "evasiveSalvo",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [108, 108, 115, 122, 129, 136, 143, 150, 157, 164, 171],
  },
};

export const IceArrow: ISkill = {
  name: "Ice Arrow",
  attr: "ice-arrow",
  prop: "iceArrow",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: EvasiveSalvo,
    level: 5,
  }],
  values: {
    damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
  },
};

export const AgileArcher: ISkill = {
  name: "Agile Archer",
  attr: "agile-archer",
  prop: "agileArcher",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: IceArrow,
    level: 4,
  }],
  values: {
    piercing: [1, 1, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
    evasion: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

export const BowSwing: ISkill = {
  name: "Bow Swing",
  attr: "bow-swing",
  prop: "bowSwing",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: AgileArcher,
    level: 3,
  }],
  values: {
    damage: [244, 244, 261, 278, 295, 312, 329, 346, 363, 380, 397],
    additionalDamage: [183, 183, 196, 209, 222, 235, 248, 261, 274, 287, 300],
  },
};

export const BronzeEagle: ISkill = {
  name: "Bronze Eagle",
  attr: "bronze-eagle",
  prop: "bronzeEagle",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [],
  values: {
    dexterity: [4.4, 4.4, 4.7, 5, 5.3, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1],
  },
};

export const EagleClaw: ISkill = {
  name: "Eagle Claw",
  attr: "eagle-claw",
  prop: "eagleClaw",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: BronzeEagle,
    level: 7,
  }],
  values: {
    damage: [302, 302, 323, 344, 365, 386, 407, 428, 449, 470, 491],
    additionalDamage: [60, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
    movement: [30, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45],
  },
};

export const EaglesMajesty: ISkill = {
  name: "Eagle's Majesty",
  attr: "eagles-majesty",
  prop: "eaglesMajesty",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: EagleClaw,
    level: 3,
  }],
  values: {
    spirit: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    damage: [25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
  },
};

export const Conditioning: ISkill = {
  name: "Conditioning",
  attr: "conditioning",
  prop: "conditioning",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  skillRequirements: [],
  values: {
    attack: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
    movement: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

export const SharpEyes: ISkill = {
  name: "Sharp Eyes",
  attr: "sharp-eyes",
  prop: "sharpEyes",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [{
    skill: Conditioning,
    level: 6,
  }],
  values: {
    criticalAllies: [13, 13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
    accuracy: [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5],
    criticalSelf: [4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  },
};

export const PrecisionShooter: ISkill = {
  name: "Precision Shooter",
  attr: "precision-shooter",
  prop: "precisionShooter",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [],
  values: {
    speed: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
    screwdriver: [5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  },
};
