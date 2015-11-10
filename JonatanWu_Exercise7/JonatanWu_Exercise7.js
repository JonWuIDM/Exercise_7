
// Jonatan Wu Creative Coding
// GLOBAL VARIABLES
// This calls the JSON File
var ratsUrl = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000'; 
// DO NOT TOUCH!
var c1 = 0; // START FROM 0
// ALL THE BOROS
// ALL START FROM 0 = MUCH EASIER WORK
var QUEENS = 0;
var MANHAT = 0;
var STATEN = 0;
var BRONX = 0;
var BROOK = 0;
// ALL THE TYPES OF PLACES

// ALL THE FOOD



// DO NOT TOUCH PRELOAD
function preload(){
	getRats();
}

function setup(){
	createCanvas(1300,700);
	background(0);
	
}

function draw(){
// DISPLAYS ALL THE CIRCLES
	Circle1();	
	Circle2();
	Circle3();
	Circle4();
	Circle5();

}

// FUNCTION THAT DISPLAYS THE DIFFERENT CIRCLES
function Circle1(){
// I WANT 5 CIRCLES FOR 5 DIFFERENT BOROS
// CIRCLE 1 
// QUEENS
fill(160, 20, 60);
text("QUEENS", 150, height/2 + 100);
noStroke();
ellipse(200, height/2, c1, c1);
c1++;
if(c1 >= 100){
	c1 = c1 - 1;
}
}
function Circle2(){
// CIRCLE 2
// BRONX
text("MANHATTAN", 350, height/2 + 100);
fill(160, 20, 60);
noStroke();
ellipse(400, height/2, c1, c1);
c1++;
if(c1 >= 100){
	c1 = c1 - 1;
}
}

function Circle3(){
// CIRCLE 3 
// BROOKLYN
text("STATEN", 550, height/2 + 100);
fill(160, 20, 60);
noStroke();
ellipse(600, height/2, c1, c1);
c1++;
if(c1 >= 100){
	c1 = c1 - 1;
}
}

function Circle4(){
// CIRCLE 4
// MANHATTAN
text("BRONX", 750, height/2 + 100);
fill(160, 20, 60);
noStroke();
ellipse(800, height/2, c1, c1);
c1++;
if(c1 >= 100){
	c1 = c1 - 1;
}
}

function Circle5(){
// CIRCLE 5
// STATEN
text("BROOKLYN", 950, height/2 + 100);
fill(160, 20, 60);
noStroke();
ellipse(1000, height/2, c1, c1);
c1++;
if(c1 >= 100){
	c1 = c1 - 1;
}
}
















// CALLS THE JSON FILE
// DO NOT TOUCH!
// this is gonna grab the NYC open data stuff
function getRats(){

	 // this will download the city open data on the health violations:
  rats = loadJSON(ratsUrl, ratsDownloaded); // asynchronous API call

}

function ratsDownloaded(){
	// this will run once the city open data is grabbed
	console.log(rats.length); // how many records?
}