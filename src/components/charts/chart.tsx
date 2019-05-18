import { h, Host, Component, Prop, Listen, Element, getAssetPath, Event, EventEmitter } from "@stencil/core";
import { ConstructibleStyle } from "stencil-constructible-style";
import { getOptimizedAssetPath } from "../../global/utils";

@Component({
  tag: "ms-chart",
  styleUrls: ["chart.css"],
  shadow: true
})
export class ChartComponent {

  @Element() host: HTMLMsChartElement;

  @Prop({ reflectToAttr: true }) msClass: string;
  @Prop() rank: number = 1;

  @Event({ eventName: "rankChange" }) onRankChanged: EventEmitter<number>;

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
      this.host.style.transform = `scale(${scale})`;
      this.host.style.marginBottom = `-${770 - (770 * scale)}px`;
      this.host.style.marginRight = `-${815 - (815 * scale)}px`;
    } else {
      this.host.style.transform = null;
      this.host.style.marginBottom = null;
      this.host.style.marginRight = null;
    }
  }

  private changeRank(rank: number) {
    if (this.rank !== rank) {
      this.rank = rank;
      this.onRankChanged.emit(rank);
    }
  }

  render() {
    return (
      <Host>
        <ms-footer></ms-footer>
        <div class="chart-left">
          <div class="chart-ranks">
            <a class={{ "active": this.rank === 1 }} onClick={ () => this.changeRank(1) } href="javascript:void(0)">
              { this.rank !== 1 && <img src={ getAssetPath(`assets/${ this.msClass }-rank-1.png`) } /> }
              { this.rank === 1 && <img src={ getAssetPath(`assets/${ this.msClass }-rank-1-active.png`) } /> }
              
              <span>Rank 1 Skills</span>
            </a>
            <a class={{ "active": this.rank === 2 }} onClick={ () => this.changeRank(2) } href="javascript:void(0)">
              { this.rank !== 2 && <img src={ getAssetPath(`assets/${ this.msClass }-rank-2.png`) } /> }
              { this.rank === 2 && <img src={ getAssetPath(`assets/${ this.msClass }-rank-2-active.png`) } /> }
              <span>Rank 2 Skills</span>
            </a>
          </div>

          { this.rank === 1 &&
            <div class="level-intervals">
              <div>Level 1</div>
              <div>Level 10</div>
              <div>Level 20</div>
              <div>Level 30</div>
              <div>Level 40</div>
              <div>Level 50</div>
            </div>
          }
          { this.rank === 2 &&
            <div class="level-intervals">
              <div>Level 60</div>
              <div>Level 62</div>
              <div>Level 64</div>
              <div>Level 66</div>
              <div>Level 68</div>
              <div>Level 70</div>
            </div>
          }
        </div>
        { this.rank === 1 &&
          <div class="chart rank-1">
            <div class="class-icon">
              <div class="chart-class">
                <slot name="rank-1"></slot>
              </div>
            </div>
          </div>
        }
        { this.rank === 2 && 
          <div class="chart rank-2">
            <slot name="rank-2"></slot>
          </div>
        }
      </Host>
    );
  }

  private static getStyles(msClass: string): string {
    return `
      ms-chart, a {
        cursor: url(${ getAssetPath(`assets/cursor.png`) }) 5 8, auto;
      }
      :host, :host(:hover), ms-chart, a:hover {
        cursor: url(${ getAssetPath(`assets/cursor.png`) }) 5 8, auto;
      }
      ms-chart:active, a:active {
        cursor: url(${ getAssetPath(`assets/cursor-down.png`) }) 5 8, auto;
      }
      :host(:active) {
        cursor: url(${ getAssetPath(`assets/cursor-down.png`) }) 5 8, auto;
      }
      .chart-left {
        background-image: url(${ getAssetPath(`assets/charts/chart-left.jpg`) });
      }
      .chart-ranks a {
        background: url(${ getAssetPath(`assets/rank-holder.png`) }) center center no-repeat;
      }
      .chart-ranks a.active {
        background: url(${ getAssetPath(`assets/rank-holder-active.png`) }) center center no-repeat;
      }
      .chart.rank-1 {
        background-image: url(${ getAssetPath(`assets/charts/chart-rank-1.jpg`) });
      }
      .chart.rank-2 {
        background-image: url(${ getAssetPath(`assets/charts/chart-${ msClass }.jpg`) });
      }
      .class-icon {
        background-image: url(${ getAssetPath(`assets/charts/${ msClass }-icon.png`) })
      }
      .chart-class {
        background-image: url(${ getOptimizedAssetPath(`assets/charts/${ msClass }-lines.png`) });
      }
    `;
  }
}
