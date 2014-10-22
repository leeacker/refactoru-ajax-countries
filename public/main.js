$(document).on('ready', function(){

$('#countries-load').on('click', function(e){
	$('#country-list').empty();
	$.get('/countries', {}, function(resultData){
		var countries = resultData;
		console.log(countries);
		for(var i = 0; i<countries.length ; i++){
			var country = countries[i];
			var element = $('<div class="col-md-3 alert alert-info"></div>');
			element.append($('<h3>' + country.name + '<span class="label label-warning"><span id="' + country._id + '" class="glyphicon glyphicon-unchecked"></span></span></h3>'));
			element.append($('<h5><strong>French Name: </strong>'+ country.frenchName + '</h5>'));
			element.append($('<h5><strong>Local Name: </strong>'+ country.localName + '</h5>'));
			element.append($('<h5><strong>Region: </strong>'+ country.region + '</h5>'));
			if(country.visited === true){
			element.find('.glyphicon').attr('class', 'glyphicon glyphicon-ok');
			}
			$('#country-list').append(element);
		}
	});
});

$('#search-button').on('click', function(e){
	var searchTerm = $('#search-box').val().toLowerCase();
	$('#search-box').val('');
	$('#country-list').empty();
	$.get('/search', { search: searchTerm } , function(resultData){
		console.log(resultData);
		var country = resultData;
		var element = $('<div class="col-md-3 alert alert-info"></div>');
		element.append($('<h3>' + country.name + '<span class="label label-warning"><span id="' + country._id + '" class="glyphicon glyphicon-unchecked"></span></span></h3>'));
		element.append($('<h5><strong>French Name: </strong>'+ country.frenchName + '</h5>'));
		element.append($('<h5><strong>Local Name: </strong>'+ country.localName + '</h5>'));
		element.append($('<h5><strong>Region: </strong>'+ country.region + '</h5>'));
		if(country.visited === true){
			element.find('.glyphicon').attr('class', 'glyphicon glyphicon-ok');
		}
		$('#country-list').append(element);
	});
});

$(document).on('click', 'span.glyphicon', function(e){
	console.log('CLICK!');
	var countryID = $(this).attr('id');
	$(this).attr('class', 'glyphicon glyphicon-ok');

	$.get('/addFlag/' + countryID, {}, function(resultData){

	});

});



});