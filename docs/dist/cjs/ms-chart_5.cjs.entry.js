'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const __chunk_1 = require('./chunk-b8c37304.js');
const __chunk_4 = require('./chunk-795f1d14.js');

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class ChartComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.rank = 1;
        this.styles = ChartComponent.getStyles.bind(this, this.msClass);
        this.onRankChanged = __chunk_1.createEvent(this, "rankChange", 7);
    }
    componentDidLoad() {
        this.resize();
    }
    resize() {
        let parent = this.host.parentNode;
        if (parent.host)
            parent = parent.host;
        let parentWidth = parent.offsetWidth;
        let scale = parentWidth / 928;
        if (scale < 1) {
            this.host.style.transform = `scale(${scale})`;
            this.host.style.marginBottom = `-${785 - (785 * scale)}px`;
            this.host.style.marginRight = `-${928 - (928 * scale)}px`;
        }
        else {
            this.host.style.transform = null;
            this.host.style.marginBottom = null;
            this.host.style.marginRight = null;
        }
    }
    changeRank(rank) {
        if (this.rank !== rank) {
            this.rank = rank;
            this.onRankChanged.emit(rank);
        }
    }
    render() {
        return (__chunk_1.h(__chunk_1.Host, null, __chunk_1.h("ms-footer", null), __chunk_1.h("div", { class: "chart-left" }, __chunk_1.h("div", { class: "chart-ranks" }, __chunk_1.h("a", { class: { "active": this.rank === 1 }, onClick: () => this.changeRank(1), href: "javascript:void(0)" }, this.rank !== 1 && __chunk_1.h("img", { src: __chunk_1.getAssetPath(`assets/${this.msClass}-rank-1.png`) }), this.rank === 1 && __chunk_1.h("img", { src: __chunk_1.getAssetPath(`assets/${this.msClass}-rank-1-active.png`) }), __chunk_1.h("span", null, "Rank 1 Skills")), __chunk_1.h("a", { class: { "active": this.rank === 2 }, onClick: () => this.changeRank(2), href: "javascript:void(0)" }, this.rank !== 2 && __chunk_1.h("img", { src: __chunk_1.getAssetPath(`assets/${this.msClass}-rank-2.png`) }), this.rank === 2 && __chunk_1.h("img", { src: __chunk_1.getAssetPath(`assets/${this.msClass}-rank-2-active.png`) }), __chunk_1.h("span", null, "Rank 2 Skills"))), this.rank === 1 &&
            __chunk_1.h("div", { class: "level-intervals" }, __chunk_1.h("div", null, "Level 1"), __chunk_1.h("div", null, "Level 10"), __chunk_1.h("div", null, "Level 20"), __chunk_1.h("div", null, "Level 30"), __chunk_1.h("div", null, "Level 40"), __chunk_1.h("div", null, "Level 50")), this.rank === 2 &&
            __chunk_1.h("div", { class: "level-intervals" }, __chunk_1.h("div", null, "Level 60"), __chunk_1.h("div", null, "Level 62"), __chunk_1.h("div", null, "Level 64"), __chunk_1.h("div", null, "Level 66"), __chunk_1.h("div", null, "Level 68"), __chunk_1.h("div", null, "Level 70"))), __chunk_1.h("div", { class: "chart rank-1" }, __chunk_1.h("div", { class: "class-icon" }, __chunk_1.h("div", { class: "chart-class" }, __chunk_1.h("slot", { name: "rank-1" })))), __chunk_1.h("div", { class: "chart rank-2" }, __chunk_1.h("slot", { name: "rank-2" }))));
    }
    static getStyles(msClass) {
        return `
      ms-chart, a {
        cursor: url(${__chunk_1.getAssetPath(`assets/cursor.png`)}) 5 8, auto;
      }
      :host, :host(:hover), ms-chart, a:hover {
        cursor: url(${__chunk_1.getAssetPath(`assets/cursor.png`)}) 5 8, auto;
      }
      ms-chart:active, a:active {
        cursor: url(${__chunk_1.getAssetPath(`assets/cursor-down.png`)}) 5 8, auto;
      }
      :host(:active) {
        cursor: url(${__chunk_1.getAssetPath(`assets/cursor-down.png`)}) 5 8, auto;
      }
      .chart-left {
        background-image: url(${__chunk_1.getAssetPath(`assets/charts/chart-left.jpg`)});
      }
      .chart-ranks a {
        background: url(${__chunk_1.getAssetPath(`assets/rank-holder.png`)}) center center no-repeat;
      }
      .chart-ranks a.active {
        background: url(${__chunk_1.getAssetPath(`assets/rank-holder-active.png`)}) center center no-repeat;
      }
      .chart.rank-1 {
        background-image: url(${__chunk_1.getAssetPath(`assets/charts/chart-rank-1.jpg`)});
      }
      .chart.rank-2 {
        background-image: url(${__chunk_1.getAssetPath(`assets/charts/chart-${msClass}.jpg`)});
      }
      .class-icon {
        background-image: url(${__chunk_1.getAssetPath(`assets/charts/${msClass}-icon.png`)})
      }
      .chart-class {
        background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/charts/${msClass}-lines.png`)});
      }
    `;
    }
    get host() { return __chunk_1.getElement(this); }
    static get style() { return ":host{display:block;width:928px;height:785px;position:relative;-webkit-transform-origin:top left;transform-origin:top left;font-size:16px;color:#fff;font-family:Roboto,Arial}:host,:host(:active),_:-ms-lang(x){cursor:auto}:host([rank=\"1\"]) .chart.rank-2,:host([rank=\"2\"]) .chart.rank-1{display:none}.chart-left{width:202px}.chart,.chart-left{position:absolute;height:100%}.chart{left:202px;width:726px}.class-icon{background-position:50%}.chart>.class-icon>div,.class-icon{width:100%;height:100%;background-repeat:no-repeat}.chart>.class-icon>div{background-position:100px 98px}.chart-ranks{position:absolute;top:4px;left:4px}.chart-ranks a{position:relative;display:block;width:124px;height:133px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.chart-ranks span{position:absolute;top:95px;left:0;width:100%;text-align:center;color:#fff;font-size:14px}.level-intervals{position:absolute;top:15px;left:143px;color:#686868;font-size:14px}.level-intervals>div{margin-bottom:107px}ms-footer{margin-top:-30px;-webkit-transition:margin-top .3s ease-in-out;transition:margin-top .3s ease-in-out}:host(:hover) ms-footer{margin-top:0}::slotted(ms-skill){position:absolute}::slotted(ms-skill[row=\"1\"]){top:14px}::slotted(ms-skill[row=\"2\"]){top:142px}::slotted(ms-skill[row=\"3\"]){top:270px}::slotted(ms-skill[row=\"4\"]){top:398px}::slotted(ms-skill[row=\"5\"]){top:526px}::slotted(ms-skill[row=\"6\"]){top:654px}::slotted(ms-skill[column=\"1\"]){left:67px}::slotted(ms-skill[column=\"2\"]){left:247px}::slotted(ms-skill[column=\"3\"]){left:427px}::slotted(ms-skill[column=\"4\"]){left:607px}"; }
}
__decorate([
    __chunk_4.ConstructibleStyle({ cacheKeyProperty: "msClass" })
], ChartComponent.prototype, "styles", void 0);

class FooterComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
    }
    render() {
        return (__chunk_1.h("a", { href: "https://bodinaren.github.io/maplestory-skills/", target: "_blank" }, "MapleStory 2 Skill Charts"));
    }
    static get style() { return ":host{font-family:Roboto,Arial;position:absolute;top:100%;right:0;text-align:center;font-size:11.2px;padding:0 5px 2px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#1c1c1c;border-right:1px solid #121212;-webkit-box-shadow:inset -1px 0 #222;box-shadow:inset -1px 0 #222}:host,a{color:#fff}a{cursor:inherit}"; }
}

class IconComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.sp = false;
    }
    render() {
        return (__chunk_1.h(__chunk_1.Host, null, __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/skills/${this.name}.png`) }), this.sp &&
            __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/sp.png`) })));
    }
    static get style() { return ":host{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:43px;height:50px;-ms-flex-pack:center;justify-content:center}img:nth-of-type(2){position:absolute;bottom:1px;left:-4px}"; }
}

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class SkillComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.level = 0;
        this.extras = false;
        this.limitReached = false;
        this.locked = false;
        this.disabled = true;
        this.loop = false;
        this.styles = SkillComponent.getStyles;
        this.onLevelChanged = __chunk_1.createEvent(this, "levelchanged", 7);
        this.onSkillClicked = __chunk_1.createEvent(this, "skillclicked", 7);
    }
    componentWillLoad() {
        if (!this.skill)
            return;
        if (this.level < this.skill.minLevel)
            this.level = this.skill.minLevel;
        if (this.level > this.skill.maxLevel)
            this.level = this.skill.maxLevel;
        if (!this.column)
            this.column = this.skill.column;
        if (!this.row)
            this.row = this.skill.row;
    }
    skillChanged() {
        this.onLevelChanged.emit(this.level);
    }
    render() {
        if (!this.skill)
            return;
        return (__chunk_1.h(__chunk_1.Host, { passive: this.skill.passive }, __chunk_1.h("div", { class: "skill", onMouseEnter: () => this.showOverlay(), onMouseLeave: () => this.hideOverlay(), onClick: () => this.emitSkillClick() }, __chunk_1.h("ms-icon", { name: this.skill.attr, sp: this.skill.sp })), __chunk_1.h("div", { class: "controls" }, __chunk_1.h("div", null, __chunk_1.h("button", { class: { "minus": true, "wrap": this.loop && this.level === this.skill.minLevel }, disabled: this.shouldDisableMinus(), onClick: () => this.minus(), onMouseEnter: () => this.showOverlay(-1), onMouseLeave: () => this.hideOverlay(), hidden: this.level === this.skill.minLevel && !this.loop }, __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/minus.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/minus-hover.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/minus-active.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/minus-wrap.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/minus-wrap-hover.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/minus-wrap-active.png`) }))), __chunk_1.h("span", null, this.level, "/", this.skill.maxLevel), __chunk_1.h("div", null, __chunk_1.h("button", { class: { "plus": true, "wrap": this.loop && (this.level === this.skill.maxLevel || this.limitReached) }, disabled: this.shouldDisablePlus(), onClick: () => this.plus(), onMouseEnter: () => this.showOverlay(+1), onMouseLeave: () => this.hideOverlay(), hidden: this.level === this.skill.maxLevel && !this.loop }, __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/plus.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/plus-hover.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/plus-active.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/plus-wrap.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/plus-wrap-hover.png`) }), __chunk_1.h("img", { src: __chunk_4.getOptimizedAssetPath(`assets/plus-wrap-active.png`) })))), __chunk_1.h("ms-skill-overlay", { hidden: !this.overlayLevel, skill: this.skill, extras: this.extras, level: this.overlayLevel || 1, class: this.skill.prop })));
    }
    shouldDisableMinus() {
        return this.disabled // skill are not editable
            // || this.locked // locked due to unmet requirements
            || this.skill.minLevel === this.skill.maxLevel // can't progress in this skill
            || (!this.loop && this.level === this.skill.minLevel) // can't decrease any further, unless we loop
            || (this.loop && this.limitReached && this.level === this.skill.minLevel); // if we loop, only disable if we're reached the limit and is at minimum (which would make this a plus button)
    }
    shouldDisablePlus() {
        return this.disabled // skill are not editable
            // || this.locked // locked due to unmet requirements
            || this.skill.minLevel === this.skill.maxLevel // can't progress in this skill
            || (this.limitReached && (!this.loop || this.level === this.skill.minLevel)); // limit is reached, unless we loop, then only if we can't decrease further
    }
    showOverlay(levelOffset = 0) {
        this.overlayLevel = this.level + levelOffset;
        if (this.overlayLevel === 0) {
            this.overlayLevel = 1;
        }
        else if (this.overlayLevel < 0) {
            this.overlayLevel = (this.loop ? this.skill.maxLevel : 1);
        }
        else if (this.overlayLevel > this.skill.maxLevel) {
            this.overlayLevel = (this.loop ? 1 : this.skill.maxLevel);
        }
    }
    hideOverlay() {
        this.overlayLevel = 0;
    }
    emitSkillClick() {
        this.onSkillClicked.emit(this.skill);
    }
    plus() {
        if (this.level < this.skill.maxLevel || this.loop) {
            this.level++;
            if (this.level > this.skill.maxLevel || (this.limitReached && this.level > this.skill.minLevel)) {
                this.level = this.skill.minLevel;
            }
            this.skillChanged();
        }
        this.showOverlay(+1);
    }
    minus() {
        if (this.level > this.skill.minLevel || this.loop) {
            this.level--;
            if (this.level < this.skill.minLevel) {
                this.level = this.skill.maxLevel;
            }
            this.skillChanged();
        }
        this.showOverlay(-1);
    }
    static getStyles() {
        return `
      ms-skill .controls { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-bar.png`)}); }
      :host .controls { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-bar.png`)}); }

      ms-skill:not([passive]) .skill { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-shield.png`)}); }
      :host(:not([passive])) .skill { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-shield.png`)}); }

      ms-skill[passive] .skill { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-shield-passive.png`)}); }
      :host([passive]) .skill { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-shield-passive.png`)}); }

      ms-skill[locked] .skill:after { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-locked.png`)}); }
      :host([locked]) .skill:after { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-locked.png`)}); }

      ms-skill[required]:after { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-overlay.png`)}); }
      :host([required]):after { background-image: url(${__chunk_4.getOptimizedAssetPath(`assets/skill-overlay.png`)}); }
    `;
    }
    static get watchers() { return {
        "level": ["skillChanged"]
    }; }
    static get style() { return ":host{height:115px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.skill,:host{display:block;width:72px}.skill{height:84px;background-repeat:no-repeat}.skill>ms-icon{display:block;position:absolute;left:14px;top:17px}.controls{display:-ms-flexbox;display:flex;width:109px;height:36px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-left:-18.5px;margin-top:-4px}.controls span{text-align:center;-ms-flex-positive:1;flex-grow:1;font-size:14.4px}.controls div{margin-top:4px;width:30px}.controls div,_:-ms-lang(x){margin-top:0}:host([locked]) .skill:after{content:\"\"}:host([locked]) .skill:after,:host([required]):after{position:absolute;width:52px;height:61px;top:11px;left:10px;pointer-events:none}:host([required]):after{content:attr(required);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#ff0;font-size:12.8px}ms-skill-overlay{position:absolute;margin:0 20px}:host([column=\"1\"]) ms-skill-overlay,:host([column=\"2\"]) ms-skill-overlay{left:100%}:host([column=\"3\"]) ms-skill-overlay,:host([column=\"4\"]) ms-skill-overlay{right:100%}:host([row=\"1\"]) ms-skill-overlay,:host([row=\"2\"]) ms-skill-overlay,:host([row=\"3\"]) ms-skill-overlay{top:0}:host([row=\"4\"]) ms-skill-overlay,:host([row=\"5\"]) ms-skill-overlay,:host([row=\"6\"]) ms-skill-overlay{bottom:0}button{width:30px;height:33px;background:none;border:none;padding:0;outline:0;cursor:inherit}.minus img,.plus img,_:-ms-lang(x){cursor:pointer}button:active{cursor:inherit}button img{display:none}button:not([disabled]):not([hidden]){display:inline-block}button.wrap:not([disabled]):active img:nth-child(6),button.wrap:not([disabled]):not(:active):hover img:nth-child(5),button.wrap:not([disabled]):not(:active):not(:hover) img:nth-child(4),button:not(.wrap):not([disabled]):active img:nth-child(3),button:not(.wrap):not([disabled]):not(:active):hover img:nth-child(2),button:not(.wrap):not([disabled]):not(:active):not(:hover) img:first-child{display:inline}.minus{left:-1px}.plus{right:0}:host-context(ms-chart) ms-skill-overlay.electricBlast{bottom:-100px}:host-context(ms-chart) ms-skill-overlay.magnumBlow{top:-75px}:host-context(ms-runeblade[sigil=flameSigil]) ms-skill-overlay.impact{top:-25px}:host-context(ms-runeblade[sigil=stormSigil]) ms-skill-overlay.impact{top:-50px}:host-context(ms-chart) ms-skill-overlay.lodestoneField{top:-75px}:host-context(ms-chart) ms-skill-overlay.playingWithFire{bottom:-55px}:host-context(ms-chart) ms-skill-overlay.archersSecrets{bottom:-20px}"; }
}
__decorate$1([
    __chunk_4.ConstructibleStyle()
], SkillComponent.prototype, "styles", void 0);

