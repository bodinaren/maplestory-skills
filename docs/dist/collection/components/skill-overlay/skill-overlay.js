import { h, getAssetPath } from "@stencil/core";
let descriptionRegex = /\{(.*?)\}/;
/**
 * @private
 */
export class SkillOverlayComponent {
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
        return (h("div", null,
            h("h1", { class: this.skill.element, style: this.skill.element && {
                    "background": `url(${getAssetPath(`assets/${this.skill.element.toLowerCase()}.jpg`)}), ${this.getGradient(this.skill.element)}`
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
                                this.stamina && `Stamina ${this.stamina}`,
                                this.spirit && `Spirit ${this.spirit}`,
                                (this.stamina || this.spirit) && this.cooldown && ` / `,
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
    static get is() { return "ms-skill-overlay"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["skill-overlay.css"]
    }; }
    static get styleUrls() { return {
        "$": ["skill-overlay.css"]
    }; }
    static get properties() { return {
        "level": {
            "type": "number",
            "mutable": false,
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
        }
    }; }
}
