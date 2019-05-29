import { newSpecPage } from "@stencil/core/testing";
import { SkillComponent } from "./skill";
import { CelestialBlessings } from "../../global/values/priest";

describe("ms-skill", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [SkillComponent],
      html: `<ms-skill></ms-skill>`,
      includeAnnotations: true,
    });

    page.root.skill = CelestialBlessings;
    await page.waitForChanges();

    expect(page.root).toHaveClass("hydrated");
  });
});
