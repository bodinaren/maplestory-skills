import { e as registerInstance, d as h, h as Host } from './maplestory-skills-f2cfe95b.js';
import { a as Rank, c as MAX_POINTS_RANK_2, b as MAX_POINTS_RANK_1 } from './chunk-e93b9111.js';

class CounterComponent {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.points = 0;
    }
    componentDidLoad() {
        let el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
        }
        el.componentOnReady().then((editor) => {
            this._editor = editor;
            const rank = this._editor.rank;
            this.points = rank === Rank.Awakening ? MAX_POINTS_RANK_2 - 1 : MAX_POINTS_RANK_1 - 4;
            this._editor.addEventListener("skillchanged", (evt) => {
                this.updatePointsLeft(evt.detail);
            });
        });
    }
    updatePointsLeft(changeEvent) {
        const rank = this._editor.rank;
        const maxPoints = rank === Rank.Awakening ? MAX_POINTS_RANK_2 : MAX_POINTS_RANK_1;
        this.points = maxPoints - changeEvent.skills.reduce((prev, current) => {
            if (current.rank === rank) {
                return prev + current.level;
            }
            else {
                return prev;
            }
        }, 0);
    }
    render() {
        return this.points;
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
