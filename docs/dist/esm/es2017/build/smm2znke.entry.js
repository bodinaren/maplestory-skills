import { h } from '../maplestory-skills.core.js';

class CounterComponent {
    constructor() {
        this._pointsLeft = 68;
    }
    componentDidLoad() {
        let el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-thief,ms-wizard");
        }
        el.componentOnReady().then((editor) => {
            this._editor = editor;
            this._editor.addEventListener("skillchanged", (evt) => {
                this.updatePointsLeft(evt.detail);
            });
        });
    }
    updatePointsLeft(changeEvent) {
        this._pointsLeft = 72 - changeEvent.skills.reduce((prev, current) => {
            return prev + current.level;
        }, 0);
    }
    render() {
        return this._pointsLeft;
    }
    static get is() { return "ms-extra-counter"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_editor": {
            "state": true
        },
        "_pointsLeft": {
            "state": true
        },
        "editor": {
            "type": String,
            "attr": "editor"
        }
    }; }
}

class OutletComponent {
    constructor() {
        this._skills = { skills: [] };
    }
    componentDidLoad() {
        let el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-thief,ms-wizard");
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
        return [
            h("slot", { name: "first" }),
            h("slot", null),
            this.getTag(),
            h("slot", { name: "last" })
        ];
    }
    getTag() {
        let extras = "";
        if (this._editor.extras)
            extras = " extras";
        let props = this.getProperties(this._skills);
        if (props)
            props = " " + props;
        return `<${this._tagName}${extras}${props}></${this._tagName}>`;
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
    static get is() { return "ms-extra-outlet"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "_editor": {
            "state": true
        },
        "_skills": {
            "state": true
        },
        "_tagName": {
            "state": true
        },
        "editor": {
            "type": String,
            "attr": "editor"
        }
    }; }
}

export { CounterComponent as MsExtraCounter, OutletComponent as MsExtraOutlet };
