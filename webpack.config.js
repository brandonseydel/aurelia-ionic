const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyPlugin = require('copy-webpack-plugin');


const cssLoader = 'css-loader';
const sassLoader = {
  loader: 'sass-loader',
  options: {
    sassOptions: {
      includePaths: ['node_modules']
    }
  }
};

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      require('autoprefixer')()
    ]
  }
};

module.exports = function (env, { analyze }) {
  const production = env === 'production' || process.env.NODE_ENV === 'production';
  return {
    mode: production ? 'production' : 'development',
    devtool: production ? '' : 'eval-source-map',
    entry: './dev-app/main.ts',
    output: {
      path: path.resolve(__dirname, 'www'),
      filename: 'entry-bundle.js'
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'dev-app'), 'node_modules']
    },
    devServer: {
      historyApiFallback: true,
      open: !process.env.CI,
      port: 8100,
      lazy: false
    },
    module: {
      rules: [

        { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
        { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
        { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' },
        { test: /\.css$/i, use: ['style-loader', cssLoader, 'postcss-loader'] },
        { test: /\.scss$/i, use: ['style-loader', cssLoader, 'postcss-loader', sassLoader] },
        { test: /\.ts$/i, use: ['ts-loader', '@aurelia/webpack-loader'], exclude: /node_modules/ },
        { test: /\.html$/i, use: '@aurelia/webpack-loader', exclude: /node_modules/ }
      ]
    },
    plugins: [

      new CopyPlugin({
        patterns: [
          { from: 'images', to: 'images' },
        ],
      }),
      new HtmlWebpackPlugin({ template: 'index.ejs' }),
      analyze && new BundleAnalyzerPlugin()
    ].filter(p => p)
  }
}
