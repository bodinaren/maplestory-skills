import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "maplestory-skills",
  bundles: [
    { components: ["ms-chart", "ms-icon", "ms-skill", "ms-skill-overlay", "ms-footer"] },
    { components: ["ms-archer"] },
    { components: ["ms-assassin"] },
    { components: ["ms-berserker"] },
    { components: ["ms-heavy-gunner"] },
    { components: ["ms-knight"] },
    { components: ["ms-priest"] },
    { components: ["ms-runeblade"] },
    { components: ["ms-soul-binder"] },
    { components: ["ms-striker"] },
    { components: ["ms-thief"] },
    { components: ["ms-wizard"] },
    { components: ["ms-extra-outlet", "ms-extra-counter"] },
  ],
  outputTargets: [
    {
      type: "dist",
    },
    {
      type: "www",
      copy: [
        { src: "../docs/assets", dest: "assets" },
        { src: "assets", dest: "build/assets" },
      ],
      serviceWorker: null
    }
  ],
};
