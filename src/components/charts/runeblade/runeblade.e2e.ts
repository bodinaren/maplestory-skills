import { newSpecPage } from "@stencil/core/testing";
import { RunebladeComponent } from "./runeblade";
// import { FlameSigil } from "../../../global/values/runeblade";

describe("ms-runeblade", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [RunebladeComponent],
      html: `<ms-runeblade></ms-runeblade>`,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  // describe("extras", () => {
  //   describe("sigils", () => {

  //     it("can select sigil with a extras and level", async () => {
  //       const page = await newE2EPage();

  //       await page.setContent("<ms-runeblade></ms-runeblade>");
  //       const runeblade = await page.find("ms-runeblade");

  //       await page.$eval("ms-runeblade", (elm: any) => {
  //         elm.extras = true;
  //         elm.flameSigil = 1;
  //       });

  //       await page.waitForChanges();

  //       const flameSigil = await page.find("ms-runeblade >>> ms-skill.flameSigil");

  //       flameSigil.triggerEvent("skillclicked", {
  //         detail: FlameSigil,
  //       });

  //       await page.waitForChanges();

  //       expect(runeblade).toEqualAttribute("sigil", "flameSigil");
  //     });

  //     it("cannot select sigil without extras", async () => {
  //       const page = await newE2EPage();

  //       await page.setContent("<ms-runeblade></ms-runeblade>");
  //       const runeblade = await page.find("ms-runeblade");

  //       await page.$eval("ms-runeblade", (elm: any) => {
  //         elm.flameSigil = 1;
  //       });

  //       await page.waitForChanges();

  //       const flameSigil = await page.find("ms-runeblade >>> ms-skill.flameSigil");

  //       flameSigil.triggerEvent("skillclicked", {
  //         detail: FlameSigil,
  //       });

  //       await page.waitForChanges();

  //       expect(runeblade).toEqualAttribute("sigil", "");
  //     });

  //     it("cannot select sigil without a level", async () => {
  //       const page = await newE2EPage();

  //       await page.setContent("<ms-runeblade></ms-runeblade>");
  //       const runeblade = await page.find("ms-runeblade");

  //       await page.$eval("ms-runeblade", (elm: any) => {
  //         elm.editable = true;
  //         elm.extras = true;
  //       });

  //       await page.waitForChanges();

  //       const flameSigil = await page.find("ms-runeblade >>> ms-skill.flameSigil");

  //       flameSigil.triggerEvent("skillclicked", {
  //         detail: FlameSigil,
  //       });

  //       await page.waitForChanges();

  //       expect(runeblade).toEqualAttribute("sigil", "");
  //     });
  //   });
  // });
});
