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
var KnuckleMissile = {
    name: "Knuckle Missile",
    attr: "knuckle-missile",
    prop: "knuckleMissile",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    element: "Fire",
    cooldown: 4,
    sp: true,
    description: "\n    Dash forward with impressive swiftness and throw a powerful punch at the nearest enemy\n    within <span>6</span> m, dealing <span>250%</span> fire damage.\n    If there is no enemy within <span>6</span> m, move forward <span>3</span> m instead.\n    Stance Change mode is activated with the skill, causing other skills to activate in changed form.\n  ",
};
var GuardDash = {
    name: "Guard Dash",
    attr: "guard-dash",
    prop: "guardDash",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: "\n    Assume a guard stance with both arms while moving forward <span>1.75</span> m <span>2</span> times.\n    Physical and magic resistances increase by <span>300</span> during Guard Dash.\n    You are immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  ",
};
var MaharPunch = {
    name: "Mahar Punch",
    attr: "mahar-punch",
    prop: "maharPunch",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [37, 37, 40, 43, 46, 49, 52, 55, 58, 61, 64],
    },
    description: "\n    Throw two consecutive sonic jabs that deal <span>{damage}%</span> damage,\n    hitting up to <span>5</span> enemies <span>2</span> m in front of you.\n  ",
};
var FistsOfFury = {
    name: "Fists of Fury",
    attr: "fists-of-fury",
    prop: "fistsOfFury",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        leftDamage: [45, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72],
    },
    description: "\n    Throw consecutive left-right punches that deal <span>{leftDamage}%</span> damage\n    <span>2</span> times and <span>55%</span> damage on the last hit,\n    hitting up to <span>5</span> enemies <span>2</span> m in front of you.\n    Activates in changed form when in Stance Change mode.\n  ",
};
var MagnumBlow = {
    name: "Magnum Blow",
    attr: "magnum-blow",
    prop: "magnumBlow",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    skillRequirements: [{
            skill: MaharPunch,
            level: 2,
        }, {
            skill: FistsOfFury,
            level: 2,
        }],
    values: {
        stage1: [230, 230, 246, 262, 278, 294, 310, 326, 342, 358, 374],
        stage2: [513, 513, 549, 585, 621, 657, 693, 729, 765, 801, 837],
        stage3: [792, 792, 849, 906, 963, 1020, 1077, 1134, 1191, 1248, 1305],
    },
    description: "\n    After concentrating all your power into your right fist,\n    move forward <span>1.5</span> m while delivering a powerful punch,\n    dealing <span>{stage1}%</span> fire damage to <span>5</span> enemies <span>3</span> m in front of you.\n    If you hold down the action key for <span>0.5</span> sec,\n    the skill enhances to stage 2 and moves you forward <span>3</span> m,\n    dealing <span>{stage2}%</span> fire damage to <span>5</span> enemies within <span>3</span> m.\n    If you hold down the action key for <span>0.5</span> sec after stage 2,\n    the skill enhances to stage 3 and moves you forward <span>4.5</span> m,\n    dealing <span>{stage3}%</span> fire damage to <span>5</span> enemies within <span>3</span> m.\n    If you maintain stage 3 for <span>3</span> sec or more, attacks become automatic.\n  ",
};
var Beatdown = {
    name: "Beatdown",
    attr: "beatdown",
    prop: "beatdown",
    rank: 1,
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [20, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38],
    skillRequirements: [{
            skill: FistsOfFury,
            level: 4,
        }, {
            skill: MagnumBlow,
            level: 3,
        }],
    values: {
        damage: [49, 49, 53, 57, 61, 65, 69, 73, 77, 81, 85],
    },
    description: "\n    Rapidly throw two-handed punches that deal <span>{damage}%</span> damage <span>5</span> times,\n    hitting up to <span>5</span> enemies <span>2.5</span> m in front of you.\n    This skill can be used up to <span>3</span> times in a row by pressing the key repeatedly,\n    and activation speed increases by <span>10%</span> per press.\n    Activates in changed form when in Stance Change mode.\n  ",
};
var PowerPuncher = {
    name: "Power Puncher",
    attr: "power-puncher",
    prop: "powerPuncher",
    rank: 1,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: MagnumBlow,
            level: 5,
        }, {
            skill: Beatdown,
            level: 4,
        }],
    values: {
        increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    Increases the damage of Fists of Fury, Beatdown, Gigantic Burst,\n    and Magnum Blow by <span>{increase}%</span> by enhancing punch-type skills.\n    The damage increase is also applied to the changed form of these skills.\n  ",
};
var GiganticBurst = {
    name: "Gigantic Burst",
    attr: "gigantic-burst",
    prop: "giganticBurst",
    rank: 1,
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: FistsOfFury,
            level: 6,
        }, {
            skill: PowerPuncher,
            level: 2,
        }],
    values: {
        damage: [355, 355, 380, 405, 430, 455, 480, 505, 530, 555, 580],
    },
    description: "\n    After jumping into the air, slam the ground with a powerful punch that causes surrounding shockwaves.\n    The radius of the shockwaves expands from <span>3</span> m, to <span>3.75</span> m,\n    to <span>5.25</span> m, dealing <span>{damage}%</span> fire damage to <span>8</span> enemies within the area.\n  ",
};
var RisingKick = {
    name: "Rising Kick",
    attr: "rising-kick",
    prop: "risingKick",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 2,
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    skillRequirements: [],
    values: {
        damage: [61, 61, 66, 71, 76, 81, 86, 91, 96, 101, 106],
    },
    description: "\n    Consecutively kick low, middle, and high to deal <span>{damage}%</span> damage\n    <span>3</span> times to <span>5</span> enemies up to <span>2.5</span> m in front of you.\n    Activates in changed form when in Stance Change mode.\n  ",
};
var HurricaneCutter = {
    name: "Hurricane Cutter",
    attr: "hurricane-cutter",
    prop: "hurricaneCutter",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    skillRequirements: [{
            skill: MaharPunch,
            level: 2,
        }, {
            skill: RisingKick,
            level: 2,
        }],
    values: {
        damage: [93, 93, 100, 107, 114, 121, 128, 135, 142, 149, 156],
        additionalDamage: [110, 110, 118, 126, 134, 142, 150, 158, 166, 174, 182],
    },
    description: "\n    Lift your body into the air with one foot out and spin violently to deal <span>{damage}%</span> damage\n    <span>5</span> times to <span>8</span> enemies within <span>2.25</span> m.\n    Press on the directional keys to move while attacking.\n    Strength is gathered and released before the spinning stops,\n    delivering a powerful kick that deals <span>{additionalDamage}%</span> damage\n    to <span>8</span> enemies within <span>2.5</span> m.\n    Struck enemies are lifted <span>2.5</span> m in the air.\n  ",
};
var Guillotine = {
    name: "Guillotine",
    attr: "guillotine",
    prop: "guillotine",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: RisingKick,
            level: 4,
        }, {
            skill: HurricaneCutter,
            level: 3,
        }],
    values: {
        damage: [88, 88, 94, 100, 106, 112, 118, 124, 130, 136, 142],
        additionalDamage: [117, 117, 125, 133, 141, 149, 157, 165, 173, 181, 189],
    },
    description: "\n    Consecutively kick left then right to deal <span>{damage}%</span> damage\n    <span>2</span> times to <span>5</span> enemies up to <span>2.5</span> m in front of you.\n    Afterwards, kick downward with a powerful blow to deal <span>{additionalDamage}%</span> damage\n    to <span>5</span> enemies within a <span>2</span> m radius.\n    Activates in changed form when in Stance Change mode.\n  ",
};
var KickTechnician = {
    name: "Kick Technician",
    attr: "kick-technician",
    prop: "kickTechnician",
    rank: 1,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: HurricaneCutter,
            level: 5,
        }, {
            skill: Guillotine,
            level: 4,
        }],
    values: {
        increase: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    Increase the damage of Rising Kick, Guillotine, Hurricane Cutter, and Dragon Kick\n    by <span>{increase}%</span> by enhancing kick-type skills.\n    The damage increase is also applied to the changed form of these skills.\n  ",
};
var DragonKick = {
    name: "Dragon Kick",
    attr: "dragon-kick",
    prop: "dragonKick",
    rank: 1,
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 4,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: RisingKick,
            level: 6,
        }, {
            skill: KickTechnician,
            level: 2,
        }],
    values: {
        damage: [306, 306, 328, 350, 372, 394, 416, 438, 460, 482, 504],
    },
    description: "\n    Leap forward like a charging dragon with a flying kick.\n    Move forward <span>4.5</span> m while dealing <span>{damage}%</span> fire damage\n    to <span>5</span> enemies along the path.\n    You will pass through targets without colliding.\n  ",
};
var PaceControl = {
    name: "Pace Control",
    attr: "pace-control",
    prop: "paceControl",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    skillRequirements: [],
    values: {
        increase1: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        increase2: [1.8, 1.8, 2.4, 3.0, 3.6, 4.2, 4.8, 5.4, 6.0, 6.6, 7.2],
    },
    description: "\n    Build and release your inner strength based on the amount of focus.\n    When spirit reaches <span>100%</span>, the damage for all\n    attacks increases by <span>{increase1}%</span> and movement speed increases by <span>10%</span>.\n    When spirit is under <span>100%</span> but above <span>80%</span> the abilities above\n    increase by <span>{increase2}%</span> and <span>6%</span> respectively.\n    When spirit is below <span>80%</span> but above <span>50%</span>,\n    the abilities above increase by <span>0.6%</span> and <span>2%</span> respecitvely.\n    When spirit is below <span>50%</span>, Pace Control is disabled.\n  ",
};
var Overcome = {
    name: "Overcome",
    attr: "overcome",
    prop: "overcome",
    rank: 1,
    row: 4,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    spirit: 100,
    cooldown: 50,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: PaceControl,
            level: 3,
        }],
    values: {
        damageIncrease: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    description: "\n    Energy erupts from within, unleashing abilities that overcome the limits of the physical body.\n    Increases attack speed and movement speed by <span>30%</span> and\n    both physical and magic damage by <span>{damageIncrease}%</span> for <span>20</span> sec.\n    Consumes <span>100</span> spirit.\n  ",
};
var FightingSpirit = {
    name: "Fighting Spirit",
    attr: "fighting-spirit",
    prop: "fightingSpirit",
    rank: 1,
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    spirit: 100,
    cooldown: 50,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: PaceControl,
            level: 3,
        }],
    values: {
        resistance: [90, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360],
        stack: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: "\n    Awaken your combat instinct, creating a fighting spirit within the body.\n    Increases both physical and magic resistance by <span>{resistance}</span> and\n    reduces movement speed by <span>60%</span> for <span>25</span> sec.\n    While in the fighting spirit, you are immune to knockdown,\n    and every time you're attacked all damage inflicted on the enemy increases\n    by <span>4%</span> due to building Vengeance.\n    Vengeance stacks up to <span>{stack}</span> times.\n    Consumes <span>100</span> spirit.\n  ",
};
var PatternBreak = {
    name: "Pattern Break",
    attr: "pattern-break",
    prop: "patternBreak",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    spirit: 100,
    cooldown: 50,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: PaceControl,
            level: 3,
        }],
    values: {
        accuracy: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        duration: [38, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
    },
    description: "\n    Concentrate and read the enemy's movements.\n    Increases accuracy by <span>{accuracy}</span> for <span>{duration}</span> sec.\n    Decreases the enemy's evasion by <span>4</span> for <span>3</span> sec upon successful attack.\n    Consumes <span>100</span> spirit.\n  ",
};
var RainingBlows = {
    name: "Raining Blows",
    attr: "raining-blows",
    prop: "rainingBlows",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    description: "\n    Gain strength as you land more hits on the enemy.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Permanently increases dexterity by <span>40</span>.\n    <br/><br/>\n    Using punching and kicking skills increase physical damage by <span>1%</span> and\n    spirit recovery by <span>1</span>, stacking up to <span>10</span> times.\n    <br/><br/>\n    Can use Feinting Guard EX while in a Kicking or Punching Stance.\n  ",
};
var ShockwavePunch = {
    name: "Shockwave Punch",
    attr: "shockwave-punch",
    prop: "shockwavePunch",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 3,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [457, 457, 457, 457, 457],
        increase: [12, 12, 12, 12, 12],
    },
    description: "\n    Muster up a surge of fiery energy and unleash it on your enemies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage to the area in front of you\n    <br/><br/>\n    Grants Punching Stance.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Punching Stance enhances all punching Skills.\n    <br/>\n    Permanently upgrades Magnum Blow to Mega Blow, increasing damage by <span>{increase}%</span>.\n  ",
};
var VulcanPunch = {
    name: "Vulcan Punch",
    attr: "vulcan-punch",
    prop: "vulcanPunch",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: ShockwavePunch,
            level: 3,
        }],
    values: {
        damage: [91, 91, 91, 91, 91],
    },
    description: "\n    Batter enemies with a rapid barrage of jabs.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage to enemies in front of you <span>12</span> times.\n    <br/>\n    Grants knockback immunity.\n    <br/><br/>\n    Enhanced by Punching Stance.\n  ",
};
var DoubleFistSmash = {
    name: "Double-Fist Smash",
    attr: "double-fist-smash",
    prop: "doubleFistSmash",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Close Range / Physical",
    cooldown: 2,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: VulcanPunch,
            level: 2,
        }],
    values: {
        damage: [560, 560, 560, 560, 560],
    },
    description: "\n    Leap into the air and strike the ground.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage in an area.\n    <br/><br/>\n    Grants knockback immunity.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Enhanced by Punching Stance.\n  ",
};
var MeridianFlow = {
    name: "Meridian Flow",
    attr: "meridian-flow",
    prop: "meridianFlow",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    spirit: 100,
    cooldown: 30,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: VulcanPunch,
            level: 3,
        }, {
            skill: DoubleFistSmash,
            level: 3,
        }],
    values: {
        attack: [12, 12, 12, 12, 12],
        speed: [10, 10, 10, 10, 10],
        resistance: [75, 75, 75, 75, 75],
    },
    description: "\n    Open the pressure points within your body to amplify your physical abilities.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases physical attack by <span>{attack}%</span>,\n    attack speed by <span>{speed}%</span>,\n    and physical and magic resistance by <span>{resistance}</span> for <span>30</span> sec.\n    <br/>\n    Restores <span>2</span> spirit per sec.\n    <br/><br/>\n    Can use Meridian Flow II while this is active. Grants knockback immunity.\n    <br/><br/>\n    Can cancel other skills.\n    <br/><br/>\n    Inflicts Balance Disrupted when this skill expires naturally.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Balance Disrupted prevents the use of Meridian Flow, Overcome, Pattern Break and Fighting Spirit for <span>30</span> sec.\n  ",
};
var SetupKick = {
    name: "Setup Kick",
    attr: "setup-kick",
    prop: "setupKick",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 3,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [375, 375, 375, 375, 375],
        increase: [4, 4, 4, 4, 4],
    },
    description: "\n    Deliver a rising kick to the enemy.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Grants Kicking Stance.\n    <br/><br/>\n    Hold down the skill key to move forward <span>1.5</span> m.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Kicking Stance upgrades some kick-based skills.\n    Permanently upgrades Dragon Kick to Dragon Fury, increasing damage by <span>{increase}%</span>.\n  ",
};
var SpiralCannon = {
    name: "Spiral Cannon",
    attr: "spiral-cannon",
    prop: "spiralCannon",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: SetupKick,
            level: 3,
        }],
    values: {
        damage: [126, 126, 126, 126, 126],
    },
    description: "\n    Launch a spinning kick at the enemy.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>8</span> times in front of you.\n    <br/><br/>\n    Grants knockback immunity.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Enhanced by Kicking Stance.\n  ",
};
var SpinKick = {
    name: "Spin Kick",
    attr: "spin-kick",
    prop: "spinKick",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Knuckles",
    cooldown: 3,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: SpiralCannon,
            level: 3,
        }],
    values: {
        damage: [162, 162, 162, 162, 162],
        additionalDamage: [431, 431, 431, 431, 431],
    },
    description: "\n    Spin in the air and drive your leg into the enemy as you drop down.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    First deals <span>{damage}%</span> damage, then <span>{additionalDamage}%</span> damage.\n    <br/><br/>\n    Press a directional key to move <span>2</span> m.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Enhanced by Kicking Stance.\n  ",
};
var TauntingFeint = {
    name: "Taunting Feint",
    attr: "taunting-feint",
    prop: "tauntingFeint",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    weaponRequired: "Two-handed Knuckles",
    spirit: 10,
    cooldown: 3,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: SpinKick,
            level: 3,
        }],
    values: {
        melee: [240, 240, 240, 240, 240],
        range: [480, 480, 480, 480, 480],
        resistance: [1200, 1200, 1200, 1200, 1200],
    },
    description: "\n    Momentarily take a counterattacking stance.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    If struck in melee, deals <span>{melee}%</span> damage <span>2</span> times.\n    <br/><br/>\n    If struck in range, deals <span>{range}%</span> damage.\n    <br/><br/>\n    Increases physical and magic resistance by <span>{resistance}</span> and grants counterattack immunity.\n    <br/><br/>\n    Permanently increases kick skill damage by <span>3%</span> per skill level.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    After a successful counterattack, gain Confidence, increasing attack speed by <span>10%</span> and\n    physical attack by <span>10%</span>.\n    <br/>\n    Kick skills include Setup Kick, Spin kick, Spin Kick EX,\n    Spiral Cannon, Spiral Cannon EX, Melee Fade, and Ranged Fade.\n  ",
};
var RankOneSkills = {
    Beatdown: Beatdown,
    DragonKick: DragonKick,
    FightingSpirit: FightingSpirit,
    FistsOfFury: FistsOfFury,
    GiganticBurst: GiganticBurst,
    GuardDash: GuardDash,
    Guillotine: Guillotine,
    HurricaneCutter: HurricaneCutter,
    KickTechnician: KickTechnician,
    KnuckleMissile: KnuckleMissile,
    MagnumBlow: MagnumBlow,
    MaharPunch: MaharPunch,
    Overcome: Overcome,
    PaceControl: PaceControl,
    PatternBreak: PatternBreak,
    PowerPuncher: PowerPuncher,
    RisingKick: RisingKick,
};
var RankTwoSkills = {
    RainingBlows: RainingBlows,
    ShockwavePunch: ShockwavePunch,
    VulcanPunch: VulcanPunch,
    DoubleFistSmash: DoubleFistSmash,
    MeridianFlow: MeridianFlow,
    SetupKick: SetupKick,
    SpiralCannon: SpiralCannon,
    SpinKick: SpinKick,
    TauntingFeint: TauntingFeint,
};
var StrikerSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
var StrikerComponent = /** @class */ (function () {
    function StrikerComponent(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
        this.beatdown = StrikerSkills.Beatdown.minLevel;
        this.dragonKick = StrikerSkills.DragonKick.minLevel;
        this.fightingSpirit = StrikerSkills.FightingSpirit.minLevel;
        this.fistsOfFury = StrikerSkills.FistsOfFury.minLevel;
        this.giganticBurst = StrikerSkills.GiganticBurst.minLevel;
        this.guardDash = StrikerSkills.GuardDash.minLevel;
        this.guillotine = StrikerSkills.Guillotine.minLevel;
        this.hurricaneCutter = StrikerSkills.HurricaneCutter.minLevel;
        this.kickTechnician = StrikerSkills.KickTechnician.minLevel;
        this.knuckleMissile = StrikerSkills.KnuckleMissile.minLevel;
        this.magnumBlow = StrikerSkills.MagnumBlow.minLevel;
        this.maharPunch = StrikerSkills.MaharPunch.minLevel;
        this.overcome = StrikerSkills.Overcome.minLevel;
        this.paceControl = StrikerSkills.PaceControl.minLevel;
        this.patternBreak = StrikerSkills.PatternBreak.minLevel;
        this.powerPuncher = StrikerSkills.PowerPuncher.minLevel;
        this.risingKick = StrikerSkills.RisingKick.minLevel;
        this.rainingBlows = StrikerSkills.RainingBlows.minLevel;
        this.shockwavePunch = StrikerSkills.ShockwavePunch.minLevel;
        this.vulcanPunch = StrikerSkills.VulcanPunch.minLevel;
        this.doubleFistSmash = StrikerSkills.DoubleFistSmash.minLevel;
        this.meridianFlow = StrikerSkills.MeridianFlow.minLevel;
        this.setupKick = StrikerSkills.SetupKick.minLevel;
        this.spiralCannon = StrikerSkills.SpiralCannon.minLevel;
        this.spinKick = StrikerSkills.SpinKick.minLevel;
        this.tauntingFeint = StrikerSkills.TauntingFeint.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    StrikerComponent.prototype.componentWillLoad = function () {
        processSkills(this, StrikerSkills, this.ignoreMax);
    };
    StrikerComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, StrikerSkills)];
            });
        });
    };
    StrikerComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, StrikerSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    };
    StrikerComponent.prototype.ignoreMaxChanged = function () {
        processSkills(this, StrikerSkills, this.ignoreMax);
    };
    StrikerComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, StrikerSkills));
    };
    StrikerComponent.prototype.render = function () {
        var _this = this;
        return (h("ms-chart", { msClass: "striker", rank: this.rank, onRankChange: function (_a) {
                var detail = _a.detail;
                return _this.rank = detail;
            } }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    };
    Object.defineProperty(StrikerComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StrikerComponent, "watchers", {
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
    Object.defineProperty(StrikerComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return StrikerComponent;
}());
export { StrikerComponent as ms_striker };
