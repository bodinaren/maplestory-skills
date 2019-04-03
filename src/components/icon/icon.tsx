import { h, Component, Prop } from "@stencil/core";

@Component({
  tag: "ms-icon",
  styleUrl: "icon.css",
  shadow: true
})
export class IconComponent {

  @Prop({ reflectToAttr: true }) name: string;
  @Prop({ reflectToAttr: true }) sp: boolean = false;

  @Prop({ context: "publicPath" }) private publicPath: string;

  render() {
    return [
      <img src={ `${ this.publicPath }assets/skills/${this.name}.png` } />,
      this.sp && <img src={ `${ this.publicPath }assets/sp.png` } />,
    ];
  }
}
