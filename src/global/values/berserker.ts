import { ISkill, IClassSkills, IAwakenedSkill } from "./_skillValues.interfaces";

export const DarkAura: ISkill = {
  name: "Dark Aura",
  attr: "dark-aura",
  prop: "darkAura",
  rank: 1,
  row: 1,
  column: 3,
  minLevel: 1,
  maxLevel: 1,
  element: "Dark",
  passive: true,
  description: `
    Your latent dark power restores <span>10</span> spirit every second.
    Dark Aura stacks on hit, up to once per second, up to <span>10</span> times total.
    Each stack increases the amount restored by an additional <span>1</span> spirit.
  `,
};

export const XSlash: ISkill = {
  name: "X Slash",
  attr: "x-slash",
  prop: "xSlash",
  rank: 1,
  row: 1,
  column: 4,
  minLevel: 1,
  maxLevel: 1,
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  description: `
    Swing your greatsword in an X as you charge forward <span>4.5</span> m,
    dealing <span>75%</span> damage <span>2</span> times to <span>5</span> enemies in your path.
    This skill can cancel other skills.
    You will be immune to knockback while this skill is active.
    Consumes <span>40</span> stamina.
  `,
};

export const RagingSlash: ISkill = {
  name: "Raging Slash",
  attr: "raging-slash",
  prop: "ragingSlash",
  rank: 1,
  row: 1,
  column: 1,
  minLevel: 1,
  maxLevel: 10,
  element: "Dark",
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  values: {
    damage: [56, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83],
  },
  description: `
    Swing your weapon to deal <span>[damage]%</span> dark damage
    to <span>5</span> enemies up to <span>3</span> m in front of you.
    Keep pressing the key to trigger a <span>3-hit</span> combo.
    The attack speed increases with each hit.
    The third hit is a double strike, and when finished you start over from the beginning.
    During the attack, press a direction key to move <span>0.6</span> m.
  `,
};

export const DeathSpin: ISkill = {
  name: "Death Spin",
  attr: "death-spin",
  prop: "deathSpin",
  rank: 1,
  row: 2,
  column: 1,
  minLevel: 1,
  maxLevel: 10,
  element: "Dark",
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  spirit: 4,
  levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  values: {
    damage: [69, 69, 74, 79, 84, 89, 94, 99, 104, 109, 114],
  },
  description: `
    Spin your greatsword, dealing <span>[damage]%</span> dark damage
    to <span>8</span> enemies within <span>3</span> m.
    During the attack, press a direction key to move <span>1.6</span> m.
    The distance decreases to <span>1.2</span> m on your second spin and
    to <span>0.8</span> m on your third and subsequent spins.
    Consumes <span>4</span> spirit.
  `,
};

export const GroundBreaker: ISkill = {
  name: "Ground Breaker",
  attr: "ground-breaker",
  prop: "groundBreaker",
  rank: 1,
  row: 3,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  spirit: 40,
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
  description: `
    Old Ten's specialty move. Strike down your greatsword to deal <span>[damage]%</span> damage
    to <span>8</span> enemies within <span>3</span> m and knock them back <span>1.5</span> m.
    If Dark Aura activates, damage increases by <span>16%</span> per stack.
    You will be immune to knockback while this skill is active.
    Consumes <span>40</span> spirit.
  `,
};

export const DarkMight: ISkill = {
  name: "Dark Might",
  attr: "dark-might",
  prop: "darkMight",
  rank: 1,
  row: 6,
  column: 1,
  minLevel: 0,
  maxLevel: 10,
  element: "Dark",
  cooldown: 30,
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
  description: `
    Temporarily amplify Dark Aura to increase attack speed, physical attack, and magic attack by
    <span>[increase]%</span> for <span>10</span> sec and restore <span>1</span> additional spirit on hit.
    This skill can only be used by consuming Dark Aura at max stacks.
  `,
};

export const VoidSlash: ISkill = {
  name: "Void Slash",
  attr: "void-slash",
  prop: "voidSlash",
  rank: 1,
  row: 3,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  element: "Dark",
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  spirit: 24,
  levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
  values: {
    firstDamage: [257, 257, 274, 291, 308, 325, 342, 359, 376, 393, 410],
    secondDamage: [97, 97, 103, 109, 115, 121, 127, 133, 139, 145, 151],
  },
  description: `
    Swing your greatsword upward to deal <span>[firstDamage]%</span> dark damage
    to <span>5</span> enemies up to <span>3</span> m in front of you.
    Press the skill key again to trigger a <span>2-hit</span> combo.
    The second part is two quick swings,
    dealing <span>[secondDamage]%</span> dark damage <span>2</span> times
    to <span>5</span> enemies up to <span>2</span> m in front of you.
    On the first hit, press a direction key to move <span>4</span> m and attack.
    On the second hit, the skill lasts while the skill key is held down.
    You will be immune to knockback while this skill is active.
    The first hit consumes <span>24</span> spirit and the second hit consumes <span>1</span> spirit.
  `,
};

