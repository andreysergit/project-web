var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: './src/js/index.js', //'./style.scss'
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist'),
    },
  plugins: [new HtmlWebpackPlugin({
    template: './src/index.html'
  })],
  module: {
    rules: [
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
        },
        {
         test: /\.(png|svg|jpg|gif)$/,
          use: [
          'file-loader',
          ],
          },
          { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            loader: "babel-loader" 
          }
        ],
    },
};