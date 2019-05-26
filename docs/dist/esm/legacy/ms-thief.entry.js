var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { e as registerInstance, f as createEvent, d as h, g as getElement } from './maplestory-skills-fe8c7252.js';
import { a as Rank } from './chunk-6eca2c8b.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-66e2b81d.js';
var SpiritThief = {
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
    description: "\n    Steal from an enemy. When successful, attacks restore <span>4</span> spirit on hit.\n  ",
};
var MindStealer = {
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
    description: "\n    Nimbly move forward <span>4.5</span> m, dealing <span>40%</span> damage to <span>3</span> enemies\n    in your path and absorbing their energy to restore <span>10</span> spirit per target.\n  ",
};
var DoubleSlash = {
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
    description: "\n    Quickly stab with your daggers, dealing <span>{damage}%</span> damage <span>2</span>\n    times to <span>3</span> enemies up to <span>3</span> m in front of you.\n    Has a <span>{cunning}%</span> chance to activate Cunning for <span>5</span> sec when your attack hits.\n    Movement speed increases by <span>30%</span> while Cunning is active, and some skills are enhanced.\n    The damage of each attack is affected by the weapon in each hand.\n  ",
};
var PoisonEdge = {
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
    description: "\n    Swing your poison-coated daggers, dealing <span>{firstDamage}%</span> poison\n    damage to <span>5</span> enemies up to <span>3</span> m in front of you.\n    Keep pressing the key to trigger a <span>5-hit</span> combo.\n    The fifth hit deals <span>{fifthDamage}%</span> poison damage\n    and moves you <span>3</span> m in the direction you select.\n    When Cunning is active, this skill is empowered.\n    Consumes <span>10</span> spirit.\n  ",
    extras: [{
            values: {
                damage: [11, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            },
            description: "\n      When empowered your daggers poison the target for an additional <span>{damage}%</span> poison damage\n      every second for <span>13</span> sec on each hit of this skill.\n      This effect stacks up to <span>5</span> times.\n      Cunning is canceled when this skill activates.\n    ",
        }],
};
var PoisonVial = {
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
    description: "\n    Throw a vial of poison at the closest enemy up to <span>7.5</span> m in front of you,\n    dealing <span>{damage}%</span> poison damage.\n    The vial breaks on impact, splashing a toxic liquid that poisons <span>5</span> enemies within <span>3</span> m and\n    deals <span>{dot}%</span> poison damage every second for <span>10</span> sec.\n    Consumes <span>15</span> spirit.\n  ",
};
var SurpriseAttack = {
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
    description: "\n    Stab <span>3</span> enemies up to <span>3</span> m in front of you,\n    dealing <span>{damage}%</span> damage.\n    If a target is afflicted with Poison Edge or Poison Vial, they\u2019ll take an additional\n    <span>{additionalDamage}%</span> poison damage for each, and the poison will be removed.\n    When Cunning is active, this skill is empowered.\n  ",
    extras: [{
            values: {
                damage: [101, 101, 108, 115, 122, 129, 136, 143, 150, 157, 164],
            },
            description: "\n      When empowered you spin with your daggers out, dealing <span>{damage}%</span> damage to <span>8</span> enemies within <span>3</span> m.\n    ",
        }],
};
var RuthlessGuile = {
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
    description: "\n    Prey on the weaknesses of your enemy to deal <span>{damage}%</span> additional\n    poison damage to targets afflicted with Poison Blow or Poison Vial.\n  ",
};
var CunningTactics = {
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
    description: "\n    Using the tricks of the trade, recover <span>{spirit}%</span> spirit and activate Cunning for <span>5</span> sec.\n    While Cunning is active, your movement speed increases by <span>30%</span> and some skills can be empowered.\n  ",
};
var BladeDance = {
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
    description: "\n    Spin with your daggers out, dealing <span>{firstDamage}%</span>, then <span>{firstDamage}%</span>,\n    and then <span>{thirdDamage}%</span> damage to <span>8</span> enemies within <span>3</span> m.\n    While Cunning is active, this skill is enhanced.\n    Consumes <span>26</span> spirit.\n  ",
    extras: [{
            values: {
                evade: [81, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99],
            },
            description: "\n      When enhanced your spin makes enemies dizzy, granting you a <span>{evade}%</span> chance to evade enemy attacks for <span>1</span> sec.\n      Cunning is cancelled when this skill activates.\n    ",
        }],
};
var Retaliation = {
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
    description: "\n    Deftly dodge an attack and position yourself for a counterattack,\n    which restore <span>{spirit}</span> spirit,\n    increases physical attack and magic attack by <span>{attack}%</span>,\n    and increases evasion by <span>{evasion}</span> for <span>12</span> sec.\n    This effect will not activate again for <span>1</span> sec.\n  ",
};
var SomersaultKick = {
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
    description: "\n    Perform a somersault kick to deal <span>{damage}%</span> damage to <span>5</span> enemies up\n    to <span>3</span> m in front of you, breaking their stance and decreasing their\n    movement speed by <span>{movement}%</span> and jump power by <span>{jump}%</span>.\n    When Cunning is active, this skill is empowered.\n  ",
    extras: [{
            description: "\n      When empowered is active you stun the enemies for <span>1</span> sec.\n      Cunning is cancelled when this skill activates.\n      You will be immune to knockback while this skill is active.\n    ",
        }],
};
var QuickStep = {
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
    description: "\n    Swiftly move back <span>3</span> m and recover <span>{spirit}</span> spirit.\n    Consumes <span>40</span> stamina.\n  ",
};
var MesoguardPlus = {
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
    description: "\n    Spend <span>777</span> mesos to create a meso shield that lasts\n    <span>4</span> seconds reducing damage taken by <span>{reduction}%</span>.\n    If Cunning is active, the skill costs no mesos, and Cunning will be removed.\n  ",
};
var MindBreaker = {
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
    description: "\n    Unlocks Empowered Mind Stealer, which increases the number of targets that can be hit\n    by the skill to <span>5</span> and the skill's damage by <span>{damage}%</span>.\n  ",
};
var ViciousCuts = {
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
    description: "\n    Quickly stab with your daggers, dealing <span>{damage}%</span> damage <span>5</span> times\n    to <span>3</span> enemies up to <span>3</span> m in front of you.\n    While Cunning is active, this skill is enhanced.\n    The damage of each attack is affected by the weapon in each hand.\n    Consumes <span>28</span> spirit.\n  ",
};
var Haste = {
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
    description: "\n    Your movements mimic the wind.\n    For <span>60</span> sec, <span>4</span> spirit is consumed in <span>0.5</span> sec\n    intervals to increase attack speed and movement speed by <span>{movement}%</span> and\n    physical attack by <span>{attack}%</span>.\n  ",
};
var DeftCombatant = {
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
    description: "\n    Intense training has honed your body, increasing the damage output of\n    Vicious Cuts and Somersault Kick by <span>{damage}%</span>.\n  ",
};
var Vengeance = {
    name: "Vengeance",
    attr: "vengeance",
    prop: "vengeance",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    description: "\n    Your fighting style is fueled by your thirst for vengeance.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases luck by <span>40%</span>. Can attack while climbing.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Deals <span>340%</span> damage when attacking while climbing.\n  ",
};
var SavageStrikes = {
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
    description: "\n    Brandish your daggers, slashing enemies <span>6</span> times.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage per hit.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Consumes Cunning to deal <span>{cunningDamage}%</span> damage per hit.\n  ",
};
var BattlePlan = {
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
    description: "\n    You have a plan for every battle.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases luck by <span>{luck}%</span>.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Cunning Tactics increase physical damage by <span>{increase}%</span> for <span>6</span> sec.\n  ",
};
var PoisonMaster = {
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
    description: "\n    You've become the master poisoner.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increase poison damage by <span>{increase}%</span>.\n    Increase Surprise Attack damage by <span>{surpriseAttackDamage}%</span> and\n    colldown by <span>50%</span>.\n  ",
};
var VolatileVials = {
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
    description: "\n    Throws <span>2</span> vials of flammable gas and deadly poison.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{aoe}%</span> area damage and poisons struck targets.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Poisons deal <span>{poison}%</span> poison damage for <span>12</span> sec each\n    and explode when struck by Surprise Attack.\n    <br/>\n    Poison Edge and Poison Vial poison damage does not stack.\n  ",
};
var CriticalSlice = {
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
    description: "\n    Slash twice to attack the enemy <span>2</span> times.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage per hit.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Converts to Dagger Toss while Watchful.\n  ",
};
var BattleStep = {
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
    description: "\n    Tailor your strategy to any situation.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Passively grants Watchful.\n    <br/><br/>\n    When enemies are close, lose Watchful and gain Rush.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Watchful increases defense by <span>{defense}%</span>.\n    <br/>\n    Rush increases physical attack by <span>{attack}%</span> and\n    movement speed by <span>{movement}%</span> for <span>8</span> sec.\n    <br/>\n    Rush and Haste do not stack.\n  ",
};
var ShadowStep = {
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
    description: "\n    Dash through the shadows.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Move to an enemy withing <span>12</span> m in front of you.\n    Move <span>4.5</span> m if there are no enemies withing <span>12</span> m.\n    <br/><br/>\n    Hold down the key to use Shadow Slash.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Shadow Slash deals <span>{damage}%</span> damage and grants Rush.\n    <br/>\n    While Rush is active, converts this skill to Finishing Step.\n  ",
};
var DeadlyStrikes = {
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
    description: "\n    Fiercely slash the target <span>7</span> times.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage per hit and grants knockback immunity.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Increases physical and magic resistance by <span>{resistance}%</span> while Deadly Strikes is in use.\n  ",
};
var RankOneSkills = {
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
var RankTwoSkills = {
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
var ThiefSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
var ThiefComponent = /** @class */ (function () {
    function ThiefComponent(hostRef) {
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
    ThiefComponent.prototype.componentWillLoad = function () {
        processSkills(this, ThiefSkills, this.ignoreMax);
    };
    ThiefComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, ThiefSkills)];
            });
        });
    };
    ThiefComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, ThiefSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    };
    ThiefComponent.prototype.ignoreMaxChanged = function () {
        processSkills(this, ThiefSkills, this.ignoreMax);
    };
    ThiefComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ThiefSkills));
    };
    ThiefComponent.prototype.render = function () {
        var _this = this;
        return (h("ms-chart", { msClass: "thief", rank: this.rank, onRankChange: function (_a) {
                var detail = _a.detail;
                return _this.rank = detail;
            } }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    };
    Object.defineProperty(ThiefComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThiefComponent, "watchers", {
        get: function () {
            return {
                "ignoreMax": ["ignoreMaxChanged"],
                "extras": ["emitChangeEvent"],
                "rank": ["emitChangeEvent"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThiefComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return ThiefComponent;
}());
export { ThiefComponent as ms_thief };
