import { Component, Prop } from "@stencil/core";
import { MapleStoryClass } from "../editor/editor.interfaces";

@Component({
  tag: "ms-chart",
  styleUrls: ["chart.scss"],
  shadow: true
})
export class ChartComponent {

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Prop() msClass: MapleStoryClass;

  render() {
    return [
      <style type="text/css">{`
        ms-chart {
          cursor: url(${ this.publicPath }assets/cursor.png) 5 8, auto;
        }
        ms-chart:active {
          cursor: url(${ this.publicPath }assets/cursor-down.png) 5 8, auto;
        }
        :host, :host(:hover), ms-chart {
          cursor: url(${ this.publicPath }assets/cursor.png) 5 8, auto;
        }
        :host(:active) {
          cursor: url(${ this.publicPath }assets/cursor-down.png) 5 8, auto;
        }
        .chart {
          background-image: url(${ this.publicPath }assets/charts/chart.jpg);
        }
        .class-icon {
          background-image: url(${ this.publicPath }assets/charts/${ this.msClass }-icon.png)
        }
        .chart-class {
          background-image: url(${ this.publicPath }assets/charts/${ this.msClass }-lines.png);
        }
        .chart-class > * {
          background-image: url(${ this.publicPath }assets/skill-shield.png);
        }
        .chart-class > [passive] {
          background-image: url(${ this.publicPath }assets/skill-shield-passive.png);
        }
        .chart-class > *::after {
          background-image: url(${ this.publicPath }assets/skill-bar.png);
        }
        ::slotted(*) {
          background-image: url(${ this.publicPath }assets/skill-shield.png);
        }
        ::slotted([passive]) {
          background-image: url(${ this.publicPath }assets/skill-shield-passive.png);
        }
        ::slotted(*)::after {
          background-image: url(${ this.publicPath }assets/skill-bar.png);
        }
      `}</style>,
      <ms-footer></ms-footer>,
      <div class="chart">
        <div class="class-icon">
          <div class={ "chart-class " + this.msClass }>
            <slot></slot>
          </div>
        </div>
      </div>
    ];
  }
}