export const DarkBreaker: ISkill = {
  name: "Dark Breaker",
  attr: "dark-breaker",
  prop: "darkBreaker",
  rank: 1,
  row: 4,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  element: "Dark",
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
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
  description: `
    Gather dark power into your greatsword and strike down with great force to
    deal <span>[damage]%</span> dark damage
    to <span>8</span> enemies within <span>3</span> m.
    The impact area resonates with darkness for <span>5</span> sec,
    dealing <span>[dot]%</span> dark damage
    to <span>8</span> enemies in range every second.
    This skill can only be used by consuming Dark Aura at max stacks.
    You will be immune to knockback while this skill is active.
  `,
};

export const WarriorsInstinct: ISkill = {
  name: "Warrior's Instinct",
  attr: "warriors-instinct",
  prop: "warriorsInstinct",
  rank: 1,
  row: 5,
  column: 2,
  minLevel: 0,
  maxLevel: 10,
  passive: true,
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
  description: `
    Surrender yourself to your natural combat instinct.
    Increases physical resistance by <span>[resistance]</span> and
    piercing by <span>[piercing]%</span>.
  `,
};

export const Bloodlust: ISkill = {
  name: "Bloodlust",
  attr: "bloodlust",
  prop: "bloodlust",
  rank: 1,
  row: 3,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  element: "Dark",
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  cooldown: 8,
  levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  skillRequirements: [{
    skill: RagingSlash,
    level: 2,
  }],
  values: {
    damage: [129, 129, 138, 147, 156, 165, 174, 183, 192, 201, 210],
    health: [7, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43],
  },
  description: `
    Thrust your darkened greatsword into <span>2</span> enemies up to <span>3</span> m in front of you,
    then pull it out to deal <span>[damage]%</span> damage <span>2</span> times.
    The stab attack is always a critical, and pulling the sword out steals health from the enemy,
    restoring <span>[health]%</span> of your max health.
    In PvP zones, the amount restored is halved.
  `,
};

export const AdrenalineRush: ISkill = {
  name: "Adrenaline Rush",
  attr: "adrenaline-rush",
  prop: "adrenalineRush",
  rank: 1,
  row: 4,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  element: "Dark",
  passive: true,
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
  description: `
    Your Dark Aura goes crazy as you're pushed into a corner, increasing the amount of spirit restored
    by <span>[stage1]</span> when your health is at <span>60%</span> or less,
    by <span>[stage2]</span> at <span>45%</span> or less,
    and by <span>[stage3]</span> at <span>30%</span> or less.
  `,
};

export const BloodPrice: ISkill = {
  name: "Blood Price",
  attr: "blood-price",
  prop: "bloodPrice",
  rank: 1,
  row: 5,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  element: "Dark",
  cooldown: 60,
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
  description: `
    Darkness fuels you, increasing your damage by <span>[damage]%</span> but
    depleting your health by <span>1%</span> on hit for <span>30</span> sec.
    This effect will stop consuming health when you get to <span>25%</span> health.
  `,
};

export const InhumanEndurance: ISkill = {
  name: "Inhuman Endurance",
  attr: "inhuman-endurance",
  prop: "inhumanEndurance",
  rank: 1,
  row: 6,
  column: 3,
  minLevel: 0,
  maxLevel: 10,
  passive: true,
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
  description: `
    Dire conditions strengthen your resolve. Your physical resistance and magic resistance increase
    by <span>[resistance]</span> when your health is less than <span>30%</span>.
  `,
};

export const GreatswordMastery: ISkill = {
  name: "Greatsword Mastery",
  attr: "greatsword-mastery",
  prop: "greatswordMastery",
  rank: 1,
  row: 3,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  passive: true,
  levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
  skillRequirements: [{
    skill: RagingSlash,
    level: 3,
  }],
  values: {
    attack: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
  },
  description: `
    Ten's lessons on asceticism increase your skill with a greatsword.
    Your weapon attack increases by <span>[attack]%</span> when you have a greatsword equipped.
  `,
};

