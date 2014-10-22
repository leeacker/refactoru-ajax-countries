var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var mongoose = require('mongoose');
var _ = require('underscore');

var countries = require('./models/countries.json');
var Country = require('./models/country.js');

mongoose.connect('mongodb://localhost/countries');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));



///////////////////////////////////////////////////////////////
// Code for entering countries into mongodb (only run once!) //
//                                                           //
// for(var i = 0; i < countries.length; i++){                //
// 	var country = countries[i];                              //
// 	var newCountry = new Country(country);                   //
// 	newCountry.save();                                       //
// }                                                         //
///////////////////////////////////////////////////////////////


app.get('/', indexController.index);

app.get('/countries', indexController.getCountries);

app.get('/search', indexController.search);

app.get('/addFlag/:flagCountry', indexController.addFlag);

var server = app.listen(8049, function() {
	console.log('Express server listening on port ' + server.address().port);
});
