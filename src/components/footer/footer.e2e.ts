import { newSpecPage } from "@stencil/core/testing";
import { FooterComponent } from "./footer";

describe("ms-footer", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [FooterComponent],
      html: `<ms-footer></ms-footer>`,
      hydrateClientSide: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });
});
