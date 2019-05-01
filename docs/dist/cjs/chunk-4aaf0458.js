'use strict';

const __chunk_1 = require('./maplestory-skills-c6e16ac8.js');

const supportsConstructibleStylesheets = (() => {
    try {
        return !!new CSSStyleSheet();
    }
    catch (e) {
        return false;
    }
})();
function ConstructibleStyle(options = {}) {
    return (proto, prop) => {
        if (!options.cacheKeyProperty) {
            options.cacheKeyProperty = prop;
        }
        const { componentWillLoad, render } = proto;
        if (supportsConstructibleStylesheets) {
            proto.componentWillLoad = function () {
                const willLoadResult = componentWillLoad && componentWillLoad.call(this);
                const host = __chunk_1.getElement(this);
                const root = (host.shadowRoot || host);
                root.adoptedStyleSheets = [...root.adoptedStyleSheets || [], getOrCreateStylesheet(this, proto, prop, options)];
                return willLoadResult;
            };
        }
        else {
            proto.render = function () {
                let renderedNode = render.call(this);
                const style = createVDomStyleTag(this[prop]);
                if (typeof renderedNode === "string" || typeof renderedNode.$tag$ !== "object") {
                    // render did not return a Host, create one to ensure $children$.push can insert the style as expected.
                    renderedNode = __chunk_1.h(__chunk_1.Host, null, renderedNode);
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
    let key = component[options.cacheKeyProperty];
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

exports.ConstructibleStyle = ConstructibleStyle;
