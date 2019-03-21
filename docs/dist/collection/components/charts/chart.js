export class ChartComponent {
    componentDidLoad() {
        this.resize();
    }
    resize() {
        let parent = this.host.parentNode;
        if (parent.host)
            parent = parent.host;
        let parentWidth = parent.offsetWidth;
        let scale = parentWidth / 815;
        if (scale < 1) {
            this.host.style.transform = `scale(${scale})`;
            this.host.style.marginBottom = `-${770 - (770 * scale)}px`;
            this.host.style.marginRight = `-${815 - (815 * scale)}px`;
        }
        else {
            this.host.style.transform = null;
            this.host.style.marginBottom = null;
            this.host.style.marginRight = null;
        }
    }
    render() {
        return [
            this.renderStyles(),
            h("ms-footer", null),
            h("div", { class: "chart" },
                h("div", { class: "class-icon" },
                    h("div", { class: "chart-class " + this.msClass },
                        h("slot", null))))
        ];
    }
    renderStyles() {
        return (h("style", { type: "text/css" }, `
        ms-chart {
          cursor: url(${this.publicPath}assets/cursor.png) 5 8, auto;
        }
        ms-chart:active {
          cursor: url(${this.publicPath}assets/cursor-down.png) 5 8, auto;
        }
        :host, :host(:hover), ms-chart {
          cursor: url(${this.publicPath}assets/cursor.png) 5 8, auto;
        }
        :host(:active) {
          cursor: url(${this.publicPath}assets/cursor-down.png) 5 8, auto;
        }
        .chart {
          background-image: url(${this.publicPath}assets/charts/chart.jpg);
        }
        .class-icon {
          background-image: url(${this.publicPath}assets/charts/${this.msClass}-icon.png)
        }
        .chart-class {
          background-image: url(${this.publicPath}assets/charts/${this.msClass}-lines.png);
        }
      `));
    }
    static get is() { return "ms-chart"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "host": {
            "elementRef": true
        },
        "msClass": {
            "type": String,
            "attr": "ms-class"
        },
        "publicPath": {
            "context": "publicPath"
        }
    }; }
    static get listeners() { return [{
            "name": "window:resize",
            "method": "resize",
            "passive": true
        }]; }
    static get style() { return "/**style-placeholder:ms-chart:**/"; }
}
