import { Component, Prop } from "@stencil/core";

@Component({
  tag: "ms-icon",
  styleUrl: "icon.scss",
  shadow: true
})
export class IconComponent {

  @Prop() name: string;

  render() {
    return (
      <img src={ `assets/${this.name}.png` } />
    );
  }
}
