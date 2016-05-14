var express = require('express');
var app = express();
var port = process.env.PORT || 5000;
var recipes = require('.routes/recipes')

app.listen(port, function() {
	console.log('Start server on port' + port)
})

app.get('/all', recipes.getAllRecipes)
app.post('/add', recipes.addRecipe)
app.get('/search', recipes.searchRecipes)
app.delete('/remove', recipes.removeRecipe)
