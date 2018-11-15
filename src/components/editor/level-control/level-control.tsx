import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "ms-level-control",
  styleUrl: "level-control.scss",
  assetsDir: "assets",
  shadow: true
})
export class LevelControlComponent {

  @Prop({ reflectToAttr: true, mutable: true }) level: number = 0;
  @Prop() min: number;
  @Prop() max: number;

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Event({ eventName: "levelchanged" }) onLevelChanged: EventEmitter<number>;

  componentWillLoad() {
    if (this.level < this.min) this.level = this.min;
    if (this.level > this.max) this.level = this.max;
  }

  private plus() {
    if (this.level < this.max) {
      this.level++;
      this.onLevelChanged.emit(this.level);
    }
  }

  private minus() {
    if (this.level > this.min) {
      this.level--;
      this.onLevelChanged.emit(this.level);
    }
  }

  render() {
    return ([
      <div class="minus" onClick={ () => this.minus() }>
        { this.level > this.min &&
          <img src={ this.publicPath + `assets/minus.png` } />
        }
      </div>,
      <div class="plus" onClick={ () => this.plus() }>
        { this.level < this.max &&
          <img src={ this.publicPath + `assets/plus.png` } />
        }
      </div>
    ]);
  }
}

