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
    /*
    alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat',
            // Not necessary unless you consume a module using `createClass`
            'create-react-class': 'preact-compat/lib/create-react-class',
            // Not necessary unless you consume a module requiring `react-dom-factories`
            'react-dom-factories': 'preact-compat/lib/react-dom-factories'
        }
        */
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './src/index.ejs'
    }),
  ]
}
];
