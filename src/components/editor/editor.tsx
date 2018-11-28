import { Component, Prop, Event, EventEmitter, Method, Listen, Element } from "@stencil/core";
import { MapleStoryClass } from "./editor.interfaces";

@Component({
  tag: "ms-editor",
  styleUrl: "editor.scss",
  shadow: true
})
export class EditorComponent {

  private classEditor!: any;

  @Element() host: HTMLStencilElement;

  @Prop({ mutable: true }) msClass: MapleStoryClass;

  @Prop({ context: "publicPath" }) private publicPath: string;

  @Event({ eventName: "changed" }) onChanged: EventEmitter<string>;

  async componentDidUpdate() {
    let htmlString = await this.toHtmlString();
    this.onChanged.emit(htmlString);
  }

  componentDidLoad() {
    this.resize();
  }

  @Listen("window:resize")
  resize() {
    let parent = this.host.parentNode as HTMLElement;
    let scale = parent.getBoundingClientRect().width / this.host.offsetWidth;
    let chart = (this.host.shadowRoot.lastChild as HTMLStencilElement).shadowRoot.lastChild as HTMLStencilElement;

    if (scale < 1) {
      this.host.style.transform = `scale(${ scale })`;
      this.host.style.marginBottom = `-${ 770 - (770 * scale) }px`;
      this.host.style.marginRight = `-${ 815 - (815 * scale) }px`;

      chart.style.transform = `scale(1)`; //${ 1 / (1 - (1 - scale) / 2) })`;
      chart.style.transformOrigin = `top left`;
    } else {
      this.host.style.transform = null;
      this.host.style.marginBottom = null;
      this.host.style.marginRight = null;

      chart.style.transform = null;
    }
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
        :host, :host(:hover) {
          cursor: url('${ this.publicPath }assets/cursor.png') 5 8, auto;
        }
        :host(:active) {
          cursor: url('${ this.publicPath }assets/cursor-down.png') 5 8, auto;
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
      case "heavy-gunner": return (<ms-heavy-gunner-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-heavy-gunner-editor>);
      case "knight": return (<ms-knight-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-knight-editor>);
      case "priest": return (<ms-priest-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-priest-editor>);
      case "runeblade": return (<ms-runeblade-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-runeblade-editor>);
      case "thief": return (<ms-thief-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-thief-editor>);
      case "wizard": return (<ms-wizard-editor onSkillchanged={ (evt) => this.editorValueChanged(evt) } ref={(el) => this.classEditor = el as any }></ms-wizard-editor>);
    }
  }
}
