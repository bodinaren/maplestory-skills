import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ms-icon",
  styleUrl: "icon.scss",
  assetsDir: "assets",
  shadow: true
})
export class IconComponent {

  @Prop() name: string;

  @Prop({ context: "publicPath" }) private publicPath: string;

  render() {
    return (
      <img src={ `${ this.publicPath }assets/${this.name}.png` } />
    );
  }
}
