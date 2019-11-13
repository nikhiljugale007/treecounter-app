const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.config.js')();
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = webpackMerge(commonConfig, {
  mode: 'development',
  entry: {
    bundle: ['babel-polyfill', path.join(__dirname, '../../index.web.js')]
    /* uncomment these widgets if you want to work on them */
    // widget: [
    //   'babel-polyfill',
    //   path.join(__dirname, '../widgets/basic/widget.js')
    // ],
    // treecounterwidget: [
    //   'babel-polyfill',
    //   path.join(__dirname, '../widgets/Treecounter/widget.js')
    // ],
    // donatetreewidget: [
    //   'babel-polyfill',
    //   path.join(__dirname, '../widgets/DonateTrees/widget.js')
    // ],
    // progressbarwidget: [
    //   'babel-polyfill',
    //   path.join(__dirname, '../widgets/progressbar/widget.js')
    // ],
    /* The following widget currently does not compile! */
    // ndviwidget: [
    //   'babel-polyfill',
    //   path.join(__dirname, '../widgets/NDVI/widget.js')
    // ]
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,
    port: 8081,
    historyApiFallback: true,
    disableHostCheck: true
    //  host: '192.168.100.208'
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        ENV: JSON.stringify('development')
      }
    })
  ]
});
