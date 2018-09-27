function asking(){
greeting = createA("#", "Please type your name and press enter");
createElement("br");
nameInput = createInput("type your name here");
nameInput.changed(wakeUpInForest);
greeting.mousePressed(wakeUpInForest);
}
function wakeUpInForest(){
greeting.hide();
nameInput.hide();
background(Forest);
userName = createElement('h1', nameInput.value());
forestTitle = createElement('h1', "You awaken in a lushes Forest");

exploreButton = createButton('Explore');
exploreButton.mousePressed(crossingBridge);


}
function crossingBridge(){
greeting.hide();
nameInput.hide();
exploreButton.hide();
forestTitle.hide();
userName.hide();
background(Bridge);
bridgeTitle = createElement('h1', "You awaken near a bridge");
goButton = createButton('Go');
goButton.mousePressed(View);

}
function View(){
bridgeTitle.hide();
goButton.hide();
background(MountainView);
viewTitle = createElement('h1', "You see Mountains");

continueButton = createButton('Continue');
snowButton = createButton("Make it snow");
snowButton.mousePressed(makeSnow);
continueButton.mousePressed(Path);

}
function makeSnow(){
	snow = true;

}
function Path(){
viewTitle.hide();
continueButton.hide();
background(MountainPath);
pathTitle = createElement('h1', "You realize you are scared of heights");

topButton = createButton('You see the top');
topButton.mousePressed(nightLights);
}
function nightLights(){
pathTitle.hide();
topButton.hide();
background(MountainTop);
}