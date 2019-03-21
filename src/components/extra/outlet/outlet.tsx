import { Component, Prop, State } from "@stencil/core";
import { ISkillChangeEvent } from "../../charts/skill-change-event";

@Component({
  tag: "ms-extra-outlet",
  shadow: true
})
export class OutletComponent {

  @Prop() editor: string;

  @State() _editor: ClassEditorHTMLElement;
  @State() _skills: ISkillChangeEvent = { skills: [] };
  @State() _tagName: string;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as HTMLStencilElement;
    if (!el) {
      el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
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
    if (!this._editor) return;

    return [
      <slot name="first"></slot>,
      <slot></slot>,
      this.getTag(),
      <slot name="last"></slot>
    ];
  }

  private getTag() {
    let extras = "";
    if (this._editor.extras) extras = " extras";
    let props = this.getProperties(this._skills);
    if (props) props = " " + props;
    return `<${ this._tagName }${ extras }${ props }></${ this._tagName }>`;
  }

  private getProperties(changeEvent: ISkillChangeEvent): string {
    let properties = changeEvent.skills.filter((skillChange) => {
      return skillChange.level > skillChange.minLevel;
    }).map((skillChange) => {
      return `${ skillChange.attr }="${ skillChange.level }"`;
    }).join(" ");

    if (changeEvent.other) {
      properties += " " + changeEvent.other.map((o) => `${ o.attr }="${ o.value }"`);
    }

    return properties;
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
