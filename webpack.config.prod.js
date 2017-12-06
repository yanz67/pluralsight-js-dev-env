import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
	entry: {
		vendor: path.resolve(__dirname, 'src/vendor'),
		main: path.resolve(__dirname, 'src/index')
	},
	debug: true,
	devtool: 'source-map',
	noInfo: true,
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].[chunkhash].js'
	},
	plugins: [

		new ExtractTextPlugin('[name].[contenthash].css'),

		new WebpackMd5Hash(),

		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),

		new webpack.optimize.DedupePlugin(),
		//Minify JS
		new webpack.optimize.UglifyJsPlugin(),

		new HtmlWebpackPlugin({
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundatntAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				mififyCSS: true,
				minifyURLs: true
			},
			template: 'src/index.html',
			inject: true
		})
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude:/node_modules/, loaders: ['babel']},
			{test: /\.css$/, loader: ExtractTextPlugin.extract('css?sourceMap')},
			{test: /\.json$/, loaders: ['json-loader']}
		]
	}
}
