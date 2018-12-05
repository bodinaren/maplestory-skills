import { ISkill } from "./_skillValues.interfaces";

export const SpiritThief: ISkill = {
  name: "Spirit Thief",
  attr: "spirit-thief",
  prop: "spiritThief",
  row: 1,
  column: 3,
  minLevel: 1,
  maxLevel: 1,
  passive: true,
  sp: true,
  description: `
    Steal from an enemy. When successful, attacks restore <span>4</span> spirit on hit.
  `,
};

export const MindStealer: ISkill = {
  name: "Mind Stealer",
  attr: "mind-stealer",
  prop: "mindStealer",
  row: 1,
  column: 4,
  minLevel: 1,
  maxLevel: 1,
  attackType: "Close Range / Physical",
  cooldown: 3,
  description: `
    Nimbly move forward <span>4.5</span> m, dealing <span>40%</span> damage to <span>3</span> enemies
    in your path and absorbing their energy to restore <span>10</span> spirit per target.
  `,
};

export const DoubleSlash: ISkill = {
  name: "Double Slash",
  attr: "double-slash",
  prop: "doubleSlash",
  row: 1,
  column: 1,
  minLevel: 1,
  maxLevel: 10,
  attackType: "Close Range / Physical",
  weaponRequired: "One-handed Dagger, One-handed Dagger",
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  values: {
    damage: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    cunning: [7, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  },
  description: `
    Quickly stab with your daggers, dealing <span>[damage]%</span> damage <span>2</span>
    times to <span>3</span> enemies up to <span>3</span> m in front of you.
    Has a <span>[cunning]%</span> chance to activate Cunning for <span>5</span> sec when your attack hits.
    Movement speed increases by <span>30%</span> while Cunning is active, and some skills are enhanced.
    The damage of each attack is affected by the weapon in each hand.
  `,
};

export const PoisonEdge: ISkill = {
  name: "Poison Edge",
  attr: "poison-edge",
  prop: "poisonEdge",
  row: 2,
  column: 1,
  minLevel: 1,
  maxLevel: 10,
  element: "Toxic",
  attackType: "Close Range / Physical",
  weaponRequired: "One-handed Dagger, One-handed Dagger",
  spirit: 10,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  values: {
    firstDamage: [68, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104],
    fifthDamage: [72, 72, 78, 84, 90, 96, 102, 108, 114, 120, 126],
  },
  description: `
    Swing your poison-coated daggers, dealing <span>[firstDamage]%</span> poison
    damage to <span>5</span> enemies up to <span>3</span> m in front of you.
    Keep pressing the key to trigger a <span>5-hit</span> combo.
    The fifth hit deals <span>[fifthDamage]%</span> poison damage
    and moves you <span>3</span> m in the direction you select.
    When Cunning is active, this skill is empowered.
    Consumes <span>10</span> spirit.
  `,
};

export const PoisonVial: ISkill = {
  name: "Poison Vial",
  attr: "poison-vial",
  prop: "poisonVial",
  row: 3,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  element: "Toxic",
  attackType: "Long Range / Physical",
  spirit: 15,
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
  description: `
    Throw a vial of poison at the closest enemy up to <span>7.5</span> m in front of you,
    dealing <span>[damage]%</span> poison damage.
    The vial breaks on impact, splashing a toxic liquid that poisons <span>5</span> enemies within <span>3</span> m and
    deals <span>[dot]%</span> poison damage every second for <span>10</span> sec.
    Consumes <span>15</span> spirit.
  `,
};

export const SurpriseAttack: ISkill = {
  name: "Surprise Attack",
  attr: "surprise-attack",
  prop: "surpriseAttack",
  row: 5,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Close Range / Physical",
  weaponRequired: "One-handed Dagger, One-handed Dagger",
  cooldown: 6,
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
  description: `
    Stab <span>3</span> enemies up to <span>3</span> m in front of you,
    dealing <span>[damage]%</span> damage.
    If a target is afflicted with Poison Edge or Poison Vial, they’ll take an additional
    <span>[additionalDamage]%</span> poison damage for each, and the poison will be removed.
    When Cunning is active, this skill is empowered.
  `,
};

export const RuthlessGuile: ISkill = {
  name: "Ruthless Guile",
  attr: "ruthless-guile",
  prop: "ruthlessGuile",
  row: 6,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  element: "Toxic",
  attackType: "Physical",
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
  description: `
    Prey on the weaknesses of your enemy to deal <span>[damage]%</span> additional
    poison damage to targets afflicted with Poison Blow or Poison Vial.
  `,
};

export const CunningTactics: ISkill = {
  name: "Cunning Tactics",
  attr: "cunning-tactics",
  prop: "cunningTactics",
  row: 3,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  spirit: [20, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35],
  cooldown: [23, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14],
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  description: `
    Using the tricks of the trade, recover <span>[spirit]%</span> spirit and activate Cunning for <span>5</span> sec.
    While Cunning is active, your movement speed increases by <span>30%</span> and some skills can be empowered.
  `,
};

export const BladeDance: ISkill = {
  name: "Blade Dance",
  attr: "blade-dance",
  prop: "bladeDance",
  row: 4,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Close Range / Physical",
  weaponRequired: "One-handed Dagger",
  spirit: 26,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [{
    skill: CunningTactics,
    level: 2,
  }],
  values: {
    firstDamage: [42, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69],
    thirdDamage: [56, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83],
  },
  description: `
    Spin with your daggers out, dealing <span>[firstDamage]%</span>, then <span>[firstDamage]%</span>,
    and then <span>[thirdDamage]%</span> damage to <span>8</span> enemies within <span>3</span> m.
    While Cunning is active, this skill is enhanced.
    Consumes <span>26</span> spirit.
  `,
};

export const Retaliation: ISkill = {
  name: "Retaliation",
  attr: "retaliation",
  prop: "retaliation",
  row: 5,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  passive: true,
  spirit: [12, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: BladeDance,
    level: 2,
  }],
  values: {
    attack: [4.5, 4.5, 6, 7.5, 9, 10.5, 12, 13.5, 15, 16.5, 18],
    evasion: [6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  description: `
    Deftly dodge an attack and position yourself for a counterattack,
    which restore <span>[spirit]</span> spirit,
    increases physical attack and magic attack by <span>[attack]%</span>,
    and increases evasion by <span>[evasion]</span> for <span>12</span> sec.
    This effect will not activate again for <span>1</span> sec.
  `,
};

export const SomersaultKick: ISkill = {
  name: "Somersault Kick",
  attr: "somersault-kick",
  prop: "somersaultKick",
  row: 3,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Close Range / Physical",
  cooldown: 6,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  values: {
    damage: [238, 238, 254, 270, 286, 302, 318, 334, 350, 366, 382],
    movement: [30, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45],
    jump: [30, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45],
  },
  description: `
    Perform a somersault kick to deal <span>[damage]%</span> damage
    to <span>5</span> enemies up to <span>3</span> m in front of you, breaking their stance and decreasing their
    movement speed by <span>[movement]%</span> and jump power by <span>[jump]%</span>.
    When Cunning is active, this skill is empowered.
  `,
};

export const QuickStep: ISkill = {
  name: "Quick Step",
  attr: "quick-step",
  prop: "quickStep",
  row: 4,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  spirit: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  description: `
    Swiftly move back <span>3</span> m and recover <span>[spirit]</span> spirit.
    Consumes <span>40</span> stamina.
  `,
};

export const MesoguardPlus: ISkill = {
  name: "Mesoguard Plus",
  attr: "mesoguard-plus",
  prop: "mesoguardPlus",
  row: 6,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  cooldown: 60,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: QuickStep,
    level: 2,
  }],
  values: {
    reduction: [26, 26, 32, 38, 44, 50, 56, 62, 68, 74, 80],
  },
  description: `
    Spend <span>777</span> mesos to create a meso shield that lasts
    <span>4</span> secondsreducing damage taken by <span>[reduction]%</span>.
    If Cunning is active, the skill costs no mesos, and Cunning will be removed.
  `,
};

