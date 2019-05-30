import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { PriestComponent } from "./priest";

describe("ms-priest", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [PriestComponent],
      html: `<ms-priest></ms-priest>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-priest rank="1"></ms-priest>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-priest rank="2"></ms-priest>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
