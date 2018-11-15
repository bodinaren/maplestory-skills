import { Component, Prop, State } from "@stencil/core";

@Component({
  tag: "ms-editor",
  styleUrl: "editor.scss",
  shadow: true
})
export class EditorComponent {

  @Prop({ mutable: true }) playerClass: PlayerClass;
  @State() chartHtml: string;

  render() {
    if (this.playerClass) {
      return this.renderSkillSelection();
    } else {
      return this.renderClassSelection();
    }
  }

  private renderClassSelection(): JSX.Element {
    return (<div></div>);
  }

  private renderSkillSelection(): JSX.Element {
    return [
      this.getClassElement(),
      <pre>
        &lt;script src="https://unpkg.com/maplestory-skills@^0/dist/maplestory-skills.js"&gt;&lt;/script&gt;
        <br />
        { this.chartHtml || this.getDefaultChartHtml() }
      </pre>,
    ];
  }

  private getClassElement(): JSX.Element {
    switch (this.playerClass) {
      case "priest": return (<ms-priest-editor onSkillchanged={ (evt) => this.chartHtml = evt.detail }></ms-priest-editor>);
    }
  }

  private getDefaultChartHtml(): string {
    switch (this.playerClass) {
      case "priest": return "<ms-priest></ms-priest>";
    }
  }
}

export type PlayerClass = "priest";
