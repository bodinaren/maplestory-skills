var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host, getAssetPath } from "@stencil/core";
// import { ConstructibleStyle } from "stencil-constructible-style";
import { ConstructibleStyle } from "../../global/constructable-style";
export class ChartComponent {
    constructor() {
        this.styles = ChartComponent.getStyles(this.msClass);
    }
    componentDidLoad() {
        this.resize();
    }
    resize() {
        let host = this.host; //getElement(this);
        let parent = host.parentNode;
        if (parent.host)
            parent = parent.host;
        let parentWidth = parent.offsetWidth;
        let scale = parentWidth / 815;
        if (scale < 1) {
            host.style.transform = `scale(${scale})`;
            host.style.marginBottom = `-${770 - (770 * scale)}px`;
            host.style.marginRight = `-${815 - (815 * scale)}px`;
        }
        else {
            host.style.transform = null;
            host.style.marginBottom = null;
            host.style.marginRight = null;
        }
    }
    render() {
        return (h(Host, null,
            h("ms-footer", null),
            h("div", { class: "chart" },
                h("div", { class: "class-icon" },
                    h("div", { class: "chart-class " + this.msClass },
                        h("slot", null))))));
    }
    static getStyles(msClass) {
        return `
      ms-chart {
        cursor: url(${getAssetPath(`assets/cursor.png`)}) 5 8, auto;
      }
      ms-chart:active {
        cursor: url(${getAssetPath(`assets/cursor-down.png`)}) 5 8, auto;
      }
      :host, :host(:hover), ms-chart {
        cursor: url(${getAssetPath(`assets/cursor.png`)}) 5 8, auto;
      }
      :host(:active) {
        cursor: url(${getAssetPath(`assets/cursor-down.png`)}) 5 8, auto;
      }
      .chart {
        background-image: url(${getAssetPath(`assets/charts/chart.jpg`)});
      }
      .class-icon {
        background-image: url(${getAssetPath(`assets/charts/${msClass}-icon.png`)})
      }
      .chart-class {
        background-image: url(${getAssetPath(`assets/charts/${msClass}-lines.png`)});
      }
    `;
    }
    static get is() { return "ms-chart"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["chart.css"]
    }; }
    static get styleUrls() { return {
        "$": ["chart.css"]
    }; }
    static get properties() { return {
        "msClass": {
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
            "attribute": "ms-class",
            "reflect": false
        }
    }; }
    static get elementRef() { return "host"; }
    static get listeners() { return [{
            "name": "resize",
            "method": "resize",
            "target": "window",
            "capture": false,
            "passive": true
        }]; }
}
__decorate([
    ConstructibleStyle({ cacheKeyProperty: "msClass" })
], ChartComponent.prototype, "styles", void 0);
