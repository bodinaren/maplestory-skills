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
var ManaFont = {
    name: "Mana Font",
    attr: "mana-font",
    prop: "manaFont",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    sp: true,
    description: "\n    Your fine control over your magical powers allows you to\n    recover <span>1</span> spirit every <span>0.3</span> sec at will.\n  ",
};
var Teleport = {
    name: "Teleport",
    attr: "teleport",
    prop: "teleport",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: "\n    Warp yourself <span>4.5</span> m forward. This skill can cancel other skills.\n    You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  ",
};
var PhantomClaw = {
    name: "Phantom Claw",
    attr: "phantom-claw",
    prop: "phantomClaw",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        damage: [71, 71, 77, 83, 89, 95, 101, 107, 113, 119, 125],
    },
    description: "\n    Slash the air with sharp magical claws, dealing <span>{damage}%</span> damage\n    <span>2</span> times to <span>3</span> enemies up to <span>8</span> m in front of you.\n  ",
};
var ArcaneBlast = {
    name: "Arcane Blast",
    attr: "arcane-blast",
    prop: "arcaneBlast",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    cooldown: 6,
    levelRequirement: [0, 0, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        damage: [260, 260, 279, 298, 317, 336, 355, 374, 393, 412, 431],
    },
    description: "\n    Focus a magical aura on a spot <span>4.5</span> m in front of you, creating an explosion of energy\n    that deals <span>{damage}%</span> damage to enemies within <span>3</span> m and knocks them back <span>1</span> m.\n  ",
};
var FlameWave = {
    name: "Flame Wave",
    attr: "flame-wave",
    prop: "flameWave",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 20,
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        damage: [175, 175, 188, 201, 214, 227, 240, 253, 266, 279, 292],
        dot: [21, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39],
    },
    description: "\n    Gather fire energy in your staff to fling a flame wave up to <span>8</span> m in front of you,\n    dealing <span>{damage}%</span> fire damage to enemies caught in it and setting them on fire,\n    which deals an additional <span>{dot}%</span> every second for <span>10</span> sec.\n    Consumes <span>20</span> spirit.\n  ",
};
var FlameTornado = {
    name: "Flame Tornado",
    attr: "flame-tornado",
    prop: "flameTornado",
    rank: 1,
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 40,
    cooldown: 16,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    skillRequirements: [{
            skill: FlameWave,
            level: 4,
        }],
    values: {
        damage: [142, 142, 152, 162, 172, 182, 192, 202, 212, 222, 232],
    },
    description: "\n    Gather fire energy from your surroundings to create a huge flame whirlwind <span>4.5</span> m in front of you.\n    The flame whirlwind lasts for <span>1.5</span> sec, dealing <span>{damage}%</span> fire damage\n    to <span>8</span> enemies within <span>3</span> m every <span>0.3</span> sec.\n    Consumes <span>40</span> spirit.\n  ",
};
var Pyromancy = {
    name: "Pyromancy",
    attr: "pyromancy",
    prop: "pyromancy",
    rank: 1,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    passive: true,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: FlameWave,
            level: 5,
        }, {
            skill: FlameTornado,
            level: 5,
        }],
    values: {
        damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    An advanced fire technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all fire damage by <span>{damage}%</span>.\n  ",
};
var ManaClaw = {
    name: "Mana Claw",
    attr: "mana-claw",
    prop: "manaClaw",
    rank: 1,
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 15,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: ArcaneBlast,
            level: 3,
        }],
    values: {
        firstDamage: [149, 149, 159, 169, 179, 189, 199, 209, 219, 229, 239],
        thirdDamage: [246, 246, 263, 280, 297, 314, 331, 348, 365, 382, 399],
    },
    description: "\n    Shoot a sphere of condensed mana at the nearest enemy up to <span>9</span> m in front of you,\n    dealing <span>{firstDamage}%</span> damage.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The first and second strikes have the same effect,\n    but the third strike <span>{thirdDamage}%</span> damage and is always critical.\n    Consumes <span>15</span> spirit.\n  ",
};
var IceSpear = {
    name: "Ice Spear",
    attr: "ice-spear",
    prop: "iceSpear",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Ice",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 20,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    skillRequirements: [{
            skill: FlameWave,
            level: 4,
        }],
    values: {
        damage: [171, 171, 184, 197, 210, 223, 236, 249, 262, 275, 288],
    },
    description: "\n    Gather ice from the moisture in the air to fling at the closest enemy up to <span>8</span> m in front of you.\n    The spear of ice breaks on impact, its shards dealing <span>{damage}%</span> ice damage\n    to <span>8</span> enemies within <span>2.5</span> m and decreasing movement speed by <span>10%</span> for <span>3</span> sec.\n    This cold effect can stack up to <span>6</span> times.\n    Enemies at max stacks are frozen for <span>1</span> sec.\n    Consumes <span>20</span> spirit.\n  ",
};
var IceStorm = {
    name: "Ice Storm",
    attr: "ice-storm",
    prop: "iceStorm",
    rank: 1,
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Ice",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 30,
    cooldown: 12,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: IceSpear,
            level: 4,
        }],
    values: {
        damage: [152, 152, 163, 174, 185, 196, 207, 218, 229, 240, 251],
    },
    description: "\n    Blast <span>4</span> ice crystals toward enemies up to <span>8</span> m in front of you,\n    surrounding the targets with a cold front that generates a giant shard of ice.\n    The shard deals <span>{damage}%</span> ice damage to <span>8</span> enemies within <span>2.5</span> m.\n    Consumes <span>30</span> spirit.\n  ",
};
var Cryomancy = {
    name: "Cryomancy",
    attr: "cryomancy",
    prop: "cryomancy",
    rank: 1,
    row: 5,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Ice",
    passive: true,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: IceSpear,
            level: 5,
        }, {
            skill: IceStorm,
            level: 5,
        }],
    values: {
        damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    An advanced ice technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all ice damage by <span>{damage}%</span>.\n  ",
};
var ChainLightning = {
    name: "Chain Lightning",
    attr: "chain-lightning",
    prop: "chainLightning",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Electric",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 15,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    values: {
        damage: [62, 62, 66, 70, 74, 78, 82, 86, 90, 94, 98],
        additionalDamage: [288, 288, 308, 328, 348, 368, 388, 408, 428, 448, 468],
    },
    description: "\n    Release an intense electric load that deals <span>{damage}%</span> electric damage\n    to <span>8</span> enemies up to <span>8</span> m in front of you.\n    Enemies hit with this skill <span>5</span> times pulse with electric energy,\n    attracting a bolt that deals an additional <span>{additionalDamage}%</span> electric damage.\n    Consumes <span>15</span> spirit.\n  ",
};
var Thunderbolt = {
    name: "Thunderbolt",
    attr: "thunderbolt",
    prop: "thunderbolt",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Electric",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 40,
    cooldown: 16,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: ChainLightning,
            level: 4,
        }],
    values: {
        damage: [611, 611, 656, 701, 746, 791, 836, 881, 926, 971, 1016],
    },
    description: "\n    Gather a bolt of electricity to throw at the closest enemy up to <span>8</span> m in front of you,\n    dealing <span>{damage}%</span> electric damage.\n    The bolt bounces up to <span>8</span> times within <span>5</span> m,\n    but won't hit the same target twice in a row.\n    Consumes <span>40</span> spirit.\n  ",
};
var Electromancy = {
    name: "Electromancy",
    attr: "electromancy",
    prop: "electromancy",
    rank: 1,
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Electric",
    passive: true,
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: ChainLightning,
            level: 5,
        }, {
            skill: Thunderbolt,
            level: 5,
        }],
    values: {
        damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    An advanced electric technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all electric damage by <span>{damage}%</span>.\n  ",
};
var MagicArmor = {
    name: "Magic Armor",
    attr: "magic-armor",
    prop: "magicArmor",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 45,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    values: {
        barrier: [6, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
    },
    description: "\n    Envelop your body with a magical aura, creating a barrier that absorbs damage\n    up to <span>{barrier}%</span> of your max health for <span>10</span> sec.\n    Cannot be combined with other barrier effects.\n  ",
};
var FocusSeal = {
    name: "Focus Seal",
    attr: "focus-seal",
    prop: "focusSeal",
    rank: 1,
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 45,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: MagicArmor,
            level: 4,
        }],
    values: {
        increaseAllies: [1, 1, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 4.2, 4.6],
        increaseSelf: [0.5, 0.5, 0.7, 0.9, 1.1, 1.3, 1.5, 1.7, 1.9, 2.1, 2.3],
    },
    description: "\n    Imbue the earth with your magical power, creating a seal that reaches <span>5</span> tiles around you.\n    The seal lasts for <span>20</span> sec and increases the physical attack and magic attack\n    of allies who absorb it by <span>{increaseAllies}%</span> for <span>180</span> sec.\n    Focus Seal also increases the caster's physical and magic attack by an additional <span>{increaseSelf}%</span>.\n  ",
};
var ElementalMaster = {
    name: "Elemental Master",
    attr: "elemental-master",
    prop: "elementalMaster",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    values: {
        damage: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    description: "\n    Asimov's high-level instruction teaches you how to harmoniously balance of fire, ice, and electric magic.\n    Increases fire, ice, and electric damage by <span>{damage}%</span>.\n  ",
};
var ManaControl = {
    name: "Mana Control",
    attr: "mana-control",
    prop: "manaControl",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    attackType: "Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 10,
    cooldown: 60,
    levelRequirement: [60, 60, 60, 60, 60],
    description: "\n    Bend mana to your will.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Permanently increases intelligence by <span>40</span>.\n    Using a skill grants Mana Control, which increases movement speed by <span>35%</span>,\n    increases magic attack by <span>20%</span> when spirit is <span>50%</span> or higher,\n    restores spirit by <span>50%</span>,\n    and decreases spirit cost by half when spirit is less than <span>50%</span>.\n  ",
};
var DualCast = {
    name: "Dual Cast",
    attr: "dual-cast",
    prop: "dualCast",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Electric",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 15,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        handyLightningDamage: [90, 90, 90, 90, 90],
        handyLightningAdditionalDamage: [315, 315, 315, 315, 315],
        iceShotDamage: [100, 100, 100, 100, 100],
        frostDamage: [49, 49, 49, 49, 49],
    },
    description: "\n    Cast spells of electricity and ice at the same time.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Cast Handy Lightning and Ice Shot at the same time.\n    <br/><br/>\n    Handy Lightning deals <span>{handyLightningDamage}%</span> damage and places a status effect on the target.\n    At <span>5</span> stacks, the Handy lightning effect detonates,\n    dealing an additional <span>{handyLightningAdditionalDamage}%</span> damage.\n    <br/><br/>\n    Ice Shot deals <span>{iceShotDamage}%</span>.\n    <br/><br/>\n    Permanently enhances Ice Spear.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Ice Spear costs no spirit and inflicts Frost.\n    Enemies suffering from Frost take an additional <span>{frostDamage}%</span> damage from Handy Lightning.\n  ",
};
var IceCreamTime = {
    name: "Ice Cream Time",
    attr: "ice-cream-time",
    prop: "iceCreamTime",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Ice",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 40,
    cooldown: 20,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: DualCast,
            level: 3,
        }],
    values: {
        damage: [418, 418, 418, 418, 418],
        additionalDamage: [500, 500, 500, 500, 500],
        movement: [15, 15, 15, 15, 15],
        dot: [150, 150, 150, 150, 150],
        iceStormIncrease: [49, 49, 49, 49, 49],
    },
    description: "\n    Make ice cream with ice magic to give your foes some serious brain freeze.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Inflicts a stack of Chill every second.\n    Hit affected enemies with Thunderbolt to trigger Electric Ice Cream.\n    Deals <span>{additionalDamage}%</span> damage when the skill is used again or the duration ends.\n    <br/><br/>\n    Permanently enhances Ice Storm.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Chill decreases movement speed by <span>{movement}%</span> per stack.\n    <br/>\n    Target are unable to act at <span>6</span> stacks.\n    <br/>\n    Electric Ice Cream deals <span>{dot}%</span> damage per sec for <span>10</span> sec.\n    <br/>\n    Increases Ice Storm damage by <span>{iceStormIncrease}%</span>.\n  ",
};
var LodestoneField = {
    name: "Lodestone Field",
    attr: "lodestone-field",
    prop: "lodestoneField",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Electric",
    cooldown: 30,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: IceCreamTime,
            level: 2,
        }],
    values: {
        damage: [320, 320, 320, 320, 320],
        additionalDamage: [44, 44, 44, 44, 44],
        stackDamage: [92, 92, 92, 92, 92],
        evasion: [10, 10, 10, 10, 10],
        thunderboltIncrease: [45, 45, 45, 45, 45],
    },
    description: "\n    Fill the air with a magnetic charge to augment your attacks.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Grants a stack of Lightning Charge.\n    <br/><br/>\n    If you already have Lightning Charge, consume all stacks and cast Call Lightning instead,\n    dealing <span>{damage}%</span> damage,\n    plus an additional <span>{additionalDamage}%</span> per stack.\n    <br/><br/>\n    Permanently enhances Thunderbolt.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    When Lightning Charge stacks, inflicts <span>{stackDamage}%</span> damage to nearby enemies\n    and increases evation by <span>{evasion}%</span> per stack.\n    <br/>\n    Gain stacks by casting Handy Lightning or Electric Ice Cream, or by getting hit.\n    <br/>\n    Increases Thunderbolt damage by <span>{thunderboltIncrease}%</span>.\n  ",
};
var PerfectStorm = {
    name: "Perfect Storm",
    attr: "perfect-storm",
    prop: "perfectStorm",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Electric",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 5,
    cooldown: 40,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: IceCreamTime,
            level: 3,
        }, {
            skill: LodestoneField,
            level: 3,
        }],
    values: {
        damage: [229, 229, 229, 229, 229],
        additionalDamage: [731, 731, 731, 731, 731],
        elementaryAttack: [24, 24, 24, 24, 24],
    },
    description: "\n    Attack with a perfect blend of ice and electricity.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Summon a bolt of ice and a bolt of electricity, each dealing <span>{damage}%</span> damage.\n    Hold down the skill key to unleash a fused attack that deals <span>{additionalDamage}%</span> damage.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    After casting Perfect Storm, temporarily increase electric and ice attack\n    by <span>{elementaryAttack}%</span> and reset the cooldowns for Thunderbolt and Ice Storm.\n  ",
};
var Ember = {
    name: "Ember",
    attr: "ember",
    prop: "ember",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 20,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [302, 302, 302, 302, 302],
        emberDot: [39, 39, 39, 39, 39],
        emberAoe: [366, 366, 366, 366, 366],
        kindlingDot: [45, 45, 45, 45, 45],
        kindlingAoe: [457, 457, 457, 457, 457],
        spreadingDamage: [45, 45, 45, 45, 45],
    },
    description: "\n    Launch a small fireball to start a big fire.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and inflicts Ember.\n    Prioritizes enemies already suffering from Ember or Kindling.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Ember deals <span>{emberDot}%</span> per sec.\n    When a new stack is added, deals <span>{emberAoe}%</span> area damage and inflicts Spreading Embers and Kindling.\n    <br/>\n    Kindling deals <span>{kindlingDot}%</span> per sec.\n    When Ember is inflicted, deals <span>{kindlingAoe}%</span> area damage and inflicts Spreading Embers.\n    <br/>\n    Spreading Embers deals and additional <span>{spreadingDamage}%</span> damage when hit by Flame Wave.\n  ",
};
var BarbecueParty = {
    name: "Barbecue Party",
    attr: "barbecue-party",
    prop: "barbecueParty",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 40,
    cooldown: 8,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: Ember,
            level: 3,
        }],
    values: {
        damage: [552, 552, 552, 552, 552],
        dot: [59, 59, 59, 59, 59],
        aoeDamage: [548, 548, 548, 548, 548],
    },
    description: "\n    Grill your enemies with magical flames.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>3</span> times and inflicts Deep Fried.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Deep Fried deals <span>{dot}%</span> damage per sec and\n    deals <span>{aoeDamage}</span> area damage when Arcane Blast hits.\n  ",
};
var PlayingWithFire = {
    name: "Playing with Fire",
    attr: "playing-with-fire",
    prop: "playingWithFire",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Magic",
    weaponRequired: "Two-handed Staff",
    passive: true,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: BarbecueParty,
            level: 3,
        }],
    values: {
        damage: [137, 137, 137, 137, 137],
        chance: [27, 27, 27, 27, 27],
    },
    description: "\n    You've befriended a mischievous fire spire.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Permanently grants Dancing Flames.\n    Casting Flame Tornado temporarily grants Flame Imp.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Dancing Flames removes the spirit cost of Flame Wave and increases Flame Tornado damage by <span>{damage}%</span>.\n    <br/><br/>\n    Flame Imp lasts for <span>11</span> sec, guaranteeing a critical when Ember hits\n    and granting a <span>{chance}%</span> chance to trigger Party Time on critical hit.\n    <br/>\n    Party Time resets Barbequeue Party's cooldown and allows it to be cast instantly.\n  ",
};
var LittleMeteor = {
    name: "Little Meteor",
    attr: "little-meteor",
    prop: "littleMeteor",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Staff",
    spirit: 60,
    cooldown: 30,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: PlayingWithFire,
            level: 3,
        }],
    values: {
        damage: [2000, 2000, 2000, 2000, 2000],
        additionalDamage: [199, 199, 199, 199, 199],
        enlightenFirstDamage: [340, 340, 340, 340, 340],
        enlightenSecondDamage: [350, 350, 350, 350, 350],
    },
    description: "\n    Summons a meteor to strike enemies. Sometimes summons something else by mistake.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and grants Enlightenment.\n    Deals an additional <span>{additionalDamage}%</span> damage to targets hit with Flame Tornado.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Enlightenment causes Ember to strike twice, dealing <span>{enlightenFirstDamage}%</span> damage\n    and then <span>{enlightenSecondDamage}%</span> damage at no spirit cost.\n  ",
};
var RankOneSkills = {
    ArcaneBlast: ArcaneBlast,
    ChainLightning: ChainLightning,
    Cryomancy: Cryomancy,
    Electromancy: Electromancy,
    ElementalMaster: ElementalMaster,
    FlameTornado: FlameTornado,
    FlameWave: FlameWave,
    FocusSeal: FocusSeal,
    IceSpear: IceSpear,
    IceStorm: IceStorm,
    MagicArmor: MagicArmor,
    ManaClaw: ManaClaw,
    ManaFont: ManaFont,
    PhantomClaw: PhantomClaw,
    Pyromancy: Pyromancy,
    Teleport: Teleport,
    Thunderbolt: Thunderbolt,
};
var RankTwoSkills = {
    ManaControl: ManaControl,
    DualCast: DualCast,
    IceCreamTime: IceCreamTime,
    LodestoneField: LodestoneField,
    PerfectStorm: PerfectStorm,
    Ember: Ember,
    BarbecueParty: BarbecueParty,
    PlayingWithFire: PlayingWithFire,
    LittleMeteor: LittleMeteor,
};
var WizardSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
var WizardComponent = /** @class */ (function () {
    function WizardComponent(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
        this.arcaneBlast = WizardSkills.ArcaneBlast.minLevel;
        this.chainLightning = WizardSkills.ChainLightning.minLevel;
        this.cryomancy = WizardSkills.Cryomancy.minLevel;
        this.electromancy = WizardSkills.Electromancy.minLevel;
        this.elementalMaster = WizardSkills.ElementalMaster.minLevel;
        this.flameTornado = WizardSkills.FlameTornado.minLevel;
        this.flameWave = WizardSkills.FlameWave.minLevel;
        this.focusSeal = WizardSkills.FocusSeal.minLevel;
        this.iceSpear = WizardSkills.IceSpear.minLevel;
        this.iceStorm = WizardSkills.IceStorm.minLevel;
        this.magicArmor = WizardSkills.MagicArmor.minLevel;
        this.manaClaw = WizardSkills.ManaClaw.minLevel;
        this.manaFont = WizardSkills.ManaFont.minLevel;
        this.phantomClaw = WizardSkills.PhantomClaw.minLevel;
        this.pyromancy = WizardSkills.Pyromancy.minLevel;
        this.teleport = WizardSkills.Teleport.minLevel;
        this.thunderbolt = WizardSkills.Thunderbolt.minLevel;
        this.manaControl = WizardSkills.ManaControl.minLevel;
        this.dualCast = WizardSkills.DualCast.minLevel;
        this.iceCreamTime = WizardSkills.IceCreamTime.minLevel;
        this.lodestoneField = WizardSkills.LodestoneField.minLevel;
        this.perfectStorm = WizardSkills.PerfectStorm.minLevel;
        this.ember = WizardSkills.Ember.minLevel;
        this.barbecueParty = WizardSkills.BarbecueParty.minLevel;
        this.playingWithFire = WizardSkills.PlayingWithFire.minLevel;
        this.littleMeteor = WizardSkills.LittleMeteor.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    WizardComponent.prototype.componentWillLoad = function () {
        processSkills(this, WizardSkills, this.ignoreMax);
    };
    WizardComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, WizardSkills)];
            });
        });
    };
    WizardComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, WizardSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    };
    WizardComponent.prototype.ignoreMaxChanged = function () {
        processSkills(this, WizardSkills, this.ignoreMax);
    };
    WizardComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, WizardSkills));
    };
    WizardComponent.prototype.render = function () {
        var _this = this;
        return (h("ms-chart", { msClass: "wizard", rank: this.rank, onRankChange: function (_a) {
                var detail = _a.detail;
                return _this.rank = detail;
            } }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    };
    Object.defineProperty(WizardComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WizardComponent, "watchers", {
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
    Object.defineProperty(WizardComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return WizardComponent;
}());
export { WizardComponent as ms_wizard };
