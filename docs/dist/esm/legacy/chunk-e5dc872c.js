import { g as getElement, c as h, h as Host } from './maplestory-skills-2af305e6.js';
var supportsConstructibleStylesheets = (function () {
    try {
        return !!new CSSStyleSheet();
    }
    catch (e) {
        return false;
    }
})();
function ConstructibleStyle(options) {
    if (options === void 0) { options = {}; }
    return function (proto, prop) {
        if (!options.cacheKeyProperty) {
            options.cacheKeyProperty = prop;
        }
        var componentWillLoad = proto.componentWillLoad, render = proto.render;
        if (supportsConstructibleStylesheets) {
            proto.componentWillLoad = function () {
                var willLoadResult = componentWillLoad && componentWillLoad.call(this);
                var host = getElement(this);
                var root = (host.shadowRoot || host);
                root.adoptedStyleSheets = (root.adoptedStyleSheets || []).concat([getOrCreateStylesheet(this, proto, prop, options)]);
                return willLoadResult;
            };
        }
        else {
            proto.render = function () {
                var renderedNode = render.call(this);
                var style = createVDomStyleTag(this[prop]);
                if (typeof renderedNode === "string" || typeof renderedNode.$tag$ !== "object") {
                    // render did not return a Host, create one to ensure $children$.push can insert the style as expected.
                    renderedNode = h(Host, null, renderedNode);
                }
                renderedNode.$children$.push(style);
                return renderedNode;
            };
        }
    };
}
function getOrCreateStylesheet(component, proto, prop, options) {
    if (!proto.__constructableStylesheets) {
        proto.__constructableStylesheets = {};
    }
    var key = component[options.cacheKeyProperty];
    if (!proto.__constructableStylesheets[key]) {
        proto.__constructableStylesheets[key] = new CSSStyleSheet();
        proto.__constructableStylesheets[key].replace(component[prop]);
    }
    return proto.__constructableStylesheets[key];
}
function createVDomStyleTag(cssText) {
    return {
        $tag$: "style",
        $children$: [{
                $text$: cssText,
                $flags$: 0,
            }],
        $flags$: 0,
        $attrs$: { type: "text/css" },
    };
}
export { ConstructibleStyle as a };
