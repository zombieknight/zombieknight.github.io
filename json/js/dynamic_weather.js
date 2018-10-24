var weatherData;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=06726732216b5dc3bea4ebc0b0527c27";

var weatherData;


function setup(){
 createCanvas(500, 500);

 citySelect = createSelect();
 citySelect.position(10,10);
 citySelect.option("Chicago");
 citySelect.option("New York");
 citySelect.option("Houston");
 citySelect.option("Sydney");
 citySelect.option("Los Angeles");
 citySelect.option("Mexico City");
 citySelect.option("Tokyo");
 citySelect.option("Mumbai");
 citySelect.changed(changeCity);
}

function changeCity(){
 var weatherURL = api + citySelect.value() + apiKey;
 loadJSON(weatherURL, gotWeatherData);
}

function gotWeatherData(data){
	
	weatherData = data;
	console.log(weatherData); 
}

function draw(){
background(0);

if(weatherData){
	ellipse(width/2, height/2, weatherData.main.temp, weatherData.main.temp);

}

}