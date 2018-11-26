import { Component, Prop } from "@stencil/core";

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

  @Prop() heading: string;
  @Prop({ reflectToAttr: true }) element: string = "";
  @Prop({ reflectToAttr: true }) level: number = 0;
  @Prop() max: number = 10;
  @Prop() passive: boolean = false;
  @Prop() type: string;
  @Prop() weaponRequired: string;
  @Prop() requirements: string[];
  @Prop() spirit: number;
  @Prop() cooldown: number;

  render() {
    return (
      <div>
        <h1 style={ this.element && {
          "background-image": `url(${ this.publicPath }assets/${ this.element.toLowerCase() }.jpg)`
        }}>
          { this.heading }
          { this.element &&
            <span class="element">{ this.element }</span>
          }
        </h1>
        <div class="content">
          <div>
            <div class="content-header">
              <div class="icon">
                <slot name="icon"></slot>
              </div>
              <div class="infoAndLevel">
                <div class="shortInfo">
                  { this.spirit && `Spirit ${ this.spirit }` }
                  { this.spirit && this.cooldown && ` / ` }
                  { this.cooldown && `Cooldown: ${ this.cooldown } Sec` }
                </div>
                <div class="level">
                  Level { this.level || 1 }
                  { this.level === this.max &&
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
            <p>{ this.passive && "Passive" || "Active" }</p>
            { this.type &&
              <p>{ this.type }</p>
            }
            { this.weaponRequired &&
              <p>Weapon Required: { this.weaponRequired }</p>
            }
          </div>
          <div>
            <p>
              <slot name="description"></slot>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
