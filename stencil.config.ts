import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "maplestory-skills",
  bundles: [
    { components: ["ms-archer", "ms-agile-archer", "ms-arrow-barrage", "ms-arrow-storm", "ms-arrow-stream", "ms-bow-swing", "ms-bronze-eagle", "ms-conditioning", "ms-eagle-claw", "ms-eagle-glide", "ms-eagles-majesty", "ms-evasive-salvo", "ms-ice-arrow", "ms-precision-shooter", "ms-rapid-shot", "ms-screwdriver-shot", "ms-sharp-eyes", "ms-snipe"] },
    { components: ["ms-assassin", "ms-dash", "ms-dark-cloak", "ms-death-sentence", "ms-fatal-strikes", "ms-fragmented-star", "ms-lucky-stars", "ms-mark-of-death", "ms-mirror-image-dark-blade", "ms-shadow-arts", "ms-shadow-burst", "ms-shadow-chaser", "ms-shadow-cutter", "ms-shadow-web", "ms-soul-grind", "ms-star-chaser", "ms-star-flurry", "ms-thrown-weapon-mastery"] },
    { components: ["ms-berserker", "ms-adrenaline-rush", "ms-blood-price", "ms-bloodlust", "ms-dark-aura", "ms-dark-breaker", "ms-dark-might", "ms-death-spin", "ms-deep-wounds", "ms-earthquake", "ms-greatsword-mastery", "ms-ground-breaker", "ms-inhuman-endurance", "ms-intimidation", "ms-raging-slash", "ms-void-slash", "ms-warriors-instinct", "ms-x-slash"] },
    { components: ["ms-heavy-gunner", "ms-advanced-bullets", "ms-advanced-missiles", "ms-advanced-pulse-weapons", "ms-blast-charge-kit", "ms-bullet-spray", "ms-electric-blast", "ms-gatling-fire", "ms-homing-missiles", "ms-jet-boots", "ms-lock-on", "ms-m-bomb", "ms-magnetic-bomb", "ms-med-kit", "ms-reload", "ms-rocket-launcher", "ms-stun-grenades", "ms-suborbital-bombardment"] },
    { components: ["ms-knight", "ms-bulwark", "ms-cross-cut", "ms-defender-of-the-faith", "ms-divine-strike", "ms-drill-thrust", "ms-iron-defense", "ms-iron-shield", "ms-longsword-mastery", "ms-shield-booster", "ms-shield-charge", "ms-shield-mastery", "ms-shield-toss", "ms-shield-wall", "ms-stinging-flurry", "ms-tornado-slash", "ms-typhoon-slash", "ms-warhorn"] },
    { components: ["ms-priest", "ms-angelic-ray", "ms-celestial-blessings", "ms-celestial-guardian", "ms-celestial-light", "ms-disciple", "ms-healing-mastery", "ms-healing-prayer", "ms-heavenly-wings", "ms-holy-blast", "ms-holy-relic", "ms-holy-symbol", "ms-sanctuary", "ms-scepter-mastery", "ms-scourging-wave", "ms-shield-of-the-archon", "ms-smiting-aura", "ms-steadfast-faith"] },
    { components: ["ms-runeblade", "ms-blade-chasm", "ms-blade-mastery", "ms-blink", "ms-elemental-potency", "ms-echoing-blade", "ms-flame-sigil", "ms-flurry", "ms-frost-sigil", "ms-gravity-rune", "ms-honing-runes", "ms-illusory-blades", "ms-impact", "ms-rune-balance", "ms-rune-focus", "ms-storm-sigil", "ms-warding-rune", "ms-whirling-blades"] },
    { components: ["ms-thief", "ms-blade-dance", "ms-cunning-tactics", "ms-deft-combatant", "ms-double-slash", "ms-haste", "ms-mesoguard-plus", "ms-mind-breaker", "ms-mind-stealer", "ms-poison-edge", "ms-poison-vial", "ms-quick-step", "ms-retaliation", "ms-ruthless-guile", "ms-somersault-kick", "ms-spirit-thief", "ms-surprise-attack", "ms-vicious-cuts"] },
    { components: ["ms-wizard", "ms-arcane-blast", "ms-chain-lightning", "ms-cryomancy", "ms-electromancy", "ms-elemental-master", "ms-flame-tornado", "ms-flame-wave", "ms-focus-seal", "ms-ice-spear", "ms-ice-storm", "ms-magic-armor", "ms-mana-claw", "ms-mana-font", "ms-phantom-claw", "ms-pyromancy", "ms-teleport", "ms-thunderbolt"] },
    { components: ["ms-chart", "ms-icon", "ms-skill", "ms-skill-overlay", "ms-footer"] },
    { components: ["ms-outlet"] },
  ],
  copy: [
    { src: "assets", dest: "build/maplestory-skills/assets" },
    { src: "../docs/assets", dest: "assets" },
  ],
  outputTargets: [
    {
      type: "dist",
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
