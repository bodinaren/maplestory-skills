console.log('Copy dist to docs folder.');

var fs = require('fs-extra');
var path = require('path');

var fromDir = path.join(__dirname, "..", "dist");
var toDir = path.join(__dirname, "..", "docs", "dist");

fs.emptyDirSync(toDir);

fs.copySync(fromDir, toDir);

