import { newSpecPage } from "@stencil/core/testing";
import { SkillOverlayComponent } from "./skill-overlay";
import { CelestialBlessings } from "../../global/values/priest";

describe("ms-skill-overlay", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [SkillOverlayComponent],
      html: `<ms-skill-overlay></ms-skill-overlay>`,
      hydrateClientSide: true,
    });
    page.root.skill = CelestialBlessings;

    expect(page.root).toHaveClass("hydrated");
  });
});
