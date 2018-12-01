import { Component, Prop, State } from "@stencil/core";
import { SkillChangeEvent } from "../../charts/class-chart-helpers";

@Component({
  tag: "ms-extra-outlet",
  styleUrl: "outlet.scss",
  shadow: true
})
export class OutletComponent {

  @Prop() editor: string;

  @State() _editor: ClassEditorHTMLElement;
  @State() _htmlString: string;

  private _tagName: string;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as HTMLStencilElement;
    if (!el) {
      el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-thief,ms-wizard");
    }

    this._tagName = el.tagName.toLowerCase();

    el.componentOnReady().then((editor: ClassEditorHTMLElement) => {
      this._editor = editor;
      this._htmlString = this.getTag();

      this._editor.addEventListener("skillchanged", (evt: any) => {
        this._htmlString = this.getTag(evt.detail);
      });
    });
  }

  render() {
    return [
      <slot name="first"></slot>,
      <slot></slot>,
      this._htmlString,
      <slot name="last"></slot>
    ];
  }

  private getTag(skillChanges: SkillChangeEvent = []) {
    return `<${ this._tagName } ${ this.getProperties(skillChanges) }></${ this._tagName }>`;
  }

  private getProperties(skillChanges: SkillChangeEvent): string {
    return skillChanges.filter((skillChange) => {
      return skillChange.level > skillChange.minLevel;
    }).map((skillChange) => {
      return `${skillChange.attr}="${ skillChange.level }"`;
    }).join(" ");
  }

}

type ClassEditorHTMLElement =
  HTMLMsArcherElement |
  HTMLMsAssassinElement |
  HTMLMsBerserkerElement |
  HTMLMsHeavyGunnerElement |
  HTMLMsKnightElement |
  HTMLMsPriestElement |
  HTMLMsRunebladeElement |
  HTMLMsThiefElement |
  HTMLMsWizardElement;
