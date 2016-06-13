var mongo = require('mongodb').MongoClient
var ObjectId = require('mongodb').ObjectId
var s3 = require('s3');
// mongo lab connection point
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://heroku_fr66zgw3:k6k3gi0ejiaerib6j9u2o47rbk@ds021922.mlab.com:21922/heroku_fr66zgw3'
var mainDb
var recipeCollection
var debugCollection


var client = s3.createClient({
  maxAsyncS3: 20,     // this is the default 
  s3RetryCount: 3,    // this is the default 
  s3RetryDelay: 1000, // this is the default 
  multipartUploadThreshold: 20971520, // this is the default (20 MB) 
  multipartUploadSize: 15728640, // this is the default (15 MB) 
  s3Options: {
    accessKeyId: "AKIAJXTQYBC24IJQXKRQ",
    secretAccessKey: "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",
    // any other options are passed to new AWS.S3() 
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Config.html#constructor-property 
  },
});

var params(file: String) = {
  localFile: file,
 
  s3Params: {
    Bucket: "churillarecipes",
    Key: "mzOgWdq/mi6Cu+eGM1xJrxHluZWDC0UK9SdDeiU1",
    // other options supported by putObject, except Body and ContentLength. 
    // See: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#putObject-property 
  },
};


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

		// Used for debugging
		db.collection('debug', function(errr, col) {
			debugCollection = col
		})
	};
});




exports.addRecipe = function(req, res) {
	console.log('ADD RECIPE');
};

exports.getAllRecipes = function(req, res) {
	console.log('GET ALL');
};

exports.searchRecipes = function(req, res) {
	console.log('SEARCH RECIPES')
};

exports.removeRecipe = function(req, res) {
	console.log('REMOVE RECIPE')
};

exports.removeAllRecipes = function(req, res) {
	console.log('REMOVE ALL RECIPES')
}


// DEBUG

exports.debugAdd = function(req, res) {
	debugCollection.insert({beautiful: 'CLAIRE CLAIRE CLAIRE'}, {safe: true}, function(err, rs) {
		res.send(rs)
	});
};

exports.debugAll = function(req, res) {
	debugCollection.find().toArray(function(err, items) {
		res.send(items)
	});
};







