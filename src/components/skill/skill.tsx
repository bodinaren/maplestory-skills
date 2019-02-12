import { Component, Prop, Event, EventEmitter, State, Watch } from "@stencil/core";
import { ISkill } from "../../global/values/_skillValues.interfaces";

@Component({
  tag: "ms-skill",
  styleUrl: "skill.css",
  shadow: true
})
export class SkillComponent {

  @Prop({ reflectToAttr: true, mutable: true }) level: number = 0;

  @Prop() skill: ISkill;
  @Prop() extras: boolean = false;

  @Prop({ reflectToAttr: true, mutable: true }) column: number;
  @Prop({ reflectToAttr: true, mutable: true }) row: number;

  @Prop() limitReached: boolean = false;
  @Prop({ reflectToAttr: true }) locked: boolean = false;
  @Prop({ reflectToAttr: true }) required: string;
  @Prop() disabled: boolean = true;
  @Prop() loop: boolean = false;

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Event({ eventName: "levelchanged" }) onLevelChanged: EventEmitter<number>;
  @Event({ eventName: "skillclicked" }) onSkillClicked: EventEmitter<ISkill>;

  @State() private overlayLevel: number;

  componentWillLoad() {
    if (this.level < this.skill.minLevel) this.level = this.skill.minLevel;
    if (this.level > this.skill.maxLevel) this.level = this.skill.maxLevel;

    if (!this.column) this.column = this.skill.column;
    if (!this.row) this.row = this.skill.row;
  }

  @Watch("level")
  private skillChanged() {
    this.onLevelChanged.emit(this.level);
  }

  hostData() { return { "passive": this.skill.passive }; }

  render() {
    return [
      <style>{`
        ms-skill .controls { background-image: url(${ this.publicPath }assets/skill-bar.png); }
        :host .controls { background-image: url(${ this.publicPath }assets/skill-bar.png); }

        ms-skill:not([passive]) .skill { background-image: url(${ this.publicPath }assets/skill-shield.png); }
        :host(:not([passive])) .skill { background-image: url(${ this.publicPath }assets/skill-shield.png); }

        ms-skill[passive] .skill { background-image: url(${ this.publicPath }assets/skill-shield-passive.png); }
        :host([passive]) .skill { background-image: url(${ this.publicPath }assets/skill-shield-passive.png); }

        ms-skill[locked] .skill:after { background-image: url(${ this.publicPath }assets/skill-locked.png); }
        :host([locked]) .skill:after { background-image: url(${ this.publicPath }assets/skill-locked.png); }

        ms-skill[required]:after { background-image: url(${ this.publicPath }assets/skill-overlay.png); }
        :host([required]):after { background-image: url(${ this.publicPath }assets/skill-overlay.png); }
      `}</style>,
      <div class="skill"
           onMouseEnter={ () => this.showOverlay() }
           onMouseLeave={ () => this.hideOverlay() }
           onClick={ () => this.emitSkillClick() }>
        <ms-icon name={ this.skill.attr } sp={ this.skill.sp }></ms-icon>
      </div>,
      <div class="controls">
        <div>
          <button class={{ "minus": true, "wrap": this.loop && this.level === this.skill.minLevel }}
                  disabled={ this.disabled || this.locked }
                  onClick={ () => this.minus() }
                  onMouseEnter={ () => this.showOverlay(-1) }
                  onMouseLeave={ () => this.hideOverlay() }
                  hidden={ this.level === this.skill.minLevel && !this.loop }>
            <img src={ `${ this.publicPath }assets/minus.png` } />
            <img src={ `${ this.publicPath }assets/minus-hover.png` } />
            <img src={ `${ this.publicPath }assets/minus-active.png` } />
            <img src={ `${ this.publicPath }assets/minus-wrap.png` } />
            <img src={ `${ this.publicPath }assets/minus-wrap-hover.png` } />
            <img src={ `${ this.publicPath }assets/minus-wrap-active.png` } />
          </button>
        </div>
        <span>{ this.level }/{ this.skill.maxLevel }</span>
        <div>
          <button class={{ "plus": true, "wrap": this.loop && this.level === this.skill.maxLevel }}
                  disabled={ this.disabled || this.locked || this.limitReached }
                  onClick={ () => this.plus() }
                  onMouseEnter={ () => this.showOverlay(+1) }
                  onMouseLeave={ () => this.hideOverlay() }
                  hidden={ this.level === this.skill.maxLevel && !this.loop }>
            <img src={ `${ this.publicPath }assets/plus.png` } />
            <img src={ `${ this.publicPath }assets/plus-hover.png` } />
            <img src={ `${ this.publicPath }assets/plus-active.png` } />
            <img src={ `${ this.publicPath }assets/plus-wrap.png` } />
            <img src={ `${ this.publicPath }assets/plus-wrap-hover.png` } />
            <img src={ `${ this.publicPath }assets/plus-wrap-active.png` } />
          </button>
        </div>
      </div>,
      <ms-skill-overlay hidden={ !this.overlayLevel }
                        skill={ this.skill }
                        extras={ this.extras }
                        level={ this.overlayLevel || 1 }
                        class={ this.skill.prop }>
      </ms-skill-overlay>,
    ];
  }

  private showOverlay(levelOffset: number = 0) {
    this.overlayLevel = this.level + levelOffset;
    if (this.overlayLevel === 0) {
      this.overlayLevel = 1;
    } else if (this.overlayLevel < 0) {
      this.overlayLevel = (this.loop ? this.skill.maxLevel : 1);
    } else if (this.overlayLevel > this.skill.maxLevel) {
      this.overlayLevel = (this.loop ? 1 : this.skill.maxLevel);
    }
  }
  private hideOverlay() {
    this.overlayLevel = 0;
  }

  private emitSkillClick() {
    this.onSkillClicked.emit(this.skill);
  }

  private plus() {
    if (this.level < this.skill.maxLevel || this.loop) {
      this.level++;
      if (this.level > this.skill.maxLevel) {
        this.level = this.skill.minLevel;
      }
      this.skillChanged();
    }
    this.showOverlay(+1);
  }

  private minus() {
    if (this.level > this.skill.minLevel || this.loop) {
      this.level--;
      if (this.level < this.skill.minLevel) {
        this.level = this.skill.maxLevel;
      }
      this.skillChanged();
    }
    this.showOverlay(-1);
  }
}

