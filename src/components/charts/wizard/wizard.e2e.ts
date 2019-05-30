import { newSpecPage } from "@stencil/core/testing";
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
});
