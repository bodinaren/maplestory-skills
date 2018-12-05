import { ISkill } from "./_skillValues.interfaces";

export const MantraRelease: ISkill = {
  name: "Mantra Release",
  attr: "mantra-release",
  prop: "mantraRelease",
  row: 1,
  column: 3,
  minLevel: 1,
  maxLevel: 1,
  sp: true,
  description: `
    Focus on the mysterious energy within to create Mantra Cores (orb energy) and
    restore <span>12</span> spirit. You can create up to <span>4</span> Mantra Cores,
    which can be activated consecutively as long as the key is held.
    While the Mantra Cores are being created, a greater amount of energy can be controlled
    and a some skills can be enhanced prior to activation.
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
    Release a mysterious aura from the body,
    flying forward <span>4.5</span> m and leaving an afterimage in your wake.
    Increases evasion by <span>50</span> while moving.
    The skill can be both canceled and triggered immediately while using other skills.
    You are immune to knockback while this skill is active.
    Consumes <span>40</span> stamina.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  values: {
    damage: [38, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65],
    aoe: [170, 170, 182, 194, 206, 218, 230, 242, 254, 266, 278],
  },
  description: `
    Gather energy from your surroundings to create an energy orb
    and launch it at the nearest enemy <span>7.5</span> m in front,
    dealing <span>[damage]%</span> damage.
    By pressing the key consecutively, a 3-stage attack can be performed.
    Stages 1 and 2 have the same effect,
    but stage 3 launches an energy orb that explodes upon collision,
    dealing <span>[aoe]%</span> damage
    to <span>5</span> enemies within a <span>2.25</span> m radius.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  spirit: 3,
  levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
  values: {
    damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
  },
  description: `
    Concentrate the surrounding energy into both your hands to create energy orbs
    that consecutively launch at the nearest enemy within <span>7.5</span> m,
    dealing <span>[damage]%</span> damage <span>4</span> times.
    Each energy orb that collides with an enemy ricochets <span>4</span> times
    to other enemies within a <span>3</span> m radius,
    dealing <span>[damage]%</span> damage.
    Energy orbs do not attack the same target twice.
    Consumes <span>3</span> spirit.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  spirit: 4,
  cooldown: 8,
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
    Condense the energy of Narubashan into a powerful one-meter-wide
    electric energy orb and send it <span>7.5</span> m forward,
    dealing <span>[damage]%</span> damage
    to <span>8</span> enemies within its path.
    The electric energy orb shocks targets, dealing an
    additional <span>20%</span> electric damage
    every sec for <span>3</span> sec.
    The enhancement level changes and activates depending on the number of Mantra Cores.
    Consumes <span>4</span> spirit.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  spirit: 6,
  cooldown: 15,
  levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
  skillRequirements: [{
    skill: ExpansionBall,
    level: 5,
  }],
  values: {
    damage: [688, 688, 736, 784, 832, 880, 928, 976, 1024, 1072, 1120],
  },
  description: `
    Gather the energy of light in both hands and release a powerful beam
    that pushes you back <span>1.5</span> m.
    The light beam deals <span>[damage]%</span> damage
    to <span>8</span> enemies up to <span>10.5</span> m in front of you.
    Consumes <span>6</span> spirit.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  spirit: 4,
  cooldown: 8,
  levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
  skillRequirements: [{
    skill: RayStorm,
    level: 6,
  }, {
    skill: FlashStrike,
    level: 4,
  }],
  values: {
    damage: [242, 242, 259, 276, 293, 310, 327, 344, 361, 378, 395],
  },
  description: `
    Using the strength of animus, create <span>3</span> energy orbs infused with the
    energy of the stars and launch them at enemies up to <span>8</span> m in front of you.
    The energy orbs explode upon collision, spreading the stars' energy and dealing
    <span>[damage]%</span> damage to <span>5</span> enemies within a <span>2.25</span> m radius.
    The enhancement level changes and activates depending on the number of Mantra Cores.
    Consumes <span>4</span> spirit.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  levelRequirement: [42, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60],
  skillRequirements: [{
    skill: ChainSpear,
    level: 8,
  }],
  values: {
    damage: [179, 179, 191, 203, 215, 227, 239, 251, 263, 275, 287],
  },
  description: `
    Gather surrounding energy to create an explosive energy orb and launch it
    at the closest enemy up to <span>7.5</span> m in front of you.
    The energy orb explodes upon collision,
    dealing <span>[damage]%</span> damage
    to <span>5</span> enemies within a <span>2.25</span> m radius.
    Press the key consecutively to activate a 2-step attack.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  cooldown: 15,
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
    Adjust the flow of the atmosphere, causing a whirlwind <span>6</span> m ahead.
    The whirlwind rages every <span>0.2</span> sec (<span>4</span> times total),
    dealing <span>[dot]%</span> damage
    to <span>8</span> enemies within a <span>3</span> m radius and gathering them at its center.
    The condensed energy in the eye of the whirlwind explodes after <span>1</span> sec,
    dealing <span>[additionalDamage]%</span> damage
    to <span>8</span> enemies within a <span>3</span> m radius.
    Enemies caught in the explosion lose their coordination
    and have their accuracy and evasion decreased
    by <span>[reduction]</span>.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  spirit: 5,
  cooldown: 16,
  levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
  skillRequirements: [],
  values: {},
  description: ``,
};

