import { h, Component, Prop, Element, Listen, getAssetPath } from "@stencil/core";

@Component({
  tag: "ms-chart",
  styleUrls: ["chart.css"],
  shadow: true
})
export class ChartComponent {

  @Prop() msClass: string;

  @Element() host: HTMLMsChartElement;

  componentDidLoad() {
    this.resize();
  }

  @Listen("resize", { target: "window" })
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
      this.renderStyles(),
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

  private renderStyles() {
    return (
      <style type="text/css">{`
        ms-chart {
          cursor: url(${ getAssetPath(`cursor.png`) }) 5 8, auto;
        }
        ms-chart:active {
          cursor: url(${ getAssetPath(`cursor-down.png`) }) 5 8, auto;
        }
        :host, :host(:hover), ms-chart {
          cursor: url(${ getAssetPath(`cursor.png`) }) 5 8, auto;
        }
        :host(:active) {
          cursor: url(${ getAssetPath(`cursor-down.png`) }) 5 8, auto;
        }
        .chart {
          background-image: url(${ getAssetPath(`charts/chart.jpg`) });
        }
        .class-icon {
          background-image: url(${ getAssetPath(`charts/${ this.msClass }-icon.png`) })
        }
        .chart-class {
          background-image: url(${ getAssetPath(`charts/${ this.msClass }-lines.png`) });
        }
      `}</style>
    );
  }
}
