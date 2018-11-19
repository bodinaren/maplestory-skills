import { Component, Prop, Event, EventEmitter, Method } from "@stencil/core";
import { MapleStoryClass } from "./editor.interfaces";

@Component({
  tag: "ms-editor",
  styleUrl: "editor.scss",
  shadow: true
})
export class EditorComponent {

  private classEditor!: any;

  @Prop({ mutable: true }) msClass: MapleStoryClass;

  @Event({ eventName: "changed" }) onChanged: EventEmitter<string>;

  @Method()
  toHtmlString(): string {
    if (!this.classEditor) return "";
    return this.classEditor.toHtmlString();
  }

  render() {
    if (this.msClass) {
      return this.renderSkillSelection();
    } else {
      return this.renderClassSelection();
    }
  }

  private renderClassSelection(): JSX.Element {
    return (<div></div>);
  }

  private renderSkillSelection(): JSX.Element {
    switch (this.msClass) {
      case "archer": return (<ms-archer-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-archer-editor>);
      case "assassin": return (<ms-assassin-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-assassin-editor>);
      case "priest": return (<ms-priest-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-priest-editor>);
    }
  }

  private editorValueChanged(evt) {
    this.onChanged.emit(evt.detail);
  }
}
