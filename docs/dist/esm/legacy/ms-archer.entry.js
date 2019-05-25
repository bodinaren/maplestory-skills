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
import { a as Rank } from './chunk-7c277b0f.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-bb329b0b.js';
var Snipe = {
    name: "Snipe",
    attr: "snipe",
    prop: "snipe",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    sp: true,
    description: "\n    Take aim and even your breathing to restore <span>7</span> spirit every <span>0.5</span> sec.\n    When no enemies are within <span>4</span> m, the amount of spirit restored increases by <span>1</span>.\n  ",
};
var EagleGlide = {
    name: "Eagle Glide",
    attr: "eagle-glide",
    prop: "eagleGlide",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: "\n    Summon Bronze Eagle and grab onto him to fly <span>7.5</span> m forward.\n    This skill can cancel other skills. Consumes <span>80</span> stamina.\n  ",
};
var ArrowStream = {
    name: "Arrow Stream",
    attr: "arrow-stream",
    prop: "arrowStream",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [32, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50],
        hits: [3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5],
    },
    description: "\n    Fire a series of arrows that deal <span>{damage}%</span> damage <span>{hits}%</span>\n    times to the closest enemy up to <span>9</span> m in front of you.\n  ",
};
var ArrowBarrage = {
    name: "Arrow Barrage",
    attr: "arrow-barrage",
    prop: "arrowBarrage",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    spirit: 12,
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
        firstDamage: [153, 153, 164, 175, 186, 197, 208, 219, 230, 241, 252],
        thirdDamage: [82, 82, 87, 92, 97, 102, 107, 112, 117, 122, 127],
    },
    description: "\n    Fire several arrows at once, dealing <span>{firstDamage}%</span> damage\n    to <span>8</span> enemies up to <span>7</span> m.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The second shot does the same as the first.\n    You perform a reverse somersault on the third and rapidly fire arrows,\n    dealing <span>{thirdDamage}%</span> damage <span>3</span> times.\n    Consumes <span>12</span> spirit.\n  ",
};
var RapidShot = {
    name: "Rapid Shot",
    attr: "rapid-shot",
    prop: "rapidShot",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    element: "Fire",
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    spirit: 7,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    skillRequirements: [{
            skill: ArrowStream,
            level: 3,
        }, {
            skill: ArrowBarrage,
            level: 3,
        }],
    values: {
        damage: [42, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69],
    },
    description: "\n    Shoot a series of fire arrows <span>3</span> times,\n    dealing <span>{damage}%</span> damage to the closest enemy up to <span>9</span> m in front of you.\n    The skill lasts while the skill key is held down.\n    Fire arrows pierce the enemy <span>3</span> times and can hit enemies behind.\n    Consumes <span>7</span> spirit.\n  ",
};
var ArrowStorm = {
    name: "Arrow Storm",
    attr: "arrow-storm",
    prop: "arrowStorm",
    rank: 1,
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    cooldown: 13,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: ArrowBarrage,
            level: 5,
        }, {
            skill: RapidShot,
            level: 3,
        }],
    values: {
        damage: [39, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66],
    },
    description: "\n    Fire a spreadable arrow straight up into the sky, which rains down a volley that\n    deals <span>{damage}%</span> damage <span>20</span> times to <span>8</span> enemies\n    within <span>4.5</span> m. Hold the skill down for <span>0.5</span> sec to fire the\n    arrow <span>7.5</span> m in front of you instead.\n    You will be immune to knockback while this skill is active.\n  ",
};
var ScrewdriverShot = {
    name: "Screwdriver Shot",
    attr: "screwdriver-shot",
    prop: "screwdriverShot",
    rank: 1,
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    cooldown: 13,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: RapidShot,
            level: 8,
        }],
    values: {
        stage1: [372, 372, 399, 426, 453, 480, 507, 534, 561, 588, 615],
        stage2: [725, 725, 777, 829, 881, 933, 985, 1037, 1089, 1141, 1193],
        stage3: [1078, 1078, 1155, 1232, 1309, 1386, 1463, 1540, 1617, 1694, 1771],
    },
    description: "\n    Loose a spinning arrow up to <span>12</span> m in front of you,\n    dealing <span>{stage1}%</span> damage to <span>20</span> enemies in its path.\n    Hold the skill key down for <span>0.5</span> sec to enhance the arrow to <span>Lv. 2</span>,\n    increasing its damage to <span>{stage2}%</span>.\n    Hold the skill key down for <span>0.5</span> sec at <span>Lv. 2</span> to enhance it to <span>Lv. 3</span>,\n    increasing its damage to <span>{stage3}%</span>.\n    The arrow is shot automatically when it reaches <span>Lv. 3</span>.\n    You will be immune to knockback while this skill is active.\n    This skill can only be used while Snipe is active.\n  ",
};
var EvasiveSalvo = {
    name: "Evasive Salvo",
    attr: "evasive-salvo",
    prop: "evasiveSalvo",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        damage: [108, 108, 115, 122, 129, 136, 143, 150, 157, 164, 171],
    },
    description: "\n    Swiftly jump back <span>3</span> m and fire <span>3</span> volleys of arrows.\n    The arrows are <span>2</span> m apart and deal <span>{damage}%</span> damage each to up to <span>5</span> enemies.\n    All three volleys have a <span>40%</span> chance to be critical regardless of your critical rate.\n    This skill can cancel other skills. You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  ",
};
var IceArrow = {
    name: "Ice Arrow",
    attr: "ice-arrow",
    prop: "iceArrow",
    rank: 1,
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Ice",
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    spirit: 6,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    skillRequirements: [{
            skill: EvasiveSalvo,
            level: 5,
        }],
    values: {
        damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
    },
    description: "\n    Fire three ice arrows at once, dealing <span>{damage}%</span> damage\n    to enemies up to <span>9</span> m in front of you and decreasing their\n    movement speed and jump power by <span>4%</span> for <span>5</span> sec.\n    Ice arrows pierce the enemy <span>4</span> times and can hit enemies behind.\n    The movement speed reduction effect can stack up to <span>10</span> times.\n    At max stacks, the target will be frozen for <span>2</span> sec.\n    Consumes <span>6</span> spirit.\n  ",
};
var AgileArcher = {
    name: "Agile Archer",
    attr: "agile-archer",
    prop: "agileArcher",
    rank: 1,
    row: 5,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: IceArrow,
            level: 4,
        }],
    values: {
        piercing: [1, 1, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
        evasion: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    description: "\n    A personal training session with Oska has taught you how to\n    put more power into your shots and to move with more agility.\n    Increases piercing by <span>{piercing}%</span> and evasion by <span>{evasion}</span>.\n  ",
};
var BowSwing = {
    name: "Bow Swing",
    attr: "bow-swing",
    prop: "bowSwing",
    rank: 1,
    row: 6,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Bow",
    cooldown: 6,
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: AgileArcher,
            level: 3,
        }],
    values: {
        damage: [244, 244, 261, 278, 295, 312, 329, 346, 363, 380, 397],
        additionalDamage: [183, 183, 196, 209, 222, 235, 248, 261, 274, 287, 300],
    },
    description: "\n    Swing your bow wildly as you spin, dealing <span>{damage}%</span>\n    damage to <span>8</span> enemies within <span>3</span> m.\n    Deals an additional <span>{additionalDamage}%</span> ice damage\n    to targets frozen by the Ice Arrow debuff and consumes the effect.\n  ",
};
var BronzeEagle = {
    name: "Bronze Eagle",
    attr: "bronze-eagle",
    prop: "bronzeEagle",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    values: {
        dexterity: [4.4, 4.4, 4.7, 5, 5.3, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1],
    },
    description: "\n    Bronze Eagle, your companion from the Green Hoods, has a <span>100%</span> chance\n    to fly by your side for <span>15</span> sec when you land a critical hit.\n    He increases your Dexterity by <span>{dexterity}%</span> and awaits your command.\n    Once he appears, he cannot return again for <span>18</span> sec.\n  ",
};
var EagleClaw = {
    name: "Eagle Claw",
    attr: "eagle-claw",
    prop: "eagleClaw",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: BronzeEagle,
            level: 7,
        }],
    values: {
        damage: [302, 302, 323, 344, 365, 386, 407, 428, 449, 470, 491],
        additionalDamage: [60, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96],
        movement: [30, 30, 30, 30, 35, 35, 35, 40, 40, 40, 45],
    },
    description: "\n    Command Bronze Eagle to attack, dealing <span>{damage}%</span> damage\n    to <span>8</span> enemies up to <span>9</span> m in front of you.\n    Your companion also scratches enemies,\n    dealing an additional <span>{additionalDamage}%</span> damage every sec for <span>6</span> sec\n    and reducing their movement speed and jump power by <span>{movement}%</span>.\n    This skill can only be used while Bronze Eagle is around,\n    and Bronze Eagle disappears after the skill is used.\n  ",
};
var EaglesMajesty = {
    name: "Eagle's Majesty",
    attr: "eagles-majesty",
    prop: "eaglesMajesty",
    rank: 1,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Physical",
    spirit: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    cooldown: 60,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: EagleClaw,
            level: 3,
        }],
    values: {
        damage: [25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34],
    },
    description: "\n    The majesty of eagles restores <span>{spirit}</span> spirit every second for <span>30</span> sec.\n    While this effect is active, Bronze Eagle deals <span>{damage}%</span> damage when you attack,\n    capped at once every <span>3</span> sec.\n  ",
};
var Conditioning = {
    name: "Conditioning",
    attr: "conditioning",
    prop: "conditioning",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    values: {
        attack: [1.0, 1.0, 1.6, 2.2, 2.8, 3.4, 4.0, 4.6, 5.2, 5.8, 6.4],
        movement: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    description: "\n    Special training with the Green Hoods permanently increases your physical attack\n    by <span>{attack}%</span> and movement speed by <span>{movement}%</span>.\n  ",
};
var SharpEyes = {
    name: "Sharp Eyes",
    attr: "sharp-eyes",
    prop: "sharpEyes",
    rank: 1,
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 180,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: Conditioning,
            level: 6,
        }],
    values: {
        criticalAllies: [13, 13, 20, 27, 34, 41, 48, 55, 62, 69, 76],
        accuracy: [1, 1, 1, 2, 2, 3, 3, 4, 4, 4, 5],
        criticalSelf: [4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    },
    description: "\n    Create a magic seal that affects <span>5</span> tiles around you, increasing the\n    critical rate of allies who absorb it by <span>{criticalAllies}</span> and\n    their accuracy by <span>{accuracy}</span> for <span>180</span> sec.\n    The seal lasts for <span>20</span> sec.\n    Sharp Eyes also increases critical rate by <span>{criticalSelf}</span>.\n  ",
};
var PrecisionShooter = {
    name: "Precision Shooter",
    attr: "precision-shooter",
    prop: "precisionShooter",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    values: {
        speed: [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
        screwdriver: [5, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    },
    description: "\n    Increase your aim technique and improve your firing speed.\n    Increases attack speed by <span>{speed}%</span> and improves Screwdriver Shot.\n    Improved Screwdriver Shot can be cast in Snipe mode and inflicts greater damage but cannot be reinforced.\n    Also increases improved Screwdriver Shot damage by <span>{screwdriver}%</span>.\n  ",
};
var ImprovedGliding = {
    name: "Improved Gliding",
    attr: "improved-gliding",
    prop: "improvedGliding",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    passive: true,
    levelRequirement: [60, 60, 60, 60, 60],
    description: "\n    Glide through the air on your eagle's wings.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases dexterity by <span>40</span>.\n    <br/><br/>\n    Enhances Eagle Glide.\n  ",
};
var FlameArrow = {
    name: "Flame Arrow",
    attr: "flame-arrow",
    prop: "flameArrow",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    spirit: 8,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        firstDamage: [237, 237, 237, 237, 237],
        secondDamage: [104, 104, 104, 104, 104],
    },
    description: "\n    Lose <span>3</span> flaming arrows at enemies in front of you.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{firstDamage}%</span> damage <span>1</span> time\n    and <span>{secondDamage}%</span> damage <span>2</span> times.\n    <br/><br/>\n    Grants <span>1</span> stack of Burning Arrow.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    When Burning Arrow is at <span>10</span> stacks, use Multi-Drive Shot to enable Flame Arrow II.</span>\n  ",
};
var MultiDriveShot = {
    name: "Multi-Drive Shot",
    attr: "multi-drive-shot",
    prop: "multiDriveShot",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    element: "Fire",
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    cooldown: 3,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: FlameArrow,
            level: 3,
        }],
    values: {
        damage: [212, 212, 212, 212, 212],
        explosionDamage: [51, 51, 51, 51, 51],
    },
    description: "\n    Lose <span>6</span> guided fire arrows at the enemy.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>6</span> times and explodes.\n    <br/><br/>\n    When you have Burning Arrow III, this skill becomes Multi-Drive Shot III.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    The explosion deals <span>{explosionDamage}%</span> per <span>6</span> times to nearby enemies.\n    <br/>\n    Use this skill when Burning Arrow II is at <span>10</span> stacks to enable Flame Arrow III.\n  ",
};
var RangersFocus = {
    name: "Rangers Focus",
    attr: "rangers-focus",
    prop: "rangersFocus",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    cooldown: 40,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: MultiDriveShot,
            level: 2,
        }],
    values: {
        attack: [9, 9, 9, 9, 9],
    },
    description: "\n    Focus your senses to gain explosive power.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases physical attack by <span>{attack}%</span> and grants unlimited spirit for 15 sec\n    <br/><br/>\n    Enables Flame Arrow IV. When Ranger's Focus ends, enables Flame Arrow III.\n  ",
};
var HastersTeachings = {
    name: "Haster's Teachings",
    attr: "hasters-teachings",
    prop: "hastersTeachings",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: MultiDriveShot,
            level: 3,
        }, {
            skill: RangersFocus,
            level: 3,
        }],
    values: {
        increase: [6, 6, 6, 6, 6],
    },
    description: "\n    Haster's tips and tricks have sharpened your abilities.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases the damage of Multi-Drive Shot and Flame arrow by <span>{increase}%</span>.\n    Reduces the spirit cost of Flame Arrow III by <span>20%</span>.\n    These damage bonuses also affects the enhanced forms of abilities.\n  ",
};
var PiercingArrow = {
    name: "Piercing Arrow",
    attr: "piercing-arrow",
    prop: "piercingArrow",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    spirit: 10,
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [417, 417, 417, 417, 417],
    },
    description: "\n    Launch an arrow propelled by the power of the wind.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Press the skill key again to perform a quick follow-up shot.\n  ",
};
var SpiralArrow = {
    name: "Spiral Arrow",
    attr: "spiral-arrow",
    prop: "spiralArrow",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Physical",
    weaponRequired: "Two-handed Bow",
    spirit: 20,
    cooldown: 10,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: PiercingArrow,
            level: 3,
        }],
    values: {
        damage: [42, 42, 42, 42, 42],
        cooldown: [12, 12, 12, 12, 12],
        movement: [15, 15, 15, 15, 15],
    },
    description: "\n    Arc an arrow into the air and use the power of the wind to guide it.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and creates a whirlwind.\n    <br/><br/>\n    After using Piercing Arrow or Spiral Arrow, there is a <span>{cooldown}%</span> chance to reset cooldown.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    The whirlwind deals <span>{movement}%</span> damage <span>5</span> times.\n    <br/>\n    Enhanced by Archer's Secrets.\n  ",
};
var ArchersSecrets = {
    name: "Archer's Secrets",
    attr: "Archers-secrets",
    prop: "archersSecrets",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    weaponRequired: "Two-handed Bow",
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: SpiralArrow,
            level: 3,
        }],
    values: {
        piercing: [4, 4, 4, 4, 4],
        accuracy: [4, 4, 4, 4, 4],
    },
    description: "\n    Master the secrets of archery to unlock hidden skills and strengthen physical ability.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Available while Full Wind Draw is active.\n    Increases piercing by <span>{piercing}%</span> and\n    accuracy by <span>{accuracy}%</span> for <span>20</span> sec.\n    Enables use of Enhanced Spiral Arrow and Twirling Wind Arrow.\n    Once learned, unlocks Wind Draw and Full Wind Draw.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Hit enemies with Piercing Arrow and Spiral Arrow to gain Wind Draw,\n    which lasts for <span>15</span> sec and stack up to <span>15</span> times.\n    At max stacks, gain Full Wind Draw.\n    <br/>\n    Full Wind Draw enables for <span>30</span> sec.\n  ",
};
var GreaterSharpEyes = {
    name: "Greater Sharp Eyes",
    attr: "greater-sharp-eyes",
    prop: "greaterSharpEyes",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: ArchersSecrets,
            level: 3,
        }, {
            skill: SpiralArrow,
            level: 3,
        }],
    values: {
        attack: [3, 3, 3, 3, 3],
    },
    description: "\n    Master the secrets of archery to draw out the true power of Sharp Eyes.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Enhanced Sharp Eyes grants a <span>{attack}%</span> physical attack bonus to the caster.\n  ",
};
var RankOneSkills = {
    AgileArcher: AgileArcher,
    ArrowBarrage: ArrowBarrage,
    ArrowStorm: ArrowStorm,
    ArrowStream: ArrowStream,
    BowSwing: BowSwing,
    BronzeEagle: BronzeEagle,
    Conditioning: Conditioning,
    EagleClaw: EagleClaw,
    EagleGlide: EagleGlide,
    EaglesMajesty: EaglesMajesty,
    EvasiveSalvo: EvasiveSalvo,
    IceArrow: IceArrow,
    PrecisionShooter: PrecisionShooter,
    RapidShot: RapidShot,
    ScrewdriverShot: ScrewdriverShot,
    SharpEyes: SharpEyes,
    Snipe: Snipe,
};
var RankTwoSkills = {
    ImprovedGliding: ImprovedGliding,
    FlameArrow: FlameArrow,
    MultiDriveShot: MultiDriveShot,
    RangersFocus: RangersFocus,
    HastersTeachings: HastersTeachings,
    PiercingArrow: PiercingArrow,
    SpiralArrow: SpiralArrow,
    ArchersSecrets: ArchersSecrets,
    GreaterSharpEyes: GreaterSharpEyes,
};
var ArcherSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
var ArcherComponent = /** @class */ (function () {
    function ArcherComponent(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.agileArcher = ArcherSkills.AgileArcher.minLevel;
        this.arrowBarrage = ArcherSkills.ArrowBarrage.minLevel;
        this.arrowStorm = ArcherSkills.ArrowStorm.minLevel;
        this.arrowStream = ArcherSkills.ArrowStream.minLevel;
        this.bowSwing = ArcherSkills.BowSwing.minLevel;
        this.bronzeEagle = ArcherSkills.BronzeEagle.minLevel;
        this.conditioning = ArcherSkills.Conditioning.minLevel;
        this.eagleClaw = ArcherSkills.EagleClaw.minLevel;
        this.eagleGlide = ArcherSkills.EagleGlide.minLevel;
        this.eaglesMajesty = ArcherSkills.EaglesMajesty.minLevel;
        this.evasiveSalvo = ArcherSkills.EvasiveSalvo.minLevel;
        this.iceArrow = ArcherSkills.IceArrow.minLevel;
        this.precisionShooter = ArcherSkills.PrecisionShooter.minLevel;
        this.rapidShot = ArcherSkills.RapidShot.minLevel;
        this.screwdriverShot = ArcherSkills.ScrewdriverShot.minLevel;
        this.sharpEyes = ArcherSkills.SharpEyes.minLevel;
        this.snipe = ArcherSkills.Snipe.minLevel;
        this.improvedGliding = ArcherSkills.ImprovedGliding.minLevel;
        this.flameArrow = ArcherSkills.FlameArrow.minLevel;
        this.multiDriveShot = ArcherSkills.MultiDriveShot.minLevel;
        this.rangersFocus = ArcherSkills.RangersFocus.minLevel;
        this.hastersTeachings = ArcherSkills.HastersTeachings.minLevel;
        this.piercingArrow = ArcherSkills.PiercingArrow.minLevel;
        this.spiralArrow = ArcherSkills.SpiralArrow.minLevel;
        this.archersSecrets = ArcherSkills.ArchersSecrets.minLevel;
        this.greaterSharpEyes = ArcherSkills.GreaterSharpEyes.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    ArcherComponent.prototype.componentWillLoad = function () {
        processSkills(this, ArcherSkills);
    };
    ArcherComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, ArcherSkills)];
            });
        });
    };
    ArcherComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, ArcherSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    };
    ArcherComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ArcherSkills));
    };
    ArcherComponent.prototype.render = function () {
        var _this = this;
        return [
            h("ms-chart", { msClass: "archer", rank: this.rank, onRankChange: function (_a) {
                    var detail = _a.detail;
                    return _this.rank = detail;
                } }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening))
        ];
    };
    Object.defineProperty(ArcherComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcherComponent, "watchers", {
        get: function () {
            return {
                "extras": ["emitChangeEvent"],
                "rank": ["emitChangeEvent"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArcherComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return ArcherComponent;
}());
export { ArcherComponent as ms_archer };
