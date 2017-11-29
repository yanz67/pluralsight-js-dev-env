import path from 'path';

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
	plugins: [],
	module: {
		loaders: [
			{test: /\.js$/, exclude:' /node_modules/', loaders: ['babel']},
			{test: /\.css$/, loaders: ['style', 'css']},
			{test: /\.json$/, loaders: ['json-loader']}
		]
	}
}
