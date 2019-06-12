const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
  mode: 'development',
  target: 'web',
  entry: './src/app.ts',
  output: {
    path: __dirname + '/dist',
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /^.+\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    mainFields: ['@skeleton-xn/main', 'browser', 'module', 'main'],
    extensions: ['.tsx', '.ts', '.webpack.js', '.web.js', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './src/index.ejs'
    }),
  ]
}
];
