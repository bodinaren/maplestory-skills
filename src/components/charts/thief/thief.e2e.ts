import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { ThiefComponent } from "./thief";

describe("ms-thief", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [ThiefComponent],
      html: `<ms-thief></ms-thief>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-thief rank="1"></ms-thief>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-thief rank="2"></ms-thief>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