export const Intimidation: ISkill = {
  name: "Intimidation",
  attr: "intimidation",
  prop: "intimidation",
  rank: 1,
  row: 4,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Close Range / Physical",
  cooldown: 16,
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
  description: `
    Overwhelm enemies with a show of force, dealing <span>[damage]%</span> damage
    to <span>5</span> enemies within <span>3</span> m.
    Enemies lost the will to fight, reducing their physical attack and magic attack by <span>[attack]%</span>
    and their movement speed and jump power by <span>[movement]%</span> for <span>4</span> sec.
    When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill.
    Some powerful enemies are immune.
  `,
};

export const DeepWounds: ISkill = {
  name: "Deep Wounds",
  attr: "deep-wounds",
  prop: "deepWounds",
  rank: 1,
  row: 5,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  passive: true,
  attackType: "Physical",
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
  description: `
    Critical attacks inflicted with a greatsword make the enemy bleed,
    dealing <span>[damage]%</span> damage every second for <span>10</span> sec.
  `,
};

export const Earthquake: ISkill = {
  name: "Earthquake",
  attr: "earthquake",
  prop: "earthquake",
  rank: 1,
  row: 6,
  column: 4,
  minLevel: 0,
  maxLevel: 10,
  attackType: "Physical",
  weaponRequired: "Two-handed Greatsword",
  cooldown: 60,
  levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
  skillRequirements: [{
    skill: DeepWounds,
    level: 2,
  }],
  values: {
    damage: [298, 298, 319, 340, 361, 382, 403, 424, 445, 466, 487],
  },
  description: `
    Drive your greatsword into the ground, creating an earthquake <span>9</span> tiles around you for <span>5</span> sec.
    Enemies caught in the quake are stunned and take <span>[damage]%</span> damage every second.
  `,
};

export const InfiniteDarkness: IAwakenedSkill = {
  name: "Infinite Darkness",
  attr: "infinite-darkness",
  prop: "infiniteDarkness",
  rank: 2,
  row: 1,
  column: 4,
  minLevel: 1,
  maxLevel: 1,
  element: "Dark",
  weaponRequired: "Two-handed Greatsword",
  passive: true,
  levelRequirement: [60, 60, 60, 60, 60],
  values: {
    damage: [418, 418, 418, 418, 418],
    additionalDamage: [500, 500, 500, 500, 500],
    movement: [15, 15, 15, 15, 15],
    dot: [150, 150, 150, 150, 150],
    iceStormIncrease: [49, 49, 49, 49, 49],
  },
  description: `
    A thick darkness engulfs your body.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Permanently increases strength by <span>40</span>.
    Increases Dark Aura's duration to <span>10</span> sec.
    Consuming <span>10</span> stacks of Dark Aura at once has a <span>20%</span> chance to trigger Surging Darkness.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Surging Darkness grants <span>10</span> stacks of Dark Aura.
  `,
};

export const SkullSplitter: IAwakenedSkill = {
  name: "Skull Splitter",
  attr: "skull-splitter",
  prop: "skullSplitter",
  rank: 2,
  row: 1,
  column: 1,
  minLevel: 0,
  maxLevel: 4,
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  spirit: 10,
  levelRequirement: [60, 60, 60, 60, 60],
  values: {
    damage: [453, 453, 453, 453, 453],
    thirdDamage: [647, 647, 647, 647, 647],
    fourthDamage: [1040, 1040, 1040, 1040, 1040],
  },
  description: `
    Unleash a wild 3-hit combo.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deal <span>{damage}%</span> damage the first two times you use this skill.
    On the third use in a row, perform a jump attack to
    deal <span>{thirdDamage}%</span> and <span>{fourthDamage}%</span> damage.
    Grants knockback immunity.
  `,
};

export const BloodFury: IAwakenedSkill = {
  name: "Blood Fury",
  attr: "blood-fury",
  prop: "bloodFury",
  rank: 2,
  row: 2,
  column: 1,
  minLevel: 0,
  maxLevel: 4,
  weaponRequired: "Two-handed Greatsword",
  passive: true,
  levelRequirement: [62, 62, 62, 62, 62],
  skillRequirements: [{
    skill: SkullSplitter,
    level: 3,
  }],
  values: {
    attack: [6, 6, 6, 6, 6],
    bloodlustDamage: [166, 166, 166, 166, 166],
  },
  description: `
    Your blows gain strength as your enemies draw close to death.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Attack an enemy with less than <span>30%</span> health to gain the Blood Fury effect.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    The Blood Fury effect increases physical attack by <span>{attack}%</span> and
    Bloodlust damage by <span>{bloodlustDamage}%</span>.
    While this effect is active, Bloodlust has a <span>30%</span> chance to grant Ruthless.
    Ruthless resets Bloodlust's cooldown and lets you use Skull Splitter's third attack immediately.
  `,
};

