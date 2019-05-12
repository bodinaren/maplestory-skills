import { newSpecPage } from "@stencil/core/testing";
import { ArcherComponent } from "./archer";

describe("ms-archer", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [ArcherComponent],
      html: `<ms-archer></ms-archer>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
