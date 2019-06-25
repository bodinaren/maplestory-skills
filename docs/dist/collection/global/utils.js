import { getAssetPath } from "@stencil/core";
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
;
export function getOptimizedAssetPath(url) {
    if (hasWebp)
        url = url.replace(/\.(jpg|png)/, ".webp");
    return getAssetPath(url);
}
