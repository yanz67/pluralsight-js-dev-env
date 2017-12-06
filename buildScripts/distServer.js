import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(express.static('dist'));
app.use(compression());


app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
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
