import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { SoulBinderComponent } from "./soul-binder";

describe("ms-soul-binder", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [SoulBinderComponent],
      html: `<ms-soul-binder></ms-soul-binder>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-soul-binder rank="1"></ms-soul-binder>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-soul-binder rank="2"></ms-soul-binder>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });
  });
});
