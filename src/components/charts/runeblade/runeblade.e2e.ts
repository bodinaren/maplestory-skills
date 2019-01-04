import { newE2EPage } from "@stencil/core/testing";
import { FlameSigil } from "../../../global/values/runeblade";

describe("ms-runeblade", () => {
  it("renders", async () => {
    const page = await newE2EPage();

    await page.setContent("<ms-runeblade></ms-runeblade>");
    const element = await page.find("ms-runeblade");
    expect(element).toHaveClass("hydrated");
  });

  describe("extras", () => {
    describe("sigils", () => {

      it("can select sigil with a extras and level", async () => {
        const page = await newE2EPage();

        await page.setContent("<ms-runeblade></ms-runeblade>");
        const runeblade = await page.find("ms-runeblade");

        await page.$eval("ms-runeblade", (elm: any) => {
          elm.extras = true;
          elm.flameSigil = 1;
        });

        await page.waitForChanges();

        const flameSigil = await page.find("ms-runeblade >>> ms-skill.flameSigil");

        flameSigil.triggerEvent("skillclicked", {
          detail: FlameSigil,
        });

        await page.waitForChanges();

        expect(runeblade).toEqualAttribute("sigil", "flameSigil");
      });

      it("cannot select sigil without extras", async () => {
        const page = await newE2EPage();

        await page.setContent("<ms-runeblade></ms-runeblade>");
        const runeblade = await page.find("ms-runeblade");

        await page.$eval("ms-runeblade", (elm: any) => {
          elm.flameSigil = 1;
        });

        await page.waitForChanges();

        const flameSigil = await page.find("ms-runeblade >>> ms-skill.flameSigil");

        flameSigil.triggerEvent("skillclicked", {
          detail: FlameSigil,
        });

        await page.waitForChanges();

        expect(runeblade).toEqualAttribute("sigil", "");
      });

      it("cannot select sigil without a level", async () => {
        const page = await newE2EPage();

        await page.setContent("<ms-runeblade></ms-runeblade>");
        const runeblade = await page.find("ms-runeblade");

        await page.$eval("ms-runeblade", (elm: any) => {
          elm.editable = true;
          elm.extras = true;
        });

        await page.waitForChanges();

        const flameSigil = await page.find("ms-runeblade >>> ms-skill.flameSigil");

        flameSigil.triggerEvent("skillclicked", {
          detail: FlameSigil,
        });

        await page.waitForChanges();

        expect(runeblade).toEqualAttribute("sigil", "");
      });
    });
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
