import { h, Host, getAssetPath } from "@stencil/core";
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
    render() {
        return (h(Host, { passive: this.skill.passive },
            this.renderStyles(),
            h("div", { class: "skill", onMouseEnter: () => this.showOverlay(), onMouseLeave: () => this.hideOverlay(), onClick: () => this.emitSkillClick() },
                h("ms-icon", { name: this.skill.attr, sp: this.skill.sp })),
            h("div", { class: "controls" },
                h("div", null,
                    h("button", { class: { "minus": true, "wrap": this.loop && this.level === this.skill.minLevel }, disabled: this.shouldDisableMinus(), onClick: () => this.minus(), onMouseEnter: () => this.showOverlay(-1), onMouseLeave: () => this.hideOverlay(), hidden: this.level === this.skill.minLevel && !this.loop },
                        h("img", { src: getAssetPath(`assets/minus.png`) }),
                        h("img", { src: getAssetPath(`assets/minus-hover.png`) }),
                        h("img", { src: getAssetPath(`assets/minus-active.png`) }),
                        h("img", { src: getAssetPath(`assets/minus-wrap.png`) }),
                        h("img", { src: getAssetPath(`assets/minus-wrap-hover.png`) }),
                        h("img", { src: getAssetPath(`assets/minus-wrap-active.png`) }))),
                h("span", null,
                    this.level,
                    "/",
                    this.skill.maxLevel),
                h("div", null,
                    h("button", { class: { "plus": true, "wrap": this.loop && (this.level === this.skill.maxLevel || this.limitReached) }, disabled: this.shouldDisablePlus(), onClick: () => this.plus(), onMouseEnter: () => this.showOverlay(+1), onMouseLeave: () => this.hideOverlay(), hidden: this.level === this.skill.maxLevel && !this.loop },
                        h("img", { src: getAssetPath(`assets/plus.png`) }),
                        h("img", { src: getAssetPath(`assets/plus-hover.png`) }),
                        h("img", { src: getAssetPath(`assets/plus-active.png`) }),
                        h("img", { src: getAssetPath(`assets/plus-wrap.png`) }),
                        h("img", { src: getAssetPath(`assets/plus-wrap-hover.png`) }),
                        h("img", { src: getAssetPath(`assets/plus-wrap-active.png`) })))),
            h("ms-skill-overlay", { hidden: !this.overlayLevel, skill: this.skill, extras: this.extras, level: this.overlayLevel || 1, class: this.skill.prop })));
    }
    renderStyles() {
        return (h("style", { type: "text/css" }, `
        ms-skill .controls { background-image: url(${getAssetPath(`assets/skill-bar.png`)}); }
        :host .controls { background-image: url(${getAssetPath(`assets/skill-bar.png`)}); }

        ms-skill:not([passive]) .skill { background-image: url(${getAssetPath(`assets/skill-shield.png`)}); }
        :host(:not([passive])) .skill { background-image: url(${getAssetPath(`assets/skill-shield.png`)}); }

        ms-skill[passive] .skill { background-image: url(${getAssetPath(`assets/skill-shield-passive.png`)}); }
        :host([passive]) .skill { background-image: url(${getAssetPath(`assets/skill-shield-passive.png`)}); }

        ms-skill[locked] .skill:after { background-image: url(${getAssetPath(`assets/skill-locked.png`)}); }
        :host([locked]) .skill:after { background-image: url(${getAssetPath(`assets/skill-locked.png`)}); }

        ms-skill[required]:after { background-image: url(${getAssetPath(`assets/skill-overlay.png`)}); }
        :host([required]):after { background-image: url(${getAssetPath(`assets/skill-overlay.png`)}); }
      `));
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
    static get is() { return "ms-skill"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["skill.css"]
    }; }
    static get styleUrls() { return {
        "$": ["skill.css"]
    }; }
    static get properties() { return {
        "level": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "level",
            "reflect": true,
            "defaultValue": "0"
        },
        "skill": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "ISkill",
                "resolved": "ISkill",
                "references": {
                    "ISkill": {
                        "location": "import",
                        "path": "../../global/values/_skillValues.interfaces"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "extras": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "extras",
            "reflect": false,
            "defaultValue": "false"
        },
        "column": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "column",
            "reflect": true
        },
        "row": {
            "type": "number",
            "mutable": true,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "row",
            "reflect": true
        },
        "limitReached": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "limit-reached",
            "reflect": false,
            "defaultValue": "false"
        },
        "locked": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "locked",
            "reflect": true,
            "defaultValue": "false"
        },
        "required": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "required",
            "reflect": true
        },
        "disabled": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "disabled",
            "reflect": false,
            "defaultValue": "true"
        },
        "loop": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "loop",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "overlayLevel": {}
    }; }
    static get events() { return [{
            "method": "onLevelChanged",
            "name": "levelchanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }, {
            "method": "onSkillClicked",
            "name": "skillclicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "ISkill",
                "resolved": "ISkill",
                "references": {
                    "ISkill": {
                        "location": "import",
                        "path": "../../global/values/_skillValues.interfaces"
                    }
                }
            }
        }]; }
    static get watchers() { return [{
            "propName": "level",
            "methodName": "skillChanged"
        }]; }
}
