import { newSpecPage } from "@stencil/core/testing";
import { IconComponent } from "./icon";

describe("ms-icon", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [IconComponent],
      html: `<ms-icon name="boo"></ms-icon>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
