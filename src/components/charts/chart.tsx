import { h, Host, Component, Prop, Listen, getAssetPath, Element } from "@stencil/core";
// import { ConstructibleStyle } from "stencil-constructible-style";
import { ConstructibleStyle } from "../../global/constructable-style";


declare global {
  export interface CSSStyleSheet {
    replaceSync(cssText: string): void;
    replace(cssText: string): Promise<CSSStyleSheet>;
  }
}

@Component({
  tag: "ms-chart",
  styleUrls: ["chart.css"],
  shadow: true
})
export class ChartComponent {

  @Prop() msClass: string;

  @Element() host: HTMLMsChartElement;

  @ConstructibleStyle({ cacheKeyProperty: "msClass" }) styles = ChartComponent.getStyles(this.msClass);

  componentDidLoad() {
    this.resize();
  }

  @Listen("resize", { target: "window" })
  resize() {
    let host = this.host; //getElement(this);
    let parent = host.parentNode as any;
    if (parent.host) parent = parent.host;

    let parentWidth = parent.offsetWidth;

    let scale = parentWidth / 815;

    if (scale < 1) {
      host.style.transform = `scale(${ scale })`;
      host.style.marginBottom = `-${ 770 - (770 * scale) }px`;
      host.style.marginRight = `-${ 815 - (815 * scale) }px`;
    } else {
      host.style.transform = null;
      host.style.marginBottom = null;
      host.style.marginRight = null;
    }
  }

  render() {
    return (
      <Host>
        {/* <style>{ ChartComponent.getStyles(this.msClass) }</style> */}
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
