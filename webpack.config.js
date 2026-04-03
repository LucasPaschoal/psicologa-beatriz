const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js',
      chunkFilename: isProduction ? '[name].[contenthash].js' : '[name].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: [
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
          type: 'asset',
          generator: {
            filename: 'assets/[name].[contenthash][ext]',
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        minify: isProduction ? {
          removeComments: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
        } : false,
      }),
      ...(isProduction ? [new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      })] : []),
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      minimize: isProduction,
      minimizer: [
        `...`,
        new CssMinimizerPlugin(),
      ],
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      port: 3000,
      hot: true,
      client: {
        overlay: {
          runtimeErrors: (error) => {
            const message = error && error.message ? error.message : '';

            // Ignore known browser ResizeObserver noise in dev overlay only.
            if (
              message.includes('ResizeObserver loop completed with undelivered notifications') ||
              message.includes('ResizeObserver loop limit exceeded')
            ) {
              return false;
            }

            return true;
          },
        },
      },
    },
  };
};