import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { AssassinComponent } from "./assassin";

describe("ms-assassin", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AssassinComponent],
      html: `<ms-assassin></ms-assassin>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-assassin rank="1"></ms-assassin>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-assassin rank="2"></ms-assassin>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
