var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var pkg = require('./package.json');
// var ignoreWoff2 = new webpack.IgnorePlugin(/\.woff2/ig);
// var ignoreWoff = new webpack.IgnorePlugin(/\.woff/ig);
// var ignoreTtf = new webpack.IgnorePlugin(/\.ttf/ig);
// var ignoreSvg = new webpack.IgnorePlugin(/\.svg/ig);


var entry = {};
// entry[pkg.name + '-' + pkg.version] = ['./components/index.js', './style/index.less'];
entry[pkg.name + '-' + pkg.version] = './style/index.less';

module.exports = {
  entry: entry,

  resolve: {
    extensions: ['', '.css', '.less']
  },

  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].min.css',
    library: 'mimiron2', //https://webpack.github.io/docs/library-and-externals.html
    libraryTarget: 'umd2'
  },

  externals: {
    // 'react': {
    //   root: 'React',
    //   commonjs2: 'react',
    //   commonjs: 'react',
    //   amd: 'react'
    // },
    'mimiron2':'mimiron2',
    'jquery': {
      root: 'jQuery',
      commonjs2: 'jquery',
      commonjs: 'jquery',
      amd: 'jquery'
    }
  },

  module: {
    loaders: [{
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader!' + 'less?sourceMap'
      )
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-minimize!' + 'autoprefixer-loader'
      )
    },
    {
        test: /\.(woff|svg|ttf|eot|woff2)/i,
        loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
    },
    ]
  },

  plugins: [
    //ignoreWoff2,ignoreWoff,ignoreTtf,ignoreSvg,
    new ExtractTextPlugin('[name].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        ascii_only: true
      }
    })
  ],

  devtool: 'source-map'
};
