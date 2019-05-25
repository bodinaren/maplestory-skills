import { Rank } from "../../../global/values/_skillValues.interfaces";
export class CounterComponent {
    constructor() {
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
    static get is() { return "ms-extra-counter"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "editor": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "editor",
            "reflect": false
        }
    }; }
    static get states() { return {
        "_editor": {},
        "_pointsLeft": {}
    }; }
}