export const ParryTheMoon: IAwakenedSkill = {
  name: "Parry The Moon",
  attr: "parry-the-moon",
  prop: "parryTheMoon",
  rank: 2,
  row: 3,
  column: 1,
  minLevel: 0,
  maxLevel: 4,
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Bow",
  spirit: 20,
  cooldown: 30,
  levelRequirement: [64, 64, 64, 64, 64],
  skillRequirements: [{
    skill: BloodFury,
    level: 2,
  }],
  values: {
    damage: [1369, 1369, 1369, 1369, 1369],
    shockwaveDamage: [267, 267, 267, 267, 267],
    dot: [201, 201, 201, 201, 201],
    attack: [4.5, 4.5, 4.5, 4.5, 4.5],
  },
  description: `
    Parry enemy attacks with a great swing, creating a shockwave.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage and generates a shockwave
    that deals <span>{shockwaveDamage}%</span> damage on hit
    and <span>{dot}%</span> damage per sec.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    If used while udner attack, grants perfect guard and <span>10</span> Dark Aura stacks.
    <br/>
    Permanently increases physical attack by <span>{attack}%</span>.
  `,
};

export const AerialSmash: IAwakenedSkill = {
  name: "Aerial Smash",
  attr: "aerial-smash",
  prop: "aerialSmash",
  rank: 2,
  row: 5,
  column: 1,
  minLevel: 0,
  maxLevel: 4,
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  cooldown: 8,
  levelRequirement: [68, 68, 68, 68, 68],
  skillRequirements: [{
    skill: BloodFury,
    level: 3,
  }, {
    skill: ParryTheMoon,
    level: 3,
  }],
  values: {
    firstDamage: [400, 400, 400, 400, 400],
    secondDamage: [1100, 1100, 1100, 1100, 1100],
    thirdDamage: [2200, 2200, 2200, 2200, 2200],
  },
  description: `
    Jump into the air and launch a series of attacks.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Requires <span>10</span> stacks of Dark Aura.
    The first two attacks deal <span>{firstDamage}%</span> and <span>{secondDamage}%</span> damage.
    Hold down the skill key to trigger a follow-up that deals <span>{thirdDamage}%</span> damage.
    Inflicts Shaken.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Shaken decreases movement speed by <span>20%</span>.
  `,
};

export const Squall: IAwakenedSkill = {
  name: "Squall",
  attr: "squall",
  prop: "squall",
  rank: 2,
  row: 1,
  column: 3,
  minLevel: 0,
  maxLevel: 4,
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  spirit: 6,
  levelRequirement: [60, 60, 60, 60, 60],
  values: {
    damage: [119, 119, 119, 119, 119],
    speed: [4, 4, 4, 4, 4],
    additionalDamage: [46, 46, 46, 46, 46],
  },
  description: `
    Becoming a spinning vortex of death.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deal <span>{damage}%</span> damage per hit.
    Stand still to gain stacks of Gale; at <span>3</span> stacks, gain Whirlwind.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Gale increases attack speed by <span>{speed}%</span> per stack.
    <br/>
    While Whirlwind is active, hold down the skill key to increase spin speed and hit count,
    decrease movement speed to <span>30</span>,
    decrease damage to <span>69%</span>,
    gain knockback immunity,
    and deal an additional <span>{additionalDamage}%</span> to enemies with Heavy Bleeding.
    <br/>
    When Dark might is active, Whirlwind does not decrease movement speed.
  `,
};

export const RendWound: IAwakenedSkill = {
  name: "Rend Wound",
  attr: "rend-wound",
  prop: "rendWound",
  rank: 2,
  row: 2,
  column: 3,
  minLevel: 0,
  maxLevel: 4,
  weaponRequired: "Two-handed Bow",
  passive: true,
  levelRequirement: [62, 62, 62, 62, 62],
  skillRequirements: [{
    skill: Squall,
    level: 3,
  }],
  values: {
    deepWoundDamage: [92, 92, 92, 92, 92],
    heavyBleedingDamage: [64, 64, 64, 64, 64],
  },
  description: `
    You attacks inflicts grievous injury.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases Deep Wounds damage by <span>{deepWoundDamage}%</span>.
    Landing <span>2</span> critical hits within <span>4</span> sec inflicts Heavy Bleeding.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Heavy Bleeding deals <span>{heavyBleedingDamage}%</span> damage every sec for each stack,
    and stacks up to <span>5</span> times.
  `,
};

