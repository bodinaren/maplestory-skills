import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { ArcherComponent } from "./archer";

describe("ms-archer", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [ArcherComponent],
      html: `<ms-archer></ms-archer>`,
      includeAnnotations: true
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-archer rank="1"></ms-archer>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-archer rank="2"></ms-archer>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
