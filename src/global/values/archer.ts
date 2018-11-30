
export const SnipeValues = {
  name: "Snipe",
  attr: "snipe",
  prop: "snipe",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const EagleGlideValues = {
  name: "Eagle Glide",
  attr: "eagle-glide",
  prop: "eagleGlide",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const ArrowStreamValues = {
  name: "Arrow Stream",
  attr: "arrow-stream",
  prop: "arrowStream",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  damage: [32, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
  hits: [3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5],
  skillRequirements: [],
};

export const ArrowBarrageValues = {
  name: "Arrow Barrage",
  attr: "arrow-barrage",
  prop: "arrowBarrage",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  firstDamage: [153, 153, 164, 175, 186, 197, 208, 219, 230, 241, 252],
  thirdDamage: [82, 82, 87, 92, 97, 102, 107, 112, 117, 122, 127],
  skillRequirements: [],
};

export const RapidShotValues = {
  name: "Rapid Shot",
  attr: "rapid-shot",
  prop: "rapidShot",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  damage: [42, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69],
  skillRequirements: [{
    skill: ArrowStreamValues,
    level: 3,
  }, {
    skill: ArrowBarrageValues,
    level: 3,
  }],
};

export const ArrowStormValues = {
  name: "Arrow Storm",
  attr: "arrow-storm",
  prop: "arrowStorm",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  damage: [39, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66],
  skillRequirements: [{
    skill: ArrowBarrageValues,
    level: 5,
  }, {
    skill: RapidShotValues,
    level: 3,
  }],
};

export const ScrewdriverShotValues = {
  name: "Screwdriver Shot",
  attr: "screwdriver-shot",
  prop: "screwdriverShot",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  stage1: [372, 372, 399, 426, 453, 480, 507, 534, 561, 588, 615],
  stage2: [725, 725, 777, 829, 881, 933, 985, 1037, 1089, 1141, 1193],
  stage3: [1078, 1078, 1155, 1232, 1309, 1386, 1463, 1540, 1617, 1694, 1771],
  skillRequirements: [{
    skill: RapidShotValues,
    level: 8,
  }],
};

export const EvasiveSalvoValues = {
  name: "Evasive Salvo",
  attr: "evasive-salvo",
  prop: "evasiveSalvo",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  damage: [108, 108, 115, 122, 129, 136, 143, 150, 157, 164, 171],
  skillRequirements: [],
};

export const IceArrowValues = {
  name: "Ice Arrow",
  attr: "ice-arrow",
  prop: "iceArrow",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
  skillRequirements: [{
    skill: EvasiveSalvoValues,
    level: 5,
  }],
};

export const AgileArcherValues = {
  name: "Agile Archer",
  attr: "agile-archer",
  prop: "agileArcher",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  piercing: [1, 1, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
  evasion: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  skillRequirements: [{
    skill: IceArrowValues,
    level: 4,
  }],
};

export const BowSwingValues = {
  name: "Bow Swing",
  attr: "bow-swing",
  prop: "bowSwing",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  damage: [244, 244, 261, 278, 295, 312, 329, 346, 363, 380, 397],
  additionalDamage: [183, 183, 196, 209, 222, 235, 248, 261, 274, 287, 300],
  skillRequirements: [{
    skill: AgileArcherValues,
    level: 3,
  }],
};

export const BronzeEagleValues = {
  name: "Bronze Eagle",
  attr: "bronze-eagle",
  prop: "bronzeEagle",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  dexterity: [4.4, 4.4, 4.7, 5, 5.3, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1],
  skillRequirements: [],
};

export const EagleClawValues = {
  name: "Eagle Claw",
  attr: "eagle-claw",
  prop: "eagleClaw",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  damage: [302, 302, 323, 344, 365, 386, 407, 428, 449, 470, 491],
  additionalDamage: [60, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
  movement: [30, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45],
  skillRequirements: [{
    skill: BronzeEagleValues,
    level: 7,
  }],
};

export const EaglesMajestyValues = {
  name: "Eagle's Majesty",
  attr: "eagles-majesty",
  prop: "eaglesMajesty",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  spirit: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  damage: [25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
  skillRequirements: [{
    skill: EagleClawValues,
    level: 3,
  }],
};

export const ConditioningValues = {
  name: "Conditioning",
  attr: "conditioning",
  prop: "conditioning",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  attack: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
  movement: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  skillRequirements: [],
};

export const SharpEyesValues = {
  name: "Sharp Eyes",
  attr: "sharp-eyes",
  prop: "sharpEyes",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  criticalAllies: [13, 13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
  accuracy: [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5],
  criticalSelf: [4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  skillRequirements: [{
    skill: ConditioningValues,
    level: 6,
  }],
};

export const PrecisionShooterValues = {
  name: "Precision Shooter",
  attr: "precision-shooter",
  prop: "precisionShooter",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  speed: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
  screwdriver: [5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
  skillRequirements: [],
};
