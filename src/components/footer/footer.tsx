import { Component } from "@stencil/core";

@Component({
  tag: "ms-footer",
  styleUrl: "footer.scss",
  shadow: true
})
export class FooterComponent {

  render() {
    return (
      <a href="https://bodinaren.github.io/maplestory-skills/">
        MapleStory 2 Skill Charts
      </a>
    );
  }
}
