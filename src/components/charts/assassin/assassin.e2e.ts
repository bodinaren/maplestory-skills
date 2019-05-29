import { newSpecPage } from "@stencil/core/testing";
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
});
