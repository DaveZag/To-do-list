const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  // file to use for building our main javascript file
  entry: './app/index.js',

  //  name and path for our main javascript file
  output: {
    filename: 'main.js',
    path: distPath,
    clean: true,
    assetModuleFilename: './assets/[name][ext]',
  },

  // setup our webpack server's port, Live reload and path
  devServer: {
    port: 8080,
    static: distPath,
    hot: true,
    watchFiles: ['app/**/*'],
  },

  // Set up our loaders for all our assets from css to files, etc...
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },

      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        type: 'asset/resource',
      },
    ],
  },

  // plugins to be used for html and other files
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
  ],

  // Define which mode we're working in which determines if our files will be minified or full.
  mode: 'development',
};