export const ElectricEnergyDischarge: ISkill = {
  name: "Electric Energy Discharge",
  attr: "electric-energy-discharge",
  prop: "electricEnergyDischarge",
  row: 5,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Long Range / Magic",
  spirit: 15,
  cooldown: 10,
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
    Use the power of animus to cast magic within a <span>7.5</span> m radius,
    exhausting the vitality of <span>8</span> enemies within range,
    dealing <span>[damage]%</span> damage,
    and reducing both defense and movement speed
    by <span>[reduction]%</span> for <span>10</span> sec.
    The enhancement level changes and activates depending on the number of Mantra Cores.
    Consumes <span>15</span> spirit.
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
  cooldown: 1,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  values: {
    damage: [10, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37],
  },
  description: `
    Harness your animus energy to forge a shield that lasts for <span>4</span> sec
    and absorbs damage equivalent to <span>[damage]%</span> of your max health.
    This shield does not stack with other protective shield effects.
    Consumes all Mantra Cores.
    Skill effects are enhanced in proportion to number of Mantra Cores consumed.
    Consumes <span>12</span> spirit.
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
  attackType: "Long Range / Magic",
  spirit: 12,
  levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
  skillRequirements: [{
    skill: SplitBarrier,
    level: 4,
  }],
  values: {
    health: [85, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130],
  },
  description: `
    Restore your health and the health of <span>4</span> allies within a <span>3</span> m radius
    by <span>[health]%</span> of your magic attack by harnessing the energy of nature.
    Consumes all Mantra Cores.
    Skill effects are enhanced in proportion to number of Mantra Cores consumed.
    Consumes <span>12</span> spirit.
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
  attackType: "Long Range / Magic",
  weaponRequired: "Two-handed Orb",
  cooldown: 30,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: LifeString,
    level: 4,
  }],
  values: {
    health: [300, 300, 321, 342, 363, 384, 405, 426, 447, 468, 489],
    resistance: [200, 200, 213, 226, 239, 252, 265, 278, 291, 304, 317],
    lifeString: [4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
  },
  description: `
    Gather a field of concentrated lifeforce <span>6</span> m ahead of you with
    a radius of <span>2.25</span> m, and which lasts for <span>3</span> sec.
    This field restores the health of <span>8</span> allies within range by <span>[health]%</span>
    of your magic attack, and increases physical and magic resistance by <span>[resistance]</span>.
    Increases the potency of Life String by <span>[lifeString]%</span>.
    While within the Zone of Renewal, you are immune to knockback from standard attacks.
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
  passive: true,
  levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
  values: {
    attack: [1, 1, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4],
  },
  description: `
    Through the teachings of Guidance, your energy harmonizes better with the orb.
    Weapon attack increases by <span>[attack]%</span> with an orb equipped.
  `,
};

export const NarubashanLiberation: ISkill = {
  name: "Narubashan Liberation",
  attr: "narubashan-liberation",
  prop: "narubashanLiberation",
  row: 5,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  cooldown: 60,
  levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
  skillRequirements: [{
    skill: OrbMastery,
    level: 4,
  }],
  values: {
    interval: [4, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0.5, 0.5],
    totalTime: [20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 22],
  },
  description: `
    The potential power of Narubashan is freed, causing the body to explode with energy.
    The explosive energy automatically creates Mantra Cores every <span>[interval]</span> sec for <span>[totalTime]</span> sec.
    No more than <span>4</span> Mantra Cores will be created.
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
  passive: true,
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
    Concentrate your inner animus and amplify the maximum energy of the Mantra Core.
    Increases the damage of Extension Ball, Energy Stream, and Shooting Star
    (which activate when Mantra Cores are at max quantity)
    by <span>[damage]%</span>, and increases the recovery of
    Life String by <span>[recovery]%</span>.
  `,
};
