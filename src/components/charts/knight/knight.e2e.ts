import { newSpecPage } from "@stencil/core/testing";
import { KnightComponent } from "./knight";

describe("ms-knight", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [KnightComponent],
      html: `<ms-knight></ms-knight>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
