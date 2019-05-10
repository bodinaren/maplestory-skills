import { h, Host, Component, Prop, Listen, getAssetPath, Element } from "@stencil/core";
import { ConstructibleStyle } from "stencil-constructible-style";

@Component({
  tag: "ms-chart",
  styleUrls: ["chart.css"],
  shadow: true
})
export class ChartComponent {

  @Prop() msClass: string;

  @Element() host: HTMLMsChartElement;

  @ConstructibleStyle({ cacheKeyProperty: "msClass" }) styles = ChartComponent.getStyles.bind(this, this.msClass);

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
    return (
      <Host>
        <ms-footer></ms-footer>
        <div class="chart">
          <div class="class-icon">
            <div class={ "chart-class " + this.msClass }>
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }

  private static getStyles(msClass: string): string {
    return `
      ms-chart {
        cursor: url(${ getAssetPath(`assets/cursor.png`) }) 5 8, auto;
      }
      ms-chart:active {
        cursor: url(${ getAssetPath(`assets/cursor-down.png`) }) 5 8, auto;
      }
      :host, :host(:hover), ms-chart {
        cursor: url(${ getAssetPath(`assets/cursor.png`) }) 5 8, auto;
      }
      :host(:active) {
        cursor: url(${ getAssetPath(`assets/cursor-down.png`) }) 5 8, auto;
      }
      .chart {
        background-image: url(${ getAssetPath(`assets/charts/chart.jpg`) });
      }
      .class-icon {
        background-image: url(${ getAssetPath(`assets/charts/${ msClass }-icon.png`) })
      }
      .chart-class {
        background-image: url(${ getAssetPath(`assets/charts/${ msClass }-lines.png`) });
      }
    `;
  }
}