let descriptionRegex = /\{(.*?)\}/;
/**
 * @private
 */
class SkillOverlayComponent {
    constructor(hostRef) {
        __chunk_1.registerInstance(this, hostRef);
        this.level = 0;
        this.extras = false;
    }
    componentWillLoad() {
        this.refreshData();
    }
    componentWillUpdate() {
        this.refreshData();
    }
    refreshData() {
        if (this.skill) {
            this.setRequirements();
            this.setStamina();
            this.setSpirit();
            this.setCooldown();
            this.description = this.parseDescription(this.skill);
            this.extraDescriptions = undefined;
            if (this.extras && this.skill.extras) {
                this.extraDescriptions = this.skill.extras.map((extraDescription) => {
                    return this.parseDescription(extraDescription);
                });
            }
        }
    }
    render() {
        if (!this.skill)
            return;
        return (__chunk_1.h("div", null, __chunk_1.h("h1", { class: this.skill.element, style: this.skill.element && {
                "background": `url(${__chunk_1.getAssetPath(`assets/${this.skill.element.toLowerCase()}.jpg`)}), ${this.getGradient(this.skill.element)}`
            } }, this.skill.name, this.skill.element &&
            __chunk_1.h("span", { class: "element" }, this.skill.element)), __chunk_1.h("div", { class: "content" }, __chunk_1.h("div", null, __chunk_1.h("div", { class: "content-header" }, __chunk_1.h("div", { class: "icon" }, this.skill.attr
            && __chunk_1.h("ms-icon", { slot: "icon", name: this.skill.attr, sp: this.skill.sp })
            || __chunk_1.h("slot", { name: "icon" })), __chunk_1.h("div", { class: "infoAndLevel" }, __chunk_1.h("div", { class: "shortInfo" }, this.stamina && `Stamina ${this.stamina}`, this.spirit && `Spirit ${this.spirit}`, (this.stamina || this.spirit) && this.cooldown && ` / `, this.cooldown && `Cooldown: ${this.cooldown} Sec`), __chunk_1.h("div", { class: "level" }, "Level ", this.level || 1, this.level === this.skill.maxLevel &&
            " | MAX"))), this.requirements && this.requirements.length > 0 &&
            __chunk_1.h("div", { class: "requirements" }, __chunk_1.h("p", null, "[Requirements]"), this.requirements.map((req) => __chunk_1.h("p", null, req)))), __chunk_1.h("div", null, __chunk_1.h("p", null, this.skill.passive && "Passive" || "Active"), this.skill.attackType &&
            __chunk_1.h("p", null, this.skill.attackType), this.skill.weaponRequired &&
            __chunk_1.h("p", null, "Weapon Required: ", this.skill.weaponRequired)), __chunk_1.h("div", { class: "description" }, this.description
            && __chunk_1.h("p", { innerHTML: this.description })
            || __chunk_1.h("p", null, __chunk_1.h("slot", { name: "description" }))), this.extraDescriptions && this.extraDescriptions.map((desc) => __chunk_1.h("div", { class: "description extras" }, __chunk_1.h("p", { innerHTML: desc }))))));
    }
    setRequirements() {
        let requirements = [];
        if (this.skill.levelRequirement && this.skill.levelRequirement[this.level] > 0) {
            requirements.push(`Level ${this.skill.levelRequirement[this.level]}+`);
        }
        if (this.skill.skillRequirements) {
            Array.prototype.push.apply(requirements, this.skill.skillRequirements.map((req) => `${req.skill.name} [Level ${req.level}+]`));
        }
        this.requirements = requirements;
    }
    setStamina() {
        if (Array.isArray(this.skill.stamina)) {
            this.stamina = this.skill.stamina[this.level];
        }
        else if (!this.spirit) {
            this.stamina = this.skill.stamina;
        }
    }
    setSpirit() {
        if (Array.isArray(this.skill.spirit)) {
            this.spirit = this.skill.spirit[this.level];
        }
        else if (!this.spirit) {
            this.spirit = this.skill.spirit;
        }
    }
    setCooldown() {
        if (Array.isArray(this.skill.cooldown)) {
            this.cooldown = this.skill.cooldown[this.level];
        }
        else if (!this.cooldown) {
            this.cooldown = this.skill.cooldown;
        }
    }
    parseDescription(skillDescription) {
        let desc = skillDescription.description;
        let match;
        while (match = descriptionRegex.exec(desc)) {
            let data = skillDescription.values && skillDescription.values[match[1]];
            if (!data)
                data = skillDescription[match[1]];
            desc = desc.replace(match[0], data[this.level].toString());
        }
        return desc;
    }
    getGradient(element) {
        switch (element.toLowerCase()) {
            case "dark": return "linear-gradient(to bottom, #E29CD844 0%, #E29CD844 2px, #00000000 3px), linear-gradient(to right, #2F1A2B 0%, #2F1A2B 55%, #3C1C27 100%)";
            case "electric": return "linear-gradient(to bottom, #72E3F944 0%, #72E3F944 2px, #00000000 3px), linear-gradient(to right, #1B3439 0%, #1B3439 55%, #1A606A 100%)";
            case "fire": return "linear-gradient(to bottom, #FF714944 0%, #FF714944 2px, #00000000 3px), linear-gradient(to right, #3E1213 0%, #3E1213 56%, #712D16 100%)";
            case "holy": return "linear-gradient(to bottom, #FFA70F44 0%, #FFA70F44 2px, #00000000 3px), linear-gradient(to right, #4A2C12 0%, #4A2C12 60%, #865A0C 100%)";
            case "ice": return "linear-gradient(to bottom, #77D1FF44 0%, #77D1FF44 2px, #00000000 3px), linear-gradient(to right, #132845 0%, #132845 55%, #153772 100%)";
            case "toxic": return "linear-gradient(to bottom, #B96ADD44 0%, #B96ADD44 2px, #00000000 3px), linear-gradient(to right, #302239 0%, #302239 55%, #44235C 100%)";
        }
    }
    static get style() { return ":host{color:#fff;z-index:100;width:350px;background-color:rgba(0,0,0,.9);border:1px solid #2c2c2c;pointer-events:none;font-size:12.5px;border-radius:3px;overflow:hidden;-webkit-box-shadow:0 0 3px 1px #000;box-shadow:0 0 3px 1px #000}h1{text-transform:none;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:18.7px;margin:0;padding:.5em .7em;background:#1f1f1f;font-weight:400;text-shadow:1px 1px 1px #000;background-size:cover!important}h1 .element{font-size:15px}.content{padding:10px 0 5px}.content>div,::slotted(:not(:empty)){display:block;clear:both;padding:5px 15px 5px}.content>div:not(:first-of-type){border-top:1px solid #212121}.content>div:not(:last-child){border-bottom:1px solid #000}::slotted(:not(:empty)){border-top:1px solid #212121}.content-header{display:-ms-flexbox;display:flex;margin-bottom:15px}.icon{margin-right:15px;width:44px;height:50px;background-color:#434343;position:relative;padding:2px 5px;border-radius:3px}.icon:before{content:\" \";position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px;z-index:-1;background:-webkit-gradient(linear,left top,left bottom,from(#1b1b1b),to(#343434));background:linear-gradient(180deg,#1b1b1b 0,#343434);border-radius:3px}.infoAndLevel{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:5px}.level{font-size:21.6px}.requirements{clear:both}.requirements p:not(:first-child){color:#ecc400}.requirements p.fail{color:#ce3434}::slotted(*),p{color:#999;margin:1px 0;line-height:1.5em}.description span{color:#09c}.description mark{color:#873c29;background:none}.description h3{color:#ecc400;font-size:1em;font-weight:400;margin:0}.extras{font-style:italic}"; }
}

exports.ms_chart = ChartComponent;
exports.ms_footer = FooterComponent;
exports.ms_icon = IconComponent;
exports.ms_skill = SkillComponent;
exports.ms_skill_overlay = SkillOverlayComponent;
