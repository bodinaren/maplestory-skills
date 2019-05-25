'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./maplestory-skills-10f6f6cf.js');
const __chunk_2 = require('./chunk-3cd691fe.js');
const __chunk_3 = require('./chunk-8c3d4e0b.js');

const Snipe = {
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
    description: `
    Take aim and even your breathing to restore <span>7</span> spirit every <span>0.5</span> sec.
    When no enemies are within <span>4</span> m, the amount of spirit restored increases by <span>1</span>.
  `,
};
const EagleGlide = {
    name: "Eagle Glide",
    attr: "eagle-glide",
    prop: "eagleGlide",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: `
    Summon Bronze Eagle and grab onto him to fly <span>7.5</span> m forward.
    This skill can cancel other skills. Consumes <span>80</span> stamina.
  `,
};
const ArrowStream = {
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
    description: `
    Fire a series of arrows that deal <span>{damage}%</span> damage <span>{hits}%</span>
    times to the closest enemy up to <span>9</span> m in front of you.
  `,
};
const ArrowBarrage = {
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
    description: `
    Fire several arrows at once, dealing <span>{firstDamage}%</span> damage
    to <span>8</span> enemies up to <span>7</span> m.
    Keep pressing the key to trigger a <span>3-hit</span> combo.
    The second shot does the same as the first.
    You perform a reverse somersault on the third and rapidly fire arrows,
    dealing <span>{thirdDamage}%</span> damage <span>3</span> times.
    Consumes <span>12</span> spirit.
  `,
};
const RapidShot = {
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
    description: `
    Shoot a series of fire arrows <span>3</span> times,
    dealing <span>{damage}%</span> damage to the closest enemy up to <span>9</span> m in front of you.
    The skill lasts while the skill key is held down.
    Fire arrows pierce the enemy <span>3</span> times and can hit enemies behind.
    Consumes <span>7</span> spirit.
  `,
};
const ArrowStorm = {
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
    description: `
    Fire a spreadable arrow straight up into the sky, which rains down a volley that
    deals <span>{damage}%</span> damage <span>20</span> times to <span>8</span> enemies
    within <span>4.5</span> m. Hold the skill down for <span>0.5</span> sec to fire the
    arrow <span>7.5</span> m in front of you instead.
    You will be immune to knockback while this skill is active.
  `,
};
const ScrewdriverShot = {
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
    description: `
    Loose a spinning arrow up to <span>12</span> m in front of you,
    dealing <span>{stage1}%</span> damage to <span>20</span> enemies in its path.
    Hold the skill key down for <span>0.5</span> sec to enhance the arrow to <span>Lv. 2</span>,
    increasing its damage to <span>{stage2}%</span>.
    Hold the skill key down for <span>0.5</span> sec at <span>Lv. 2</span> to enhance it to <span>Lv. 3</span>,
    increasing its damage to <span>{stage3}%</span>.
    The arrow is shot automatically when it reaches <span>Lv. 3</span>.
    You will be immune to knockback while this skill is active.
    This skill can only be used while Snipe is active.
  `,
};
const EvasiveSalvo = {
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
    description: `
    Swiftly jump back <span>3</span> m and fire <span>3</span> volleys of arrows.
    The arrows are <span>2</span> m apart and deal <span>{damage}%</span> damage each to up to <span>5</span> enemies.
    All three volleys have a <span>40%</span> chance to be critical regardless of your critical rate.
    This skill can cancel other skills. You will be immune to knockback while this skill is active.
    Consumes <span>40</span> stamina.
  `,
};
const IceArrow = {
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
    description: `
    Fire three ice arrows at once, dealing <span>{damage}%</span> damage
    to enemies up to <span>9</span> m in front of you and decreasing their
    movement speed and jump power by <span>4%</span> for <span>5</span> sec.
    Ice arrows pierce the enemy <span>4</span> times and can hit enemies behind.
    The movement speed reduction effect can stack up to <span>10</span> times.
    At max stacks, the target will be frozen for <span>2</span> sec.
    Consumes <span>6</span> spirit.
  `,
};
const AgileArcher = {
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
    description: `
    A personal training session with Oska has taught you how to
    put more power into your shots and to move with more agility.
    Increases piercing by <span>{piercing}%</span> and evasion by <span>{evasion}</span>.
  `,
};
const BowSwing = {
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
    description: `
    Swing your bow wildly as you spin, dealing <span>{damage}%</span>
    damage to <span>8</span> enemies within <span>3</span> m.
    Deals an additional <span>{additionalDamage}%</span> ice damage
    to targets frozen by the Ice Arrow debuff and consumes the effect.
  `,
};
const BronzeEagle = {
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
    description: `
    Bronze Eagle, your companion from the Green Hoods, has a <span>100%</span> chance
    to fly by your side for <span>15</span> sec when you land a critical hit.
    He increases your Dexterity by <span>{dexterity}%</span> and awaits your command.
    Once he appears, he cannot return again for <span>18</span> sec.
  `,
};
const EagleClaw = {
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
    description: `
    Command Bronze Eagle to attack, dealing <span>{damage}%</span> damage
    to <span>8</span> enemies up to <span>9</span> m in front of you.
    Your companion also scratches enemies,
    dealing an additional <span>{additionalDamage}%</span> damage every sec for <span>6</span> sec
    and reducing their movement speed and jump power by <span>{movement}%</span>.
    This skill can only be used while Bronze Eagle is around,
    and Bronze Eagle disappears after the skill is used.
  `,
};
const EaglesMajesty = {
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
    description: `
    The majesty of eagles restores <span>{spirit}</span> spirit every second for <span>30</span> sec.
    While this effect is active, Bronze Eagle deals <span>{damage}%</span> damage when you attack,
    capped at once every <span>3</span> sec.
  `,
};
const Conditioning = {
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
    description: `
    Special training with the Green Hoods permanently increases your physical attack
    by <span>{attack}%</span> and movement speed by <span>{movement}%</span>.
  `,
};
const SharpEyes = {
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
    description: `
    Create a magic seal that affects <span>5</span> tiles around you, increasing the
    critical rate of allies who absorb it by <span>{criticalAllies}</span> and
    their accuracy by <span>{accuracy}</span> for <span>180</span> sec.
    The seal lasts for <span>20</span> sec.
    Sharp Eyes also increases critical rate by <span>{criticalSelf}</span>.
  `,
};
const PrecisionShooter = {
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
    description: `
    Increase your aim technique and improve your firing speed.
    Increases attack speed by <span>{speed}%</span> and improves Screwdriver Shot.
    Improved Screwdriver Shot can be cast in Snipe mode and inflicts greater damage but cannot be reinforced.
    Also increases improved Screwdriver Shot damage by <span>{screwdriver}%</span>.
  `,
};
const ImprovedGliding = {
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
    description: `
    Glide through the air on your eagle's wings.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases dexterity by <span>40</span>.
    <br/><br/>
    Enhances Eagle Glide.
  `,
};
const FlameArrow = {
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
    description: `
    Lose <span>3</span> flaming arrows at enemies in front of you.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{firstDamage}%</span> damage <span>1</span> time
    and <span>{secondDamage}%</span> damage <span>2</span> times.
    <br/><br/>
    Grants <span>1</span> stack of Burning Arrow.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    When Burning Arrow is at <span>10</span> stacks, use Multi-Drive Shot to enable Flame Arrow II.</span>
  `,
};
const MultiDriveShot = {
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
    description: `
    Lose <span>6</span> guided fire arrows at the enemy.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage <span>6</span> times and explodes.
    <br/><br/>
    When you have Burning Arrow III, this skill becomes Multi-Drive Shot III.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    The explosion deals <span>{explosionDamage}%</span> per <span>6</span> times to nearby enemies.
    <br/>
    Use this skill when Burning Arrow II is at <span>10</span> stacks to enable Flame Arrow III.
  `,
};
const RangersFocus = {
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
    description: `
    Focus your senses to gain explosive power.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases physical attack by <span>{attack}%</span> and grants unlimited spirit for 15 sec
    <br/><br/>
    Enables Flame Arrow IV. When Ranger's Focus ends, enables Flame Arrow III.
  `,
};
const HastersTeachings = {
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
    description: `
    Haster's tips and tricks have sharpened your abilities.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases the damage of Multi-Drive Shot and Flame arrow by <span>{increase}%</span>.
    Reduces the spirit cost of Flame Arrow III by <span>20%</span>.
    These damage bonuses also affects the enhanced forms of abilities.
  `,
};
const PiercingArrow = {
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
    description: `
    Launch an arrow propelled by the power of the wind.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage.
    Press the skill key again to perform a quick follow-up shot.
  `,
};
const SpiralArrow = {
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
    description: `
    Arc an arrow into the air and use the power of the wind to guide it.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage and creates a whirlwind.
    <br/><br/>
    After using Piercing Arrow or Spiral Arrow, there is a <span>{cooldown}%</span> chance to reset cooldown.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    The whirlwind deals <span>{movement}%</span> damage <span>5</span> times.
    <br/>
    Enhanced by Archer's Secrets.
  `,
};
const ArchersSecrets = {
    name: "Archer's Secrets",
    attr: "archers-secrets",
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
    description: `
    Master the secrets of archery to unlock hidden skills and strengthen physical ability.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Available while Full Wind Draw is active.
    Increases piercing by <span>{piercing}%</span> and
    accuracy by <span>{accuracy}%</span> for <span>20</span> sec.
    Enables use of Enhanced Spiral Arrow and Twirling Wind Arrow.
    Once learned, unlocks Wind Draw and Full Wind Draw.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Hit enemies with Piercing Arrow and Spiral Arrow to gain Wind Draw,
    which lasts for <span>15</span> sec and stack up to <span>15</span> times.
    At max stacks, gain Full Wind Draw.
    <br/>
    Full Wind Draw enables for <span>30</span> sec.
  `,
};
const GreaterSharpEyes = {
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
    description: `
    Master the secrets of archery to draw out the true power of Sharp Eyes.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Enhanced Sharp Eyes grants a <span>{attack}%</span> physical attack bonus to the caster.
  `,
};
const RankOneSkills = {
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
const RankTwoSkills = {
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
const ArcherSkills = Object.assign({}, RankOneSkills, RankTwoSkills);

class ArcherComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.editable = false;
        this.rank = __chunk_2.Rank.Basic;
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
        this.onSkillChanged = __chunk_1.createEvent(this, "skillchanged", 7);
    }
    componentWillLoad() {
        __chunk_3.processSkills(this, ArcherSkills);
    }
    async getData() {
        return __chunk_3.toSkillChangeEventObject(this, ArcherSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        __chunk_3.processSkills(this, ArcherSkills, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(__chunk_3.toSkillChangeEventObject(this, ArcherSkills));
    }
    render() {
        return [
            __chunk_1.h("ms-chart", { msClass: "archer", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail }, __chunk_3.renderLevelControls(this, RankOneSkills, this.editable, this.extras, __chunk_2.Rank.Basic), __chunk_3.renderLevelControls(this, RankTwoSkills, this.editable, this.extras, __chunk_2.Rank.Awakening))
        ];
    }
    get host() { return __chunk_1.getElement(this); }
    static get watchers() { return {
        "extras": ["emitChangeEvent"],
        "rank": ["emitChangeEvent"]
    }; }
    static get style() { return ":host{display:block}"; }
}

exports.ms_archer = ArcherComponent;
