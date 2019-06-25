import { g as getElement, h, H as Host, B as BUILD, d as getAssetPath } from './chunk-b3f221a8.js';

BUILD.cmpWillLoad = true;
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
        if (!componentWillLoad)
            console.warn(`ConstructibleStyle requires you to have a \`componentWillLoad\` lifecycle method in \`${target.constructor.name}\`. Failure to add this function may cause ConstructibleStyle to fail due to StencilJS build optimizations.`);
        if (supportsConstructibleStylesheets) {
            target.componentWillLoad = function () {
                const cssText = (typeof this[propertyKey] === "function" ? this[propertyKey]() : this[propertyKey]);
                const willLoadResult = componentWillLoad && componentWillLoad.call(this);
                const host = getElement(this);
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
                    renderedNode = h(Host, null, renderedNode);
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
    (getHostChildren(node) || []).push(h("style", { type: "text/css", "constructible-style": targetName }, cssText));
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
            if (node[prop] === Host) {
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

let hasWebp = false;
_hasWebp().then((has) => hasWebp = has);
function _hasWebp() {
    return new Promise((resolve) => {
        if (!window.Image)
            return resolve(false); // for testing where `new Image()` may not be available
        const img = new Image();
        img.onload = () => resolve(img.width === 2 && img.height === 1);
        img.onerror = () => resolve(false);
        img.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
    });
}
function getOptimizedAssetPath(url) {
    if (hasWebp)
        url = url.replace(/\.(jpg|png)/, ".webp");
    return getAssetPath(url);
}

export { ConstructibleStyle as C, getOptimizedAssetPath as g };
