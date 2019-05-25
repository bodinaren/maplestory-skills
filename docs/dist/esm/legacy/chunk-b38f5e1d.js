import { g as getElement, d as h, h as Host, i as getAssetPath } from './maplestory-skills-fe8c7252.js';
var supportsConstructibleStylesheets = (function () {
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
function ConstructibleStyle(opts) {
    if (opts === void 0) { opts = {}; }
    return function (target, propertyKey) {
        if (!opts.cacheKeyProperty) {
            opts.cacheKeyProperty = propertyKey;
        }
        var componentWillLoad = target.componentWillLoad, render = target.render;
        if (supportsConstructibleStylesheets) {
            target.componentWillLoad = function () {
                var cssText = (typeof this[propertyKey] === "function" ? this[propertyKey]() : this[propertyKey]);
                var willLoadResult = componentWillLoad && componentWillLoad.call(this);
                var host = getElement(this);
                var root = (host.shadowRoot || host);
                root.adoptedStyleSheets = (root.adoptedStyleSheets || []).concat([getOrCreateStylesheet(this, target, cssText, opts)]);
                return willLoadResult;
            };
        }
        else {
            target.render = function () {
                var cssText = (typeof this[propertyKey] === "function" ? this[propertyKey]() : this[propertyKey]);
                var renderedNode = render.call(this);
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
                            var style = document.createElement("style");
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
    var key = instance[opts.cacheKeyProperty];
    if (!target.__constructableStyle[key]) {
        target.__constructableStyle[key] = new CSSStyleSheet();
        target.__constructableStyle[key].replace(cssText);
    }
    return target.__constructableStyle[key];
}
function isHost(node) {
    for (var prop in node) {
        if (node.hasOwnProperty(prop)) {
            if (node[prop] === Host) {
                return true;
            }
        }
    }
    return false;
}
function getHostChildren(node) {
    for (var prop in node) {
        if (node.hasOwnProperty(prop)) {
            if (Array.isArray(node[prop])) {
                return node[prop];
            }
        }
    }
}
var hasWebp;
_hasWebp().then(function (has) { return hasWebp = has; });
function _hasWebp() {
    return new Promise(function (resolve) {
        var img = new Image();
        img.onload = function () {
            if (img.width === 2 && img.height === 1) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        };
        img.onerror = function () { return resolve(false); };
        img.src = "data:image/webp;base64,UklGRjIAAABXRUJQVlA4ICYAAACyAgCdASoCAAEALmk0mk0iIiIiIgBoSygABc6zbAAA/v56QAAAAA==";
    });
}
function getOptimizedAssetPath(url) {
    if (hasWebp)
        url = url.replace(/\.(jpg|png)/, ".webp");
    return getAssetPath(url);
}
export { getOptimizedAssetPath as a, ConstructibleStyle as b };
