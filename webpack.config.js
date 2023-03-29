const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3030,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/react',
              '@babel/typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: ['svg-inline-loader'],
      },
      {
        test: /\.(jpg|png|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@components': path.resolve(
        __dirname,
        'src/components/'
      ),
      '@common': path.resolve(__dirname, 'src/common/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
    },
  },
};
