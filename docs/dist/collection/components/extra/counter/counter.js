export class CounterComponent {
    constructor() {
        this._pointsLeft = 68;
    }
    componentDidLoad() {
        let el = document.getElementById(this.editor);
        if (!el) {
            el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
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
