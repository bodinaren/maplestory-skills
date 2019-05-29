import { newSpecPage } from "@stencil/core/testing";
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
});
