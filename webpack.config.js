const path = require('path');
const nodeExternals = require('webpack-node-externals');
// const NodemonPlugin = require('nodemon-webpack-plugin');

const { NODE_ENV } = process.env;
const MODE = (NODE_ENV === 'production') ? 'production' : 'development';
const SOURCE_PATH = path.resolve('./src');

module.exports = {
  target: 'node',
  mode: MODE,
  devtool: 'source-map',
  entry: {
    server: [
      'babel-polyfill',
      `${SOURCE_PATH}/main.js`,
    ],
  },
  module: {
    rules: [{
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    }, {
      test: /\.js$/i,
      use: 'babel-loader',
      include: [SOURCE_PATH],
    }],
    noParse: /\.min\.js/,
  },
  externals: [
    nodeExternals({
      whitelist: /babel-polyfill/,
    }),
  ],
  plugins: [],
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
    concatenateModules: true,
  },
  output: {
    chunkFilename: '[name].[id].js',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.resolve('./dist'),
  },
};
