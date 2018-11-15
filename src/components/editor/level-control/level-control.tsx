import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "ms-level-control",
  styleUrl: "level-control.scss",
  shadow: true
})
export class LevelControlComponent {

  @Prop({ reflectToAttr: true, mutable: true }) level: number = 0;
  @Prop() min: number;
  @Prop() max: number;

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
      <div class={{
             "minus": true,
             "disabled": this.level <= this.min,
           }}
           onClick={ () => this.minus() }>
      </div>,
      <div class={{
             "plus": true,
             "disabled": this.level >= this.max,
           }}
           onClick={ () => this.plus() }>
      </div>
    ]);
  }
}

