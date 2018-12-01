import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "ms-extra-outlet",
  styleUrl: "outlet.scss",
  shadow: true
})
export class OutletComponent {

  @Prop() editor: string;

  @State() _editor: ClassEditorHTMLElement;
  @State() _htmlString: string;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as HTMLStencilElement;
    if (!el) {
      el = document.querySelector("ms-archer,ms-assassin,ms-berserker,ms-heavy-gunner,ms-knight,ms-priest,ms-runeblade,ms-thief,ms-wizard");
    }

    el.componentOnReady().then(async (editor: ClassEditorHTMLElement) => {
      this._editor = editor;
      this._htmlString = await editor.toHtmlString();

      this._editor.addEventListener("skillchanged", async () => {
        this._htmlString = await editor.toHtmlString();
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
