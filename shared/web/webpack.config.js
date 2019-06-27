const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = [
  {
    mode: 'development',
    // target: 'web',
    entry: './src/app.ts',
    output: {
      path: path.resolve(__dirname, './dist'),
      // publicPath: '/dist/',
      filename: 'web.js'
    },
    module: {
      rules: [
        {
          test: /^.+\.tsx?$/,
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
              // the "scss" and "sass" values for the lang attribute to the right configs here.
              // other preprocessors should work out of the box, no loader config like this necessary.
              'scss': 'vue-style-loader!css-loader!sass-loader',
              'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            }
            // other vue-loader options go here
          }
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'vue-style-loader'
            },
            {
              loader: 'css-loader',
              options: { importLoaders: 1 }
            },
            {
              loader: 'postcss-loader'
            }
          ]
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            },
          ]
        },
        {
          test: /\.js$/,
          // exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    },
    devtool: 'source-map',
    resolve: {
      mainFields: ['@skeleton-xn/main', 'browser', 'module', 'main'],
      extensions: ['.tsx', '.ts', '.webpack.js', '.web.js', '.vue', '.js', '.json'],
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
      /*
      new webpack.ProvidePlugin({
        react: 'react',
        'react-dom': 'react-dom',
        mobx: 'mobx'
}),
*/
      new HtmlWebpackPlugin({
        template: './src/index.ejs'
      }),
      new VueLoaderPlugin(),
    ],
    /*
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            enforce: true,
            chunks: 'all'
}
}
}
}
*/
  },
];
