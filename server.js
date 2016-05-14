var express = require('express')
var app = express()

app.listen(3000)

app.get('/get', function(req, res) {
	res.send([{name:'wine1'}, {name:'wine2'}]);
})