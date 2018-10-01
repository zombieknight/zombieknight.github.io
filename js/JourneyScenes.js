function restart(){
	restartButton.hide();
	if(ifDeathByWolf == true){
		deathByWolfTitle.hide();
		ifDeathByWolf = false;
	}
	if(ifDeathByShark == true){
		deathBySharkTitle.hide();
		ifDeathByShark = false;
	}
	if(ifDeathByGoat == true){
		deathByGoatTitle.hide();
		ifDeathByGoat = false;
	}
	asking();
}
function onceAgain(){
	comet = false;
	onceAgainLink.hide();
	cometButton.hide();
	asking();

}
function asking(){
background(0);
greeting = createA("#", "Please type your name and press enter");
nameInput = createInput("type your name here");
nameInput.changed(wakeUpInForest);
greeting.mousePressed(wakeUpInForest);
}
function wakeUpInForest(){
//hide things from as slide
greeting.hide();
nameInput.hide();
//creates new scene
background(Forest);
userName = createElement('h1', nameInput.value());
forestTitle = createElement('h1', "You awaken in a lushes Forest");
//proceed with story
goDeeperButtom = createButton("Look around");
exploreButton = createButton('Explore');
goDeeperButtom.mousePressed(deathByWolf);
exploreButton.mousePressed(crossingBridge);


}
function crossingBridge(){
//hide things from as slide
greeting.hide();
nameInput.hide();
exploreButton.hide();
forestTitle.hide();
userName.hide();
goDeeperButtom.hide();

//creates new scene
background(Bridge);
bridgeTitle = createElement('h1', "As you explore you come to a bridge");

//proceed with story
crossBridgeButton = createButton("Cross bridge");
goSwimButton = createButton('Go Swimming');
goSwimButton.mousePressed(deathByShark);
crossBridgeButton.mousePressed(View);


}
function View(){
//hide things from as slide
bridgeTitle.hide();
crossBridgeButton.hide();
goSwimButton.hide();

//creates new scene
background(MountainView);
viewTitle = createElement('h1', "You see Mountains");

continueButton = createButton('CLimb mountain path');
snowButton = createButton("Make it snow");

//proceed with story
snowButton.mousePressed(makeSnow);
continueButton.mousePressed(Path);

}
function makeSnow(){
	snow = true;

}
function Path(){
//hide things from as slide
snow = false;
viewTitle.hide();
continueButton.hide();
snowButton.hide();

//creates new scene
background(MountainPath);
pathTitle = createElement('h1', "You hear a noise as you climb the mountain");

//proceed with story
hearANoiseButton = createButton("Go to the source of the noise?")
topButton = createButton('Continue to the top?');
topButton.mousePressed(nightLights);
hearANoiseButton.mousePressed(deathByGoat);
}
function nightLights(){
//hide things from as slide
pathTitle.hide();
topButton.hide();
hearANoiseButton.hide();

//creates new scene
background(MountainTop);
onceAgainLink = createA("#","You have arrived to the top. Would you like to go once again?");

cometButton = createButton("Blink");
onceAgainLink.mousePressed(onceAgain);
cometButton.mousePressed(shootingStar);
}

function shootingStar(){
	comet = false;
	comet = true;
}







function deathByWolf(){
	greeting.hide();
    nameInput.hide();
	exploreButton.hide();
	forestTitle.hide();
	userName.hide();
	goDeeperButtom.hide();

	background(wolf);
	deathByWolfTitle = createElement('h1',"You looked around for too long and have died from a Wolf");
	restartButton = createButton("Restart?");
	restartButton.mousePressed(restart);
	ifDeathByWolf = true;

}

function deathByShark(){
	bridgeTitle.hide();
	crossBridgeButton.hide();
	goSwimButton.hide();


	background(shark);
	deathBySharkTitle = createElement('h1',"While swimming you attracted the attention of a hungry shark and died");
	restartButton = createButton("Restart?");
	restartButton.mousePressed(restart);
	ifDeathByShark = true;

}

function deathByGoat(){
	pathTitle.hide();
	topButton.hide();
	hearANoiseButton.hide();

	background(goat);
	deathByGoatTitle = createElement('h0',"You see a goat. You realize you are scared of heights. The goat smells fear and charges towards you pushing you off the ledge. You have died from a goat.");
	restartButton = createButton("Restart?");
	restartButton.mousePressed(restart);
	ifDeathByGoat = true;

}