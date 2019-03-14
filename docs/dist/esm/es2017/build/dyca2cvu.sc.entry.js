import { h } from '../maplestory-skills.core.js';

class ChartComponent {
    componentDidLoad() {
        this.resize();
    }
    resize() {
        let parent = this.host.parentNode;
        if (parent.host)
            parent = parent.host;
        let parentWidth = parent.offsetWidth;
        let scale = parentWidth / 815;
        if (scale < 1) {
            this.host.style.transform = `scale(${scale})`;
            this.host.style.marginBottom = `-${770 - (770 * scale)}px`;
            this.host.style.marginRight = `-${815 - (815 * scale)}px`;
        }
        else {
            this.host.style.transform = null;
            this.host.style.marginBottom = null;
            this.host.style.marginRight = null;
        }
    }
    render() {
        return [
            h("style", { type: "text/css" }, `
        ms-chart {
          cursor: url(${this.publicPath}assets/cursor.png) 5 8, auto;
        }
        ms-chart:active {
          cursor: url(${this.publicPath}assets/cursor-down.png) 5 8, auto;
        }
        :host, :host(:hover), ms-chart {
          cursor: url(${this.publicPath}assets/cursor.png) 5 8, auto;
        }
        :host(:active) {
          cursor: url(${this.publicPath}assets/cursor-down.png) 5 8, auto;
        }
        .chart {
          background-image: url(${this.publicPath}assets/charts/chart.jpg);
        }
        .class-icon {
          background-image: url(${this.publicPath}assets/charts/${this.msClass}-icon.png)
        }
        .chart-class {
          background-image: url(${this.publicPath}assets/charts/${this.msClass}-lines.png);
        }
      `),
            h("ms-footer", null),
            h("div", { class: "chart" },
                h("div", { class: "class-icon" },
                    h("div", { class: "chart-class " + this.msClass },
                        h("slot", null))))
        ];
    }
    static get is() { return "ms-chart"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "host": {
            "elementRef": true
        },
        "msClass": {
            "type": String,
            "attr": "ms-class"
        },
        "publicPath": {
            "context": "publicPath"
        }
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "resize",
            "passive": true
        }]; }
    static get style() { return "\@import url(\"https://fonts.googleapis.com/css?family=Roboto:500\");.sc-ms-chart-h{display:block;width:815px;height:770px;position:relative;-webkit-transform-origin:top left;transform-origin:top left;font-size:16px;color:#fff;font-family:Roboto,Arial}.sc-ms-chart-h, .sc-ms-chart-h:active, _.sc-ms-chart:-ms-lang(x){cursor:auto}.chart.sc-ms-chart{position:absolute}.chart.sc-ms-chart, .class-icon.sc-ms-chart{width:100%;height:100%;background-repeat:no-repeat}.class-icon.sc-ms-chart{background-position:calc(50% + 34px) calc(50% - 18px)}.chart.sc-ms-chart > .class-icon.sc-ms-chart > div.sc-ms-chart{width:100%;height:100%;background-position:171px 88px;background-repeat:no-repeat}ms-footer.sc-ms-chart{margin-top:-30px;-webkit-transition:margin-top .3s ease-in-out;transition:margin-top .3s ease-in-out}.sc-ms-chart-h:hover   ms-footer.sc-ms-chart{margin-top:0}.sc-ms-chart-s > ms-skill{position:absolute}.sc-ms-chart-s > ms-skill[row=\"1\"]{top:4px}.sc-ms-chart-s > ms-skill[row=\"2\"]{top:132px}.sc-ms-chart-s > ms-skill[row=\"3\"]{top:260px}.sc-ms-chart-s > ms-skill[row=\"4\"]{top:388px}.sc-ms-chart-s > ms-skill[row=\"5\"]{top:516px}.sc-ms-chart-s > ms-skill[row=\"6\"]{top:644px}.sc-ms-chart-s > ms-skill[column=\"1\"]{left:138px}.sc-ms-chart-s > ms-skill[column=\"2\"]{left:318px}.sc-ms-chart-s > ms-skill[column=\"3\"]{left:498px}.sc-ms-chart-s > ms-skill[column=\"4\"]{left:678px}"; }
}

