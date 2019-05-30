import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { WizardComponent } from "./wizard";

describe("ms-wizard", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [WizardComponent],
      html: `<ms-wizard></ms-wizard>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-wizard rank="1"></ms-wizard>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-wizard rank="2"></ms-wizard>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
