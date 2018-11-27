console.log('Copy assets');

var fs = require('fs-extra');
var path = require('path');

var fromAssetsDir = path.join(__dirname, "..", "src", "assets");
var toAssetsDir = path.join(__dirname, "..", "dist", "maplestory-skills", "assets");
var distCollectionDir = path.join(__dirname, "..", "dist", "collection", "assets");
var extreneousDir = path.join(__dirname, "..", "dist", "collection", "build");

fs.emptyDirSync(toAssetsDir);

fs.copySync(fromAssetsDir, toAssetsDir);
fs.copySync(fromAssetsDir, distCollectionDir);

fs.removeSync(extreneousDir);
