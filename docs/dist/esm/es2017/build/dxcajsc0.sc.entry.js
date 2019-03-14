import { h } from '../maplestory-skills.core.js';

import { a as processSkills, b as toSkillChangeEventObject, c as renderLevelControls } from './chunk-b671a9ab.js';

const DarkAura = {
    name: "Dark Aura",
    attr: "dark-aura",
    prop: "darkAura",
    row: 1,
    column: 3,
    minLevel: 1,
    maxLevel: 1,
    element: "Dark",
    passive: true,
    description: `
    Your latent dark power restores <span>10</span> spirit every second.
    Dark Aura stacks on hit, up to once per second, up to <span>10</span> times total.
    Each stack increases the amount restored by an additional <span>1</span> spirit.
  `,
};
const XSlash = {
    name: "X Slash",
    attr: "x-slash",
    prop: "xSlash",
    row: 1,
    column: 4,
    minLevel: 1,
    maxLevel: 1,
    attackType: "Close Range / Physical",
    weaponRequired: "Two-handed Greatsword",
    description: `
    Swing your greatsword in an X as you charge forward <span>4.5</span> m,
    dealing <span>75%</span> damage <span>2</span> times to <span>5</span> enemies in your path.
    This skill can cancel other skills.
    You will be immune to knockback while this skill is active.
    Consumes <span>40</span> stamina.
  `,
};
const RagingSlash = {
    name: "Raging Slash",
    attr: "raging-slash",
    prop: "ragingSlash",
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
    description: `
    Swing your weapon to deal <span>[damage]%</span> dark damage
    to <span>5</span> enemies up to <span>3</span> m in front of you.
    Keep pressing the key to trigger a <span>3-hit</span> combo.
    The attack speed increases with each hit.
    The third hit is a double strike, and when finished you start over from the beginning.
    During the attack, press a direction key to move <span>0.6</span> m.
  `,
};
const DeathSpin = {
    name: "Death Spin",
    attr: "death-spin",
    prop: "deathSpin",
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
    description: `
    Spin your greatsword, dealing <span>[damage]%</span> dark damage
    to <span>8</span> enemies within <span>3</span> m.
    During the attack, press a direction key to move <span>1.6</span> m.
    The distance decreases to <span>1.2</span> m on your second spin and
    to <span>0.8</span> m on your third and subsequent spins.
    Consumes <span>4</span> spirit.
  `,
};
const GroundBreaker = {
    name: "Ground Breaker",
    attr: "ground-breaker",
    prop: "groundBreaker",
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
    description: `
    Old Ten's specialty move. Strike down your greatsword to deal <span>[damage]%</span> damage
    to <span>8</span> enemies within <span>3</span> m and knock them back <span>1.5</span> m.
    If Dark Aura activates, damage increases by <span>16%</span> per stack.
    You will be immune to knockback while this skill is active.
    Consumes <span>40</span> spirit.
  `,
};
const DarkMight = {
    name: "Dark Might",
    attr: "dark-might",
    prop: "darkMight",
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
    description: `
    Temporarily amplify Dark Aura to increase attack speed, physical attack, and magic attack by
    <span>[increase]%</span> for <span>10</span> sec and restore <span>1</span> additional spirit on hit.
    This skill can only be used by consuming Dark Aura at max stacks.
  `,
};
const VoidSlash = {
    name: "Void Slash",
    attr: "void-slash",
    prop: "voidSlash",
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
    description: `
    Swing your greatsword upward to deal <span>[firstDamage]%</span> dark damage
    to <span>5</span> enemies up to <span>3</span> m in front of you.
    Press the skill key again to trigger a <span>2-hit</span> combo.
    The second part is two quick swings,
    dealing <span>[secondDamage]%</span> dark damage <span>2</span> times
    to <span>5</span> enemies up to <span>2</span> m in front of you.
    On the first hit, press a direction key to move <span>4</span> m and attack.
    On the second hit, the skill lasts while the skill key is held down.
    You will be immune to knockback while this skill is active.
    The first hit consumes <span>24</span> spirit and the second hit consumes <span>1</span> spirit.
  `,
};
const DarkBreaker = {
    name: "Dark Breaker",
    attr: "dark-breaker",
    prop: "darkBreaker",
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
    description: `
    Gather dark power into your greatsword and strike down with great force to
    deal <span>[damage]%</span> dark damage
    to <span>8</span> enemies within <span>3</span> m.
    The impact area resonates with darkness for <span>5</span> sec,
    dealing <span>[dot]%</span> dark damage
    to <span>8</span> enemies in range every second.
    This skill can only be used by consuming Dark Aura at max stacks.
    You will be immune to knockback while this skill is active.
  `,
};
const WarriorsInstinct = {
    name: "Warrior's Instinct",
    attr: "warriors-instinct",
    prop: "warriorsInstinct",
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
    description: `
    Surrender yourself to your natural combat instinct.
    Increases physical resistance by <span>[resistance]</span> and
    piercing by <span>[piercing]%</span>.
  `,
};
const Bloodlust = {
    name: "Bloodlust",
    attr: "bloodlust",
    prop: "bloodlust",
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
    description: `
    Thrust your darkened greatsword into <span>2</span> enemies up to <span>3</span> m in front of you,
    then pull it out to deal <span>[damage]%</span> damage <span>2</span> times.
    The stab attack is always a critical, and pulling the sword out steals health from the enemy,
    restoring <span>[health]%</span> of your max health.
    In PvP zones, the amount restored is halved.
  `,
};
const AdrenalineRush = {
    name: "Adrenaline Rush",
    attr: "adrenaline-rush",
    prop: "adrenalineRush",
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
    description: `
    Your Dark Aura goes crazy as you're pushed into a corner, increasing the amount of spirit restored
    by <span>[stage1]</span> when your health is at <span>60%</span> or less,
    by <span>[stage2]</span> at <span>45%</span> or less,
    and by <span>[stage3]</span> at <span>30%</span> or less.
  `,
};
const BloodPrice = {
    name: "Blood Price",
    attr: "blood-price",
    prop: "bloodPrice",
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
    description: `
    Darkness fuels you, increasing your damage by <span>[damage]%</span> but
    depleting your health by <span>1%</span> on hit for <span>30</span> sec.
    This effect will stop consuming health when you get to <span>25%</span> health.
  `,
};
const InhumanEndurance = {
    name: "Inhuman Endurance",
    attr: "inhuman-endurance",
    prop: "inhumanEndurance",
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
    description: `
    Dire conditions strengthen your resolve. Your physical resistance and magic resistance increase
    by <span>[resistance]</span> when your health is less than <span>30%</span>.
  `,
};
const GreatswordMastery = {
    name: "Greatsword Mastery",
    attr: "greatsword-mastery",
    prop: "greatswordMastery",
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
    description: `
    Ten's lessons on asceticism increase your skill with a greatsword.
    Your weapon attack increases by <span>[attack]%</span> when you have a greatsword equipped.
  `,
};
const Intimidation = {
    name: "Intimidation",
    attr: "intimidation",
    prop: "intimidation",
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
    description: `
    Overwhelm enemies with a show of force, dealing <span>[damage]%</span> damage
    to <span>5</span> enemies within <span>3</span> m.
    Enemies lost the will to fight, reducing their physical attack and magic attack by <span>[attack]%</span>
    and their movement speed and jump power by <span>[movement]%</span> for <span>4</span> sec.
    When at max stacks, Dark Aura is consumed to trigger a more powerful version of this skill.
    Some powerful enemies are immune.
  `,
};
const DeepWounds = {
    name: "Deep Wounds",
    attr: "deep-wounds",
    prop: "deepWounds",
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
    description: `
    Critical attacks inflicted with a greatsword make the enemy bleed,
    dealing <span>[damage]%</span> damage every second for <span>10</span> sec.
  `,
};
const Earthquake = {
    name: "Earthquake",
    attr: "earthquake",
    prop: "earthquake",
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
    description: `
    Drive your greatsword into the ground, creating an earthquake <span>9</span> tiles around you for <span>5</span> sec.
    Enemies caught in the quake are stunned and take <span>[damage]%</span> damage every second.
  `,
};