export const RagingSoul: IAwakenedSkill = {
  name: "Raging Soul",
  attr: "raging-soul",
  prop: "ragingSoul",
  rank: 2,
  row: 4,
  column: 3,
  minLevel: 0,
  maxLevel: 4,
  weaponRequired: "Two-handed Greatsword",
  cooldown: 40,
  levelRequirement: [66, 66, 66, 66, 66],
  skillRequirements: [{
    skill: RendWound,
    level: 3,
  }],
  values: {
    speed: [30, 30, 30, 30, 30],
    attack: [5, 5, 5, 5, 5],
    darkAttack: [5, 5, 5, 5, 5],
    health: [42, 42, 42, 42, 42],
    iceStormIncrease: [49, 49, 49, 49, 49],
  },
  description: `
    Embrace the darkness within you and draw on its power.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Temporarily increases attack speed by <span>{speed}%</span>,
    physical attack by <span>{attack}%</span>,
    increases dark attack by <span>{darkAttack}%</span>,
    triples Improved intimidation's attack,
    and prevents death.
    Restores <span>{health}%</span> health upon ending.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Resets Earthquake's cooldown.
    <br/>
    Grants Encroaching Darkness while withing <mark>Earthquake</mark>'s area of effect,
    providing additional Dark Arua stacks and increasing movement speed by <span>100</span>.
  `,
};

export const BloodSlash: IAwakenedSkill = {
  name: "Blood Slash",
  attr: "blood-slash",
  prop: "bloodSlash",
  rank: 2,
  row: 5,
  column: 3,
  minLevel: 0,
  maxLevel: 4,
  element: "Dark",
  attackType: "Close Range / Physical",
  weaponRequired: "Two-handed Greatsword",
  levelRequirement: [68, 68, 68, 68, 68],
  skillRequirements: [{
    skill: RagingSoul,
    level: 3,
  }],
  values: {
    damage: [259, 259, 259, 259, 259],
    health: [1.5, 1.5, 1.5, 1.5, 1.5],
    additionalDamage: [50, 50, 50, 50, 50],
    gougeDamage: [636, 636, 636, 636, 636],
    darkBloodSlashDamage: [207, 207, 207, 207, 207]
  },
  description: `
    Use dark power to shred your enemies.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Consumes <span>10</span> stacks of Dark Aura.
    Each strike deals <span>{damage}%</span> damage and restores <span>{health}%</span> health.
    Final hit deals an additional <span>{additionalDamage}%</span> damage.
    Grants knockback immunity.
    Inflicts Gouge on enemies afflicted with Heavy Bleeding.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Gouge deals between <span>100%</span> and <span>{gougeDamage}%</span> damage
    depending on the number of Heavy Bleeding stacks.
    <br/>
    Becomes Dark Blood Slash while Raging Soul is active.
    Dark Blood Slash deals repeated hits while the skill key is held down,
    each inflicting <span>{darkBloodSlashDamage}%</span> damage,
    and does not consume Dark Aura.
  `,
};

export const RankOneSkills: IClassSkills = {
  AdrenalineRush: AdrenalineRush,
  BloodPrice: BloodPrice,
  Bloodlust: Bloodlust,
  DarkAura: DarkAura,
  DarkBreaker: DarkBreaker,
  DarkMight: DarkMight,
  DeathSpin: DeathSpin,
  DeepWounds: DeepWounds,
  Earthquake: Earthquake,
  GreatswordMastery: GreatswordMastery,
  GroundBreaker: GroundBreaker,
  InhumanEndurance: InhumanEndurance,
  Intimidation: Intimidation,
  RagingSlash: RagingSlash,
  VoidSlash: VoidSlash,
  WarriorsInstinct: WarriorsInstinct,
  XSlash: XSlash,
};

export const RankTwoSkills: IClassSkills = {
  InfiniteDarkness: InfiniteDarkness,
  SkullSplitter: SkullSplitter,
  BloodFury: BloodFury,
  ParryTheMoon: ParryTheMoon,
  AerialSmash: AerialSmash,
  Squall: Squall,
  RendWound: RendWound,
  RagingSoul: RagingSoul,
  BloodSlash: BloodSlash,
};

export const BerserkerSkills: IClassSkills = {
  ...RankOneSkills,
  ...RankTwoSkills,
};
