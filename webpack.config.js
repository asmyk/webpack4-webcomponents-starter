const path = require('path');
const { BabelMultiTargetPlugin } = require('webpack-babel-multi-target-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin'); 

const DIST_PATH = path.resolve(path.join(__dirname, '/dist'));
const SRC_PATH = path.resolve(path.join(__dirname, '/src'));

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';

const polyfills = [
    {
        from: path.resolve(`${webcomponentsjs}/webcomponents-*.{js,map}`),
        to: path.join(DIST_PATH, 'vendor'),
        flatten: true
    },
    {
        from: path.resolve(`${webcomponentsjs}/bundles/*.{js,map}`),
        to: path.join(DIST_PATH, 'vendor', 'bundles'),
        flatten: true
    }
];

const assets = [{
    from: 'assets/**',
    context: path.resolve('./src'),
    to: DIST_PATH
}, {
    from: path.resolve('./src/index.html'),
    to: DIST_PATH,
    flatten: true
}, {
    from: path.resolve('./src/manifest.json'),
    to: DIST_PATH,
    flatten: true
}];

const devPlugins = [
    new CopyWebpackPlugin(polyfills)
]

const prodPlugins = [
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin(polyfills, assets),
]

const commonPlugins = [
    new HtmlWebpackPlugin({
        template: `${path.resolve('./src/index.html')}`,
        minify: {
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeRedundantAttributes: true,
            removeStyleLinkTypeAttributes: true,
            removeComments: true
        },
        inject: true,
        compile: true,
        excludeAssets: [/(bundle|polyfills)(\..*)?\.js$/],
        paths: {
            webcomponents: './vendor/webcomponents-loader.js'
        }
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
    }),
    new BabelMultiTargetPlugin({
        babel: {
            plugins: [

                ["@babel/plugin-proposal-decorators", { "legacy": false, decoratorsBeforeExport: true }],

                // Minify HTML and CSS in tagged template literals
                [
                    require('babel-plugin-template-html-minifier'),
                    {
                        modules: {
                            '@polymer/polymer/lib/utils/html-tag.js': ['html']
                        },
                        htmlMinifier: {
                            collapseWhitespace: true,
                            minifyCSS: true,
                            removeComments: true
                        }
                    }
                ]
            ],

            // @babel/preset-env options common for all bundles
            presetOptions: {
                // Don’t add polyfills, they are provided from webcomponents-loader.js
                useBuiltIns: false
            }
        },

        // Modules excluded from targeting into different bundles
        doNotTarget: [
            // Array of RegExp patterns
        ],

        // Modules that should not be transpiled
        exclude: [
            // Array of RegExp patterns
        ],

        // Fix for `nomodule` attribute to work correctly in Safari 10.1
        safari10NoModuleFix: 'inline-data-base64',

        // Target browsers with and without ES modules support
        targets: {
            es6: {
                browsers: [
                    'last 2 Chrome major versions',
                    'last 2 ChromeAndroid major versions',
                    'last 2 Edge major versions',
                    'last 2 Firefox major versions',
                    'last 3 Safari major versions',
                    'last 3 iOS major versions'
                ],
                tagAssetsWithKey: false, // don’t append a suffix to the file name
                esModule: true // marks the bundle used with <script type="module">
            },
            es5: {
                browsers: ['ie 11'],
                tagAssetsWithKey: true, // append a suffix to the file name
                noModule: true // marks the bundle included without `type="module"`
            }
        }
    })]

const config = {
    entry: `${SRC_PATH}/index.js`,
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    BabelMultiTargetPlugin.loader(),
                    'uglify-template-string-loader'
                ]
            }
        ]
    },
    output: {
        filename: '[name].bundle.js',
        path: DIST_PATH
    },
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: DIST_PATH,
        compress: true,
        overlay: {
            errors: true
        },
        port: 3000,
        host: '0.0.0.0',
        disableHostCheck: true
    }
};

module.exports = (env, argv) => {
    console.log(argv.mode);
    if (argv.mode === 'development') {
        config.devtool = 'cheap-source-map';
        config.plugins = [...commonPlugins, ...devPlugins];
    }

    if (argv.mode === 'production') {
        config.plugins = [...commonPlugins, ...prodPlugins];
    }

    return config;
};

