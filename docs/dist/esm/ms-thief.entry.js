import { e as registerInstance, f as createEvent, d as h, g as getElement } from './maplestory-skills-fe8c7252.js';
import { a as Rank } from './chunk-e93b9111.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-5930baea.js';

const SpiritThief = {
    name: "Spirit Thief",
    attr: "spirit-thief",
    prop: "spiritThief",
    rank: 1,
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
const MindStealer = {
    name: "Mind Stealer",
    attr: "mind-stealer",
    prop: "mindStealer",
    rank: 1,
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
const DoubleSlash = {
    name: "Double Slash",
    attr: "double-slash",
    prop: "doubleSlash",
    rank: 1,
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
    Quickly stab with your daggers, dealing <span>{damage}%</span> damage <span>2</span>
    times to <span>3</span> enemies up to <span>3</span> m in front of you.
    Has a <span>{cunning}%</span> chance to activate Cunning for <span>5</span> sec when your attack hits.
    Movement speed increases by <span>30%</span> while Cunning is active, and some skills are enhanced.
    The damage of each attack is affected by the weapon in each hand.
  `,
};
const PoisonEdge = {
    name: "Poison Edge",
    attr: "poison-edge",
    prop: "poisonEdge",
    rank: 1,
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
    Swing your poison-coated daggers, dealing <span>{firstDamage}%</span> poison
    damage to <span>5</span> enemies up to <span>3</span> m in front of you.
    Keep pressing the key to trigger a <span>5-hit</span> combo.
    The fifth hit deals <span>{fifthDamage}%</span> poison damage
    and moves you <span>3</span> m in the direction you select.
    When Cunning is active, this skill is empowered.
    Consumes <span>10</span> spirit.
  `,
    extras: [{
            values: {
                damage: [11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            },
            description: `
      When empowered your daggers poison the target for an additional <span>{damage}%</span> poison damage
      every second for <span>13</span> sec on each hit of this skill.
      This effect stacks up to <span>5</span> times.
      Cunning is canceled when this skill activates.
    `,
        }],
};
const PoisonVial = {
    name: "Poison Vial",
    attr: "poison-vial",
    prop: "poisonVial",
    rank: 1,
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
    dealing <span>{damage}%</span> poison damage.
    The vial breaks on impact, splashing a toxic liquid that poisons <span>5</span> enemies within <span>3</span> m and
    deals <span>{dot}%</span> poison damage every second for <span>10</span> sec.
    Consumes <span>15</span> spirit.
  `,
};
const SurpriseAttack = {
    name: "Surprise Attack",
    attr: "surprise-attack",
    prop: "surpriseAttack",
    rank: 1,
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
    dealing <span>{damage}%</span> damage.
    If a target is afflicted with Poison Edge or Poison Vial, they’ll take an additional
    <span>{additionalDamage}%</span> poison damage for each, and the poison will be removed.
    When Cunning is active, this skill is empowered.
  `,
    extras: [{
            values: {
                damage: [101, 101, 108, 115, 122, 129, 136, 143, 150, 157, 164],
            },
            description: `
      When empowered you spin with your daggers out, dealing <span>{damage}%</span> damage to <span>8</span> enemies within <span>3</span> m.
    `,
        }],
};
const RuthlessGuile = {
    name: "Ruthless Guile",
    attr: "ruthless-guile",
    prop: "ruthlessGuile",
    rank: 1,
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
    Prey on the weaknesses of your enemy to deal <span>{damage}%</span> additional
    poison damage to targets afflicted with Poison Blow or Poison Vial.
  `,
};
const CunningTactics = {
    name: "Cunning Tactics",
    attr: "cunning-tactics",
    prop: "cunningTactics",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    spirit: [20, 20, 20, 20, 25, 25, 25, 30, 30, 30, 35],
    cooldown: [23, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14],
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    description: `
    Using the tricks of the trade, recover <span>{spirit}%</span> spirit and activate Cunning for <span>5</span> sec.
    While Cunning is active, your movement speed increases by <span>30%</span> and some skills can be empowered.
  `,
};
const BladeDance = {
    name: "Blade Dance",
    attr: "blade-dance",
    prop: "bladeDance",
    rank: 1,
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
    Spin with your daggers out, dealing <span>{firstDamage}%</span>, then <span>{firstDamage}%</span>,
    and then <span>{thirdDamage}%</span> damage to <span>8</span> enemies within <span>3</span> m.
    While Cunning is active, this skill is enhanced.
    Consumes <span>26</span> spirit.
  `,
    extras: [{
            values: {
                evade: [81, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99],
            },
            description: `
      When enhanced your spin makes enemies dizzy, granting you a <span>{evade}%</span> chance to evade enemy attacks for <span>1</span> sec.
      Cunning is cancelled when this skill activates.
    `,
        }],
};
const Retaliation = {
    name: "Retaliation",
    attr: "retaliation",
    prop: "retaliation",
    rank: 1,
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
    which restore <span>{spirit}</span> spirit,
    increases physical attack and magic attack by <span>{attack}%</span>,
    and increases evasion by <span>{evasion}</span> for <span>12</span> sec.
    This effect will not activate again for <span>1</span> sec.
  `,
};
const SomersaultKick = {
    name: "Somersault Kick",
    attr: "somersault-kick",
    prop: "somersaultKick",
    rank: 1,
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
    Perform a somersault kick to deal <span>{damage}%</span> damage to <span>5</span> enemies up
    to <span>3</span> m in front of you, breaking their stance and decreasing their
    movement speed by <span>{movement}%</span> and jump power by <span>{jump}%</span>.
    When Cunning is active, this skill is empowered.
  `,
    extras: [{
            description: `
      When empowered is active you stun the enemies for <span>1</span> sec.
      Cunning is cancelled when this skill activates.
      You will be immune to knockback while this skill is active.
    `,
        }],
};
const QuickStep = {
    name: "Quick Step",
    attr: "quick-step",
    prop: "quickStep",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    spirit: [1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    description: `
    Swiftly move back <span>3</span> m and recover <span>{spirit}</span> spirit.
    Consumes <span>40</span> stamina.
  `,
};
const MesoguardPlus = {
    name: "Mesoguard Plus",
    attr: "mesoguard-plus",
    prop: "mesoguardPlus",
    rank: 1,
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
    <span>4</span> seconds reducing damage taken by <span>{reduction}%</span>.
    If Cunning is active, the skill costs no mesos, and Cunning will be removed.
  `,
};
const MindBreaker = {
    name: "Mind Breaker",
    attr: "mind-breaker",
    prop: "mindBreaker",
    rank: 1,
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
    by the skill to <span>5</span> and the skill's damage by <span>{damage}%</span>.
  `,
};
const ViciousCuts = {
    name: "Vicious Cuts",
    attr: "vicious-cuts",
    prop: "viciousCuts",
    rank: 1,
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
    Quickly stab with your daggers, dealing <span>{damage}%</span> damage <span>5</span> times
    to <span>3</span> enemies up to <span>3</span> m in front of you.
    While Cunning is active, this skill is enhanced.
    The damage of each attack is affected by the weapon in each hand.
    Consumes <span>28</span> spirit.
  `,
};
const Haste = {
    name: "Haste",
    attr: "haste",
    prop: "haste",
    rank: 1,
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
    intervals to increase attack speed and movement speed by <span>{movement}%</span> and
    physical attack by <span>{attack}%</span>.
  `,
};
const DeftCombatant = {
    name: "Deft Combatant",
    attr: "deft-combatant",
    prop: "deftCombatant",
    rank: 1,
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
    Vicious Cuts and Somersault Kick by <span>{damage}%</span>.
  `,
};
const Vengeance = {
    name: "Vengeance",
    attr: "vengeance",
    prop: "vengeance",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    description: `
    Your fighting style is fueled by your thirst for vengeance.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases luck by <span>40%</span>. Can attack while climbing.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Deals <span>340%</span> damage when attacking while climbing.
  `,
};
const SavageStrikes = {
    name: "Savage Strikes",
    attr: "savage-strikes",
    prop: "savageStrikes",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    weaponRequired: "One-handed Dagger, One-handed Dagger",
    spirit: 36,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [197, 197, 197, 197, 197],
        cunningDamage: [335, 335, 335, 335, 335],
    },
    description: `
    Brandish your daggers, slashing enemies <span>6</span> times.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage per hit.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Consumes Cunning to deal <span>{cunningDamage}%</span> damage per hit.
  `,
};
const BattlePlan = {
    name: "Battle Plan",
    attr: "battle-plan",
    prop: "battlePlan",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: SavageStrikes,
            level: 3,
        }],
    values: {
        luck: [12, 12, 12, 12, 12],
        increase: [9, 9, 9, 9, 9],
    },
    description: `
    You have a plan for every battle.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases luck by <span>{luck}%</span>.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Cunning Tactics increase physical damage by <span>{increase}%</span> for <span>6</span> sec.
  `,
};
const PoisonMaster = {
    name: "Poison Master",
    attr: "poison-master",
    prop: "poisonMaster",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: BattlePlan,
            level: 2,
        }],
    values: {
        increase: [9, 9, 9, 9, 9],
        surpriseAttackDamage: [170, 170, 170, 170, 170],
    },
    description: `
    You've become the master poisoner.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increase poison damage by <span>{increase}%</span>.
    Increase Surprise Attack damage by <span>{surpriseAttackDamage}%</span> and
    colldown by <span>50%</span>.
  `,
};
const VolatileVials = {
    name: "Volatile Vials",
    attr: "volatile-vials",
    prop: "volatileVials",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Toxic",
    attackType: "Long Range / Physical",
    spirit: 25,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: BattlePlan,
            level: 3,
        }, {
            skill: PoisonMaster,
            level: 3,
        }],
    values: {
        aoe: [199, 199, 199, 199, 199],
        poison: [55, 55, 55, 55, 55],
    },
    description: `
    Throws <span>2</span> vials of flammable gas and deadly poison.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{aoe}%</span> area damage and poisons struck targets.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Poisons deal <span>{poison}%</span> poison damage for <span>12</span> sec each
    and explode when struck by Surprise Attack.
    <br/>
    Poison Edge and Poison Vial poison damage does not stack.
  `,
};
const CriticalSlice = {
    name: "Critical Slice",
    attr: "critical-slice",
    prop: "criticalSlice",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Physical",
    weaponRequired: "One-handed Dagger, One-handed Dagger",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [180, 180, 180, 180, 180],
    },
    description: `
    Slash twice to attack the enemy <span>2</span> times.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage per hit.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Converts to Dagger Toss while Watchful.
  `,
};
const BattleStep = {
    name: "Battle Step",
    attr: "battle-step",
    prop: "battleStep",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: CriticalSlice,
            level: 3,
        }],
    values: {
        defense: [10, 10, 10, 10, 10],
        attack: [33, 33, 33, 33, 33],
        movement: [10, 10, 10, 10, 10],
    },
    description: `
    Tailor your strategy to any situation.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Passively grants Watchful.
    <br/><br/>
    When enemies are close, lose Watchful and gain Rush.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Watchful increases defense by <span>{defense}%</span>.
    <br/>
    Rush increases physical attack by <span>{attack}%</span> and
    movement speed by <span>{movement}%</span> for <span>8</span> sec.
    <br/>
    Rush and Haste do not stack.
  `,
};
const ShadowStep = {
    name: "Shadow Step",
    attr: "shadow-step",
    prop: "shadowStep",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    weaponRequired: "Two-handed Bow",
    spirit: 60,
    cooldown: 7,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: BattleStep,
            level: 3,
        }],
    values: {
        damage: [1974, 1974, 1974, 1974, 1974],
    },
    description: `
    Dash through the shadows.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Move to an enemy withing <span>12</span> m in front of you.
    Move <span>4.5</span> m if there are no enemies withing <span>12</span> m.
    <br/><br/>
    Hold down the key to use Shadow Slash.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Shadow Slash deals <span>{damage}%</span> damage and grants Rush.
    <br/>
    While Rush is active, converts this skill to Finishing Step.
  `,
};
const DeadlyStrikes = {
    name: "Deadly Strikes",
    attr: "deadly-strikes",
    prop: "deadlyStrikes",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    spirit: 52,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: ShadowStep,
            level: 3,
        }],
    values: {
        damage: [339, 339, 339, 339, 339],
        resistance: [300, 300, 300, 300, 300],
    },
    description: `
    Fiercely slash the target <span>7</span> times.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage per hit and grants knockback immunity.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Increases physical and magic resistance by <span>{resistance}%</span> while Deadly Strikes is in use.
  `,
};
const RankOneSkills = {
    BladeDance: BladeDance,
    CunningTactics: CunningTactics,
    DeftCombatant: DeftCombatant,
    DoubleSlash: DoubleSlash,
    Haste: Haste,
    MesoguardPlus: MesoguardPlus,
    MindBreaker: MindBreaker,
    MindStealer: MindStealer,
    PoisonEdge: PoisonEdge,
    PoisonVial: PoisonVial,
    QuickStep: QuickStep,
    Retaliation: Retaliation,
    RuthlessGuile: RuthlessGuile,
    SomersaultKick: SomersaultKick,
    SpiritThief: SpiritThief,
    SurpriseAttack: SurpriseAttack,
    ViciousCuts: ViciousCuts,
};
const RankTwoSkills = {
    Vengeance: Vengeance,
    SavageStrikes: SavageStrikes,
    BattlePlan: BattlePlan,
    PoisonMaster: PoisonMaster,
    VolatileVials: VolatileVials,
    CriticalSlice: CriticalSlice,
    BattleStep: BattleStep,
    ShadowStep: ShadowStep,
    DeadlyStrikes: DeadlyStrikes,
};
const ThiefSkills = Object.assign({}, RankOneSkills, RankTwoSkills);

class ThiefComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
        this.bladeDance = ThiefSkills.BladeDance.minLevel;
        this.cunningTactics = ThiefSkills.CunningTactics.minLevel;
        this.deftCombatant = ThiefSkills.DeftCombatant.minLevel;
        this.doubleSlash = ThiefSkills.DoubleSlash.minLevel;
        this.haste = ThiefSkills.Haste.minLevel;
        this.mesoguardPlus = ThiefSkills.MesoguardPlus.minLevel;
        this.mindBreaker = ThiefSkills.MindBreaker.minLevel;
        this.mindStealer = ThiefSkills.MindStealer.minLevel;
        this.poisonEdge = ThiefSkills.PoisonEdge.minLevel;
        this.poisonVial = ThiefSkills.PoisonVial.minLevel;
        this.quickStep = ThiefSkills.QuickStep.minLevel;
        this.retaliation = ThiefSkills.Retaliation.minLevel;
        this.ruthlessGuile = ThiefSkills.RuthlessGuile.minLevel;
        this.somersaultKick = ThiefSkills.SomersaultKick.minLevel;
        this.spiritThief = ThiefSkills.SpiritThief.minLevel;
        this.surpriseAttack = ThiefSkills.SurpriseAttack.minLevel;
        this.viciousCuts = ThiefSkills.ViciousCuts.minLevel;
        this.vengeance = ThiefSkills.Vengeance.minLevel;
        this.savageStrikes = ThiefSkills.SavageStrikes.minLevel;
        this.battlePlan = ThiefSkills.BattlePlan.minLevel;
        this.poisonMaster = ThiefSkills.PoisonMaster.minLevel;
        this.volatileVials = ThiefSkills.VolatileVials.minLevel;
        this.criticalSlice = ThiefSkills.CriticalSlice.minLevel;
        this.battleStep = ThiefSkills.BattleStep.minLevel;
        this.shadowStep = ThiefSkills.ShadowStep.minLevel;
        this.deadlyStrikes = ThiefSkills.DeadlyStrikes.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    componentWillLoad() {
        processSkills(this, ThiefSkills, this.ignoreMax);
    }
    async getData() {
        return toSkillChangeEventObject(this, ThiefSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, ThiefSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    ignoreMaxChanged() {
        processSkills(this, ThiefSkills, this.ignoreMax);
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ThiefSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "thief", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "ignoreMax": ["ignoreMaxChanged"],
        "extras": ["emitChangeEvent"],
        "rank": ["emitChangeEvent"]
    }; }
    static get style() { return ":host{display:block}"; }
}

export { ThiefComponent as ms_thief };
