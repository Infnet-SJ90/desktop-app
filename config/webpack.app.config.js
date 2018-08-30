const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const base = require('./webpack.base.config');

module.exports = env => {
  return merge(base(env), {
    entry: {
      renderer: './src/renderer.ts',
      'scheduling-request-list.renderer': './src/scenes/scheduling-request/scheduling-request-list.renderer.ts',
      'scheduling-list.renderer': './src/scenes/scheduling/scheduling-list.renderer.ts',
      main: './src/main.ts'
    },
    output: {
      filename: (chunkData) => {
        return chunkData.chunk.name === 'main' ? '[name].js': 'js/[name].js';
      },
      path: path.resolve(__dirname, '../dist')
    },
    plugins: [
      new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
      new webpack.DefinePlugin({
        ENV_CONFIG: JSON.stringify(require(`./env/env_${env}.json`)),
        ROUTE: {
          INDEX: JSON.stringify('./dist/index.html'),
          SCHEDULING_REQUEST_LIST: JSON.stringify('./dist/scenes/scheduling-request-list.html'),
          SCHEDULING_LIST: JSON.stringify('./dist/scenes/scheduling-list.html')
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        chunks: ['renderer']
      }),
      new HtmlWebpackPlugin({
        filename: 'scenes/scheduling-request-list.html',
        template: './src/scenes/scheduling-request/scheduling-request-list.html',
        chunks: ['scheduling-request-list.renderer']
      }),
      new HtmlWebpackPlugin({
        filename: 'scenes/scheduling-list.html',
        template: './src/scenes/scheduling/scheduling-list.html',
        chunks: ['scheduling-list.renderer']
      })
    ]
  });
};
