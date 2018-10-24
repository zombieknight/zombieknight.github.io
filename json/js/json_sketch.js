var weatherData;
var windSpeed;
var windx;
var fillTemp;
var mappedFillTemp;
var weatherData;
var citySelect;
var randCats;
var catTypes;
var cityName = ["Chicago","Sydney","Los Angeles","Mexico City","Tokyo","Mumbai","Moscow","London"];
var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=06726732216b5dc3bea4ebc0b0527c27";

var weatherData;

function preload(){
	catType = loadJSON("./js/cats.json");
}
		
function setup(){
 canvas = createCanvas(windowWidth,windowHeight);
 setInterval(updateWeather,100000);
 console.log(catType.cats.length);

 citySelect = createSelect();
 citySelect.position(10,10);
 citySelect.option(cityName[0]);
 citySelect.option(cityName[1]);
 citySelect.option(cityName[2]);
 citySelect.option(cityName[3]);
 citySelect.option(cityName[4]);
 citySelect.option(cityName[5]);
 citySelect.option(cityName[6]);
 citySelect.option(cityName[7]);
 citySelect.changed(updateWeather);
 }

function updateWeather(){
	var weatherURL = api + citySelect.value() + apiKey;
	loadJSON(weatherURL, gotWeatherData);

}

function gotWeatherData(data){
	
	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	console.log(weatherData.main.pressure);
	console.log(weatherData.wind.speed); 
	randCats = int(random(0,catType.cats.length));

}

function draw(){
if(weatherData){
	background(0);
	textSize(40);

	if(weatherData){
		fillTemp = weatherData.main.temp;
		mappedFillTemp = map(fillTemp,0,105,0,255);
		fill(mappedFillTemp,30,150);
		windSpeed = weatherData.wind.speed;

		if(windSpeed < 10){
			var windfeelings = " hates ";
		}
		else{
			var windfeelings = " loves ";
		}

		if(fillTemp < 10){
			var tempfeelings = " TOO COLD ";
		}
		else if(fillTemp < 40){
			var tempfeelings =  " chilly ";
		}
		else if(fillTemp < 60){
			var tempfeelings = " warm ";
		}
		else{
			var tempfeelings = " TOO HOT ";
		}

		text("The " + catType.cats[randCats] + " sees " + weatherData.weather[0].description + " in "+ citySelect.value() +".",10,40);
		text("The " + catType.cats[randCats] + " feels " + weatherData.main.pressure + " of pressure on it hairs " +".",10,80);
		text("The " + catType.cats[randCats] + windfeelings + weatherData.wind.speed + " wind speed on its face"+ ".",10,120);
		text("The " + catType.cats[randCats] +" says its " + tempfeelings + " at " +weatherData.main.temp + ".",10,160);
	}
	

	}

}