class FooterComponent {
    render() {
        return (h("a", { href: "https://bodinaren.github.io/maplestory-skills/", target: "_blank" }, "MapleStory 2 Skill Charts"));
    }
    static get is() { return "ms-footer"; }
    static get encapsulation() { return "shadow"; }
    static get style() { return ".sc-ms-footer-h{font-family:Roboto;position:absolute;top:100%;right:0;text-align:center;font-size:.7em;padding:0 5px 2px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#1c1c1c;border-right:1px solid #121212;-webkit-box-shadow:inset -1px 0 #222;box-shadow:inset -1px 0 #222}.sc-ms-footer-h, a.sc-ms-footer{color:#fff}a.sc-ms-footer{cursor:inherit}"; }
}

class IconComponent {
    constructor() {
        this.sp = false;
    }
    render() {
        return [
            h("img", { src: `${this.publicPath}assets/skills/${this.name}.png` }),
            this.sp && h("img", { src: `${this.publicPath}assets/sp.png` }),
        ];
    }
    static get is() { return "ms-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true
        },
        "publicPath": {
            "context": "publicPath"
        },
        "sp": {
            "type": Boolean,
            "attr": "sp",
            "reflectToAttr": true
        }
    }; }
    static get style() { return ".sc-ms-icon-h{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:43px;height:50px;-ms-flex-pack:center;justify-content:center}img.sc-ms-icon:nth-of-type(2){position:absolute;bottom:1px;left:-4px}"; }
}

