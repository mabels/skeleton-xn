const fs = require('fs');
const path = require('path');
const node_modules = fs.readdirSync('node_modules').filter(x => x !== '.bin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const WebpackShellPlugin = require('webpack-shell-plugin');


//const globby = require('globby');


//fs.writeFileSync('test/all.ts',
//  globby.sync(['test/**/*-test.ts', 'test/**/*-test.tsx'])
//    .map(file => file.replace('test/', '').replace(/\.tsx?$/, ''))
//   .map(file => `import './${file}';`)
//   .join('\n'));

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
        // exclude: [ 
        //     "**/*test.ts",
        //     "**/*test.tsx"
        // ],
        loader: 'ts-loader'

      },
      /*
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: [ 'url-loader?limit=10000', 'img-loader?minimize' ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
      */
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.tsx', '.ts', '.webpack.js', '.web.js', '.js'],
    // alias: {
    //   "xreact": path.resolve('react-compat.js'),
    //   "xreact-dom": "preact-compat",
    //   'xcreate-react-class': 'preact-compat/lib/create-react-class',
    //   'xreact-dom-factories': 'preact-compat/lib/react-dom-factories'
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: './src/index.ejs'
    }),
  ]
}
];
