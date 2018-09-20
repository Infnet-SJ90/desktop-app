const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const base = require('./webpack.base.config');

module.exports = env => {
  return merge(base(env), {
    entry: {
      app: './src/router/index.ts',
      main: './src/main.ts'
    },
    output: {
      filename: ({ chunk }) => chunk.name === 'main' ? '[name].js': 'js/[name].js',
      path: path.resolve(__dirname, '../dist')
    },
    plugins: [
      new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
      new webpack.DefinePlugin({
        ENV_CONFIG: JSON.stringify(require(`./env/env_${env}.json`)),
        INDEX_FILE: JSON.stringify('./dist/index.html'),
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        excludeChunks: ['main']
      })
    ]
  });
};
