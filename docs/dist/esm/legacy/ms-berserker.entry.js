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
import { e as registerInstance, f as createEvent, d as h, g as getElement } from './maplestory-skills-f2cfe95b.js';
import { a as Rank } from './chunk-e93b9111.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-feaa5013.js';
var DarkAura = {
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
    description: "\n    Your latent dark power restores <span>10</span> spirit every second.\n    Dark Aura stacks on hit, up to once per second, up to <span>10</span> times total.\n    Each stack increases the amount restored by an additional <span>1</span> spirit.\n  ",
};
var XSlash = {
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
    description: "\n    Swing your greatsword in an X as you charge forward <span>4.5</span> m,\n    dealing <span>75%</span> damage <span>2</span> times to <span>5</span> enemies in your path.\n    This skill can cancel other skills.\n    You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  ",
};
var RagingSlash = {
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
    description: "\n    Swing your weapon to deal <span>{damage}%</span> dark damage\n    to <span>5</span> enemies up to <span>3</span> m in front of you.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The attack speed increases with each hit.\n    The third hit is a double strike, and when finished you start over from the beginning.\n    During the attack, press a direction key to move <span>0.6</span> m.\n  ",
};
var DeathSpin = {
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
    description: "\n    Spin your greatsword, dealing <span>{damage}%</span> dark damage\n    to <span>8</span> enemies within <span>3</span> m.\n    During the attack, press a direction key to move <span>1.6</span> m.\n    The distance decreases to <span>1.2</span> m on your second spin and\n    to <span>0.8</span> m on your third and subsequent spins.\n    Consumes <span>4</span> spirit.\n  ",
};
var GroundBreaker = {
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
    description: "\n    Old Ten's specialty move. Strike down your greatsword to deal <span>{damage}%</span> damage\n    to <span>8</span> enemies within <span>3</span> m and knock them back <span>1.5</span> m.\n    If Dark Aura activates, damage increases by <span>16%</span> per stack.\n    You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> spirit.\n  ",
};
var DarkMight = {
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
    description: "\n    Temporarily amplify Dark Aura to increase attack speed, physical attack, and magic attack by\n    <span>{increase}%</span> for <span>10</span> sec and restore <span>1</span> additional spirit on hit.\n    This skill can only be used by consuming Dark Aura at max stacks.\n  ",
};
var VoidSlash = {
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
    description: "\n    Swing your greatsword upward to deal <span>{firstDamage}%</span> dark damage\n    to <span>5</span> enemies up to <span>3</span> m in front of you.\n    Press the skill key again to trigger a <span>2-hit</span> combo.\n    The second part is two quick swings,\n    dealing <span>{secondDamage}%</span> dark damage <span>2</span> times\n    to <span>5</span> enemies up to <span>2</span> m in front of you.\n    On the first hit, press a direction key to move <span>4</span> m and attack.\n    On the second hit, the skill lasts while the skill key is held down.\n    You will be immune to knockback while this skill is active.\n    The first hit consumes <span>24</span> spirit and the second hit consumes <span>1</span> spirit.\n  ",
};
var DarkBreaker = {
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
    description: "\n    Gather dark power into your greatsword and strike down with great force to\n    deal <span>{damage}%</span> dark damage\n    to <span>8</span> enemies within <span>3</span> m.\n    The impact area resonates with darkness for <span>5</span> sec,\n    dealing <span>{dot}%</span> dark damage\n    to <span>8</span> enemies in range every second.\n    This skill can only be used by consuming Dark Aura at max stacks.\n    You will be immune to knockback while this skill is active.\n  ",
};
var WarriorsInstinct = {
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
    description: "\n    Surrender yourself to your natural combat instinct.\n    Increases physical resistance by <span>{resistance}</span> and\n    piercing by <span>{piercing}%</span>.\n  ",
};
var Bloodlust = {
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
    description: "\n    Thrust your darkened greatsword into <span>2</span> enemies up to <span>3</span> m in front of you,\n    then pull it out to deal <span>{damage}%</span> damage <span>2</span> times.\n    The stab attack is always a critical, and pulling the sword out steals health from the enemy,\n    restoring <span>{health}%</span> of your max health.\n    In PvP zones, the amount restored is halved.\n  ",
};
var AdrenalineRush = {
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
    description: "\n    Your Dark Aura goes crazy as you're pushed into a corner, increasing the amount of spirit restored\n    by <span>{stage1}</span> when your health is at <span>60%</span> or less,\n    by <span>{stage2}</span> at <span>45%</span> or less,\n    and by <span>{stage3}</span> at <span>30%</span> or less.\n  ",
};
var BloodPrice = {
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
    description: "\n    Darkness fuels you, increasing your damage by <span>{damage}%</span> but\n    depleting your health by <span>1%</span> on hit for <span>30</span> sec.\n    This effect will stop consuming health when you get to <span>25%</span> health.\n  ",
};
var InhumanEndurance = {
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
    description: "\n    Dire conditions strengthen your resolve. Your physical resistance and magic resistance increase\n    by <span>{resistance}</span> when your health is less than <span>30%</span>.\n  ",
};
var GreatswordMastery = {
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
    description: "\n    Ten's lessons on asceticism increase your skill with a greatsword.\n    Your weapon attack increases by <span>{attack}%</span> when you have a greatsword equipped.\n  ",
};
var Intimidation = {
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
    description: "\n    Overwhelm enemies with a show of force, dealing <span>{damage}%</span> damage\n    to <span>5</span> enemies within <span>3</span> m.\n    Enemies lost the will to fight, reducing their physical attack and magic attack by <span>{attack}%</span>\n    and their movement speed and jump power by <span>{movement}%</span> for <span>4</span> sec.\n    When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill.\n    Some powerful enemies are immune.\n  ",
};
var DeepWounds = {
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
    description: "\n    Critical attacks inflicted with a greatsword make the enemy bleed,\n    dealing <span>{damage}%</span> damage every second for <span>10</span> sec.\n  ",
};
var Earthquake = {
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
    description: "\n    Drive your greatsword into the ground, creating an earthquake <span>9</span> tiles around you for <span>5</span> sec.\n    Enemies caught in the quake are stunned and take <span>{damage}%</span> damage every second.\n  ",
};
var InfiniteDarkness = {
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
    description: "\n    A thick darkness engulfs your body.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Permanently increases strength by <span>40</span>.\n    Increases Dark Aura's duration to <span>10</span> sec.\n    Consuming <span>10</span> stacks of Dark Aura at once has a <span>20%</span> chance to trigger Surging Darkness.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Surging Darkness grants <span>10</span> stacks of Dark Aura.\n  ",
};
var SkullSplitter = {
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
        damage: [369, 369, 411, 453, 495],
        thirdDamage: [525, 525, 586, 647, 708],
        fourthDamage: [844, 844, 942, 1040, 1138],
    },
    description: "\n    Unleash a wild 3-hit combo.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deal <span>{damage}%</span> damage the first two times you use this skill.\n    On the third use in a row, perform a jump attack to\n    deal <span>{thirdDamage}%</span> and <span>{fourthDamage}%</span> damage.\n    Grants knockback immunity.\n  ",
};
var BloodFury = {
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
        attack: [4, 4, 6, 8, 10],
        bloodlustDamage: [149, 149, 166, 183, 200],
    },
    description: "\n    Your blows gain strength as your enemies draw close to death.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Attack an enemy with less than <span>30%</span> health to gain the Blood Fury effect.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    The Blood Fury effect increases physical attack by <span>{attack}%</span> and\n    Bloodlust damage by <span>{bloodlustDamage}%</span>.\n    While this effect is active, Bloodlust has a <span>30%</span> chance to grant Ruthless.\n    Ruthless resets Bloodlust's cooldown and lets you use Skull Splitter's third attack immediately.\n  ",
};
var ParryTheMoon = {
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
        damage: [1111, 1111, 1240, 1369, 1498],
        shockwaveDamage: [217, 217, 242, 267, 292],
        dot: [163, 163, 182, 201, 220],
        attack: [1.5, 1.5, 3.0, 4.5, 6.0],
    },
    description: "\n    Parry enemy attacks with a great swing, creating a shockwave.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and generates a shockwave\n    that deals <span>{shockwaveDamage}%</span> damage on hit\n    and <span>{dot}%</span> damage per sec.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    If used while under attack, grants perfect guard and <span>10</span> Dark Aura stacks.\n    <br/>\n    Permanently increases physical attack by <span>{attack}%</span>.\n  ",
};
var AerialSmash = {
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
        firstDamage: [298, 298, 332, 366, 400],
        secondDamage: [812, 812, 908, 1004, 1100],
        thirdDamage: [1630, 1630, 1820, 2010, 2200],
    },
    description: "\n    Jump into the air and launch a series of attacks.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Requires <span>10</span> stacks of Dark Aura.\n    The first two attacks deal <span>{firstDamage}%</span> and <span>{secondDamage}%</span> damage.\n    Hold down the skill key to trigger a follow-up that deals <span>{thirdDamage}%</span> damage.\n    Inflicts Shaken.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Shaken decreases movement speed by <span>20%</span>.\n  ",
};
var Squall = {
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
        damage: [96, 96, 107, 119, 130],
        decrease: [56, 56, 62, 69, 75],
        additionalDamage: [38, 38, 42, 46, 50],
    },
    description: "\n    Becoming a spinning vortex of death.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deal <span>{damage}%</span> damage per hit.\n    Stand still to gain stacks of Gale, at <span>3</span> stacks, gain Whirlwind.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Gale increases attack speed by <span>4%</span> per stack.\n    <br/>\n    While Whirlwind is active, hold down the skill key to increase spin speed and hit count,\n    decrease movement speed to <span>30</span>,\n    decrease damage to <span>{decrease}%</span>,\n    gain knockback immunity,\n    and deal an additional <span>{additionalDamage}%</span> damage to enemies with Heavy Bleeding.\n    <br/>\n    When Dark Might is active, Whirlwind does not decrease movement speed.\n  ",
};
var RendWound = {
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
        deepWoundDamage: [76, 76, 84, 92, 100],
        heavyBleedingDamage: [52, 52, 58, 64, 70],
    },
    description: "\n    You attacks inflicts grievous injury.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases Deep Wounds damage by <span>{deepWoundDamage}%</span>.\n    Landing <span>2</span> critical hits within <span>4</span> sec inflicts Heavy Bleeding.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Heavy Bleeding deals <span>{heavyBleedingDamage}%</span> damage every sec for each stack,\n    and stacks up to <span>5</span> times.\n  ",
};
var RagingSoul = {
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
        attack: [5, 5, 10, 15, 20],
        darkAttack: [5, 5, 10, 15, 20],
        health: [42, 42, 44, 46, 48],
    },
    description: "\n    Embrace the darkness within you and draw on its power.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Temporarily increases attack speed by <span>30%</span>,\n    increases physical attack by <span>{attack}%</span>,\n    increases dark attack by <span>{darkAttack}%</span>,\n    triples Improved Intimidation's attack,\n    and prevents death.\n    Restores <span>{health}%</span> health upon ending.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Resets Earthquake's cooldown.\n    <br/>\n    Grants Encroaching Darkness while withing <mark>Earthquake</mark>'s area of effect,\n    providing additional Dark Arua stacks and increasing movement speed by <span>100</span>.\n  ",
};
var BloodSlash = {
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
        damage: [259, 259, 289, 319, 350],
        health: [1.5, 1.5, 3.0, 4.5, 6.0],
        gougeMin: [100, 100, 111, 122, 133],
        gougeMax: [636, 636, 709, 782, 855],
        darkBloodSlashDamage: [207, 207, 231, 255, 280],
    },
    description: "\n    Use dark power to shred your enemies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Consumes <span>10</span> stacks of Dark Aura.\n    Each strike deals <span>{damage}%</span> damage and restores <span>{health}%</span> health.\n    Final hit deals an additional <span>50%</span> damage.\n    Grants knockback immunity.\n    Inflicts Gouge on enemies afflicted with Heavy Bleeding.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Gouge deals between <span>{gougeMin}%</span> and <span>{gougeMax}%</span> damage\n    depending on the number of Heavy Bleeding stacks.\n    <br/>\n    Becomes Dark Blood Slash while Raging Soul is active.\n    Dark Blood Slash deals repeated hits while the skill key is held down,\n    each inflicting <span>{darkBloodSlashDamage}%</span> damage,\n    and does not consume Dark Aura.\n  ",
};
var RankOneSkills = {
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
var RankTwoSkills = {
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
var BerserkerSkills = Object.assign({}, RankOneSkills, RankTwoSkills);
var BerserkerComponent = /** @class */ (function () {
    function BerserkerComponent(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
        this.adrenalineRush = BerserkerSkills.AdrenalineRush.minLevel;
        this.bloodPrice = BerserkerSkills.BloodPrice.minLevel;
        this.bloodlust = BerserkerSkills.Bloodlust.minLevel;
        this.darkAura = BerserkerSkills.DarkAura.minLevel;
        this.darkBreaker = BerserkerSkills.DarkBreaker.minLevel;
        this.darkMight = BerserkerSkills.DarkMight.minLevel;
        this.deathSpin = BerserkerSkills.DeathSpin.minLevel;
        this.deepWounds = BerserkerSkills.DeepWounds.minLevel;
        this.earthquake = BerserkerSkills.Earthquake.minLevel;
        this.greatswordMastery = BerserkerSkills.GreatswordMastery.minLevel;
        this.groundBreaker = BerserkerSkills.GroundBreaker.minLevel;
        this.inhumanEndurance = BerserkerSkills.InhumanEndurance.minLevel;
        this.intimidation = BerserkerSkills.Intimidation.minLevel;
        this.ragingSlash = BerserkerSkills.RagingSlash.minLevel;
        this.voidSlash = BerserkerSkills.VoidSlash.minLevel;
        this.warriorsInstinct = BerserkerSkills.WarriorsInstinct.minLevel;
        this.xSlash = BerserkerSkills.XSlash.minLevel;
        this.infiniteDarkness = BerserkerSkills.InfiniteDarkness.minLevel;
        this.skullSplitter = BerserkerSkills.SkullSplitter.minLevel;
        this.bloodFury = BerserkerSkills.BloodFury.minLevel;
        this.parryTheMoon = BerserkerSkills.ParryTheMoon.minLevel;
        this.aerialSmash = BerserkerSkills.AerialSmash.minLevel;
        this.squall = BerserkerSkills.Squall.minLevel;
        this.rendWound = BerserkerSkills.RendWound.minLevel;
        this.ragingSoul = BerserkerSkills.RagingSoul.minLevel;
        this.bloodSlash = BerserkerSkills.BloodSlash.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    BerserkerComponent.prototype.componentWillLoad = function () {
        processSkills(this, BerserkerSkills, this.ignoreMax);
    };
    BerserkerComponent.prototype.getData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, toSkillChangeEventObject(this, BerserkerSkills)];
            });
        });
    };
    BerserkerComponent.prototype.levelChanged = function (skill, level) {
        this[skill.prop] = level;
        processSkills(this, BerserkerSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    };
    BerserkerComponent.prototype.ignoreMaxChanged = function () {
        processSkills(this, BerserkerSkills, this.ignoreMax);
    };
    BerserkerComponent.prototype.emitChangeEvent = function () {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, BerserkerSkills));
    };
    BerserkerComponent.prototype.render = function () {
        var _this = this;
        return (h("ms-chart", { msClass: "berserker", rank: this.rank, onRankChange: function (_a) {
                var detail = _a.detail;
                return _this.rank = detail;
            } }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    };
    Object.defineProperty(BerserkerComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BerserkerComponent, "watchers", {
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
    Object.defineProperty(BerserkerComponent, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return BerserkerComponent;
}());
export { BerserkerComponent as ms_berserker };
