import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "ms-outlet",
  styleUrl: "outlet.scss",
  shadow: true
})
export class OutletComponent {

  @Prop() editor: string;

  @State() _editor: ClassEditorHTMLElement;
  @State() _htmlString: string;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as HTMLStencilElement;

    el.componentOnReady().then(async (editor: ClassEditorHTMLElement) => {
      this._editor = editor;
      this._htmlString = await editor.toHtmlString();

      this._editor.addEventListener("skillchanged", (evt) => {
        this._htmlString = (evt as any).detail;
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
