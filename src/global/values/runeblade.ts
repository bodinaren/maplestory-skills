import { ISkill } from "./_skillValues.interfaces";

export const RuneBalance: ISkill = {
  name: "Rune Balance",
  attr: "rune-balance",
  prop: "runeBalance",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const Blink: ISkill = {
  name: "Blink",
  attr: "blink",
  prop: "blink",
  minLevel: 1,
  maxLevel: 1,
  skillRequirements: [],
};

export const Flurry: ISkill = {
  name: "Flurry",
  attr: "flurry",
  prop: "flurry",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [8, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [46, 46, 49, 52, 55, 58, 61, 64, 67, 70, 73],
  },
};

export const EchoingBlade: ISkill = {
  name: "Echoing Blade",
  attr: "echoing-blade",
  prop: "echoingBlade",
  minLevel: 1,
  maxLevel: 10,
  levelRequirement: [8, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  skillRequirements: [],
  values: {
    damage: [63, 63, 67, 71, 75, 79, 83, 87, 91, 95, 99],
  },
};

export const Impact: ISkill = {
  name: "Impact",
  attr: "impact",
  prop: "impact",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  skillRequirements: [{
    skill: Flurry,
    level: 4,
  }, {
    skill: EchoingBlade,
    level: 3,
  }],
  values: {
    damage: [303, 303, 324, 345, 366, 387, 408, 429, 450, 471, 492],
  },
};

export const RuneFocus: ISkill = {
  name: "Rune Focus",
  attr: "rune-focus",
  prop: "runeFocus",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: Impact,
    level: 3,
  }],
  values: {
    damage: [1, 1, 1.6, 2.4, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
    defence: [1, 1, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6],
    movement: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    evasion: [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4],
  },
};

export const BladeChasm: ISkill = {
  name: "Blade Chasm",
  attr: "blade-chasm",
  prop: "bladeChasm",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
  skillRequirements: [{
    skill: RuneFocus,
    level: 4,
  }],
  values: {
    damage: [53, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89],
    aoe: [106, 106, 114, 122, 130, 138, 146, 154, 162, 170, 178],
  },
};

export const WhirlingBlades: ISkill = {
  name: "Whirling Blades",
  attr: "whirling-blades",
  prop: "whirlingBlades",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [{
    skill: Flurry,
    level: 2,
  }],
  values: {
    damage: [49, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85],
  },
};

export const IllusoryBlades: ISkill = {
  name: "Illusory Blades",
  attr: "illusory-blades",
  prop: "illusoryBlades",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: Flurry,
    level: 4,
  }, {
    skill: WhirlingBlades,
    level: 3,
  }],
  values: {
    damage: [113, 113, 120, 127, 134, 141, 148, 155, 162, 169, 176],
  },
};

export const BladeMastery: ISkill = {
  name: "Blade Mastery",
  attr: "blade-mastery",
  prop: "bladeMastery",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: Flurry,
    level: 5,
  }, {
    skill: IllusoryBlades,
    level: 3,
  }],
  values: {
    damage: [1, 1, 1.6, 2.4, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
  },
};

export const FlameSigil: ISkill = {
  name: "Flame Sigil",
  attr: "flame-sigil",
  prop: "flameSigil",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  skillRequirements: [],
  values: {
    damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  },
};

export const FrostSigil: ISkill = {
  name: "Frost Sigil",
  attr: "frost-sigil",
  prop: "frostSigil",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [],
  values: {
    damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  },
};

export const StormSigil: ISkill = {
  name: "Storm Sigil",
  attr: "storm-sigil",
  prop: "stormSigil",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
  skillRequirements: [],
  values: {
    damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  },
};

export const HoningRunes: ISkill = {
  name: "Honing Runes",
  attr: "honing-runes",
  prop: "honingRunes",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [],
  values: {
    criticalAllies: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    criticalSelf: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
};

export const GravityRune: ISkill = {
  name: "Gravity Rune",
  attr: "gravity-rune",
  prop: "gravityRune",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [],
  values: {
    damage: [114, 114, 122, 130, 138, 146, 154, 162, 170, 178, 186],
  },
};

export const WardingRune: ISkill = {
  name: "Warding Rune",
  attr: "warding-rune",
  prop: "wardingRune",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: GravityRune,
    level: 3,
  }],
  values: {
    resistance: [10, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  },
};

export const ElementalPotency: ISkill = {
  name: "Elemental Potency",
  attr: "elemental-potency",
  prop: "elementalPotency",
  minLevel: 0,
  maxLevel: 10,
  levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
  skillRequirements: [{
    skill: WardingRune,
    level: 4,
  }],
  values: {
    damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
  },
};
