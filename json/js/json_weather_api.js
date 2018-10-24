var weatherData;
var windSpeed;
var windx;
var fillTemp;
var mappedFillTemp;
var randDino;
var dinos;
var weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=06726732216b5dc3bea4ebc0b0527c27";

function preload(){
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=06726732216b5dc3bea4ebc0b0527c27",gotWeatherData);
	dinos = loadJSON("./js/dinos.json");
}
function updateWeather(){
	loadJSON(weatherURL, gotWeatherData);
	
}
function setup(){
	canvas = createCanvas(windowWidth,windowHeight);
	windx =windowWidth/2;
	setInterval(updateWeather,10000);

	console.log(dinos.dinosaurs.length);
	randDino = int(random(0,dinos.dinosaurs.length));

}
function gotWeatherData(data){
	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.weather[0].description);
	console.log(weatherData.main.temp);
	console.log(weatherData.wind.speed);
}
function draw(){
	background(0,255,0);
	textSize(40);
	if(weatherData){
		fillTemp = weatherData.main.temp;
		mappedFillTemp = map(fillTemp,0,105,0,255);
		fill(mappedFillTemp,30,150);
		windSpeed = weatherData.wind.speed;
		windx = windx + windSpeed;
		text("The " + dinos.dinosaurs[randDino] + " see " + weatherData.weather[0].description,10,40);
	}
	if(windx > windowWidth){
		windx = 0;
	}
}