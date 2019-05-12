import { newSpecPage } from "@stencil/core/testing";
import { AssassinComponent } from "./assassin";

describe("ms-assassin", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [AssassinComponent],
      html: `<ms-assassin></ms-assassin>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
