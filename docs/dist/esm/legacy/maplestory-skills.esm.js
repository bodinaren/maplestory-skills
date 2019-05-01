import { a as patchBrowser, b as defineCustomElements } from './maplestory-skills-9e6d6798.js';
patchBrowser().then(function (resourcesUrl) {
    defineCustomElements(null, { resourcesUrl: resourcesUrl });
});
