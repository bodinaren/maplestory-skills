import { newE2EPage } from "@stencil/core/testing";

describe("ms-deep-wounds", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<ms-deep-wounds></ms-deep-wounds>");
    const element = await page.find("ms-deep-wounds");
    expect(element).toHaveClass("hydrated");
  });

  // it("renders changes to the name data", async () => {
  //   const page = await newE2EPage();

  //   await page.setContent("<my-component></my-component>");
  //   const component = await page.find("my-component");
  //   const element = await page.find("my-component >>> div");
  //   expect(element.textContent).toEqual(`Hello, World! I'm `);

  //   component.setProperty("first", "James");
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James`);

  //   component.setProperty("last", "Quincy");
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

  //   component.setProperty("middle", "Earl");
  //   await page.waitForChanges();
  //   expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  // });
});
