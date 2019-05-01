import { h, Host, getAssetPath } from "@stencil/core";
export class IconComponent {
    constructor() {
        this.sp = false;
    }
    render() {
        return (h(Host, null,
            h("img", { src: getAssetPath(`assets/skills/${this.name}.png`) }),
            this.sp &&
                h("img", { src: getAssetPath(`assets/sp.png`) })));
    }
    static get is() { return "ms-icon"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get styleUrls() { return {
        "$": ["icon.css"]
    }; }
    static get properties() { return {
        "name": {
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
            "attribute": "name",
            "reflect": true
        },
        "sp": {
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
            "attribute": "sp",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
