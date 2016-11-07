//variables
var hero = "Guy";
var gender = "Girl";
var age = 26;
var weapon = "Katana";
var pronoun; 

//conditional to pronoun
if(gender === "female"){
	pronoun = "her";
}else if (gender === "male"){
	pronoun = "her";
}else{
	pronoun = "it";
}
 //age 
 var xp = null;
if(age < 18){
 	xp = "just beginning";
 }else if (age >= 21 && <= 40)
 	xp = "has seen a few battles";
 }else{
 	xp = "has live through epic battles";
 }

 //Sentence
console.log (hero + " is our lovable hero," + xp + " with" + pronoun + " trusty" + weapon);

//Fish
var count;
var animal = "Rabbit"

function animalHouse(x,y){
	count = x + y;
	console.log(count);
}
animalHouse(2,6);

//Fish2

if(count > 2){
	console.log("We have too many" + animal + "s");
}else{
 	console.log("Welcome to the club");
} 

//Avengers
var hero = "ironman"
function avengersAssemble(avenger){
if(avenger == "ironman"){
		console.log("Muahaha");
}
else if(avenger == "captainAmerica"){
		console.log("Lets go!");
}
else if(avenger == "blackWidow"){
		console.log("We can do it!");
}
else{
	console.log("Sorry, you are not needed for this mission");
	}
}
avengersAssemble(hero);

//LightsOut
var lights = true;
if(lights == true){
	console.log("And then there was light");
}else if (lights == false){
	console.log("Lights out");
}

//Car
var carType = "Toyota"
var color = "black"
var num = 2;

if(carType == "Toyota" && color == "blue"){
	console.log()
}

