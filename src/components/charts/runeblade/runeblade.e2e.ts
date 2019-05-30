import { newSpecPage, newE2EPage } from "@stencil/core/testing";
import { RunebladeComponent } from "./runeblade";
import { FlameSigil } from "../../../global/values/runeblade";

describe("ms-runeblade", () => {
  it("renders", async () => {
    const page = await newSpecPage({
      components: [RunebladeComponent],
      html: `<ms-runeblade></ms-runeblade>`,
      includeAnnotations: true,
    });

    expect(page.root).toHaveClass("hydrated");
  });

  describe("extras", () => {
    describe("sigils", () => {

      it("can select sigil with a extras and level", async () => {
        const page = await newSpecPage({
          components: [RunebladeComponent],
          html: `<ms-runeblade extras="true" flame-sigil="1"></ms-runeblade>`,
        });

        const runeblade = page.root as HTMLMsRunebladeElement;
        const flameSigil = runeblade.shadowRoot.querySelector("ms-skill.flameSigil") as HTMLMsSkillElement;

        flameSigil.dispatchEvent(new CustomEvent("skillclicked", {
          detail: FlameSigil,
        }));

        await page.waitForChanges();

        expect(runeblade).toEqualAttribute("sigil", "flameSigil");
      });

      it("cannot select sigil without a level", async () => {
        const page = await newSpecPage({
          components: [RunebladeComponent],
          html: `<ms-runeblade extras="true"></ms-runeblade>`,
        });

        const runeblade = page.root as HTMLMsRunebladeElement;
        const flameSigil = runeblade.shadowRoot.querySelector("ms-skill.flameSigil") as HTMLMsSkillElement;

        flameSigil.dispatchEvent(new CustomEvent("skillclicked", {
          detail: FlameSigil,
        }));

        await page.waitForChanges();

        expect(runeblade).toEqualAttribute("sigil", "");
      });

      it("cannot select sigil without extras", async () => {
        const page = await newSpecPage({
          components: [RunebladeComponent],
          html: `<ms-runeblade flame-sigil="1"></ms-runeblade>`,
        });

        const runeblade = page.root as HTMLMsRunebladeElement;
        const flameSigil = runeblade.shadowRoot.querySelector("ms-skill.flameSigil") as HTMLMsSkillElement;

        flameSigil.dispatchEvent(new CustomEvent("skillclicked", {
          detail: FlameSigil,
        }));

        await page.waitForChanges();

        expect(runeblade).toEqualAttribute("sigil", "");
      });
    });
  });

  describe("screenshot", () => {
    it("rank 1", async () => {
      const page = await newE2EPage({
        html: `<ms-archer rank="1"></ms-archer>`,
      });

      const results = await page.compareScreenshot("rank 1");

      expect(results).toMatchScreenshot();
    });

    it("rank 2", async () => {
      const page = await newE2EPage({
        html: `<ms-archer rank="2"></ms-archer>`,
      });

      const results = await page.compareScreenshot("rank 2");

      expect(results).toMatchScreenshot();
    });

    it("flame sigil", async () => {
      const page = await newE2EPage({
        html: `<ms-runeblade extras rank="1" flame-sigil="1" sigil="flameSigil"></ms-runeblade>`,
      });

      const results = await page.compareScreenshot("flameSigil");

      expect(results).toMatchScreenshot();
    });

    it("frost sigil", async () => {
      const page = await newE2EPage({
        html: `<ms-runeblade extras rank="1" frost-sigil="1" sigil="frostSigil"></ms-runeblade>`,
      });
      page.waitForChanges();

      const results = await page.compareScreenshot("frostSigil");

      expect(results).toMatchScreenshot();
    });

    it("storm sigil", async () => {
      const page = await newE2EPage({
        html: `<ms-runeblade extras rank="1" storm-sigil="1" sigil="stormSigil"></ms-runeblade>`,
      });
      page.waitForChanges();

      const results = await page.compareScreenshot("stormSigil");

      expect(results).toMatchScreenshot();
    });
  });
});
