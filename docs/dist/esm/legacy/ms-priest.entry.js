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
import { a as Rank } from './chunk-e93b9111.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-5930baea.js';
var SteadfastFaith = {
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
    description: "\n    You've been rewarded for your devotion,\n    recovering <span>8</span> spirit every <span>0.5</span> sec,\n    plus an addition <span>4</span> if at least one foe is suffering from Celestial Light.\n  ",
};
var HeavenlyWings = {
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
    description: "\n    Spread your wings of light and soar to the farthest ally up to <span>6</span> m in front of you.\n    The wings then transform into a divine aura, increasing you and your target's movement\n    speed by <span>20%</span> for <span>5</span> sec and restoring health up to <span>90%</span> of your magic attack.\n    If no allies are in range, you'll fly <span>4.5</span> m forward. This skill can cancel other skills.\n    You will be immune to knockback while this skill is active. Consumes <span>60</span> stamina.\n  ",
};
var CelestialLight = {
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
    description: "\n    Strikes enemies with holy light, dealing <span>{damage}%</span> holy damage\n    to <span>3</span> enemies up to <span>8</span> m in front of you,\n    plus an additional <span>{additionalDamage}%</span> holy damage per sec for <span>6</span> sec.\n  ",
};
var HolyBlast = {
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
    description: "\n    An eruption of holy power deals <span>{damage}%</span> holy damage to <span>8</span> enemies\n    within <span>{range}</span> m and knocks them back <span>0.5</span> m.\n    If Celestial Light also activates, it causes an explosion that deals an additional\n    <span>{additionalDamage}%</span> holy damage to enemies within <span>2</span> m.\n    Consumes <span>16</span> spirit.\n  ",
};
var ShieldOfTheArchon = {
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
    description: "\n    Conjure a shield of judgment for <span>5</span> sec, increasing physical resistance\n    and magic resistance by <span>{resistance}</span> and dealing <span>{damage}%</span>\n    holy damage to <span>5</span> enemies within <span>3</span> m.\n  ",
};
var HolyRelic = {
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
    description: "\n    A holy cross deals <span>{damage}%</span> holy damage to <span>8</span> enemies within <span>3</span> m\n    for <span>8</span> sec, knocks them back <span>1</span> m, and reduces their stamina to <span>0</span>.\n  ",
};
var HealingPrayer = {
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
    description: "\n    Through prayer, restore your health and the health of <span>6</span> allies\n    within <span>3</span> m by <span>{healing}%</span> of your magic attack.\n    Consumes <span>15</span> spirit.\n  ",
};
var ScourgingWave = {
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
    description: "\n    Blast holy power <span>7.5</span> m ahead, dealing <span>{damage}%</span> holy damage to <span>5</span> enemies.\n    The skill lasts while the skill key is held down.\n    Consumes <span>18</span> spirit.\n  ",
};
var Sanctuary = {
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
    description: "\n    Sanctify the ground within a <span>{range}</span>-tile cross for <span>10</span> sec to\n    deal <span>{damage}%</span> damage to enemies and restore health of you and your allies equal\n    to <span>{healing}%</span> of your magic attack.\n  ",
};
var SmitingAura = {
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
    description: "\n    Surround the nearest enemy within <span>8</span> m in front of you with holy power,\n    dealing <span>{damage}%</span> damage to <span>3</span> enemies\n    within <span>1.5</span> m of the target and increasing the damage taken\n    by the target by <span>{damageIncrease}%</span>.\n  ",
};
var CelestialGuardian = {
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
    description: "\n    Summons a little angel for <span>30</span> sec, who increases your magic attack\n    by <span>{attack}%</span> when you have a codex equipped.\n    Consumes <span>45</span> spirit.\n  ",
};
var CelestialBlessings = {
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
    description: "\n    With the help of your angel, bless <span>10</span> allies within <span>6</span> m for <span>10</span> sec,\n    increasing their physical resistance and magic resistance by <span>{resistance}</span>\n    and their physical attack and magic attack by <span>{attack}%</span>.\n    Restores their health by <span>{healing}%</span> of your magic attack.\n    Can only be used when your angel is present.\n    Consumes <span>45</span> spirit.\n  ",
};
var HolySymbol = {
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
    description: "\n    Create a magic seal with a <span>4.5</span> m radius that lasts <span>10</span> sec\n    and affects up to <span>10</span> allies standing on it.\n    Grants a blessing that restores <span>{spirit}</span> spirit per sec\n    and increases physical damage, magic damage, and attack speed\n    by <span>{increase}%</span> and accuracy by <span>{accuracy}</span> for <span>10</span> sec.\n    Once applied, the blessing has a <span>3</span> min cooldown.\n  ",
};
var Disciple = {
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
    description: "\n    Increases the duration of Celestial Guardian, Celestial Blessings,\n    and Holy Symbol buffs by <span>{duration}%</span>.\n  ",
};
var ScepterMastery = {
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
    description: "\n    Your proficiency with scepters increases weapon attack by <span>{attack}%</span> when you have a scepter equipped.\n  ",
};
var HealingMastery = {
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
    description: "\n    Your experience in combat increases the amount of health and spirit\n    restored through recovery skills by <span>{recovery}%</span>.\n    This skill does not affect your natural health and spirit regeneration rates.\n  ",
};
var AngelicRay = {
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
    description: "\n    Fire a beam of holy light, dealing <span>{damage}%</span> holy damage\n    to <span>8</span> enemies up to <span>12</span> m in front of you.\n    Restores health to <span>8</span> allies hit equal\n    to <span>{healing}%</span> of your magic attack.\n    Consumes <span>30</span> spirit.\n  ",
};
var LifesGuardian = {
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
    description: "\n    Call upon the sacred power at the heart of the world, permanently increasing intelligence by <span>40</span>.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases recovery by <span>20%</span> and\n    movement speed by <span>20%</span> for <span>12</span> sec.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Healing Prayer prioritizes the ally with the lowest health.\n  ",
};
var ScathingLight = {
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
        damage: [390, 390, 390, 390, 390],
        holyDamage: [4, 4, 4, 4, 4],
    },
    description: "\n    Smite enemies with holy light.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>2</span> times and inflicts Celestial Light.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Celestial Light deals <span>{holyDamage}%</span> holy damage per sec for <span>8</span> sec.\n  ",
};
var LightSpear = {
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
        damage: [166, 166, 166, 166, 166],
        additionalDamage: [841, 841, 841, 841, 841],
    },
    description: "\n    Damage enemies with a burst of holy light, then summon a spear of light to deal additional damage.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and summons a Light Spear to strike <span>3</span> targets.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    The Light Spear deals and additional <span>{additionalDamage}%</span> damaage to surrounding enemies.\n  ",
};
var Clarity = {
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
        attack: [5, 5, 5, 5, 5],
        accuracy: [4, 4, 4, 4, 4],
        critical: [28, 28, 28, 28, 28],
    },
    description: "\n    Commune with the divine to strengthen your resolve.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases magic attack by <span>{attack}%</span>,\n    accuracy by <span>{accuracy}%</span>,\n    and critical rate by <span>{critical}</span>.\n  ",
};
var HeavensWrath = {
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
        firstDamage: [729, 729, 729, 729, 729],
        secondDamage: [1361, 1361, 1361, 1361, 1361],
        thirdDamage: [2191, 2191, 2191, 2191, 2191],
        stamina: [30, 30, 30, 30, 30],
        health: [15, 15, 15, 15, 15],
        movement: [24, 24, 24, 24, 24],
    },
    description: "\n    Bless a circle of land before you to damage foes and empower yourself.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Generates <span>3</span> explosions, dealing <span>{firstDamage}%</span>,\n    <span>{secondDamage}%</span>, and <span>{thirdDamage}%</span> damage.\n    The circle presists for <span>20</span> sec, empowering you while you stand within in.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    While standing within the circle, increases stamina recover speed by <span>{stamina}%</span>,\n    health by <span>{health}%</span>, and movement speed by <span>{movement}%</span>.\n    Light Spear becomes Light Sword while you are within the circle.\n  ",
};
var PurifyingLight = {
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
        damage: [131, 131, 131, 131, 131],
        reduction: [1.5, 1.5, 1.5, 1.5, 1.5],
    },
    description: "\n    Loose holy arrows to damage enemies and reduce their defense.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and inflicts defense reduction on <span>3</span> targets.\n    Defense reduction doesn't stack with Smiting Aura.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Decreases targets' defense by <span>{reduction}%</span> for <span>8</span> sec.\n    This activates Steadfast Faith spirit effect.\n  ",
};
var DivineWave = {
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
        damage: [405, 405, 405, 405, 405],
        additionalDamage: [161, 161, 161, 161, 161],
        chance: [12, 12, 12, 12, 12],
        healing: [120, 120, 120, 120, 120],
    },
    description: "\n    Challen holy energy for dealing damage with a chance to heal nearby ally.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage to <span>5</span> enemies.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    <span>{chance}%</span> chance to deal an additional <span>{additionalDamage}%</span> damage\n    and heal the ally with the lowest health by <span>{healing}%</span> of your magic attack.\n  ",
};
var GreaterHealing = {
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
        healing: [56, 56, 56, 56, 56],
        instantHealing: [240, 240, 240, 240, 240],
        increase: [9, 9, 9, 9, 9],
    },
    description: "\n    Draw celestial power from the heavens to heal allies and increase your damage.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Heal <span>10%</span> allies every <span>0.5</span> sec for <span>6</span> sec\n    by <span>{healing}%</span> of your magic attack.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Instantly heal the 2 allies with the lowest health by <span>{instantHealing}%</span> of your magic attack.\n    Increases your damage by <span>{increase}%</span> for <span>5</span> sec.\n  ",
};
var Vitality = {
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
        attack: [7, 7, 7, 7, 7],
        increase: [1, 1, 1, 1, 1],
    },
    description: "\n    Increases the offense of allies healed by Divine Wave or Greater Healing.\n    Purifying Light and Divine Wave deal increased damage.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Allies healed by Divine Wave or Greater Healing have their physical and magic attack increased\n    by <span>{attack}%</span> for <span>30</span> sec.\n    Increases Purifying Light and Divine Wave damage by <span>{increase}%</span>.\n    This physical and magic attack increase doesn't stack with Celestial Blessing.\n  ",
};
var RankOneSkills = {
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
var RankTwoSkills = {
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
var PriestSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
var PriestComponent = /** @class */ (function () {
    function PriestComponent(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
        this.heavenlyWings = PriestSkills.HeavenlyWings.minLevel;
        this.steadfastFaith = PriestSkills.SteadfastFaith.minLevel;
        this.celestialLight = PriestSkills.CelestialLight.minLevel;
        this.holyBlast = PriestSkills.HolyBlast.minLevel;
        this.healingPrayer = PriestSkills.HealingPrayer.minLevel;
        this.scepterMastery = PriestSkills.ScepterMastery.minLevel;
        this.celestialGuardian = PriestSkills.CelestialGuardian.minLevel;
        this.shieldOfTheArchon = PriestSkills.ShieldOfTheArchon.minLevel;
        this.scourgingWave = PriestSkills.ScourgingWave.minLevel;
        this.celestialBlessings = PriestSkills.CelestialBlessings.minLevel;
        this.holyRelic = PriestSkills.HolyRelic.minLevel;
        this.sanctuary = PriestSkills.Sanctuary.minLevel;
        this.holySymbol = PriestSkills.HolySymbol.minLevel;
        this.healingMastery = PriestSkills.HealingMastery.minLevel;
        this.smitingAura = PriestSkills.SmitingAura.minLevel;
        this.disciple = PriestSkills.Disciple.minLevel;
        this.angelicRay = PriestSkills.AngelicRay.minLevel;
        this.lifesGuardian = PriestSkills.LifesGuardian.minLevel;
        this.scathingLight = PriestSkills.ScathingLight.minLevel;
        this.lightSpear = PriestSkills.LightSpear.minLevel;
        this.clarity = PriestSkills.Clarity.minLevel;
        this.heavensWrath = PriestSkills.HeavensWrath.minLevel;
        this.purifyingLight = PriestSkills.PurifyingLight.minLevel;
        this.divineWave = PriestSkills.DivineWave.minLevel;
        this.greaterHealing = PriestSkills.GreaterHealing.minLevel;
        this.vitality = PriestSkills.Vitality.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    PriestComponent.prototype.componentWillLoad = function () {
        processSkills(this, PriestSkills, this.ignoreMax);
    };
    PriestComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, PriestSkills)];
            });
        });
    };
    PriestComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, PriestSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    };
    PriestComponent.prototype.ignoreMaxChanged = function () {
        processSkills(this, PriestSkills, this.ignoreMax);
    };
    PriestComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, PriestSkills));
    };
    PriestComponent.prototype.render = function () {
        var _this = this;
        return (h("ms-chart", { msClass: "priest", rank: this.rank, onRankChange: function (_a) {
                var detail = _a.detail;
                return _this.rank = detail;
            } }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    };
    Object.defineProperty(PriestComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PriestComponent, "watchers", {
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
    Object.defineProperty(PriestComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return PriestComponent;
}());
export { PriestComponent as ms_priest };
