import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { BerserkerComponent } from "./berserker";

describe("ms-berserker", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [BerserkerComponent],
      html: `<ms-berserker></ms-berserker>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-berserker rank="1"></ms-berserker>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-berserker rank="2"></ms-berserker>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
