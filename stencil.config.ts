import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "maplestory-skills",
  bundles: [
    { components: ["ms-editor", "ms-editor-outlet", "ms-level-control", "ms-priest-editor"] },
    // { components: ["ms-priest", "ms-angelic-ray", "ms-celestial-blessings", "ms-celestial-guardian", "ms-celestial-light", "ms-disciple", "ms-healing-mastery", "ms-healing-prayer", "ms-heavenly-wings", "ms-holy-blast", "ms-holy-relic", "ms-holy-symbol", "ms-priest", "ms-sanctuary", "ms-scepter-mastery", "ms-scourging-wave", "ms-shield-of-the-archon", "ms-smiting-aura", "ms-steadfast-faith"] },
    // { components: ["ms-icon", "ms-skill-overlay"] },
  ],
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: null
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        "src/global/helpers.scss",
      ]
    })
  ]
};
