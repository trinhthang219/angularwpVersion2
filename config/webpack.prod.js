const path = require('path');
const rxPaths = require('rxjs/_esm5/path-mapping');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpackTools = require('@ngtools/webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const helpers = require('./webpack.helpers');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const ROOT = path.resolve(__dirname, '..');

console.log('------------------ PRODUCTION -------------------------');

module.exports = {
  mode: 'production',
  entry: {
    polyfills: './angularApp/polyfills.ts',
    vendor: './angularApp/vendor.ts',
    app: './angularApp/main-aot.ts'
  },

  output: {
    path: ROOT + '/product/',
    filename: 'dist/[name].bundle.js',
    chunkFilename: 'dist/[name].chunk.js',
    publicPath: './app/product/' //https://xsperamso365.sharepoint.com/sites/appcatalog/ClientSideAssets/CustomerAssets/
  },

  resolve: {
    extensions: ['.ts', '.js', '.json'],
    alias: rxPaths()
  },

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    outputPath: path.join(ROOT, 'product/')
  },

  module: {
    rules: [
      {
        test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
        use: '@ngtools/webpack',
        parser: {
          system: true
        }
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf|svg|eot)$/,
        use: 'file-loader?name=assets/[name]-[hash:6].[ext]',
        parser: {
          system: true
        }
      },
      {
        test: /favicon.ico$/,
        use: 'file-loader?name=/[name].[ext]',
        parser: {
          system: true
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        parser: {
          system: true
        }
      },
      {
        test: /\.scss$/,
        include: path.join(ROOT, 'angularApp/styles'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
        parser: {
          system: true
        }
      },
      {
        test: /\.scss$/,
        exclude: path.join(ROOT, 'angularApp/styles'),
        use: ['raw-loader', 'sass-loader'],
        parser: {
          system: true
        }
      },
      {
        test: /\.html$/,
        use: 'raw-loader',
        parser: {
          system: true
        }
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ],
    exprContextCritical: false
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //  analyzerMode: 'static',
    //  generateStatsFile: true
    // }),
    new webpackTools.AngularCompilerPlugin({
      tsConfigPath: './tsconfig-aot.json'
      // entryModule: './angularApp/app/app.module#AppModule'
    }),

    // new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),

    new CleanWebpackPlugin(['./product/dist', './product/assets'], {
      root: ROOT
    }),
    new webpack.NoEmitOnErrorsPlugin(),

    // new UglifyJSPlugin({
    //   parallel: 2
    // }),

    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['vendor', 'polyfills']
    // }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: 'angularApp/index.html',
      chunksSortMode: 'none'
    }),
    new CopyWebpackPlugin([
      { from: './angularApp/images/*.*', to: 'assets/', flatten: true }
    ])
    // new HtmlWebpackPlugin({
    //   filename: 'Default.aspx',
    //   template: '!!handlebars-loader!angularApp/Default.aspx',
    //   inject: false
    // }),
  ]
};
