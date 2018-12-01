import { Component, Prop, State } from "@stencil/core";
import { SkillChangeEvent } from "../../charts/skill-change-event";

@Component({
  tag: "ms-extra-outlet",
  styleUrl: "outlet.scss",
  shadow: true
})
export class OutletComponent {

  @Prop() editor: string;

  @State() _editor: ClassEditorHTMLElement;
  @State() _skills: SkillChangeEvent = [];
  @State() _tagName: string;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as HTMLStencilElement;
    if (!el) {
      el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-thief,ms-wizard");
    }

    this._tagName = el.tagName.toLowerCase();

    el.componentOnReady().then((editor: ClassEditorHTMLElement) => {
      this._editor = editor;

      this._editor.addEventListener("skillchanged", (evt: any) => {
        this._skills = evt.detail;
      });
    });
  }

  render() {
    return [
      <slot name="first"></slot>,
      <slot></slot>,
      this.getTag(),
      <slot name="last"></slot>
    ];
  }

  private getTag() {
    let props = this.getProperties(this._skills);
    if (props) props = " " + props;
    return `<${ this._tagName }${ props }></${ this._tagName }>`;
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
