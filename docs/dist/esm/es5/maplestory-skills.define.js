
// MaplestorySkills: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './maplestory-skills.core.js';
import { COMPONENTS } from './maplestory-skills.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, COMPONENTS, opts);
}
