import { newSpecPage } from "@stencil/core/testing";
import { BerserkerComponent } from "./berserker";

describe("ms-berserker", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [BerserkerComponent],
      html: `<ms-berserker></ms-berserker>`,
      hydrateClientSide: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
