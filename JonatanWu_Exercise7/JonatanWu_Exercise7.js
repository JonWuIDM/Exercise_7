
// Jonatan Wu Creative Coding
// GLOBAL VARIABLES
// This calls the JSON File
var ratsUrl = 'https://data.cityofnewyork.us/resource/xx67-kt59.json?$limit=1000'; 
// CIRCLE SIZES
// NOT NEEDED
var c1 = 0; // QUEENS
var c2 = 0; // MANHATTAN
var c3 = 0; // STATEN
var c4 = 0; // BRONX
var c5 = 0; // BROOKLYN
// GRADE VARIABLES
// QUEENS SET OF VARIABLES
// GRADE A
var a1 = 0;
// GRADE B
var b1= 0;
// GRADE C
var c1_ = 0;
// MANHATTAN SET OF VARIABLES
var a2 = 0;
// GRADE B
var b2= 0;
// GRADE C
var c2_ = 0;
// STATEN ISLAND SET OF VARIABLES
var a3 = 0;
// GRADE B
var b3= 0;
// GRADE C
var c3_ = 0;
// BRONX SET OF VARIABLES
var a4 = 0;
// GRADE B
var b4= 0;
// GRADE C
var c4_ = 0;
// BROOKLYN SET OF VARIABLES
var a5 = 0;
// GRADE B
var b5= 0;
// GRADE C
var c5_ = 0;




// DO NOT TOUCH PRELOAD
function preload(){
	getRats();
}

function setup(){
	createCanvas(1300,700);
	background(0);
	//textAlign(CENTER);

	
}

function draw(){
// DISPLAYS ALL THE CIRCLES

	Circle1();	
	Circle2();
	Circle3();
	Circle4();
	Circle5();
	lookfor();
	// RIGHT TEXT
	// NO FUNCTION JUST COSMESTICS
	fill(160, 20, 60);
	textSize(25);
	text("Grade ", 20, height/2 - 200);
	text("Grade ", 20, height/2);	
	text("Grade ", 20, height/2 + 200);
	fill(255);
	text(" A", 100, height/2 - 200);
	text(" B", 100, height/2);	
	text(" C", 100, height/2 + 200);
	text("Jonatan Wu", 1150, 650);


}

// FUNCTION THAT DISPLAYS THE DIFFERENT CIRCLES
function Circle1(){
// I WANT 5 CIRCLES FOR 5 DIFFERENT BOROS
// CIRCLE 1 
// QUEENS
fill(255);
text("QUEENS", 150, height/2 + 300);
fill(160, 20, 60);
noStroke();
ellipse(200, height/2, b1, b1); // GRADE B
ellipse(200, height/2 - 200, a1, a1); // GRADE A
ellipse(200, height/2 + 200, c1_, c1_); // GRADE C
// c1++;
// if(c1 >= 50){
//	c1 = c1 - 1;
//}
}
function Circle2(){
// CIRCLE 2
// BRONX
fill(255);
text("MANHATTAN", 350, height/2 + 300);
fill(160, 20, 60);
noStroke();
ellipse(400, height/2, b2, b2); // GRADE B
ellipse(400, height/2 - 200, a2, a2); // GRADE A
ellipse(400, height/2 + 200, c2_, c2_); // GRADE C
//c2++;
// if(c2 >= 50){
//	c2 = c2 - 1;
//}
}

function Circle3(){
// CIRCLE 3 
// BROOKLYN
fill(255);
text("STATEN ISLAND", 550, height/2 + 300);
fill(160, 20, 60);
noStroke();
ellipse(600, height/2, b3, b3); // GRADE B
ellipse(600, height/2 - 200, a3, a3); // GRADE A
ellipse(600, height/2 + 200, c3_, c3_); // GRADE C
// c3++;
// if(c3 >= 50){
//	c3 = c3 - 1;
//}
}

function Circle4(){
// CIRCLE 4
// MANHATTAN
fill(255);
text("BRONX", 750, height/2 + 300);
fill(160, 20, 60);
noStroke();
ellipse(800, height/2, b4, b4); // GRADE B
ellipse(800, height/2 - 200, a4, a4); // GRADE A
ellipse(800, height/2 + 200, c4_, c4_); // GRADE C
// c4++;
// if(c4 >= 50){
//	c4 = c4 - 1;
//}
}

function Circle5(){
// CIRCLE 5
// STATEN
fill(255);
text("BROOKLYN", 950, height/2 + 300);
fill(160, 20, 60);
noStroke();
ellipse(1000, height/2, b5, b5); // GRADE B
ellipse(1000, height/2 - 200, a5, a5); // GRADE A
ellipse(1000, height/2 + 200, c5_, c5_); // GRADE C
// c5++;
// if(c5 >= 50){
//	c5 = c5 - 1;
//}
}



