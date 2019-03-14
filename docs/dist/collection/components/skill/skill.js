export class SkillComponent {
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
    static get style() { return "/**style-placeholder:ms-skill:**/"; }
}
