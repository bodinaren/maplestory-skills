import { e as registerInstance, d as h, h as Host } from './maplestory-skills-fe8c7252.js';
import { a as Rank } from './chunk-7c277b0f.js';

class CounterComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._pointsLeft = 0;
    }
    componentDidLoad() {
        let el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
        }
        el.componentOnReady().then((editor) => {
            this._editor = editor;
            const rank = this._editor.rank;
            this._pointsLeft = rank === Rank.Awakening ? 14 : 68;
            this._editor.addEventListener("skillchanged", (evt) => {
                console.log("skillchanged");
                this.updatePointsLeft(evt.detail);
            });
        });
    }
    updatePointsLeft(changeEvent) {
        const rank = this._editor.rank;
        const maxPoints = rank === Rank.Awakening ? 15 : 72;
        this._pointsLeft = maxPoints - changeEvent.skills.reduce((prev, current) => {
            if (current.rank === rank) {
                return prev + current.level;
            }
            else {
                return prev;
            }
        }, 0);
    }
    render() {
        return this._pointsLeft;
    }
}

class OutletComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this._skills = { rank: 1, skills: [] };
    }
    componentDidLoad() {
        let el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
        }
        this._tagName = el.tagName.toLowerCase();
        el.componentOnReady().then((editor) => {
            this._editor = editor;
            this._editor.addEventListener("skillchanged", (evt) => {
                this._skills = evt.detail;
            });
        });
    }
    render() {
        if (!this._editor)
            return;
        return (h(Host, null, h("slot", { name: "first" }), h("slot", null), this.getTag(), h("slot", { name: "last" })));
    }
    getTag() {
        let extras = "";
        if (this._editor.extras)
            extras = " extras";
        let props = this.getProperties(this._skills);
        if (props)
            props = " " + props;
        return `<${this._tagName} rank="${this._editor.rank}${extras}${props}></${this._tagName}>`;
    }
    getProperties(changeEvent) {
        let properties = changeEvent.skills.filter((skillChange) => {
            return skillChange.level > skillChange.minLevel;
        }).map((skillChange) => {
            return `${skillChange.attr}="${skillChange.level}"`;
        }).join(" ");
        if (changeEvent.other) {
            properties += " " + changeEvent.other.map((o) => `${o.attr}="${o.value}"`);
        }
        return properties;
    }
}

export { CounterComponent as ms_extra_counter, OutletComponent as ms_extra_outlet };
