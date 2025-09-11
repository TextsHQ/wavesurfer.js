/* eslint-env node */

const path = require('path');
const webpack = require('webpack');

const rootDir = path.resolve(__dirname, '..', '..');
const pckg = require(path.join(rootDir, 'package.json'));

// library JS banner with copyright and version info
// prettier-ignore
const jsBanner = `${pckg.name} ${pckg.version}
${pckg.homepage}
@license ${pckg.license}`;
const libBanner = new webpack.BannerPlugin({
    banner: jsBanner,
    test: /\.js$/
});

// plugin JS banner with copyright and version info
// prettier-ignore
const jsPluginBanner = `${pckg.name} [name] plugin ${pckg.version}
${pckg.homepage}
@license ${pckg.license}`;
const pluginBanner = new webpack.BannerPlugin({
    banner: jsPluginBanner,
    test: /\.js$/
});

module.exports = { libBanner, pluginBanner };
