const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
   mode: "development",
  entry:{
   index:'./src/index.js'
 },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',

  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './public/index.html',
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
    // devServer: {
    //   static: './dist',
    // },
    // optimization: {
    //   runtimeChunk: 'single',
    // },
};