class SkillComponent {
    constructor() {
        this.level = 0;
        this.extras = false;
        this.limitReached = false;
        this.locked = false;
        this.disabled = true;
        this.loop = false;
    }
    componentWillLoad() {
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
    hostData() { return { "passive": this.skill.passive }; }
    render() {
        return [
            h("style", null, `
        ms-skill .controls { background-image: url(${this.publicPath}assets/skill-bar.png); }
        :host .controls { background-image: url(${this.publicPath}assets/skill-bar.png); }

        ms-skill:not([passive]) .skill { background-image: url(${this.publicPath}assets/skill-shield.png); }
        :host(:not([passive])) .skill { background-image: url(${this.publicPath}assets/skill-shield.png); }

        ms-skill[passive] .skill { background-image: url(${this.publicPath}assets/skill-shield-passive.png); }
        :host([passive]) .skill { background-image: url(${this.publicPath}assets/skill-shield-passive.png); }

        ms-skill[locked] .skill:after { background-image: url(${this.publicPath}assets/skill-locked.png); }
        :host([locked]) .skill:after { background-image: url(${this.publicPath}assets/skill-locked.png); }

        ms-skill[required]:after { background-image: url(${this.publicPath}assets/skill-overlay.png); }
        :host([required]):after { background-image: url(${this.publicPath}assets/skill-overlay.png); }
      `),
            h("div", { class: "skill", onMouseEnter: () => this.showOverlay(), onMouseLeave: () => this.hideOverlay(), onClick: () => this.emitSkillClick() },
                h("ms-icon", { name: this.skill.attr, sp: this.skill.sp })),
            h("div", { class: "controls" },
                h("div", null,
                    h("button", { class: { "minus": true, "wrap": this.loop && this.level === this.skill.minLevel }, disabled: this.shouldDisableMinus(), onClick: () => this.minus(), onMouseEnter: () => this.showOverlay(-1), onMouseLeave: () => this.hideOverlay(), hidden: this.level === this.skill.minLevel && !this.loop },
                        h("img", { src: `${this.publicPath}assets/minus.png` }),
                        h("img", { src: `${this.publicPath}assets/minus-hover.png` }),
                        h("img", { src: `${this.publicPath}assets/minus-active.png` }),
                        h("img", { src: `${this.publicPath}assets/minus-wrap.png` }),
                        h("img", { src: `${this.publicPath}assets/minus-wrap-hover.png` }),
                        h("img", { src: `${this.publicPath}assets/minus-wrap-active.png` }))),
                h("span", null,
                    this.level,
                    "/",
                    this.skill.maxLevel),
                h("div", null,
                    h("button", { class: { "plus": true, "wrap": this.loop && (this.level === this.skill.maxLevel || this.limitReached) }, disabled: this.shouldDisablePlus(), onClick: () => this.plus(), onMouseEnter: () => this.showOverlay(+1), onMouseLeave: () => this.hideOverlay(), hidden: this.level === this.skill.maxLevel && !this.loop },
                        h("img", { src: `${this.publicPath}assets/plus.png` }),
                        h("img", { src: `${this.publicPath}assets/plus-hover.png` }),
                        h("img", { src: `${this.publicPath}assets/plus-active.png` }),
                        h("img", { src: `${this.publicPath}assets/plus-wrap.png` }),
                        h("img", { src: `${this.publicPath}assets/plus-wrap-hover.png` }),
                        h("img", { src: `${this.publicPath}assets/plus-wrap-active.png` })))),
            h("ms-skill-overlay", { hidden: !this.overlayLevel, skill: this.skill, extras: this.extras, level: this.overlayLevel || 1, class: this.skill.prop }),
        ];
    }
    shouldDisableMinus() {
        return this.disabled
            || this.locked
            || this.skill.minLevel === this.skill.maxLevel
            || (!this.loop && this.level === this.skill.minLevel)
            || (this.loop && this.limitReached && this.level === this.skill.minLevel);
    }
    shouldDisablePlus() {
        return this.disabled
            || this.locked
            || this.skill.minLevel === this.skill.maxLevel
            || (this.limitReached && (!this.loop || this.level === this.skill.minLevel));
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
    static get is() { return "ms-skill"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "column": {
            "type": Number,
            "attr": "column",
            "reflectToAttr": true,
            "mutable": true
        },
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "extras": {
            "type": Boolean,
            "attr": "extras"
        },
        "level": {
            "type": Number,
            "attr": "level",
            "reflectToAttr": true,
            "mutable": true,
            "watchCallbacks": ["skillChanged"]
        },
        "limitReached": {
            "type": Boolean,
            "attr": "limit-reached"
        },
        "locked": {
            "type": Boolean,
            "attr": "locked",
            "reflectToAttr": true
        },
        "loop": {
            "type": Boolean,
            "attr": "loop"
        },
        "overlayLevel": {
            "state": true
        },
        "publicPath": {
            "context": "publicPath"
        },
        "required": {
            "type": String,
            "attr": "required",
            "reflectToAttr": true
        },
        "row": {
            "type": Number,
            "attr": "row",
            "reflectToAttr": true,
            "mutable": true
        },
        "skill": {
            "type": "Any",
            "attr": "skill"
        }
    }; }
    static get events() { return [{
            "name": "levelchanged",
            "method": "onLevelChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "skillclicked",
            "method": "onSkillClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return ".sc-ms-skill-h{height:115px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.skill.sc-ms-skill, .sc-ms-skill-h{display:block;width:72px}.skill.sc-ms-skill{height:84px;background-repeat:no-repeat}.skill.sc-ms-skill > ms-icon.sc-ms-skill{display:block;position:absolute;left:14px;top:17px}.controls.sc-ms-skill{display:-ms-flexbox;display:flex;width:109px;height:36px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-left:-18.5px;margin-top:-4px}.controls.sc-ms-skill   span.sc-ms-skill{text-align:center;-ms-flex-positive:1;flex-grow:1;font-size:.9em}.controls.sc-ms-skill   div.sc-ms-skill{margin-top:4px;width:30px}.controls.sc-ms-skill   div.sc-ms-skill, _.sc-ms-skill:-ms-lang(x){margin-top:0}[locked].sc-ms-skill-h   .skill.sc-ms-skill:after{content:\"\"}[locked].sc-ms-skill-h   .skill.sc-ms-skill:after, [required].sc-ms-skill-h:after{position:absolute;width:52px;height:61px;top:11px;left:10px;pointer-events:none}[required].sc-ms-skill-h:after{content:attr(required);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#ff0;font-size:.8em}ms-skill-overlay.sc-ms-skill{position:absolute;margin:0 20px}[column=\"1\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [column=\"2\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill{left:100%}[column=\"3\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [column=\"4\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill{right:100%}[row=\"1\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [row=\"2\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [row=\"3\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill{top:0}[row=\"4\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [row=\"5\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill, [row=\"6\"].sc-ms-skill-h   ms-skill-overlay.sc-ms-skill{bottom:0}button.sc-ms-skill{width:30px;height:33px;background:none;border:none;padding:0;outline:0;cursor:inherit}.minus.sc-ms-skill   img.sc-ms-skill, .plus.sc-ms-skill   img.sc-ms-skill, _.sc-ms-skill:-ms-lang(x){cursor:pointer}button.sc-ms-skill:active{cursor:inherit}button.sc-ms-skill   img.sc-ms-skill{display:none}button.sc-ms-skill:not([disabled]):not([hidden]){display:inline-block}button.wrap.sc-ms-skill:not([disabled]):active   img.sc-ms-skill:nth-child(6), button.wrap.sc-ms-skill:not([disabled]):not(:active):hover   img.sc-ms-skill:nth-child(5), button.wrap.sc-ms-skill:not([disabled]):not(:active):not(:hover)   img.sc-ms-skill:nth-child(4), button.sc-ms-skill:not(.wrap):not([disabled]):active   img.sc-ms-skill:nth-child(3), button.sc-ms-skill:not(.wrap):not([disabled]):not(:active):hover   img.sc-ms-skill:nth-child(2), button.sc-ms-skill:not(.wrap):not([disabled]):not(:active):not(:hover)   img.sc-ms-skill:first-child{display:inline}.minus.sc-ms-skill{left:-1px}.plus.sc-ms-skill{right:0}"; }
}

let descriptionRegex = /\[(.*?)\]/;
class SkillOverlayComponent {
    constructor() {
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
        this.setRequirements();
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
    render() {
        return (h("div", null,
            h("h1", { class: this.skill.element, style: this.skill.element && {
                    "background-image": `url(${this.publicPath}assets/${this.skill.element.toLowerCase()}.jpg)`
                } },
                this.skill.name,
                this.skill.element &&
                    h("span", { class: "element" }, this.skill.element)),
            h("div", { class: "content" },
                h("div", null,
                    h("div", { class: "content-header" },
                        h("div", { class: "icon" }, this.skill.attr
                            && h("ms-icon", { slot: "icon", name: this.skill.attr, sp: this.skill.sp })
                            || h("slot", { name: "icon" })),
                        h("div", { class: "infoAndLevel" },
                            h("div", { class: "shortInfo" },
                                this.spirit && `Spirit ${this.spirit}`,
                                this.spirit && this.cooldown && ` / `,
                                this.cooldown && `Cooldown: ${this.cooldown} Sec`),
                            h("div", { class: "level" },
                                "Level ",
                                this.level || 1,
                                this.level === this.skill.maxLevel &&
                                    " | MAX"))),
                    this.requirements && this.requirements.length > 0 &&
                        h("div", { class: "requirements" },
                            h("p", null, "[Requirements]"),
                            this.requirements.map((req) => h("p", null, req)))),
                h("div", null,
                    h("p", null, this.skill.passive && "Passive" || "Active"),
                    this.skill.attackType &&
                        h("p", null, this.skill.attackType),
                    this.skill.weaponRequired &&
                        h("p", null,
                            "Weapon Required: ",
                            this.skill.weaponRequired)),
                h("div", { class: "description" }, this.description
                    && h("p", { innerHTML: this.description })
                    || h("p", null,
                        h("slot", { name: "description" }))),
                this.extraDescriptions && this.extraDescriptions.map((desc) => h("div", { class: "description extras" },
                    h("p", { innerHTML: desc }))))));
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
    static get is() { return "ms-skill-overlay"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "extras": {
            "type": Boolean,
            "attr": "extras"
        },
        "level": {
            "type": Number,
            "attr": "level",
            "reflectToAttr": true
        },
        "publicPath": {
            "context": "publicPath"
        },
        "skill": {
            "type": "Any",
            "attr": "skill"
        }
    }; }
    static get style() { return ".sc-ms-skill-overlay-h{color:#fff;z-index:100;width:350px;background-color:rgba(0,0,0,.9);border:1px solid #2c2c2c;pointer-events:none;font-size:.9em;border-radius:3px;overflow:hidden;-webkit-box-shadow:0 0 3px 1px #000;box-shadow:0 0 3px 1px #000}h1.sc-ms-skill-overlay{text-transform:none;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:1.3em;margin:0;padding:.5em .7em;background:#1f1f1f;font-weight:400;text-shadow:1px 1px 1px #000;background-size:cover!important}h1.Dark.sc-ms-skill-overlay{background:-webkit-gradient(linear,left top,right top,from(#1f0a1b),color-stop(60%,#1f0a1b),to(#3d1620));background:linear-gradient(90deg,#1f0a1b 0,#1f0a1b 60%,#3d1620)}h1.Electric.sc-ms-skill-overlay{background:-webkit-gradient(linear,left top,right top,from(#0a262a),color-stop(60%,#0a262a),to(#135764));background:linear-gradient(90deg,#0a262a 0,#0a262a 60%,#135764)}h1.Fire.sc-ms-skill-overlay{background:-webkit-gradient(linear,left top,right top,from(#3a0803),color-stop(60%,#3a0803),to(#6e2a11));background:linear-gradient(90deg,#3a0803 0,#3a0803 60%,#6e2a11)}h1.Holy.sc-ms-skill-overlay{background:-webkit-gradient(linear,left top,right top,from(#3c1e04),color-stop(60%,#3c1e04),to(#7c4d01));background:linear-gradient(90deg,#3c1e04 0,#3c1e04 60%,#7c4d01)}h1.Ice.sc-ms-skill-overlay{background:-webkit-gradient(linear,left top,right top,from(#021835),color-stop(60%,#021835),to(#153772));background:linear-gradient(90deg,#021835 0,#021835 60%,#153772)}h1.Toxic.sc-ms-skill-overlay{background:-webkit-gradient(linear,left top,right top,from(#20142c),color-stop(60%,#20142c),to(#3e1652));background:linear-gradient(90deg,#20142c 0,#20142c 60%,#3e1652)}h1.sc-ms-skill-overlay   .element.sc-ms-skill-overlay{font-size:.8em}.content.sc-ms-skill-overlay{padding:10px 0 5px}.content.sc-ms-skill-overlay > div.sc-ms-skill-overlay, .sc-ms-skill-overlay-s > :not(:empty){display:block;clear:both;padding:5px 15px 5px}.content.sc-ms-skill-overlay > div.sc-ms-skill-overlay:not(:first-of-type){border-top:1px solid #212121}.content.sc-ms-skill-overlay > div.sc-ms-skill-overlay:not(:last-child){border-bottom:1px solid #000}.sc-ms-skill-overlay-s > :not(:empty){border-top:1px solid #212121}.content-header.sc-ms-skill-overlay{display:-ms-flexbox;display:flex;margin-bottom:15px}.icon.sc-ms-skill-overlay{margin-right:15px;width:44px;height:50px;background-color:#434343;position:relative;padding:2px 5px;border-radius:3px}.icon.sc-ms-skill-overlay:before{content:\" \";position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px;z-index:-1;background:-webkit-gradient(linear,left top,left bottom,from(#1b1b1b),to(#343434));background:linear-gradient(180deg,#1b1b1b 0,#343434);border-radius:3px}.infoAndLevel.sc-ms-skill-overlay{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:5px}.level.sc-ms-skill-overlay{font-size:1.5em}.requirements.sc-ms-skill-overlay{clear:both}.requirements.sc-ms-skill-overlay   p.sc-ms-skill-overlay:not(:first-child){color:#ecc400}.requirements.sc-ms-skill-overlay   p.fail.sc-ms-skill-overlay{color:#ce3434}.sc-ms-skill-overlay-s > *, p.sc-ms-skill-overlay{color:#999;margin:1px 0;line-height:1.5em}.description.sc-ms-skill-overlay   span.sc-ms-skill-overlay{color:#09c}.extras.sc-ms-skill-overlay{font-style:italic}"; }
}

export { ChartComponent as MsChart, FooterComponent as MsFooter, IconComponent as MsIcon, SkillComponent as MsSkill, SkillOverlayComponent as MsSkillOverlay };
