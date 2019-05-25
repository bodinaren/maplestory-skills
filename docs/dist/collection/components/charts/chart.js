var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h, Host, getAssetPath } from "@stencil/core";
import { ConstructibleStyle } from "stencil-constructible-style";
import { getOptimizedAssetPath } from "../../global/utils";
export class ChartComponent {
    constructor() {
        this.rank = 1;
        this.styles = ChartComponent.getStyles.bind(this, this.msClass);
    }
    componentDidLoad() {
        this.resize();
    }
    resize() {
        let parent = this.host.parentNode;
        if (parent.host)
            parent = parent.host;
        let parentWidth = parent.offsetWidth;
        let scale = parentWidth / 928;
        if (scale < 1) {
            this.host.style.transform = `scale(${scale})`;
            this.host.style.marginBottom = `-${785 - (785 * scale)}px`;
            this.host.style.marginRight = `-${928 - (928 * scale)}px`;
        }
        else {
            this.host.style.transform = null;
            this.host.style.marginBottom = null;
            this.host.style.marginRight = null;
        }
    }
    changeRank(rank) {
        if (this.rank !== rank) {
            this.rank = rank;
            this.onRankChanged.emit(rank);
        }
    }
    render() {
        return (h(Host, null,
            h("ms-footer", null),
            h("div", { class: "chart-left" },
                h("div", { class: "chart-ranks" },
                    h("a", { class: { "active": this.rank === 1 }, onClick: () => this.changeRank(1), href: "javascript:void(0)" },
                        this.rank !== 1 && h("img", { src: getAssetPath(`assets/${this.msClass}-rank-1.png`) }),
                        this.rank === 1 && h("img", { src: getAssetPath(`assets/${this.msClass}-rank-1-active.png`) }),
                        h("span", null, "Rank 1 Skills")),
                    h("a", { class: { "active": this.rank === 2 }, onClick: () => this.changeRank(2), href: "javascript:void(0)" },
                        this.rank !== 2 && h("img", { src: getAssetPath(`assets/${this.msClass}-rank-2.png`) }),
                        this.rank === 2 && h("img", { src: getAssetPath(`assets/${this.msClass}-rank-2-active.png`) }),
                        h("span", null, "Rank 2 Skills"))),
                this.rank === 1 &&
                    h("div", { class: "level-intervals" },
                        h("div", null, "Level 1"),
                        h("div", null, "Level 10"),
                        h("div", null, "Level 20"),
                        h("div", null, "Level 30"),
                        h("div", null, "Level 40"),
                        h("div", null, "Level 50")),
                this.rank === 2 &&
                    h("div", { class: "level-intervals" },
                        h("div", null, "Level 60"),
                        h("div", null, "Level 62"),
                        h("div", null, "Level 64"),
                        h("div", null, "Level 66"),
                        h("div", null, "Level 68"),
                        h("div", null, "Level 70"))),
            this.rank === 1 &&
                h("div", { class: "chart rank-1" },
                    h("div", { class: "class-icon" },
                        h("div", { class: "chart-class" },
                            h("slot", { name: "rank-1" })))),
            this.rank === 2 &&
                h("div", { class: "chart rank-2" },
                    h("slot", { name: "rank-2" }))));
    }
    static getStyles(msClass) {
        return `
      ms-chart, a {
        cursor: url(${getAssetPath(`assets/cursor.png`)}) 5 8, auto;
      }
      :host, :host(:hover), ms-chart, a:hover {
        cursor: url(${getAssetPath(`assets/cursor.png`)}) 5 8, auto;
      }
      ms-chart:active, a:active {
        cursor: url(${getAssetPath(`assets/cursor-down.png`)}) 5 8, auto;
      }
      :host(:active) {
        cursor: url(${getAssetPath(`assets/cursor-down.png`)}) 5 8, auto;
      }
      .chart-left {
        background-image: url(${getAssetPath(`assets/charts/chart-left.jpg`)});
      }
      .chart-ranks a {
        background: url(${getAssetPath(`assets/rank-holder.png`)}) center center no-repeat;
      }
      .chart-ranks a.active {
        background: url(${getAssetPath(`assets/rank-holder-active.png`)}) center center no-repeat;
      }
      .chart.rank-1 {
        background-image: url(${getAssetPath(`assets/charts/chart-rank-1.jpg`)});
      }
      .chart.rank-2 {
        background-image: url(${getAssetPath(`assets/charts/chart-${msClass}.jpg`)});
      }
      .class-icon {
        background-image: url(${getAssetPath(`assets/charts/${msClass}-icon.png`)})
      }
      .chart-class {
        background-image: url(${getOptimizedAssetPath(`assets/charts/${msClass}-lines.png`)});
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
            "reflect": true
        },
        "rank": {
            "type": "number",
            "mutable": false,
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
            "attribute": "rank",
            "reflect": false,
            "defaultValue": "1"
        }
    }; }
    static get events() { return [{
            "method": "onRankChanged",
            "name": "rankChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            }
        }]; }
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
