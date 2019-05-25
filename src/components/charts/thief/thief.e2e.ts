import { newSpecPage } from "@stencil/core/testing";
import { ThiefComponent } from "./thief";

describe("ms-thief", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [ThiefComponent],
      html: `<ms-thief></ms-thief>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
