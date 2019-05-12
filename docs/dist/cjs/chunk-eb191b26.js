'use strict';

const __chunk_1 = require('./maplestory-skills-579dd934.js');

const supportsConstructibleStylesheets = (() => {
    try {
        return !!new CSSStyleSheet();
    }
    catch (e) {
        return false;
    }
})();
/**
 * Dynamically create a constructible stylesheet which is applied to the component.
 * The stylesheet is then cached for future instances of the component.
 * @usage
As a string:
```
@ConstructableStyle() style = `.bg { background: url('assets/${ this.mode }/bg.png'); }`;
```
As a function:
```
@ConstructableStyle() style = () => `.bg { background: url('assets/${ this.mode }/bg.png'); }`;
```
 */
function ConstructibleStyle(opts = {}) {
    return (target, propertyKey) => {
        if (!opts.cacheKeyProperty) {
            opts.cacheKeyProperty = propertyKey;
        }
        const { componentWillLoad, render } = target;
        if (supportsConstructibleStylesheets) {
            target.componentWillLoad = function () {
                const cssText = (typeof this[propertyKey] === "function" ? this[propertyKey]() : this[propertyKey]);
                const willLoadResult = componentWillLoad && componentWillLoad.call(this);
                const host = __chunk_1.getElement(this);
                const root = (host.shadowRoot || host);
                root.adoptedStyleSheets = [...root.adoptedStyleSheets || [], getOrCreateStylesheet(this, target, cssText, opts)];
                return willLoadResult;
            };
        }
        else {
            target.render = function () {
                const cssText = (typeof this[propertyKey] === "function" ? this[propertyKey]() : this[propertyKey]);
                let renderedNode = render.call(this);
                if (isHost(renderedNode)) {
                    appendStyleToHost(renderedNode, target.constructor.name, cssText);
                }
                else {
                    renderedNode = __chunk_1.h(__chunk_1.Host, null, renderedNode);
                    if (!('attachShadow' in HTMLElement.prototype)) {
                        appendStyleToHost(renderedNode, target.constructor.name, cssText);
                    }
                    else {
                        if (!target.__constructableStyle) {
                            let style = document.createElement("style");
                            style.setAttribute("type", "text/css");
                            style.setAttribute("constructible-style", target.constructor.name);
                            style.innerHTML = cssText;
                            target.__constructableStyle = style;
                            document.head.appendChild(style);
                        }
                    }
                }
                return renderedNode;
            };
        }
    };
}
function appendStyleToHost(node, targetName, cssText) {
    (getHostChildren(node) || []).push(__chunk_1.h("style", { type: "text/css", "constructible-style": targetName }, cssText));
}
function getOrCreateStylesheet(instance, target, cssText, opts) {
    if (!target.__constructableStyle) {
        target.__constructableStyle = {};
    }
    let key = instance[opts.cacheKeyProperty];
    if (!target.__constructableStyle[key]) {
        target.__constructableStyle[key] = new CSSStyleSheet();
        target.__constructableStyle[key].replace(cssText);
    }
    return target.__constructableStyle[key];
}
function isHost(node) {
    for (let prop in node) {
        if (node.hasOwnProperty(prop)) {
            if (node[prop] === __chunk_1.Host) {
                return true;
            }
        }
    }
    return false;
}
function getHostChildren(node) {
    for (let prop in node) {
        if (node.hasOwnProperty(prop)) {
            if (Array.isArray(node[prop])) {
                return node[prop];
            }
        }
    }
}

let hasWebp;
_hasWebp().then((has) => hasWebp = has);
function _hasWebp() {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            if (img.width === 2 && img.height === 1) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        };
        img.onerror = () => resolve(false);
        img.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
    });
}
function getOptimizedAssetPath(url) {
    if (hasWebp)
        url = url.replace(/\.(jpg|png)/, ".webp");
    return __chunk_1.getAssetPath(url);
}

exports.ConstructibleStyle = ConstructibleStyle;
exports.getOptimizedAssetPath = getOptimizedAssetPath;
