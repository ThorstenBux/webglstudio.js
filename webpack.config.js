const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

module.exports = {
  entry: './editor/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'editor')
  },
  devServer: {
    contentBase: './dist',
    port: 8081
  },
  devtool: 'cheap-source-map',
  module: {
    rules: [
        // },
        // {
        //     test: /\.js$/,
        //     exclude: /(node_modules)/,
        //     use: {
        //     loader: 'babel-loader',
        //         options: {
        //             presets: ['es2015']
        //         }
        //     }
        // }
        // {
        //     test: require.resolve('./editor/js/core.js'),
        //     use: 'exports-loader?CORE'
        // },
        // {
        //     test: require.resolve('./editor/js/core.js'),
        //     use: [{
        //         loader: 'expose-loader',
        //         options: 'CORE'
        //     }]
        // },
        // {
        //     test: require.resolve('./editor/js/extra/litegui.js'),
        //     use: [{
        //         loader: 'expose-loader',
        //         options: 'LiteGUI'
        //     }]
        // },
        // {
        //     test: require.resolve('./editor/js/extra/litegui.js'),
        //     use: 'exports-loader?LiteGUI'
        // },
        // {
        //     test: require.resolve('./editor/js/modules/interface.js'),
        //     use: 'exports-loader?InterfaceModule'
        // },
        // {
        //     test: require.resolve('./editor/js/core.js'),
        //     use: 'imports-loader?LiteGUI=./extra/litegui.js'
        // },
        // {
        //     test: require.resolve('./editor/js/index.js'),
        //     use: 'imports-loader?CORE=global["CORE"]'
        // }
        // {
        //     test: require.resolve('./editor/js/modules/interface.js'),
        //     use: 'imports-loader?CORE=core'
        // }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        CodeMirror: "codemirror-minified"
        // jQuery: "jquery",
        // "window.jQuery": "jquery",
        // "$(window)":"jquery"
    })
]  
};