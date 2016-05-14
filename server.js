var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

app.listen(port, function() {
	console.log('Start server on port' + port)
})

app.get('/get', function(req, res) {
	res.send([{name:'wine1'}, {name:'wine2'}]);
})