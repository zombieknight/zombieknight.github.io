var birdData;
var allBirds;
function preload(){
birdData = loadJSON("./js/bird.json");

} 

function setup(){
	noCanvas();
	print(birdData);

	allBirds = birdData.birds;
	print(allBirds.length);
	for(var i =0; i < allBirds.length; i++){
		createElement('h1', allBirds[i].family);

		var members = allBirds[i].members;
		for(var j =0; j < members.length; j++){
		createElement('h1', members[j]);
	}
	}
	
}

function draw(){
background(0);
fill(255);
textSize(60);
text(birdData.birds[2].family,20,40);
textSize(40);
text(birdData.birds[2].members[2],20,80);
text(birdData.birds[2].members[3],20,120);

}