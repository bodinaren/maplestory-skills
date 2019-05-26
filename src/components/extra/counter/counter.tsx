import { Component, Prop, State } from "@stencil/core";
import { ISkillChangeEvent } from "../../charts/skill-change-event";
import { Rank } from "../../../global/values/_skillValues.interfaces";
import { MAX_POINTS_RANK_1, MAX_POINTS_RANK_2 } from "../../../global/values/_general";

@Component({
  tag: "ms-extra-counter",
  shadow: true
})
export class CounterComponent {

  @Prop() editor?: string;
  @Prop({ mutable: true, reflectToAttr: true }) points: number = 0;

  @State() _editor: ClassEditorHTMLElement;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as any;
    if (!el) {
      el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-soul-binder,ms-striker,ms-thief,ms-wizard");
    }

    el.componentOnReady().then((editor: ClassEditorHTMLElement) => {
      this._editor = editor;

      const rank = (this._editor as any).rank;
      this.points = rank === Rank.Awakening ? MAX_POINTS_RANK_2 - 1 : MAX_POINTS_RANK_1 - 4;

      this._editor.addEventListener("skillchanged", (evt: any) => {
        this.updatePointsLeft(evt.detail);
      });
    });
  }

  private updatePointsLeft(changeEvent: ISkillChangeEvent) {
    const rank = (this._editor as any).rank;
    const maxPoints = rank === Rank.Awakening ? MAX_POINTS_RANK_2 : MAX_POINTS_RANK_1;

    this.points = maxPoints - changeEvent.skills.reduce((prev, current) => {
      if (current.rank === rank) {
        return prev + current.level;
      } else {
        return prev;
      }
    }, 0);
  }

  render() {
    return this.points;
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
  HTMLMsSoulBinderElement |
  HTMLMsStrikerElement |
  HTMLMsThiefElement |
  HTMLMsWizardElement;
