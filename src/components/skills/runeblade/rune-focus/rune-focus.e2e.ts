import { newE2EPage } from "@stencil/core/testing";

describe("ms-rune-focus", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<ms-rune-focus></ms-rune-focus>");
    const element = await page.find("ms-rune-focus");
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
