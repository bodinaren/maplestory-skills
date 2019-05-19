import { h, Component, Prop, getAssetPath } from "@stencil/core";
import { ISkill, ISkillDescription } from "../../global/values/_skillValues.interfaces";

let descriptionRegex = /\{(.*?)\}/;

/**
 * @private
 */
@Component({
  tag: "ms-skill-overlay",
  styleUrl: "skill-overlay.css",
  shadow: true
})
export class SkillOverlayComponent {

  @Prop({ reflectToAttr: true }) level: number = 0;

  @Prop() skill: ISkill;

  @Prop() extras: boolean = false;

  private requirements: string[];
  private stamina: number;
  private spirit: number;
  private cooldown: number;
  private description: string;
  private extraDescriptions: string[];

  componentWillLoad() {
    this.refreshData();
  }

  componentWillUpdate() {
    this.refreshData();
  }

  private refreshData() {
    if (this.skill) {
      this.setRequirements();
      this.setStamina();
      this.setSpirit();
      this.setCooldown();
      this.description = this.parseDescription(this.skill);
      this.extraDescriptions = undefined;
      if (this.extras && this.skill.extras) {
        this.extraDescriptions = this.skill.extras.map((extraDescription) => {
          return this.parseDescription(extraDescription);
        });
      }
    }
  }

  render() {
    if (!this.skill) return;

    return (
      <div>
        <h1 class={ this.skill.element } style={ this.skill.element && {
          "background": `url(${ getAssetPath(`assets/${ this.skill.element.toLowerCase() }.jpg`) }), ${ this.getGradient(this.skill.element) }`
        }}>
          { this.skill.name }
          { this.skill.element &&
            <span class="element">{ this.skill.element }</span>
          }
        </h1>
        <div class="content">
          <div>
            <div class="content-header">
              <div class="icon">
                {
                  this.skill.attr
                  && <ms-icon slot="icon" name={ this.skill.attr } sp={ this.skill.sp }></ms-icon>
                  || <slot name="icon"></slot>
                }
              </div>
              <div class="infoAndLevel">
                <div class="shortInfo">
                  { this.stamina && `Stamina ${ this.stamina }` }
                  { this.spirit && `Spirit ${ this.spirit }` }
                  { (this.stamina || this.spirit) && this.cooldown && ` / ` }
                  { this.cooldown && `Cooldown: ${ this.cooldown } Sec` }
                </div>
                <div class="level">
                  Level { this.level || 1 }
                  { this.level === this.skill.maxLevel &&
                    " | MAX"
                  }
                </div>
              </div>
            </div>
            { this.requirements && this.requirements.length > 0 &&
              <div class="requirements">
                <p>[Requirements]</p>
                { this.requirements.map((req) =>
                  <p>{ req }</p>
                )}
              </div>
            }
          </div>
          <div>
            <p>{ this.skill.passive && "Passive" || "Active" }</p>
            { this.skill.attackType &&
              <p>{ this.skill.attackType }</p>
            }
            { this.skill.weaponRequired &&
              <p>Weapon Required: { this.skill.weaponRequired }</p>
            }
          </div>
          <div class="description">
            { this.description
              && <p innerHTML={ this.description }></p>
              || <p><slot name="description"></slot></p>
            }
          </div>
          { this.extraDescriptions && this.extraDescriptions.map((desc) =>
            <div class="description extras">
              <p innerHTML={ desc }></p>
            </div>
          )}
        </div>
      </div>
    );
  }

  private setRequirements() {
    let requirements = [];

    if (this.skill.levelRequirement && this.skill.levelRequirement[this.level] > 0) {
      requirements.push(`Level ${ this.skill.levelRequirement[this.level] }+`);
    }

    if (this.skill.skillRequirements) {
      Array.prototype.push.apply(requirements,
        this.skill.skillRequirements.map((req) =>
          `${ req.skill.name } [Level ${ req.level }+]`)
      );
    }

    this.requirements = requirements;
  }

  private setStamina() {
    if (Array.isArray(this.skill.stamina)) {
      this.stamina = this.skill.stamina[this.level];
    } else if (!this.spirit) {
      this.stamina = this.skill.stamina;
    }
  }

  private setSpirit() {
    if (Array.isArray(this.skill.spirit)) {
      this.spirit = this.skill.spirit[this.level];
    } else if (!this.spirit) {
      this.spirit = this.skill.spirit;
    }
  }

  private setCooldown() {
    if (Array.isArray(this.skill.cooldown)) {
      this.cooldown = this.skill.cooldown[this.level];
    } else if (!this.cooldown) {
      this.cooldown = this.skill.cooldown;
    }
  }

  private parseDescription(skillDescription: ISkillDescription) {
    let desc = skillDescription.description;
    let match: RegExpExecArray;

    while (match = descriptionRegex.exec(desc)) {
      let data = skillDescription.values && skillDescription.values[match[1]];
      if (!data) data = skillDescription[match[1]];

      desc = desc.replace(match[0], data[this.level].toString());
    }

    return desc;
  }
  
  private getGradient(element: string): string {
    switch (element.toLowerCase()) {
      case "dark":     return "linear-gradient(to bottom, #E29CD844 0%, #E29CD844 2px, #00000000 3px), linear-gradient(to right, #2F1A2B 0%, #2F1A2B 55%, #3C1C27 100%)";
      case "electric": return "linear-gradient(to bottom, #72E3F944 0%, #72E3F944 2px, #00000000 3px), linear-gradient(to right, #1B3439 0%, #1B3439 55%, #1A606A 100%)";
      case "fire":     return "linear-gradient(to bottom, #FF714944 0%, #FF714944 2px, #00000000 3px), linear-gradient(to right, #3E1213 0%, #3E1213 56%, #712D16 100%)";
      case "holy":     return "linear-gradient(to bottom, #FFA70F44 0%, #FFA70F44 2px, #00000000 3px), linear-gradient(to right, #4A2C12 0%, #4A2C12 60%, #865A0C 100%)";
      case "ice":      return "linear-gradient(to bottom, #77D1FF44 0%, #77D1FF44 2px, #00000000 3px), linear-gradient(to right, #132845 0%, #132845 55%, #153772 100%)";
      case "toxic":    return "linear-gradient(to bottom, #B96ADD44 0%, #B96ADD44 2px, #00000000 3px), linear-gradient(to right, #302239 0%, #302239 55%, #44235C 100%)";
    }
  }
}
