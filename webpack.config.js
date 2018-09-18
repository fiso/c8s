const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'development';
const isDevelopment = env === 'development';

console.log(`Starting ${env} build`);

module.exports = {
  mode: env,
  entry: ['babel-polyfill', './src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'c8s.bundle.js',
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: isDevelopment ? 'source-map' : false,
  context: __dirname,
  target: 'web',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/templates/index.template.html',
    }),
  ],
};

if (isDevelopment) {
  module.exports.plugins.push(new webpack.HotModuleReplacementPlugin({}));
}
