const path = require('path');
const nodeExternals = require('webpack-node-externals');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const translateEnvToMode = (env) => {
  if (env === 'production') {
    return 'production';
  }
  return 'development';
};

module.exports = env => {
  return {
    target: 'electron-renderer',
    mode: translateEnvToMode(env),
    node: {
      __dirname: false,
      __filename: false
    },
    externals: [nodeExternals()],
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src/,
          exclude: /node_modules/,
          use: ['babel-loader', 'standard-loader']
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.ts$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: {
            typeCheck: true,
            emitErrors: true
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader'
        }
      ]
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    plugins: [
      new FriendlyErrorsWebpackPlugin({ clearConsole: env === 'development' })
    ]
  };
};
