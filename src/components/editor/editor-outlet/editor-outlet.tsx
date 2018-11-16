import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "ms-editor-outlet",
  styleUrl: "editor-outlet.scss",
  shadow: true
})
export class EditorOutletComponent {

  @Prop() editor: string;

  @State() _editor: HTMLMsEditorElement;
  @State() _htmlString: string;

  componentDidLoad() {
    let el = document.getElementById(this.editor) as HTMLStencilElement;

    el.componentOnReady().then((editor: HTMLMsEditorElement) => {
      this._editor = editor;
      this._htmlString = editor.toHtmlString();

      this._editor.addEventListener("changed", (evt) => {
        this._htmlString = (evt as any).detail;
      });
    });
  }

  render() {
    return [
      <slot name="before"></slot>,
      <slot></slot>,
      this._htmlString,
      <slot name="after"></slot>
    ];
  }
}
