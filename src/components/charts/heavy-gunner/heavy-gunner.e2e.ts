import { newSpecPage } from "@stencil/core/testing";
import { HeavyGunnerComponent } from "./heavy-gunner";

describe("ms-heavy-gunner", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [HeavyGunnerComponent],
      html: `<ms-heavy-gunner></ms-heavy-gunner>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
