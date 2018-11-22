import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ms-icon",
  styleUrl: "icon.scss",
  shadow: true
})
export class IconComponent {

  @Prop() name: string;

  @Prop({ context: "publicPath" }) private publicPath: string;

  render() {
    return (
      <img src={ `${ this.publicPath }assets/skills/${this.name}.png` } />
    );
  }
}
