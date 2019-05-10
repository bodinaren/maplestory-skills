import { h, Host, Component, Prop, Event, EventEmitter, State, Watch, getAssetPath } from "@stencil/core";
import { ISkill } from "../../global/values/_skillValues.interfaces";
import { ConstructibleStyle } from "stencil-constructible-style";

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

  @Event({ eventName: "levelchanged" }) onLevelChanged: EventEmitter<number>;
  @Event({ eventName: "skillclicked" }) onSkillClicked: EventEmitter<ISkill>;

  @State() private overlayLevel: number;

  @ConstructibleStyle() styles = SkillComponent.getStyles.bind(this);

  componentWillLoad() {
    if (!this.skill) return;

    if (this.level < this.skill.minLevel) this.level = this.skill.minLevel;
    if (this.level > this.skill.maxLevel) this.level = this.skill.maxLevel;

    if (!this.column) this.column = this.skill.column;
    if (!this.row) this.row = this.skill.row;
  }

  @Watch("level")
  private skillChanged() {
    this.onLevelChanged.emit(this.level);
  }

  render() {
    if (!this.skill) return;

    return (
      <Host passive={ this.skill.passive }>
        <div class="skill"
            onMouseEnter={ () => this.showOverlay() }
            onMouseLeave={ () => this.hideOverlay() }
            onClick={ () => this.emitSkillClick() }>
          <ms-icon name={ this.skill.attr } sp={ this.skill.sp }></ms-icon>
        </div>
        <div class="controls">
          <div>
            <button class={{ "minus": true, "wrap": this.loop && this.level === this.skill.minLevel }}
                    disabled={ this.shouldDisableMinus() }
                    onClick={ () => this.minus() }
                    onMouseEnter={ () => this.showOverlay(-1) }
                    onMouseLeave={ () => this.hideOverlay() }
                    hidden={ this.level === this.skill.minLevel && !this.loop }>
              <img src={ getAssetPath(`assets/minus.png`) } />
              <img src={ getAssetPath(`assets/minus-hover.png`) } />
              <img src={ getAssetPath(`assets/minus-active.png`) } />
              <img src={ getAssetPath(`assets/minus-wrap.png`) } />
              <img src={ getAssetPath(`assets/minus-wrap-hover.png`) } />
              <img src={ getAssetPath(`assets/minus-wrap-active.png`) } />
            </button>
          </div>
          <span>{ this.level }/{ this.skill.maxLevel }</span>
          <div>
            <button class={{ "plus": true, "wrap": this.loop && (this.level === this.skill.maxLevel || this.limitReached) }}
                    disabled={ this.shouldDisablePlus() }
                    onClick={ () => this.plus() }
                    onMouseEnter={ () => this.showOverlay(+1) }
                    onMouseLeave={ () => this.hideOverlay() }
                    hidden={ this.level === this.skill.maxLevel && !this.loop }>
              <img src={ getAssetPath(`assets/plus.png`) } />
              <img src={ getAssetPath(`assets/plus-hover.png`) } />
              <img src={ getAssetPath(`assets/plus-active.png`) } />
              <img src={ getAssetPath(`assets/plus-wrap.png`) } />
              <img src={ getAssetPath(`assets/plus-wrap-hover.png`) } />
              <img src={ getAssetPath(`assets/plus-wrap-active.png`) } />
            </button>
          </div>
        </div>
        <ms-skill-overlay hidden={ !this.overlayLevel }
                          skill={ this.skill }
                          extras={ this.extras }
                          level={ this.overlayLevel || 1 }
                          class={ this.skill.prop }>
        </ms-skill-overlay>
      </Host>
    );
  }

  private shouldDisableMinus(): boolean {
    return this.disabled // skill are not editable
        // || this.locked // locked due to unmet requirements
        || this.skill.minLevel === this.skill.maxLevel // can't progress in this skill
        || (!this.loop && this.level === this.skill.minLevel) // can't decrease any further, unless we loop
        || (this.loop && this.limitReached && this.level === this.skill.minLevel); // if we loop, only disable if we're reached the limit and is at minimum (which would make this a plus button)
  }

  private shouldDisablePlus(): boolean {
    return this.disabled // skill are not editable
        // || this.locked // locked due to unmet requirements
        || this.skill.minLevel === this.skill.maxLevel // can't progress in this skill
        || (this.limitReached && (!this.loop || this.level === this.skill.minLevel)); // limit is reached, unless we loop, then only if we can't decrease further
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
      if (this.level > this.skill.maxLevel || (this.limitReached && this.level > this.skill.minLevel)) {
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
  
  private static getStyles(): string {
    return `
      ms-skill .controls { background-image: url(${ getAssetPath(`assets/skill-bar.png`) }); }
      :host .controls { background-image: url(${ getAssetPath(`assets/skill-bar.png`) }); }

      ms-skill:not([passive]) .skill { background-image: url(${ getAssetPath(`assets/skill-shield.png`) }); }
      :host(:not([passive])) .skill { background-image: url(${ getAssetPath(`assets/skill-shield.png`) }); }

      ms-skill[passive] .skill { background-image: url(${ getAssetPath(`assets/skill-shield-passive.png`) }); }
      :host([passive]) .skill { background-image: url(${ getAssetPath(`assets/skill-shield-passive.png`) }); }

      ms-skill[locked] .skill:after { background-image: url(${ getAssetPath(`assets/skill-locked.png`) }); }
      :host([locked]) .skill:after { background-image: url(${ getAssetPath(`assets/skill-locked.png`) }); }

      ms-skill[required]:after { background-image: url(${ getAssetPath(`assets/skill-overlay.png`) }); }
      :host([required]):after { background-image: url(${ getAssetPath(`assets/skill-overlay.png`) }); }
    `;
  }

}