function lookfor(){
	// QUEENS SEARCH
	for(var i = 0; i < rats.length; i++){
		if(rats[i].boro == "QUEENS" && rats[i].grade == "A"){
			a1++;
			if(a1 >= 100){
				a1  = a1 - 1;
			}// 2nd IF FUNCTION
		} // 1st IF FUNTION
		if(rats[i].boro == "QUEENS" && rats[i].grade == "B"){
			b1++;
			if(b1 >= 100){
				b1  = b1 - 1;
		 	}
		 }
		 if(rats[i].boro == "QUEENS" && rats[i].grade == "C"){
			c1_++;
			if(c1_ >= 100){
				c1_ = c1_ - 1;
		 	}
		 }
		 // MANHATTAN SEARCH
		 if(rats[i].boro == "MANHATTAN" && rats[i].grade == "A"){
			a2++;
			if(a2 >= 100){
				a2  = a2 - 1;
			}// 2nd IF FUNCTION
		} // 1st IF FUNTION
		if(rats[i].boro == "MANHATTAN" && rats[i].grade == "B"){
			b2++;
			if(b2 >= 100){
				b2  = b2 - 1;
		 	}
		 }
		 if(rats[i].boro == "MANHATTAN" && rats[i].grade == "C"){
			c2_++;
			if(c2_ >= 100){
				c2_ = c2_ - 1;
		 	}
		 }
		 // STATEN ISLAND SEARCH
		 if(rats[i].boro == "STATEN ISLAND" && rats[i].grade == "A"){
			a3++;
			if(a3 >= 100){
				a3  = a3 - 1;
			}// 2nd IF FUNCTION
		} // 1st IF FUNTION
		if(rats[i].boro == "STATEN ISLAND" && rats[i].grade == "B"){
			b3++;
			if(b3 >= 100){
				b3  = b3 - 1;
		 	}
		 }
		 if(rats[i].boro == "STATEN ISLAND" && rats[i].grade == "C"){
			c3_++;
			if(c3_ >= 100){
				c3_ = c3_ - 1;
		 	}
		 }
		 // BRONX SEARCH
		 if(rats[i].boro == "BRONX" && rats[i].grade == "A"){
			a4++;
			if(a4 >= 100){
				a4  = a4 - 1;
			}// 2nd IF FUNCTION
		} // 1st IF FUNTION
		if(rats[i].boro == "BRONX" && rats[i].grade == "B"){
			b4++;
			if(b4 >= 100){
				b4  = b4 - 1;
		 	}
		 }
		 if(rats[i].boro == "BRONX" && rats[i].grade == "C"){
			c4_++;
			if(c4_ >= 100){
				c4_ = c4_ - 1;
		 	}
		 }
		 // BROOKLYN SEARCH
		 if(rats[i].boro == "BROOKLYN" && rats[i].grade == "A"){
			a5++;
			if(a5 >= 100){
				a5  = a5 - 1;
			}// 2nd IF FUNCTION
		} // 1st IF FUNTION
		if(rats[i].boro == "BROOKLYN" && rats[i].grade == "B"){
			b5++;
			if(b5 >= 100){
				b5  = b5 - 1;
		 	}
		 }
		 if(rats[i].boro == "BROOKLYN" && rats[i].grade == "C"){
			c5_++;
			if(c5_ >= 100){
				c5_ = c5_ - 1;
		 	}
		 }
	} // for FUNCTION


	// CONSOLE LOG WHICH DISPLAYS THE ACTUALL VALUES OF EACH DATA SET
	// CREDITS TO CALVIN
	// HELPED ME FIND THE ISSUE WITH WHY MY CIRCLES DIDN"T ACTUALLY INCREASE
	/* console.log("QueensA: " + a1);
	console.log("QueensB: " + b1);
	console.log("QueensC: " + c1_);
	console.log("ManhatA: " + a2);
	console.log("ManhatB: " + b2);
	console.log("ManhatC: " + c2_);
	console.log("StatenA: " + a3);
	console.log("StatenB: " + b3);
	console.log("StatenC: " + c3_);
	console.log("BronxA: " + a4);
	console.log("BronxB: " + b4);
	console.log("BronxC: " + c4_);
	console.log("BrookA: " + a5);
	console.log("BrookB: " + b5);
	console.log("BrookC: " + c5_); */ 

} // search FUNCTION




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