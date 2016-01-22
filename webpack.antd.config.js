var config = require('./webpack.config');
config.entry = {
  'antd': ['./index.js', './style/index.less']
};
config.externals = {
  'react': {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react'
  },
  'react-dom': {
    root: 'ReactDOM',
    commonjs2: 'react-dom',
    commonjs: 'react-dom',
    amd: 'react-dom'
  },
  "antd":"antd"
};
config.output.library = 'antd';
config.output.libraryTarget = 'umd';
module.exports = config;
