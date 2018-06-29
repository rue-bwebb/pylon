import path from 'path';
import nodeExternals from 'webpack-node-externals';
import NodemonPlugin from 'nodemon-webpack-plugin';

const { NODE_ENV } = process.env;
const MODE = (NODE_ENV === 'production') ? 'production' : 'development';
const SOURCE_PATH = path.resolve('./src')
const WATCH = (NODE_ENV === 'development');

module.exports = {
  target: 'node',
  mode: MODE,
  watch: WATCH,
  devtool: 'source-map',
  entry: {
    server: [
      'babel-polyfill',
      `${SOURCE_PATH}/main.js`,
    ]
  },
  module: {
    rules: [{
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader'
    }, {
      test: /\.js$/i,
      use: 'babel-loader',
      include: [SOURCE_PATH],
    }],
    noParse: /\.min\.js/
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
    // This is only ran in watch mode
    new NodemonPlugin({
      ignore: ['*.js.map'],
      nodeArgs: ['--inspect=0.0.0.0:9229'],
      script: './index.js',
      watch: SOURCE_PATH,
    }),
  ],
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
    concatenateModules: true,
  },
  output: {
    chunkFilename: '[name].[id].js',
    filename:      '[name].js',
    libraryTarget: 'commonjs2',
    path:           path.resolve('./dist'),
  },
};