export const MindBreaker: ISkill = {
  name: "Mind Breaker",
  attr: "mind-breaker",
  prop: "mindBreaker",
  row: 3,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  passive: true,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  values: {
    damage: [50, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
  },
  description: `
    Unlocks Empowered Mind Stealer, which increases the number of targets that can be hit
    by the skill to <span>5</span> and the skill's damage by <span>[damage]%</span>.
  `,
};

export const ViciousCuts: ISkill = {
  name: "Vicious Cuts",
  attr: "vicious-cuts",
  prop: "viciousCuts",
  row: 4,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Close Range / Physical",
  weaponRequired: "One-handed Dagger, One-handed Dagger",
  spirit: 28,
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
  description: `
    Quickly stab with your daggers, dealing <span>[damage]%</span> damage <span>5</span> times
    to <span>3</span> enemies up to <span>3</span> m in front of you.
    While Cunning is active, this skill is enhanced.
    The damage of each attack is affected by the weapon in each hand.
    Consumes <span>28</span> spirit.
  `,
};

export const Haste: ISkill = {
  name: "Haste",
  attr: "haste",
  prop: "haste",
  row: 5,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  cooldown: 60,
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
  description: `
    Your movements mimic the wind.
    For <span>60</span> sec, <span>4</span> spirit is consumed in <span>0.5</span> sec
    intervals to increase attack speed and movement speed by <span>[movement]%</span> and
    physical attack by <span>[attack]%</span>.
  `,
};

export const DeftCombatant: ISkill = {
  name: "Deft Combatant",
  attr: "deft-combatant",
  prop: "deftCombatant",
  row: 6,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  passive: true,
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
  description: `
    Intense training has honed your body, increasing the damage output of
    Vicious Cuts and Somersault Kick by <span>[damage]%</span>.
  `,
};
