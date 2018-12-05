import { Component } from "@stencil/core";

@Component({
  tag: "ms-footer",
  styleUrl: "footer.css",
  shadow: true
})
export class FooterComponent {

  render() {
    return (
      <a href="https://bodinaren.github.io/maplestory-skills/" target="_blank">
        MapleStory 2 Skill Charts
      </a>
    );
  }
}
