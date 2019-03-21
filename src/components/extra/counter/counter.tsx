import { Component, Prop, State } from "@stencil/core";
import { ISkillChangeEvent } from "../../charts/skill-change-event";

@Component({
  tag: "ms-extra-counter",
  shadow: true
})
export class CounterComponent {

  @Prop() editor?: string;

  @State() _editor: ClassEditorHTMLElement;
  @State() _pointsLeft: number = 68;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as HTMLStencilElement;
    if (!el) {
      el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
    }

    el.componentOnReady().then((editor: ClassEditorHTMLElement) => {
      this._editor = editor;

      this._editor.addEventListener("skillchanged", (evt: any) => {
        this.updatePointsLeft(evt.detail);
      });
    });
  }

  private updatePointsLeft(changeEvent: ISkillChangeEvent) {
    this._pointsLeft = 72 - changeEvent.skills.reduce((prev, current) => {
      return prev + current.level;
    }, 0);
  }

  render() {
    return this._pointsLeft;
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
