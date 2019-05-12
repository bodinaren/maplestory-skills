import { e as registerInstance, f as createEvent, d as h } from './maplestory-skills-ce472e77.js';
import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-ead6e7d7.js';

const ShadowChaser = {
    name: "Shadow Chaser",
    attr: "shadow-chaser",
    prop: "shadowChaser",
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    element: "Dark",
    attackType: "Long Range / Physical",
    sp: true,
    description: `
    Send your mirror image to the nearest enemy within <span>8</span> m in front of you,
    dealing <span>23%</span> damage and marking them with Assassin's Brand,
    which steals their energy to grant you <span>1</span> spirit every <span>0.1</span> sec for <span>30</span> sec.
  `,
};
const Dash = {
    name: "Dash",
    attr: "dash",
    prop: "dash",
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    description: `
    Deftly leap forward <span>4.5</span> m.
    This skill can cancel other skills.
    Consumes <span>40</span> stamina.
  `,
};
const LuckyStars = {
    name: "Lucky Stars",
    attr: "lucky-stars",
    prop: "luckyStars",
    row: 1,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "One-handed Thrown Weapon, One-handed Thrown Weapon",
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [76, 76, 81, 86, 91, 96, 101, 106, 111, 116, 121],
        aoe: [76, 76, 81, 86, 91, 96, 101, 106, 111, 116, 121],
    },
    description: `
    Throw your weapons at the closest enemy within <span>8</span> m to deal <span>[damage]%</span> damage <span>2</span> times.
    Each weapon then ricochets to other enemies within <span>3</span> m and deals <span>[aoe]%</span> damage <span>2</span> times.
    The damage of each attack is affected by the weapon in each hand.
  `,
};
const FragmentedStar = {
    name: "Fragmented Star",
    attr: "fragmented-star",
    prop: "fragmentedStar",
    row: 2,
    column: 1,
    minLevel: 1,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "One-handed Thrown Weapon",
    spirit: 20,
    levelRequirement: [0, 0, 10, 12, 14, 16, 18, 20, 22, 24, 26],
    values: {
        damage: [215, 215, 229, 243, 257, 271, 285, 299, 313, 327, 341],
    },
    description: `
    Throw a shattering weapon at the closest enemy within <span>8</span> m in front of you which breaks apart
    on impact to deal <span>[damage]%</span> damage to <span>8</span> enemies within <span>3</span> m.
    The damage of this attack is affected by the weapon in your right hand.
    Consumes <span>20</span> spirit.
  `,
};
const StarChaser = {
    name: "Star Chaser",
    attr: "star-chaser",
    prop: "starChaser",
    row: 3,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "One-handed Thrown Weapon, One-handed Thrown Weapon",
    spirit: 15,
    cooldown: 4,
    levelRequirement: [19, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37],
    skillRequirements: [{
            skill: FragmentedStar,
            level: 4,
        }],
    values: {
        damage: [39, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66],
    },
    description: `
    Equip <span>4</span> homing weapons in each hand, and throw them at <span>8</span>
    enemies up to <span>8</span> m in front of you, dealing <span>[damage]%</span> damage per hit.
    The damage of each attack is affected by the weapon in each hand.
    Consumes <span>15</span> spirit.
  `,
};
const StarFlurry = {
    name: "Star Flurry",
    attr: "star-flurry",
    prop: "starFlurry",
    row: 4,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    attackType: "Long Range / Physical",
    weaponRequired: "One-handed Thrown Weapon, One-handed Thrown Weapon",
    spirit: 15,
    cooldown: 4,
    levelRequirement: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
    skillRequirements: [{
            skill: LuckyStars,
            level: 4,
        }, {
            skill: StarChaser,
            level: 3,
        }],
    values: {
        damage: [59, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86],
    },
    description: `
    Equip <span>3</span> weapons in each hand and throw them
    at the closest enemy within <span>8</span> m in front of you,
    dealing <span>[damage]%</span> damage <span>6</span> times.
    The damage of each attack is affected by the weapon in each hand.
    Consumes <span>15</span> spirit.
  `,
};
const ThrownWeaponMastery = {
    name: "Thrown Weapon Mastery",
    attr: "thrown-weapon-mastery",
    prop: "thrownWeaponMastery",
    row: 6,
    column: 1,
    minLevel: 0,
    maxLevel: 10,
    passive: true,
    levelRequirement: [40, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58],
    skillRequirements: [{
            skill: FragmentedStar,
            level: 5,
        }, {
            skill: StarFlurry,
            level: 4,
        }],
    values: {
        attack: [1, 1, 1.4, 1.8, 2.2, 2.6, 3.0, 3.4, 3.8, 5.8, 6.4],
    },
    description: `
    Your proficiency with thrown weapons increases your weapon attack
    by <span>[attack]%</span> when you have thrown weapons equipped.
  `,
};
const ShadowCutter = {
    name: "Shadow Cutter",
    attr: "shadow-cutter",
    prop: "shadowCutter",
    row: 3,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    attackType: "Long Range / Physical",
    weaponRequired: "One-handed Thrown Weapon",
    spirit: 13,
    levelRequirement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    values: {
        damage: [99, 99, 106, 113, 120, 127, 134, 141, 148, 155, 162],
    },
    description: `
    Throw your weapon forward <span>8</span> m with a strong spin to deal <span>[damage]%</span> dark
    damage <span>2</span> times to <span>8</span> enemies in its path both ways.
    The damage of this attack is affected by the weapon in your right hand.
    Consumes <span>13</span> spirit.
  `,
};
const ShadowBurst = {
    name: "Shadow Burst",
    attr: "shadow-burst",
    prop: "shadowBurst",
    row: 4,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    attackType: "Long Range / Physical",
    weaponRequired: "One-handed Thrown Weapon, One-handed Thrown Weapon",
    spirit: 30,
    cooldown: 12,
    levelRequirement: [22, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40],
    skillRequirements: [{
            skill: ShadowCutter,
            level: 4,
        }],
    values: {
        damage: [211, 211, 225, 239, 253, 267, 281, 295, 309, 323, 337],
        additionalDamage: [211, 211, 225, 239, 253, 267, 281, 295, 309, 323, 337],
    },
    description: `
    Equip <span>5</span> thrown weapons imbued with dark magic in each hand,
    then throw them forward at the same time to deal <span>[damage]%</span> dark
    damage <span>2</span> times to <span>8</span> enemies within <span>8</span> m.
    If any of the enemies hit are marked for death the mark explodes,
    dealing an additional <span>[additionalDamage]%</span> dark damage.
    The damage of each attack is affected by the weapon in each hand.
    Consumes <span>30</span> spirit.
  `,
};
const SoulGrind = {
    name: "Soul Grind",
    attr: "soul-grind",
    prop: "soulGrind",
    row: 5,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    attackType: "Long Range / Physical",
    weaponRequired: "One-handed Thrown Weapon",
    spirit: 30,
    cooldown: 14,
    levelRequirement: [31, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49],
    skillRequirements: [{
            skill: LuckyStars,
            level: 4,
        }, {
            skill: ShadowBurst,
            level: 3,
        }],
    values: {
        damage: [97, 97, 103, 109, 115, 121, 127, 133, 139, 145, 151],
    },
    description: `
    Throw a giant weapon at the closest enemy within <span>8</span> m in front of you,
    which spins rapidonly on impact, dealing <span>[damage]%</span> dark damage
    to <span>5</span> enemies within <span>3</span> m <span>5</span> times.
    The damage of this attack is affected by the weapon in your right hand.
    Consumes <span>30</span> spirit.
  `,
};
const ShadowArts = {
    name: "Shadow Arts",
    attr: "shadow-arts",
    prop: "shadowArts",
    row: 6,
    column: 2,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    passive: true,
    levelRequirement: [43, 43, 45, 47, 49, 51, 53, 55, 57, 59, 61],
    skillRequirements: [{
            skill: ShadowCutter,
            level: 5,
        }, {
            skill: SoulGrind,
            level: 4,
        }],
    values: {
        damage: [2, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    description: `
    Utilize secret assassin techniques to strengthen your command of dark magic.
    Increases the damage of Shadow Burst, Shadow Cutter, Soul Grind, Shadow Web, and Death Sentence by <span>[damage]%</span>.
  `,
};
const DarkCloak = {
    name: "Dark Cloak",
    attr: "dark-cloak",
    prop: "darkCloak",
    row: 3,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    cooldown: [33, 33, 31, 29, 27, 25, 23, 21, 19, 17, 15],
    levelRequirement: [13, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
    values: {
        movement: [21, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39],
    },
    description: `
    Utilize dark magic to walk in shadows for <span>12</span> sec.
    While hidden, your movement speed increases
    by <span>[movement]%</span> and
    your spirit recovery increases by <span>2</span>.
    While hidden, you can ambush enemies, stunning them for <span>1.5</span> sec.
    Using a skill or an item, or being hit by an enemy, will take you out of hiding.
  `,
};
const MarkOfDeath = {
    name: "Mark of Death",
    attr: "mark-of-death",
    prop: "markOfDeath",
    row: 4,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    passive: true,
    levelRequirement: [25, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43],
    skillRequirements: [{
            skill: DarkCloak,
            level: 2,
        }],
    values: {
        damage: [1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    description: `
    Attacks against enemies with <span>30%</span> health or less
    have a <span>25%</span> to mark them for death for <span>6</span> sec.
    Marked enemies take <span>[damage]%</span> additional damage.
  `,
};
const DeathSentence = {
    name: "Death Sentence",
    attr: "death-sentence",
    prop: "deathSentence",
    row: 5,
    column: 3,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    attackType: "Long Range / Physical",
    cooldown: 45,
    levelRequirement: [34, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52],
    skillRequirements: [{
            skill: MarkOfDeath,
            level: 3,
        }],
    values: {
        damage: [83, 83, 88, 93, 98, 103, 108, 113, 118, 123, 128],
    },
    description: `
    Summon <span>3</span> mirror images and send them toward <span>3</span> enemies up to <span>8</span> m in front of you,
    dealing <span>[damage]%</span> dark damage each and shadow marking the enemies for death, regardless of health.
    These shadows marks last for <span>6</span> sec and increase damage taken by <span>1%</span>.
    Your mirror images' shadow marks stack with your marks of death.
    The mirror images will not attack the same target.
  `,
};
const FatalStrikes = {
    name: "Fatal Strikes",
    attr: "fatal-strikes",
    prop: "fatalStrikes",
    row: 3,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    cooldown: 60,
    levelRequirement: [16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34],
    values: {
        duration: [8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
    },
    description: `
    Utilize dark magic to strengthen your secret assassin techniques,
    allowing you to identify enemy weak spots.
    All attacks become critical hits for <span>[duration]</span> sec.
  `,
};
const ShadowWeb = {
    name: "Shadow Web",
    attr: "shadow-web",
    prop: "shadowWeb",
    row: 5,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    attackType: "Close Range / Physical",
    spirit: 28,
    cooldown: 7,
    levelRequirement: [37, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55],
    skillRequirements: [{
            skill: FatalStrikes,
            level: 2,
        }],
    values: {
        damage: [28, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46],
        additionalDamage: [14, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
        movement: [10, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28],
    },
    description: `
    Summon a mirror image and backstep <span>3</span> m. The clone explodes after <span>1</span> sec,
    tossing out a web that deals <span>[damage]%</span> dark energy
    to <span>5</span> enemies within <span>3</span> m and entangles them,
    reducing movement speed and jump power by <span>[movement]%</span> for <span>4</span> sec and dealing an
    additional <span>[additionalDamage]%</span> damage every sec for <span>4</span> sec.
    This skill can cancel other skills.
    Consumes <span>28</span> spirit.
  `,
};
const MirrorImageDarkBlade = {
    name: "Mirror Image: Dark Blade",
    attr: "mirror-image-dark-blade",
    prop: "mirrorImageDarkBlade",
    row: 6,
    column: 4,
    minLevel: 0,
    maxLevel: 10,
    element: "Dark",
    attackType: "Close Range / Physical",
    cooldown: 40,
    levelRequirement: [46, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64],
    skillRequirements: [{
            skill: ShadowWeb,
            level: 2,
        }],
    values: {
        damage: [236, 236, 252, 268, 284, 300, 316, 332, 348, 364, 380],
    },
    description: `
    Marks a <span>2.25</span> m radius spot on the ground with an insignia of darkness for <span>10</span> sec,
    dealing <span>[damage]%</span> dark damage to <span>3</span> enemies within the mark by sending a mirror image to attack them.
    This skill also brands enemies, reducing their accuracy by <span>20</span> for <span>10</span> sec.
    All attacks dealt to branded enemies have a <span>30%</span> chance to summon additional
    mirror images to attack them for <span>23%</span> dark damage <span>4</span> times.
    Summoned mirror images can only appear once every <span>1.5</span> sec.
    The accuracy reduction does not stack.
  `,
};

const AssassinSkills = /*#__PURE__*/Object.freeze({
  ShadowChaser: ShadowChaser,
  Dash: Dash,
  LuckyStars: LuckyStars,
  FragmentedStar: FragmentedStar,
  StarChaser: StarChaser,
  StarFlurry: StarFlurry,
  ThrownWeaponMastery: ThrownWeaponMastery,
  ShadowCutter: ShadowCutter,
  ShadowBurst: ShadowBurst,
  SoulGrind: SoulGrind,
  ShadowArts: ShadowArts,
  DarkCloak: DarkCloak,
  MarkOfDeath: MarkOfDeath,
  DeathSentence: DeathSentence,
  FatalStrikes: FatalStrikes,
  ShadowWeb: ShadowWeb,
  MirrorImageDarkBlade: MirrorImageDarkBlade
});

class AssassinComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.editable = false;
        this.extras = false;
        this.darkCloak = DarkCloak.minLevel;
        this.dash = Dash.minLevel;
        this.deathSentence = DeathSentence.minLevel;
        this.fatalStrikes = FatalStrikes.minLevel;
        this.fragmentedStar = FragmentedStar.minLevel;
        this.luckyStars = LuckyStars.minLevel;
        this.markOfDeath = MarkOfDeath.minLevel;
        this.mirrorImageDarkBlade = MirrorImageDarkBlade.minLevel;
        this.shadowArts = ShadowArts.minLevel;
        this.shadowBurst = ShadowBurst.minLevel;
        this.shadowChaser = ShadowChaser.minLevel;
        this.shadowCutter = ShadowCutter.minLevel;
        this.shadowWeb = ShadowWeb.minLevel;
        this.soulGrind = SoulGrind.minLevel;
        this.starChaser = StarChaser.minLevel;
        this.starFlurry = StarFlurry.minLevel;
        this.thrownWeaponMastery = ThrownWeaponMastery.minLevel;
        this.onSkillChanged = createEvent(this, "skillchanged", 7);
    }
    componentWillLoad() {
        processSkills(this, AssassinSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, AssassinSkills);
    }
    levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, AssassinSkills, skill);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, AssassinSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "assassin" }, renderLevelControls(this, AssassinSkills, this.editable, this.extras)));
    }
    static get watchers() { return {
        "extras": ["emitChangeEvent"]
    }; }
    static get style() { return ":host{display:block}"; }
}

export { AssassinComponent as ms_assassin };
