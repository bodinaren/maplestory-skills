import { Component, Prop, Event, EventEmitter, State } from "@stencil/core";
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

  hostData() { return { "passive": this.skill.passive }; }

  render() {
    return [
      <style>{`
        ms-skill .controls {
          background-image: url(${ this.publicPath }assets/skill-bar.png);
        }
        ms-skill:not([passive]) .skill {
          background-image: url(${ this.publicPath }assets/skill-shield.png);
        }
        ms-skill[passive] .skill {
          background-image: url(${ this.publicPath }assets/skill-shield-passive.png);
        }
        ms-skill[locked] .skill:after {
          background-image: url(${ this.publicPath }assets/skill-locked.png);
        }
        ms-skill[required]:after {
          background-image: url(${ this.publicPath }assets/skill-overlay.png);
        }
        :host .controls {
          background-image: url(${ this.publicPath }assets/skill-bar.png);
        }
        :host(:not([passive])) .skill {
          background-image: url(${ this.publicPath }assets/skill-shield.png);
        }
        :host([passive]) .skill {
          background-image: url(${ this.publicPath }assets/skill-shield-passive.png);
        }
        :host([locked]) .skill:after {
          background-image: url(${ this.publicPath }assets/skill-locked.png);
        }
        :host([required]):after {
          background-image: url(${ this.publicPath }assets/skill-overlay.png);
        }
      `}</style>,
      <div class="skill"
           onMouseEnter={ () => this.showOverlay() }
           onMouseLeave={ () => this.hideOverlay() }
           onClick={ () => this.emitSkillClick() }>
        <ms-icon name={ this.skill.attr } sp={ this.skill.sp }></ms-icon>
      </div>,
      <div class="controls">
        <div>
          <button class="minus"
                  disabled={ this.disabled || this.locked }
                  onClick={ () => this.minus() }
                  onMouseEnter={ () => this.showOverlay(-1) }
                  onMouseLeave={ () => this.hideOverlay() }
                  hidden={ this.level === this.skill.minLevel }>
            <img src={ `${ this.publicPath }assets/minus.png` } />
            <img src={ `${ this.publicPath }assets/minus-hover.png` } />
            <img src={ `${ this.publicPath }assets/minus-active.png` } />
          </button>
        </div>
        <span>{ this.level }/{ this.skill.maxLevel }</span>
        <div>
          <button class="plus"
                  disabled={ this.disabled || this.locked || this.limitReached }
                  onClick={ () => this.plus() }
                  onMouseEnter={ () => this.showOverlay(+1) }
                  onMouseLeave={ () => this.hideOverlay() }
                  hidden={ this.level === this.skill.maxLevel }>
            <img src={ `${ this.publicPath }assets/plus.png` } />
            <img src={ `${ this.publicPath }assets/plus-hover.png` } />
            <img src={ `${ this.publicPath }assets/plus-active.png` } />
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
    this.overlayLevel = Math.max(1, Math.min(this.level + levelOffset, this.skill.maxLevel));
  }
  private hideOverlay() {
    this.overlayLevel = 0;
  }

  private emitSkillClick() {
    this.onSkillClicked.emit(this.skill);
  }

  private plus() {
    if (this.level < this.skill.maxLevel) {
      this.level++;
      this.onLevelChanged.emit(this.level);
    }
    if (this.overlayLevel < this.skill.maxLevel) {
      this.overlayLevel++;
    }
  }

  private minus() {
    if (this.level > this.skill.minLevel) {
      this.level--;
      this.onLevelChanged.emit(this.level);
    }
    if (this.overlayLevel > this.skill.minLevel) {
      this.overlayLevel--;
    }
  }
}

