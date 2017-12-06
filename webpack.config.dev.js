import path from 'path';
import HtmlWebpckPlugin from 'html-webpack-plugin';

export default {
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	debug: true,
	devtool: 'inline-source-map',
	noInfo: true,
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [

		new HtmlWebpckPlugin({
			template: 'src/index.html',
			inject: true
		})
	],
	module: {
		loaders: [
			{test: /\.js$/, exclude:/node_modules/, loaders: ['babel']},
			{test: /\.css$/, loaders: ['style', 'css']},
			{test: /\.json$/, loaders: ['json-loader']}
		]
	}
}
