let descriptionRegex = /\[(.*?)\]/;
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
    static get style() { return "/**style-placeholder:ms-skill-overlay:**/"; }
}
