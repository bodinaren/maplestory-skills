import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { StrikerComponent } from "./striker";

describe("ms-striker", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [StrikerComponent],
      html: `<ms-striker></ms-striker>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-striker rank="1"></ms-striker>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-striker rank="2"></ms-striker>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
