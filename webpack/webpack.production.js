const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const terserPlugin = new TerserPlugin({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  cache: true,
  parallel: true,
  terserOptions: {
    ecma: 6,
  },
});

module.exports = {
  output: {
    filename: 'bundle.min.js',
  },
  devtool: 'source-map',
  performance: {
    hints: false,
  },
  optimization: {
    minimizer: [terserPlugin],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css',
    }),
    terserPlugin,
  ],
};
