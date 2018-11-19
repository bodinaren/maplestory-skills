import { ShadowWebComponent } from "./shadow-web";

describe("shadow-web", () => {
  it("builds", () => {
    expect(new ShadowWebComponent()).toBeTruthy();
  });
});
