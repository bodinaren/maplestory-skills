import { newE2EPage, E2EPage } from "@stencil/core/testing";
import { ArcherSkills } from "../src/global/values/archer";
import { AssassinSkills } from "../src/global/values/assassin";
import { BerserkerSkills } from "../src/global/values/berserker";
import { HeavyGunnerSkills } from "../src/global/values/heavy-gunner";
import { KnightSkills } from "../src/global/values/knight";
import { PriestSkills } from "../src/global/values/priest";
import { RunebladeSkills } from "../src/global/values/runeblade";
import { StrikerSkills } from "../src/global/values/striker";
import { ThiefSkills } from "../src/global/values/thief";
import { WizardSkills } from "../src/global/values/wizard";
import { ISkillBase } from "../src/global/values/_skillValues.interfaces";

const classes = [
  { tag: "ms-archer", skills: ArcherSkills },
  { tag: "ms-assassin", skills: AssassinSkills },
  { tag: "ms-berserker", skills: BerserkerSkills },
  { tag: "ms-heavy-gunner", skills: HeavyGunnerSkills },
  { tag: "ms-knight", skills: KnightSkills },
  { tag: "ms-priest", skills: PriestSkills },
  { tag: "ms-runeblade", skills: RunebladeSkills },
  { tag: "ms-striker", skills: StrikerSkills },
  { tag: "ms-thief", skills: ThiefSkills },
  { tag: "ms-wizard", skills: WizardSkills },
];

describe("screenshots", () => {

  classes.forEach((msClass) => {
    describe(msClass.tag, async () => {

      let pages: E2EPage[] = [];

      [1, 2].forEach((rank) => {
        beforeAll(async () => {
          pages[rank] = await newE2EPage({
            html: `<${ msClass.tag } rank="${ rank }"></${ msClass.tag }>`,
          });
        });

        beforeEach(async () => {
          await pages[rank].$eval(msClass.tag, (el: any) => {
            el.editable = false;
          });
        });

        describe(`rank ${ rank }`, async() => {
          it("default", async () => {
            const results = await pages[rank].compareScreenshot(`rank ${ rank } default`);
            expect(results).toMatchScreenshot();
          });
          it("editable", async () => {
            await pages[rank].$eval(msClass.tag, (el: any) => {
              el.editable = true;
            });
            const results = await pages[rank].compareScreenshot(`rank ${ rank } editable`);
            expect(results).toMatchScreenshot();
          });
        });
      });

      // Object.keys(msClass.skills).forEach((key) => {
      //   const skill: ISkillBase = msClass.skills[key];

      //   it(skill.name, async () => {
      //     const skillElement = await pages[skill.rank].find(`${ msClass.tag } >>> ms-skill.${ skill.prop }`);
      //     await skillElement.hover();

      //     const results = await pages[skill.rank].compareScreenshot(skill.name);

      //     expect(results).toMatchScreenshot();
      //   });
      // });
    });
  });
});