var BerserkerSkills = /*#__PURE__*/Object.freeze({
  DarkAura: DarkAura,
  XSlash: XSlash,
  RagingSlash: RagingSlash,
  DeathSpin: DeathSpin,
  GroundBreaker: GroundBreaker,
  DarkMight: DarkMight,
  VoidSlash: VoidSlash,
  DarkBreaker: DarkBreaker,
  WarriorsInstinct: WarriorsInstinct,
  Bloodlust: Bloodlust,
  AdrenalineRush: AdrenalineRush,
  BloodPrice: BloodPrice,
  InhumanEndurance: InhumanEndurance,
  GreatswordMastery: GreatswordMastery,
  Intimidation: Intimidation,
  DeepWounds: DeepWounds,
  Earthquake: Earthquake
});

class BerserkerComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.adrenalineRush = AdrenalineRush.minLevel;
        this.bloodPrice = BloodPrice.minLevel;
        this.bloodlust = Bloodlust.minLevel;
        this.darkAura = DarkAura.minLevel;
        this.darkBreaker = DarkBreaker.minLevel;
        this.darkMight = DarkMight.minLevel;
        this.deathSpin = DeathSpin.minLevel;
        this.deepWounds = DeepWounds.minLevel;
        this.earthquake = Earthquake.minLevel;
        this.greatswordMastery = GreatswordMastery.minLevel;
        this.groundBreaker = GroundBreaker.minLevel;
        this.inhumanEndurance = InhumanEndurance.minLevel;
        this.intimidation = Intimidation.minLevel;
        this.ragingSlash = RagingSlash.minLevel;
        this.voidSlash = VoidSlash.minLevel;
        this.warriorsInstinct = WarriorsInstinct.minLevel;
        this.xSlash = XSlash.minLevel;
    }
    componentWillLoad() {
        processSkills(this, BerserkerSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, BerserkerSkills);
    }
    async levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, BerserkerSkills);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, BerserkerSkills));
    }
    render() {
        return (h("ms-chart", { msClass: "berserker" }, renderLevelControls(this, BerserkerSkills, this.editable, this.extras)));
    }
    static get is() { return "ms-berserker"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "adrenalineRush": {
            "type": Number,
            "attr": "adrenaline-rush",
            "mutable": true
        },
        "bloodlust": {
            "type": Number,
            "attr": "bloodlust",
            "mutable": true
        },
        "bloodPrice": {
            "type": Number,
            "attr": "blood-price",
            "mutable": true
        },
        "darkAura": {
            "type": Number,
            "attr": "dark-aura",
            "mutable": true
        },
        "darkBreaker": {
            "type": Number,
            "attr": "dark-breaker",
            "mutable": true
        },
        "darkMight": {
            "type": Number,
            "attr": "dark-might",
            "mutable": true
        },
        "deathSpin": {
            "type": Number,
            "attr": "death-spin",
            "mutable": true
        },
        "deepWounds": {
            "type": Number,
            "attr": "deep-wounds",
            "mutable": true
        },
        "earthquake": {
            "type": Number,
            "attr": "earthquake",
            "mutable": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "extras": {
            "type": Boolean,
            "attr": "extras",
            "watchCallbacks": ["emitChangeEvent"]
        },
        "getData": {
            "method": true
        },
        "greatswordMastery": {
            "type": Number,
            "attr": "greatsword-mastery",
            "mutable": true
        },
        "groundBreaker": {
            "type": Number,
            "attr": "ground-breaker",
            "mutable": true
        },
        "inhumanEndurance": {
            "type": Number,
            "attr": "inhuman-endurance",
            "mutable": true
        },
        "intimidation": {
            "type": Number,
            "attr": "intimidation",
            "mutable": true
        },
        "ragingSlash": {
            "type": Number,
            "attr": "raging-slash",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "voidSlash": {
            "type": Number,
            "attr": "void-slash",
            "mutable": true
        },
        "warriorsInstinct": {
            "type": Number,
            "attr": "warriors-instinct",
            "mutable": true
        },
        "xSlash": {
            "type": Number,
            "attr": "x-slash",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "skillchanged",
            "method": "onSkillChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ms-berserker-h{display:block}"; }
}

export { BerserkerComponent as MsBerserker };
