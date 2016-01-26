var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
      //'./components/index.jsx' // Your appʼs entry point
      './components/index.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
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
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                //exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'components'),
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                //exclude: path.join(__dirname, 'node_modules'),
                include: path.join(__dirname, 'components'),
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'source-map'
}
