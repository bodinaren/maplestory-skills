import { Component, Prop, Element, Listen } from "@stencil/core";

@Component({
  tag: "ms-chart",
  styleUrls: ["chart.css"],
  shadow: true
})
export class ChartComponent {

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Prop() msClass: string;

  @Element() host: HTMLStencilElement;

  componentDidLoad() {
    this.resize();
  }

  @Listen("window:resize")
  resize() {
    let parent = this.host.parentNode as any;
    if (parent.host) parent = parent.host;

    let parentWidth = parent.offsetWidth;

    let scale = parentWidth / 815;

    if (scale < 1) {
      this.host.style.transform = `scale(${ scale })`;
      this.host.style.marginBottom = `-${ 770 - (770 * scale) }px`;
      this.host.style.marginRight = `-${ 815 - (815 * scale) }px`;
    } else {
      this.host.style.transform = null;
      this.host.style.marginBottom = null;
      this.host.style.marginRight = null;
    }
  }

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
