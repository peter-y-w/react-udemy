const HtmlWebpackPlugin = require('html-webpack-plugin');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './index.js',
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
		new NodePolyfillPlugin(),
	],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'main.js',
	},
	target: 'web',
	devServer: {
		port: '9500',
		static: ['./public'],
		open: true,
		hot: true,
		liveReload: true,
	},
	resolve: {
		// extensions: ['.js', '.jsx', '.json'],
    alias: {
      public: path.join(__dirname, './public')
    }
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/, //kind of file extension this rule should look for and apply in test
				exclude: /node_modules/, //folder to be excluded
				use: 'babel-loader', //loader which we are going to use
			},
      { 
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 10240,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'img/[name].[contenthash:8].[ext]',
              esModule: false
            }
          },
          esModule: false
        }
      }
		],
	},
	devtool: 'source-map',
};
