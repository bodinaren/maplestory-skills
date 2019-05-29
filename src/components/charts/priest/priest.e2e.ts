import { newSpecPage } from "@stencil/core/testing";
import { PriestComponent } from "./priest";

describe("ms-priest", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [PriestComponent],
      html: `<ms-priest></ms-priest>`,
      hydrateClientSide: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
