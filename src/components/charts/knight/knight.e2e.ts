import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { KnightComponent } from "./knight";

describe("ms-knight", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KnightComponent],
      html: `<ms-knight></ms-knight>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-knight rank="1"></ms-knight>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-knight rank="2"></ms-knight>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
