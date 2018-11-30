import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "ms-skill",
  styleUrl: "skill.scss",
  shadow: true
})
export class SkillComponent {

  @Prop({ reflectToAttr: true, mutable: true }) level: number = 0;
  @Prop() min: number;
  @Prop() max: number;
  @Prop() limitReached: boolean = false;
  @Prop({ reflectToAttr: true }) locked: boolean = false;
  @Prop({ reflectToAttr: true }) required: string;
  @Prop() disabled: boolean = true;

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
    return [
      <style>{`
        ms-skill .controls {
          background-image: url(${ this.publicPath }assets/skill-bar.png);
        }
        ms-skill .skill *:first-child {
          background-image: url(${ this.publicPath }assets/skill-shield.png);
        }
        ms-skill .skill *[passive]:first-child {
          background-image: url(${ this.publicPath }assets/skill-shield-passive.png);
        }
        ms-skill[locked] .skill:after {
          background-image: url(${ this.publicPath }assets/skill-locked.png);
        }
        :host .controls {
          background-image: url(${ this.publicPath }assets/skill-bar.png);
        }
        ::slotted(*) {
          background-image: url(${ this.publicPath }assets/skill-shield.png);
        }
        ::slotted([passive]) {
          background-image: url(${ this.publicPath }assets/skill-shield-passive.png);
        }
        :host([locked]) .skill:after {
          background-image: url(${ this.publicPath }assets/skill-locked.png);
        }
        :host([required]):after {
          background-image: url(${ this.publicPath }assets/skill-overlay.png);
        }
      `}</style>,
      <div class="skill">
        <slot></slot>
      </div>,
      <div class="controls">
        <div>
          <button class="minus" disabled={ this.disabled || this.locked } onClick={ () => this.minus() } hidden={ this.level === this.min }>
            <img src={ `${ this.publicPath }assets/minus.png` } />
            <img src={ `${ this.publicPath }assets/minus-hover.png` } />
            <img src={ `${ this.publicPath }assets/minus-active.png` } />
          </button>
        </div>
        <span>{ this.level }/{ this.max }</span>
        <div>
          <button class="plus" disabled={ this.disabled || this.locked || this.limitReached } onClick={ () => this.plus() } hidden={ this.level === this.max }>
            <img src={ `${ this.publicPath }assets/plus.png` } />
            <img src={ `${ this.publicPath }assets/plus-hover.png` } />
            <img src={ `${ this.publicPath }assets/plus-active.png` } />
          </button>
        </div>
      </div>
    ];
  }
}

