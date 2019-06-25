import { r as registerInstance, c as createEvent, h, g as getElement } from './chunk-b3f221a8.js';
import { R as Rank } from './chunk-303cc661.js';
import { p as processSkills, t as toSkillChangeEventObject, r as renderLevelControls } from './chunk-99d5a612.js';

const MantraArray = {
    name: "Mantra Array",
    attr: "mantra-array",
    prop: "mantraArray",
    rank: 1,
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    sp: true,
    description: `
    Focus the mysterious animus energy within you to create Mantra Cores (orb energy) and
    restore <span>12</span> spirit. You can create up to <span>4</span> Mantra Cores,
    which can be activated consecutively as long as you continue to hold the key.
    While you are creating Mantra Cores, you can control a greater amount of energy
    and enhance some skills prior to activation.
  `,
};
const Illusion = {
    name: "Illusion",
    attr: "illusion",
    prop: "illusion",
    rank: 1,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: `
    Consume <span>40</span> stamina to release a mysterious aura from your body
    and rush <span>4.5</span> m, leaving and afterimage in your wake.
    Gain <span>50</span> evasion while moving.
    The skill can be both canceled and triggered immediately while using other skills.
    You are immune to knockback while this skill is active.
  `,
};
const SoaringOrb = {
    name: "Soaring Orb",
    attr: "soaring-orb",
    prop: "soaringOrb",
    rank: 1,
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [38, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65],
        aoe: [170, 170, 182, 194, 206, 218, 230, 242, 254, 266, 278],
    },
    description: `
    Gather energy from your surroundings to form and launch an orb at the nearest enemy
    up to <span>7.5</span> m in front of you, dealing <span>{damage}%</span> damage.
    Keep pressing the key to trigger a 3-hit combo.
    The third strike launches an energy orb that explodes upon collision,
    dealing <span>{aoe}%</span> damage to <span>5</span> enemies within a <span>2.25</span> m radius.
  `,
};
const RadiantSalvo = {
    name: "Radiant Salvo",
    attr: "radiant-salvo",
    prop: "radiantSalvo",
    rank: 1,
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 3,
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [58, 58, 62, 66, 70, 74, 78, 82, 86, 90, 94],
    },
    description: `
    Concentrate life energy in the palms of your hands, then launch a salvo of orbs at the nearest enemy
    within <span>7.5</span> m, dealing <span>{damage}%</span> damage <span>4</span> times.
    Each orb that collides with an enemy ricochets <span>4</span> times
    onto other enemies within a <span>3</span> m radius, dealing <span>{damage}%</span> damage.
    Energy orbs do not damage the same target twice.
    Consumes <span>3</span> spirit.
  `,
};
const ExpansionBlast = {
    name: "Expansion Blast",
    attr: "expansion-blast",
    prop: "expansionBlast",
    rank: 1,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 4,
    cooldown: 8,
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    skillRequirements: [{
            skill: SoaringOrb,
            level: 2,
        }, {
            skill: RadiantSalvo,
            level: 2,
        }],
    values: {
        damage: [625, 625, 669, 713, 757, 801, 845, 889, 933, 977, 1021],
    },
    description: `
    Condense the energy of Narubashan into a powerful,
    one-meter-wide electric energy orb and shoot it <span>7.5</span> m forward,
    dealing <span>{damage}%</span> damage to up to <span>8</span> enemies in its path.
    The orb also shocks targets, dealing an additional <span>20%</span> electric damage every sec for <span>3</span> sec.
    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.
    Consumes <span>4</span> spirit.
  `,
};
const FlashStrike = {
    name: "Flash Strike",
    attr: "flash-strike",
    prop: "flashStrike",
    rank: 1,
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 6,
    cooldown: 15,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: ExpansionBlast,
            level: 5,
        }],
    values: {
        damage: [688, 688, 736, 784, 832, 880, 928, 976, 1024, 1072, 1120],
    },
    description: `
    Gather light energy in your hands and fire a beam with energy force to push you back <span>1.5</span> m.
    The light beam deals <span>{damage}%</span> damage to up
    to <span>8</span> enemies up to <span>10.5</span> m in front of you.
    Consumes <span>6</span> spirit.
  `,
};
const ShootingStar = {
    name: "Shooting Star",
    attr: "shooting-star",
    prop: "shootingStar",
    rank: 1,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 4,
    cooldown: 8,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: RadiantSalvo,
            level: 6,
        }, {
            skill: FlashStrike,
            level: 4,
        }],
    values: {
        damage: [242, 242, 259, 276, 293, 310, 327, 344, 361, 378, 395],
    },
    description: `
    Channel the strength of the animus to form <span>3</span> orbs infused with the
    celestral energy and launch them at enemies up to <span>8</span> m in front of you.
    The orbs will explode upon collision, spreading celestral energy over the area and dealing
    <span>{damage}%</span> damage to up to <span>5</span> enemies within a <span>2.25</span> m radius.
    Skill effects are enhanced in proportion to the number of active Mantra Cores.
    Consumes <span>4</span> spirit.
  `,
};
const ConcussionOrb = {
    name: "Concussion Orb",
    attr: "concussion-orb",
    prop: "concussionOrb",
    rank: 1,
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: SoaringOrb,
            level: 8,
        }],
    values: {
        damage: [179, 179, 191, 203, 215, 227, 239, 251, 263, 275, 287],
    },
    description: `
    Gather energy from your surroundings to form and launch an orb
    at the nearest enemy up to <span>7.5</span> m in front of you.
    The energy orb explodes upon collision, dealing <span>{damage}%</span> damage
    to <span>5</span> enemies within a <span>2.25</span> m radius.
    Keep pressing the trigger for a 2-hit combo.
  `,
};
const RagingTempest = {
    name: "Raging Tempest",
    attr: "raging-tempest",
    prop: "ragingTempest",
    rank: 1,
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    cooldown: 15,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    skillRequirements: [{
            skill: SoaringOrb,
            level: 4,
        }],
    values: {
        dot: [23, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41],
        additionalDamage: [68, 68, 72, 76, 80, 84, 88, 92, 96, 100, 104],
        reduction: [1, 1, 1, 1, 2, 2, 3, 3, 4, 4, 4],
    },
    description: `
    Shift the flow of the atmosphere to create a whirlwind <span>6</span> m in front of you.
    The whirlwind rages every <span>0.2</span> sec for a total of <span>4</span> times,
    dealing <span>{dot}%</span> damage to up to <span>8</span> enemies
    in a <span>3</span> m radius and gathering them at its center.
    After <span>1</span> sec, the dence energy in the eye of the whirlwind explodes,
    dealing <span>{additionalDamage}%</span> damage to up to <span>8</span> enemies within a <span>3</span> m radius
    and decreasing their accuracy and evasion by <span>{reduction}</span>.
  `,
};
const EnergySurge = {
    name: "Energy Surge",
    attr: "energy-surge",
    prop: "energySurge",
    rank: 1,
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 5,
    cooldown: 16,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: RagingTempest,
            level: 3
        }],
    values: {
        damage: [308, 308, 330, 352, 374, 396, 418, 440, 462, 484, 506],
        stun: [0.3, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2],
    },
    description: `
    Stir up earth energy, driving it toward the nearest enemy up to
    <span>8</span> m in front of you and forcing the ground upward,
    dealing <span>{damage}%</span> damage to up to <span>8</span> enemies within a <span>2.25</span> m radius.
    The massive quake will stun targets for <span>{stun}</span> sec.
    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.
    Consumes <span>5</span> spirit.
  `,
};
const StaticFlash = {
    name: "Static Flash",
    attr: "static-flash",
    prop: "staticFlash",
    rank: 1,
    row: 5,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    spirit: 15,
    cooldown: 10,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: RagingTempest,
            level: 6,
        }, {
            skill: EnergySurge,
            level: 2,
        }],
    values: {
        damage: [44, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71],
        reduction: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    description: `
    Reverse the flow of nature's pure energy within a <span>7.5</span> m radius,
    exhausting the vitality of up to <span>8</span> enemies within range,
    dealing <span>{damage}%</span> damage,
    and reducing both defense and movement speed by <span>{reduction}%</span> for <span>10</span> sec.
    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.
    Consumes <span>15</span> spirit.
  `,
};
const LightBarrier = {
    name: "Light Barrier",
    attr: "light-barrier",
    prop: "lightBarrier",
    rank: 1,
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    spirit: 12,
    cooldown: 30,
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        damage: [10, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37],
    },
    description: `
    Harness your animus energy to forge a shield that lasts for <span>4</span> sec
    and absorbs damage equivalent to <span>{damage}%</span> of your max health.
    This shield does not stack with other protective shield effects.
    Consumes all Mantra Cores.
    Skill effects are enhanced in proportion to number of Mantra Cores consumed.
    Consumes <span>12</span> spirit.
  `,
};
const HealingBond = {
    name: "Healing Bond",
    attr: "healing-bond",
    prop: "healingBond",
    rank: 1,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    spirit: 12,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    skillRequirements: [{
            skill: LightBarrier,
            level: 4,
        }],
    values: {
        health: [85, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130],
    },
    description: `
    Restore your health and the health of <span>4</span> allies within a <span>3</span> m radius
    by <span>{health}%</span> of your magic attack by harnessing nature's pure energy.
    Consumes all Mantra Cores.
    Skill effects are enhanced in proportion to number of Mantra Cores consumed.
    Consumes <span>12</span> spirit.
  `,
};
const FountOfRenewal = {
    name: "Fount of Renewal",
    attr: "fount-of-renewal",
    prop: "fountOfRenewal",
    rank: 1,
    row: 6,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    cooldown: 30,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: HealingBond,
            level: 4,
        }],
    values: {
        health: [300, 300, 321, 342, 363, 384, 405, 426, 447, 468, 489],
        resistance: [200, 200, 213, 226, 239, 252, 265, 278, 291, 304, 317],
        healingBond: [4, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    },
    description: `
    Gather a field of concentrated life force <span>6</span> m ahead of you
    with a radius of <span>2.25</span> m, lasting <span>3</span> sec.
    This field restores the health of up to <span>8</span> allies within range by <span>{health}%</span>
    of your magic attack and increases physical and magic resistance by <span>{resistance}</span>.
    Increases the potency of Healing Bond by <span>{healingBond}%</span>.
    While you are within the Fount of Renewal, you are immune to knockback from standard attacks.
  `,
};
const OrbMastery = {
    name: "Orb Mastery",
    attr: "orb-mastery",
    prop: "orbMastery",
    rank: 1,
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    values: {
        attack: [1, 1, 1.6, 2.2, 2.8, 3.4, 4, 4.6, 5.2, 5.8, 6.4],
    },
    description: `
    Harmonize more effectively with your Mantra Orbs thanks to your valuable lessons from Guidance.
    Increase the strength of your weapon attack by <span>{attack}%</span> when you have an orb equipped.
  `,
};
const NarubashanUnleashed = {
    name: "Narubashan Unleashed",
    attr: "narubashan-unleashed",
    prop: "narubashanUnleashed",
    rank: 1,
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 60,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: OrbMastery,
            level: 4,
        }],
    values: {
        interval: [4, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0.5, 0.5],
        totalTime: [20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 22],
    },
    description: `
    Unleash the incredible power of Narubashan as explosive energy courses through your veins.
    This energy automatically forms into Mantra Cores every <span>{interval}</span> sec for <span>{totalTime}</span> sec.
    No more than <span>4</span> Mantra Cores can be created.
  `,
};
const AnimusFocus = {
    name: "Animus Focus",
    attr: "animus-focus",
    prop: "animusFocus",
    rank: 1,
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: OrbMastery,
            level: 6,
        }, {
            skill: NarubashanUnleashed,
            level: 3,
        }],
    values: {
        damage: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        recovery: [3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    description: `
    Focus the strength of animus within yourself and amplify the Mantra Core's energy.
    Increases the damage of Expansion Blast, Energy Surge, and Shooting Star
    (which activate when the maximum quantity of Mantra Cores has been achieved) by
    <span>{damage}%</span> and increases the recovery of Healing Bond by <span>{recovery}%</span>.
  `,
};
const AwakenedMantra = {
    name: "Awakened Mantra",
    attr: "awakened-mantra",
    prop: "awakenedMantra",
    rank: 2,
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    cooldown: 12,
    description: `
    Harness your animus to create a purer form of Mantra Core.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases intelligence by <span>40</span>.
    <br/>
    Create up to <span>2</span>.
    <br/>
    Grants <mark>Awakened Mantra Core</mark>, and restores <span>50</span> spirit.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Awakened Mantra Cores empower Expansion Blast, Spirit Crush, Soul Shield and Soul Harmony.
  `,
};
const SpiritBound = {
    name: "Spirit Bound",
    attr: "spirit-bound",
    prop: "spiritBound",
    rank: 2,
    row: 1,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [163, 163, 176, 189, 202],
        thirdDamage: [356, 356, 385, 414, 443],
    },
    description: `
    Launch a spirit orb at enemies.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage.
    <br/>
    Deals <span>{thirdDamage}%</span> damage on every third cast.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    The orb bounces from enemy to enemy up to <span>3</span> times.
    <br/>
    Skill changes if there is only <span>1</span> enemy in range.
  `,
};
const SpiritCrush = {
    name: "Spirit Crush",
    attr: "spirit-crush",
    prop: "spiritCrush",
    rank: 2,
    row: 2,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 20,
    cooldown: 5,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: SpiritBound,
            level: 3,
        }],
    values: {
        damage: [918, 918, 1025, 1132, 1239],
    },
    description: `
    Project spectral blades through enemies in front of you.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Consumes <span>1</span> Awakened Mantra to become Spirit Gouge.
    <br/>
    Use Vision Torrent to turn this skill into Vision Crush.
  `,
};
const VisionTorrent = {
    name: "Vision Torrent",
    attr: "vision-torrent",
    prop: "visionTorrent",
    rank: 2,
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    cooldown: 60,
    levelRequirement: [64, 64, 64, 64, 64],
    skillRequirements: [{
            skill: SpiritCrush,
            level: 2,
        }],
    values: {
        damage: [4, 4, 6, 8, 10],
    },
    description: `
    Manifest your bond with Vision in the physical world.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases magic attack by <span>{damage}%</span> for <span>20</span> sec.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Spirit Crush becomes Vision Crush.
    <br/>
    Flash Strike becomes Vision Strike.
  `,
};
const AwakenedMind = {
    name: "Awakened Mind",
    attr: "awakened-mind",
    prop: "awakenedMind",
    rank: 2,
    row: 5,
    column: 1,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: SpiritCrush,
            level: 3,
        }, {
            skill: VisionTorrent,
            level: 3,
        }],
    values: {
        increase: [3, 3, 6, 9, 12],
        movement: [5, 5, 10, 15, 20],
    },
    description: `
    Vision strengthens your mental fortitude, enhancing certain skills.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases the damage of Spirit Bound, Spirit Crush, and Vision Strike by <span>{increase}%</span>.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Increases movement speed by <span>{movement}%</span> after using Vision Strike.
  `,
};
const SoulFlock = {
    name: "Soul Flock",
    attr: "soul-flock",
    prop: "soulFlock",
    rank: 2,
    row: 1,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    levelRequirement: [60, 60, 60, 60, 60],
    values: {
        damage: [205, 205, 222, 239, 256],
        defense: [1.2, 1.2, 1.8, 2.4, 3.0],
        movement: [1.2, 1.2, 1.8, 2.4, 3.0],
    },
    description: `
    Summon a flock of soul birds to attack.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage <span>3</span> times and inflicts Lethargy.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Lethargy decreases defense by <span>{defense}%</span> and
    movement speed by <span>{movement}%</span> for <span>20</span> sec,
    stacking up to <span>5</span> times.
    <br/>
    Lethargy does not stack with Static Flash.
  `,
};
const SoulShield = {
    name: "Soul Shield",
    attr: "soul-shield",
    prop: "soulShield",
    rank: 2,
    row: 2,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    weaponRequired: "Two-handed Orb",
    spirit: 50,
    cooldown: 30,
    levelRequirement: [62, 62, 62, 62, 62],
    skillRequirements: [{
            skill: SoulFlock,
            level: 3,
        }],
    values: {
        damage: [80, 80, 87, 94, 101],
        absorbs: [20, 20, 40, 60, 80],
    },
    description: `
    Summons an animus cube that damages enemies and shield allies.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Deals <span>{damage}%</span> damage to enemies.
    <br/><br/>
    Allies receive a shield that absorbs damage equal to <span>{absorbs}%</span> of their max health
    and lasts for <span>30</span> sec.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Consumes <span>1</span> Awakened Mantra Core to becomes Awakened Soul Shield.
    <br/>
    Shields do not trigger in arenas.
  `,
};
const SoulHarmony = {
    name: "Soul Harmony",
    attr: "soul-harmony",
    prop: "soulHarmony",
    rank: 2,
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    attackType: "Long Range / Magic",
    passive: true,
    spirit: 10,
    levelRequirement: [66, 66, 66, 66, 66],
    skillRequirements: [{
            skill: SoulShield,
            level: 3,
        }],
    values: {
        health: [145, 145, 157, 169, 181],
    },
    description: `
    Draw animus from your soul to heal nearby allies.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Heals <span>4</span> nearby allies by <span>{health}%</span> of magic attack per tick.
    Hold down the skill key to channel.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Consumes <span>1</span> Awakened Mantra Core to become Soul Dissonance.
  `,
};
const TriuneLink = {
    name: "Triune Link",
    attr: "triune-link",
    prop: "triuneLink",
    rank: 2,
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 4,
    passive: true,
    levelRequirement: [68, 68, 68, 68, 68],
    skillRequirements: [{
            skill: SoulHarmony,
            level: 3,
        }],
    values: {
        increase: [3, 3, 6, 9, 12],
        soulHarmony: [5, 5, 10, 15, 20],
        critEvasion: [10, 10, 20, 30, 40],
        evasion: [1, 1, 2, 3, 4],
    },
    description: `
    Strengthens the bond between the Soul Binder, Vision, and Narubashan.
    <br/><br/>
    <h3>[Primary Effects]</h3>
    Increases the damage of Soul Flock, Soul Shield, and Soul Dissonance by <span>{increase}%</span>.
    <br/><br/>
    <h3>[Bonus Effects]</h3>
    Increases the healing of Soul Harmony by <span>{soulHarmony}%</span>.
    <br/>
    Soul Clash reduces an additional <span>{critEvasion}</span> critical evasion and <span>{evasion}</span> evasion.
  `,
};
const RankOneSkills = {
    AnimusFocus: AnimusFocus,
    ConcussionOrb: ConcussionOrb,
    SoaringOrb: SoaringOrb,
    RagingTempest: RagingTempest,
    StaticFlash: StaticFlash,
    EnergySurge: EnergySurge,
    ExpansionBlast: ExpansionBlast,
    FlashStrike: FlashStrike,
    Illusion: Illusion,
    HealingBond: HealingBond,
    MantraArray: MantraArray,
    NarubashanUnleashed: NarubashanUnleashed,
    OrbMastery: OrbMastery,
    RadiantSalvo: RadiantSalvo,
    ShootingStar: ShootingStar,
    LightBarrier: LightBarrier,
    FountOfRenewal: FountOfRenewal,
};
const RankTwoSkills = {
    AwakenedMantra: AwakenedMantra,
    SpiritBound: SpiritBound,
    SpiritCrush: SpiritCrush,
    VisionTorrent: VisionTorrent,
    AwakenedMind: AwakenedMind,
    SoulFlock: SoulFlock,
    SoulShield: SoulShield,
    SoulHarmony: SoulHarmony,
    TriuneLink: TriuneLink,
};
const SoulBinderSkills = Object.assign({}, RankOneSkills, RankTwoSkills);

class SoulBinderComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.rank = Rank.Basic;
        this.extras = false;
        this.ignoreMax = false;
        this.animusFocus = SoulBinderSkills.AnimusFocus.minLevel;
        this.concussionOrb = SoulBinderSkills.ConcussionOrb.minLevel;
        this.soaringOrb = SoulBinderSkills.SoaringOrb.minLevel;
        this.ragingTempest = SoulBinderSkills.RagingTempest.minLevel;
        this.staticFlash = SoulBinderSkills.StaticFlash.minLevel;
        this.energySurge = SoulBinderSkills.EnergySurge.minLevel;
        this.expansionBlast = SoulBinderSkills.ExpansionBlast.minLevel;
        this.flashStrike = SoulBinderSkills.FlashStrike.minLevel;
        this.illusion = SoulBinderSkills.Illusion.minLevel;
        this.healingBond = SoulBinderSkills.HealingBond.minLevel;
        this.mantraArray = SoulBinderSkills.MantraArray.minLevel;
        this.narubashanUnleashed = SoulBinderSkills.NarubashanUnleashed.minLevel;
        this.orbMastery = SoulBinderSkills.OrbMastery.minLevel;
        this.radiantSalvo = SoulBinderSkills.RadiantSalvo.minLevel;
        this.shootingStar = SoulBinderSkills.ShootingStar.minLevel;
        this.lightBarrier = SoulBinderSkills.LightBarrier.minLevel;
        this.fountOfRenewal = SoulBinderSkills.FountOfRenewal.minLevel;
        this.awakenedMantra = SoulBinderSkills.AwakenedMantra.minLevel;
        this.spiritBound = SoulBinderSkills.SpiritBound.minLevel;
        this.spiritCrush = SoulBinderSkills.SpiritCrush.minLevel;
        this.visionTorrent = SoulBinderSkills.VisionTorrent.minLevel;
        this.awakenedMind = SoulBinderSkills.AwakenedMind.minLevel;
        this.soulFlock = SoulBinderSkills.SoulFlock.minLevel;
        this.soulShield = SoulBinderSkills.SoulShield.minLevel;
        this.soulHarmony = SoulBinderSkills.SoulHarmony.minLevel;
        this.triuneLink = SoulBinderSkills.TriuneLink.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    componentWillLoad() {
        processSkills(this, SoulBinderSkills, this.ignoreMax);
    }
    async getData() {
        return toSkillChangeEventObject(this, SoulBinderSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, SoulBinderSkills, this.ignoreMax, skill);
        this.host.forceUpdate();
        this.emitChangeEvent();
    }
    ignoreMaxChanged() {
        processSkills(this, SoulBinderSkills, this.ignoreMax);
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, SoulBinderSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "soul-binder", rank: this.rank, onRankChange: ({ detail }) => this.rank = detail }, renderLevelControls(this, RankOneSkills, this.editable, this.extras, Rank.Basic), renderLevelControls(this, RankTwoSkills, this.editable, this.extras, Rank.Awakening)));
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "ignoreMax": ["ignoreMaxChanged"],
        "extras": ["emitChangeEvent"],
        "rank": ["emitChangeEvent"]
    }; }
    static get style() { return ":host{display:block}"; }
}

export { SoulBinderComponent as ms_soul_binder };
