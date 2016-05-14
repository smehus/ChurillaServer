var mongo = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
// mongo lab connection point
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://heroku_fr66zgw3:k6k3gi0ejiaerib6j9u2o47rbk@ds021922.mlab.com:21922/heroku_fr66zgw3'
var mainDb
var recipeCollection

// Set up the database connection with mongolab
mongo.connect(mongoUri, function(err, db) {
	if (err) {
		console.log('Failed to connect the database' + err)
	} else {
		mainDb = db
		db.collection('recipes', function(error, collection) {
			if (error) {
				console.log('Failed to retrieve recipes collection' + error);
			} else {
				recipeCollection = collection
			}
		});
	};
});

exports.addRecipe = function(req, res) {

};

exports.getAllRecipes = function(req, res) {

};

exports.searchRecipes = function(req, res) {

};

exports.removeRecipe = function(req, res) {

};