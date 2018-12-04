import { Component, Prop } from "@stencil/core";
import { ISkill, MapleStoryElement } from "../../global/values/_skillValues.interfaces";

let descriptionRegex = /\[(.*?)\]/;

/**
 * @private
 */
@Component({
  tag: "ms-skill-overlay",
  styleUrl: "skill-overlay.scss",
  shadow: true
})
export class SkillOverlayComponent {

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Prop({ reflectToAttr: true }) level: number = 0;

  @Prop({ mutable: true }) skill: ISkill;

  @Prop() heading: string;
  @Prop({ reflectToAttr: true }) element: MapleStoryElement;
  @Prop() max: number = 10;
  @Prop() passive: boolean = false;
  @Prop() type: string;
  @Prop() weaponRequired: string;
  @Prop({ mutable: true }) requirements: string[];
  @Prop() spirit: number;
  @Prop({ mutable: true }) cooldown: number;

  private description: string;

  componentWillLoad() {
    let hadSkill = !!this.skill;

    if (!hadSkill) {
      this.skill = {
        name: this.heading,
        element: this.element,
        minLevel: 0,
        maxLevel: this.max,
        passive: this.passive,
        attackType: this.type,
        weaponRequired: this.weaponRequired,
        spirit: this.spirit,
        cooldown: this.cooldown,
        attr: "",
        prop: "",
        skillRequirements: undefined,
        description: "",
      };
    }

    if (hadSkill) {
      this.setRequirements();
      this.setSpirit();
      this.setCooldown();
      this.setDescription();
    }
  }

  componentWillUpdate() {
    this.setRequirements();
    this.setSpirit();
    this.setCooldown();
    this.setDescription();
  }

  render() {
    return (
      <div>
        <h1 class={ this.skill.element } style={ this.skill.element && {
          "background-image": `url(${ this.publicPath }assets/${ this.skill.element.toLowerCase() }.jpg)`
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
                  { this.spirit && `Spirit ${ this.spirit }` }
                  { this.spirit && this.cooldown && ` / ` }
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

  private setSpirit() {
    if (Array.isArray(this.skill.cooldown)) {
      this.cooldown = this.skill.cooldown[this.level];
    } else {
      this.cooldown = this.skill.cooldown;
    }
  }

  private setCooldown() {
    if (Array.isArray(this.skill.cooldown)) {
      this.cooldown = this.skill.cooldown[this.level];
    } else {
      this.cooldown = this.skill.cooldown;
    }
  }

  private setDescription() {
    this.description = this.skill.description;
    let match: RegExpExecArray;

    while (match = descriptionRegex.exec(this.description)) {
      let data = this.skill.values && this.skill.values[match[1]];
      if (!data) data = this.skill[match[1]];

      this.description = this.description.replace(match[0], data[this.level].toString());
    }
  }
}
