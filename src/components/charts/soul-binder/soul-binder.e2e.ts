import { newSpecPage } from "@stencil/core/testing";
import { SoulBinderComponent } from "./soul-binder";

describe("ms-soul-binder", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [SoulBinderComponent],
      html: `<ms-soul-binder></ms-soul-binder>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
