import { h } from "@stencil/core";
export class FooterComponent {
    render() {
        return (h("a", { href: "https://bodinaren.github.io/maplestory-skills/", target: "_blank" }, "MapleStory 2 Skill Charts"));
    }
    static get is() { return "ms-footer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["footer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["footer.css"]
    }; }
}
