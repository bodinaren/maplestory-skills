import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { HeavyGunnerComponent } from "./heavy-gunner";

describe("ms-heavy-gunner", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [HeavyGunnerComponent],
      html: `<ms-heavy-gunner></ms-heavy-gunner>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-heavy-gunner rank="1"></ms-heavy-gunner>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-heavy-gunner rank="2"></ms-heavy-gunner>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
