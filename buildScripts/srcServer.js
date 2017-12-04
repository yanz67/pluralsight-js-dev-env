import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack'
import config from '../webpack.config.dev';

const port = 3000;
const app = express();
config.entry.unshift('webpack-dev-middleware');
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: false,
	publicPath: config.output.publicPath
}));
app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) { 
	res.json([
		{"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@aol.com"},
		{"id": 2, "firstName": "Alex", "lastName": "Smith", "email": "alex@aol.com"},
		{"id": 3, "firstName": "Jack", "lastName": "Smith", "email": "jack@aol.com"}
	]);
});

app.listen(port, function(err) {
	if(err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
})
