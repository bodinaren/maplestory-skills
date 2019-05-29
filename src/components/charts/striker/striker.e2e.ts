import { newSpecPage } from "@stencil/core/testing";
import { StrikerComponent } from "./striker";

describe("ms-striker", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [StrikerComponent],
      html: `<ms-striker></ms-striker>`,
      hydrateClientSide: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
