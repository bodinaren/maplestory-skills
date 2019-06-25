export const SteadfastFaith = {
    name: "Steadfast Faith",
    attr: "steadfast-faith",
    prop: "steadfastFaith",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    element: "Holy",
    passive: true,
    sp: true,
    description: `
    You've been rewarded for your devotion,
    recovering <span>8</span> spirit every <span>0.5</span> sec,
    plus an addition <span>4</span> if at least one foe is suffering from Celestial Light.
  `,
};
export const HeavenlyWings = {
    name: "Heavenly Wings",
    attr: "heavenly-wings",
    prop: "heavenlyWings",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    element: "Holy",
    weaponRequired: "Off-hand Codex",
    description: `
    Spread your wings of light and soar to the farthest ally up to <span>6</span> m in front of you.
    The wings then transform into a divine aura, increasing you and your target's movement
    speed by <span>20%</span> for <span>5</span> sec and restoring health up to <span>90%</span> of your magic attack.
    If no allies are in range, you'll fly <span>4.5</span> m forward. This skill can cancel other skills.
    You will be immune to knockback while this skill is active. Consumes <span>60</span> stamina.
  `,
};
export const CelestialLight = {
    name: "Celestial Light",
    attr: "celestial-light",
    prop: "celestialLight",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Main Hand Scepter",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [53, 53, 57, 61, 65, 69, 73, 77, 81, 85, 89],
        additionalDamage: [4, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
    },
    description: `
    Strikes enemies with holy light, dealing <span>{damage}%</span> holy damage
    to <span>3</span> enemies up to <span>8</span> m in front of you,
    plus an additional <span>{additionalDamage}%</span> holy damage per sec for <span>6</span> sec.
  `,
};
export const HolyBlast = {
    name: "Holy Blast",
    attr: "holy-blast",
    prop: "holyBlast",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    element: "Holy",
    attackType: "Close Range / Magic",
    weaponRequired: "Main Hand Scepter",
    spirit: 16,
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [147, 147, 157, 167, 177, 187, 197, 207, 217, 227, 237],
        range: [6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8],
        additionalDamage: [71, 71, 75, 79, 83, 87, 91, 95, 99, 103, 107],
    },
    description: `
    An eruption of holy power deals <span>{damage}%</span> holy damage to <span>8</span> enemies
    within <span>{range}</span> m and knocks them back <span>0.5</span> m.
    If Celestial Light also activates, it causes an explosion that deals an additional
    <span>{additionalDamage}%</span> holy damage to enemies within <span>2</span> m.
    Consumes <span>16</span> spirit.
  `,
};
export const ShieldOfTheArchon = {
    name: "Shield of the Archon",
    attr: "shield-of-the-archon",
    prop: "shieldOfTheArchon",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Close Range / Magic",
    cooldown: 18,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    skillRequirements: [{
            skill: CelestialLight,
            level: 3,
        }, {
            skill: HolyBlast,
            level: 3,
        }],
    values: {
        resistance: [165, 165, 220, 275, 330, 385, 440, 495, 550, 605, 660],
        damage: [80, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125],
    },
    description: `
    Conjure a shield of judgment for <span>5</span> sec, increasing physical resistance
    and magic resistance by <span>{resistance}</span> and dealing <span>{damage}%</span>
    holy damage to <span>5</span> enemies within <span>3</span> m.
  `,
};
export const HolyRelic = {
    name: "Holy Relic",
    attr: "holy-relic",
    prop: "holyRelic",
    rank: 1,
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Close Range / Magic",
    cooldown: 15,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: ShieldOfTheArchon,
            level: 3,
        }],
    values: {
        damage: [174, 174, 186, 198, 210, 222, 234, 246, 258, 270, 282],
    },
    description: `
    A holy cross deals <span>{damage}%</span> holy damage to <span>8</span> enemies within <span>3</span> m
    for <span>8</span> sec, knocks them back <span>1</span> m, and reduces their stamina to <span>0</span>.
  `,
};
export const HealingPrayer = {
    name: "Healing Prayer",
    attr: "healing-prayer",
    prop: "healingPrayer",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    weaponRequired: "Off-hand Codex",
    spirit: 15,
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        healing: [160, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232],
    },
    description: `
    Through prayer, restore your health and the health of <span>6</span> allies
    within <span>3</span> m by <span>{healing}%</span> of your magic attack.
    Consumes <span>15</span> spirit.
  `,
};
export const ScourgingWave = {
    name: "Scourging Wave",
    attr: "scourging-wave",
    prop: "scourgingWave",
    rank: 1,
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Main Hand Scepter",
    spirit: 18,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    skillRequirements: [{
            skill: HealingPrayer,
            level: 2,
        }],
    values: {
        damage: [180, 180, 193, 206, 219, 232, 245, 258, 271, 284, 297],
    },
    description: `
    Blast holy power <span>7.5</span> m ahead, dealing <span>{damage}%</span> holy damage to <span>5</span> enemies.
    The skill lasts while the skill key is held down.
    Consumes <span>18</span> spirit.
  `,
};
export const Sanctuary = {
    name: "Sanctuary",
    attr: "sanctuary",
    prop: "sanctuary",
    rank: 1,
    row: 5,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Magic",
    weaponRequired: "Off-hand Codex",
    cooldown: 40,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: HealingPrayer,
            level: 3,
        }, {
            skill: ScourgingWave,
            level: 3,
        }],
    values: {
        range: [5, 5, 5, 9, 9, 13, 13, 13, 13, 13, 13],
        damage: [227, 227, 242, 257, 272, 287, 302, 317, 332, 347, 362],
        healing: [60, 60, 67, 74, 81, 88, 95, 102, 109, 116, 123],
    },
    description: `
    Sanctify the ground within a <span>{range}</span>-tile cross for <span>10</span> sec to
    deal <span>{damage}%</span> damage to enemies and restore health of you and your allies equal
    to <span>{healing}%</span> of your magic attack.
  `,
};
export const SmitingAura = {
    name: "Smiting Aura",
    attr: "smiting-aura",
    prop: "smitingAura",
    rank: 1,
    row: 6,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Long Range / Magic",
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: CelestialLight,
            level: 4,
        }, {
            skill: Sanctuary,
            level: 3,
        }],
    values: {
        damage: [124, 124, 132, 140, 148, 156, 164, 172, 180, 188, 196],
        damageIncrease: [1, 1, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4],
    },
    description: `
    Surround the nearest enemy within <span>8</span> m in front of you with holy power,
    dealing <span>{damage}%</span> damage to <span>3</span> enemies
    within <span>1.5</span> m of the target and increasing the damage taken
    by the target by <span>{damageIncrease}%</span>.
  `,
};
export const CelestialGuardian = {
    name: "Celestial Guardian",
    attr: "celestial-guardian",
    prop: "celestialGuardian",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    weaponRequired: "Off-hand Codex",
    spirit: 45,
    cooldown: 30,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    values: {
        attack: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    description: `
    Summons a little angel for <span>30</span> sec, who increases your magic attack
    by <span>{attack}%</span> when you have a codex equipped.
    Consumes <span>45</span> spirit.
  `,
};
export const CelestialBlessings = {
    name: "Celestial Blessings",
    attr: "celestial-blessings",
    prop: "celestialBlessings",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Off-hand Codex",
    spirit: 45,
    cooldown: 11,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: CelestialGuardian,
            level: 3,
        }],
    values: {
        resistance: [10, 10, 30, 50, 70, 90, 110, 130, 150, 170, 190],
        attack: [1, 3201, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
        healing: [320, 320, 352, 384, 416, 448, 480, 512, 544, 576, 608],
    },
    description: `
    With the help of your angel, bless <span>10</span> allies within <span>6</span> m for <span>10</span> sec,
    increasing their physical resistance and magic resistance by <span>{resistance}</span>
    and their physical attack and magic attack by <span>{attack}%</span>.
    Restores their health by <span>{healing}%</span> of your magic attack.
    Can only be used when your angel is present.
    Consumes <span>45</span> spirit.
  `,
};
export const HolySymbol = {
    name: "Holy Symbol",
    attr: "holy-symbol",
    prop: "holySymbol",
    rank: 1,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    spirit: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    cooldown: 180,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: CelestialGuardian,
            level: 6,
        }, {
            skill: CelestialBlessings,
            level: 3,
        }],
    values: {
        increase: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
        accuracy: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    },
    description: `
    Create a magic seal with a <span>4.5</span> m radius that lasts <span>10</span> sec
    and affects up to <span>10</span> allies standing on it.
    Grants a blessing that restores <span>{spirit}</span> spirit per sec
    and increases physical damage, magic damage, and attack speed
    by <span>{increase}%</span> and accuracy by <span>{accuracy}</span> for <span>10</span> sec.
    Once applied, the blessing has a <span>3</span> min cooldown.
  `,
};
export const Disciple = {
    name: "Disciple",
    attr: "disciple",
    prop: "disciple",
    rank: 1,
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    passive: true,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: CelestialBlessings,
            level: 6,
        }, {
            skill: HolySymbol,
            level: 4,
        }],
    values: {
        duration: [30, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
    },
    description: `
    Increases the duration of Celestial Guardian, Celestial Blessings,
    and Holy Symbol buffs by <span>{duration}%</span>.
  `,
};
export const ScepterMastery = {
    name: "Scepter Mastery",
    attr: "scepter-mastery",
    prop: "scepterMastery",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    values: {
        attack: [1, 1, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4],
    },
    description: `
    Your proficiency with scepters increases weapon attack by <span>{attack}%</span> when you have a scepter equipped.
  `,
};
export const HealingMastery = {
    name: "Healing Mastery",
    attr: "healing-mastery",
    prop: "healingMastery",
    rank: 1,
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    passive: true,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: ScepterMastery,
            level: 4,
        }],
    values: {
        recovery: [4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    },
    description: `
    Your experience in combat increases the amount of health and spirit
    restored through recovery skills by <span>{recovery}%</span>.
    This skill does not affect your natural health and spirit regeneration rates.
  `,
};
export const AngelicRay = {
    name: "Angelic Ray",
    attr: "angelic-ray",
    prop: "angelicRay",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Main Hand Scepter, Off-hand Codex",
    spirit: 30,
    cooldown: 10,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: ScepterMastery,
            level: 4,
        }],
    values: {
        damage: [662, 662, 708, 754, 800, 846, 892, 938, 984, 1030, 1076],
        healing: [365, 365, 391, 417, 443, 469, 495, 521, 547, 573, 599],
    },
    description: `
    Fire a beam of holy light, dealing <span>{damage}%</span> holy damage
    to <span>8</span> enemies up to <span>12</span> m in front of you.
    Restores health to <span>8</span> allies hit equal
    to <span>{healing}%</span> of your magic attack.
    Consumes <span>30</span> spirit.
  `,
};
export const LifesGuardian = {
    name: "Life's Guardian",
    attr: "lifes-guardian",
    prop: "lifesGuardian",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    element: "Holy",
    cooldown: 45,
    description: `
    Call upon the sacred power at the heart of the world, permanently increasing intelligence by <span>40</span>.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases recovery by <span>20%</span> and
    movement speed by <span>20%</span> for <span>12</span> sec.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Healing Prayer prioritizes the ally with the lowest health.
  `,
};
export const ScathingLight = {
    name: "Scathing Light",
    attr: "scathing-light",
    prop: "scathingLight",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Main Hand Scepter",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [291, 291, 324, 357, 390],
    },
    description: `
    Smite enemies with holy light.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage <span>2</span> times and inflicts Celestial Light.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Celestial Light deals <span>4%</span> holy damage per sec for <span>8</span> sec.
  `,
};
export const LightSpear = {
    name: "Light Spear",
    attr: "light-spear",
    prop: "lightSpear",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Main Hand Scepter",
    spirit: 30,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: ScathingLight,
            level: 3,
        }],
    values: {
        damage: [136, 136, 151, 166, 181],
        additionalDamage: [683, 683, 762, 841, 920],
    },
    description: `
    Damage enemies with a burst of holy light, then summon a spear of light to deal additional damage.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage and summons a Light Spear to strike <span>3</span> targets.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    The Light Spear deals and additional <span>{additionalDamage}%</span> damaage to surrounding enemies.
  `,
};
export const Clarity = {
    name: "Clarity",
    attr: "clarity",
    prop: "clarity",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    passive: true,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: LightSpear,
            level: 2,
        }],
    values: {
        attack: [2, 2, 3, 4, 5],
        accuracy: [1, 1, 2, 3, 4],
        critical: [7, 7, 14, 21, 28],
    },
    description: `
    Commune with the divine to strengthen your resolve.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases magic attack by <span>{attack}%</span>,
    accuracy by <span>{accuracy}%</span>,
    and critical rate by <span>{critical}</span>.
  `,
};
export const HeavensWrath = {
    name: "Heaven's Wrath",
    attr: "heavens-wrath",
    prop: "heavensWrath",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Main Hand Scepter",
    cooldown: 60,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: LightSpear,
            level: 3,
        }, {
            skill: Clarity,
            level: 3,
        }],
    values: {
        firstDamage: [591, 591, 660, 729, 798],
        secondDamage: [1105, 1105, 1233, 1361, 1489],
        thirdDamage: [1777, 1777, 1984, 2191, 2398],
        stamina: [10, 10, 20, 30, 40],
        health: [5, 5, 10, 15, 20],
        movement: [8, 8, 16, 24, 32],
    },
    description: `
    Bless a circle of land before you to damage foes and empower yourself.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Generates <span>3</span> explosions, dealing <span>{firstDamage}%</span>,
    <span>{secondDamage}%</span>, and <span>{thirdDamage}%</span> damage.
    The circle presists for <span>20</span> sec, empowering you while you stand within in.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    While standing within the circle, increases stamina recovery speed by <span>{stamina}%</span>,
    health by <span>{health}%</span>, and movement speed by <span>{movement}%</span>.
    Light Spear becomes Light Sword while you are within the circle.
  `,
};
export const PurifyingLight = {
    name: "Purifying Light",
    attr: "purifying-light",
    prop: "purifyingLight",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Main Hand Scepter",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [131, 131, 146, 161, 176],
        reduction: [1.5, 1.5, 3.0, 4.5, 6.0],
    },
    description: `
    Loose holy arrows to damage enemies and reduce their defense.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage and inflicts defense reduction on <span>3</span> targets.
    Defense reduction doesn't stack with Smiting Aura.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Decreases targets' defense by <span>{reduction}%</span> for <span>8</span> sec.
    This activates Steadfast Faith spirit effect.
  `,
};
export const DivineWave = {
    name: "Divine Wave",
    attr: "divine-wave",
    prop: "divineWave",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    attackType: "Long Range / Magic",
    weaponRequired: "Main Hand Scepter",
    spirit: 17,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: PurifyingLight,
            level: 3,
        }],
    values: {
        damage: [405, 405, 452, 499, 546],
        additionalDamage: [161, 161, 179, 197, 215],
        healing: [120, 120, 130, 140, 150],
    },
    description: `
    Channel holy energy for dealing damage with a chance to heal a nearby ally.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage to <span>5</span> enemies.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    <span>12%</span> chance to deal an additional <span>{additionalDamage}%</span> damage
    and heal the ally with the lowest health by <span>{healing}%</span> of your magic attack.
  `,
};
export const GreaterHealing = {
    name: "Greater Healing",
    attr: "greater-healing",
    prop: "greaterHealing",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    weaponRequired: "Off-hand Codex",
    spirit: 15,
    cooldown: 30,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: DivineWave,
            level: 3,
        }],
    values: {
        healing: [56, 56, 60, 64, 68],
        instantHealing: [240, 240, 260, 280, 300],
        increase: [9, 9, 16, 23, 30],
    },
    description: `
    Draw celestial power from the heavens to heal allies and increase your damage.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Heal <span>10</span> allies every <span>0.5</span> sec for <span>6</span> sec
    by <span>{healing}%</span> of your magic attack.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Instantly heal the <span>2</span> allies with the lowest health by <span>{instantHealing}%</span> of your magic attack.
    Increases your damage by <span>{increase}%</span> for <span>5</span> sec.
  `,
};
export const Vitality = {
    name: "Vitality",
    attr: "vitality",
    prop: "vitality",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Holy",
    passive: true,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: GreaterHealing,
            level: 3,
        }],
    values: {
        increase: [1, 1, 2, 3, 4],
    },
    description: `
    Increases the offense of allies healed by Divine Wave or Greater Healing.
    Purifying Light and Divine Wave deal increased damage.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Allies healed by Divine Wave or Greater Healing have their physical and magic attack increased
    by <span>7%</span> for <span>30</span> sec.
    Increases Purifying Light and Divine Wave damage by <span>{increase}%</span>.
    This physical and magic attack increase doesn't stack with Celestial Blessing.
  `,
};
export const RankOneSkills = {
    HeavenlyWings: HeavenlyWings,
    SteadfastFaith: SteadfastFaith,
    CelestialLight: CelestialLight,
    HolyBlast: HolyBlast,
    HealingPrayer: HealingPrayer,
    ScepterMastery: ScepterMastery,
    CelestialGuardian: CelestialGuardian,
    ShieldOfTheArchon: ShieldOfTheArchon,
    ScourgingWave: ScourgingWave,
    CelestialBlessings: CelestialBlessings,
    HolyRelic: HolyRelic,
    Sanctuary: Sanctuary,
    HolySymbol: HolySymbol,
    HealingMastery: HealingMastery,
    SmitingAura: SmitingAura,
    Disciple: Disciple,
    AngelicRay: AngelicRay,
};
export const RankTwoSkills = {
    LifesGuardian: LifesGuardian,
    ScathingLight: ScathingLight,
    LightSpear: LightSpear,
    Clarity: Clarity,
    HeavensWrath: HeavensWrath,
    PurifyingLight: PurifyingLight,
    DivineWave: DivineWave,
    GreaterHealing: GreaterHealing,
    Vitality: Vitality,
};
export const PriestSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
