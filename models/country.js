var mongoose = require('mongoose');

var countrySchema = mongoose.Schema({
	name: String,
	frenchName: String,
	localName: String,
	region: String,
	visited: Boolean
});

module.exports = mongoose.model('country', countrySchema);