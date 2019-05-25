import { getAssetPath } from "@stencil/core";
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
;
export function getOptimizedAssetPath(url) {
    if (hasWebp)
        url = url.replace(/\.(jpg|png)/, ".webp");
    return getAssetPath(url);
}
