export class IconComponent {
    constructor() {
        this.sp = false;
    }
    render() {
        return [
            h("img", { src: `${this.publicPath}assets/skills/${this.name}.png` }),
            this.sp && h("img", { src: `${this.publicPath}assets/sp.png` }),
        ];
    }
    static get is() { return "ms-icon"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "name": {
            "type": String,
            "attr": "name",
            "reflectToAttr": true
        },
        "publicPath": {
            "context": "publicPath"
        },
        "sp": {
            "type": Boolean,
            "attr": "sp",
            "reflectToAttr": true
        }
    }; }
    static get style() { return "/**style-placeholder:ms-icon:**/"; }
}
