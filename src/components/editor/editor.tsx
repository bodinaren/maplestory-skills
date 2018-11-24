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

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Event({ eventName: "changed" }) onChanged: EventEmitter<string>;

  async componentDidUpdate() {
    let htmlString = await this.toHtmlString();
    this.onChanged.emit(htmlString);
  }

  @Method()
  toHtmlString(): Promise<string> {
    return Promise.resolve(
      this.classEditor && this.classEditor.toHtmlString() || ""
    );
  }

  private editorValueChanged(evt) {
    this.onChanged.emit(evt.detail);
  }

  render() {
    return [
      <style>{`
        :host {
          cursor: url('${ this.publicPath }assets/cursor.png'), auto;
        }
        :host(:active) {
          cursor: url('${ this.publicPath }assets/cursor-down.png'), auto;
        }
      `}</style>,
      (this.msClass)
        && this.renderSkillSelection()
        || this.renderClassSelection()
    ];
  }

  private renderClassSelection(): JSX.Element {
    return (<div></div>);
  }

  private renderSkillSelection(): JSX.Element {
    switch (this.msClass) {
      case "archer": return (<ms-archer-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-archer-editor>);
      case "assassin": return (<ms-assassin-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-assassin-editor>);
      case "berserker": return (<ms-berserker-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-berserker-editor>);
      case "priest": return (<ms-priest-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-priest-editor>);
      case "runeblade": return (<ms-runeblade-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-runeblade-editor>);
      case "wizard": return (<ms-wizard-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-wizard-editor>);
    }
  }
}
