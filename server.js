var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var recipes = require('./routes/recipes')
var bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.listen(port, function() {
	console.log('Start server on port' + port)
})

app.get('/debugadd', recipes.debugAdd)
app.get('/debugall', recipes.debugAll)
app.get('/config', recipes.config)

app.get('/all', recipes.getAllRecipes)
app.post('/add', recipes.addRecipe)
app.get('/search', recipes.searchRecipes)
app.post('/remove', recipes.removeRecipe)
app.post('/removeAll', recipes.removeAllRecipes)
app.put('/addFinishedImage', recipes.addFinishedImage)


