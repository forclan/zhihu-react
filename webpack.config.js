const path = require('path');
const webpack = require('webpack');

const isDevelopment = process.env.NODE_ENV !== 'production';

let entry = './src/App.js';
let plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  })];
let devtool = [];
let externals = {
      // 'react': 'react',
      // 'react-dom': 'react-dom',
      // 'redux': 'redux',
      // 'react-redux': 'react-redux'
};

// console.log('is deploy?' + isProduction);
if (isDevelopment) {
  entry = [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    entry,
  ];
  externals = [];
  devtool = 'eval';
  plugins = [new webpack.HotModuleReplacementPlugin()];
}

module.exports = {
  // devtool: isProduction ? 'eval' : null,
  devtool,
  entry: {
    App: entry,
  },
  output: {
    path: path.join(__dirname, 'lib'),
    filename: '[name].js',
    // library: 'shared-components',
    libraryTarget: 'umd',
    publicPath: '/static/',
  },
  plugins,
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: [path.join(__dirname, 'src'), path.join(__dirname, 'demo')],
    },
    ],
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.scss', '.jsx'],
  },
  externals,
};
