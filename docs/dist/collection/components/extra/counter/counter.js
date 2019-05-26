import { Rank } from "../../../global/values/_skillValues.interfaces";
import { MAX_POINTS_RANK_1, MAX_POINTS_RANK_2 } from "../../../global/values/_general";
export class CounterComponent {
    constructor() {
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
        },
        "points": {
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
            "attribute": "points",
            "reflect": true,
            "defaultValue": "0"
        }
    }; }
    static get states() { return {
        "_editor": {}
    }; }
}
