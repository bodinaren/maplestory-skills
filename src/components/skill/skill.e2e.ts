import { newSpecPage } from "@stencil/core/testing";
import { SkillComponent } from "./skill";
import { CelestialBlessings } from "../../global/values/priest";

describe("ms-skill", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [SkillComponent],
      html: `<ms-skill></ms-skill>`,
      hydrateClientSide: true,
    });

    page.root.skill = CelestialBlessings;
    await page.waitForChanges();

    expect(page.root).toHaveClass("hydrated");
  });
});
