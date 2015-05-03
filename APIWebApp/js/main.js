//c19000ba260c6b6f--api key

var city ='';
var state = '';
var APIKey ='c19000ba260c6b6f'
var result;


//loadWeather
var loadWeather = function(response){

	console.log(response);


	if(response.response.error){
		alert(response.response.error.description);
		return;

	}

	var thisCity = response.current_observation.display_location.city;
	var temp = response.current_observation.temp_c+'°';
	var weather = response.current_observation.weather;
	var icon = response.current_observation.icon_url;

	// console.log('the current weather in '+thisCity+' is '+weather+' with temperature of '+temp);

	$('.temperature').text(temp);
	$('.weather').text(weather);
	$('.currentCity').val(thisCity);
	console.log(icon);
	$('.weatherIcon').html('<img src ="' + icon + '">');



}

//getweather function
var getWeather = function(){

	var thisURL = 'http://api.wunderground.com/api/'+APIKey+'/geolookup/conditions/q/'+state+'/'+city+'.json'

	$.ajax({

		url: thisURL,
		dataType: "jsonp",
		success: function(response){
			result = response;
			loadWeather(response);
		}


	})
}

//setlocation function 

var setLocation =function(){

	//define the current city
	city = $('.currentCity').val();

	if(city == null || city==''){

		alert('you need go list a city!');
		return;
	}


	state = $('.currentState').val();

	// console.log('your location is' +city+','+state);
	getWeather();
}

//init


var init = function(){

	// console.log("whats the weather");


	$('#submit').click(function(e){

		e.preventDefault();
		setLocation();
	})

}

$(document).ready(function(){

	init();
})
