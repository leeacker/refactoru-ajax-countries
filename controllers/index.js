var countries = require('../models/countries.json');
var Country = require('../models/country.js');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	getCountries: function(req, res){
		Country.find({}, function(err, result){
			res.send(result);
		});

	},
	search: function(req, res){
		var searchTerm = req.query.search;
		var searchObject = {
			name: searchTerm
		};
		
		Country.find({}, function(err, result){
			var countries = result;
			var country = countries.filter(function(object, index){
				return countries[index].name.toLowerCase() === searchTerm;
			});

			res.send(country[0]);
			console.log(country);
		});
	},
	addFlag: function(req, res){
		var countryID = req.params.flagCountry;
		console.log(countryID);
		Country.update({ _id : countryID }, {$set: {visited: true}}, function(err, result){
			console.log('flagged updated');
			res.send('FLAG');
		});
	}
};

module.exports = indexController;