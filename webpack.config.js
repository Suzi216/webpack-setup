const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',

  },
  plugins: [
    new HtmlWebpackPlugin({
     template: './src/index.html',
     // filename: 'index.html',
    }),
  ],
  module: {
    rules: [
   {
     test: /\.css$/i,
     use: ["style-loader", "css-loader"],

   },
 ],
},
    devServer: {
      static: './dist',
    },
    optimization: {
      runtimeChunk: 'single',
    },
};
