console.log("Conditionals");

//if-statements
//if (condition){ y/n ?
// code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true");
}

let student1 = 25;
let student2 = 25;

if(student1==student2){
    console.log("The values are the same");
}

//if -else statement
//if(condition){
//code to be run if the condition is true
//}else}
//code to be run if the condition is false
//}

let isTrue =true;

if(isTrue ==true){
    console.log("Yes");
}else{
    console.log("No"); 
}

let waterTemp=92;

if(waterTemp>=100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}

//challenge 1:
//check if the age is greater than 21
//T: display "you are an adult
//F: display "you are underage"

let age=30;

if(age=>21){
    console.log("You are an adult");
}else{
    console.log("You are underage");
}

//else-if statement
//if(condition){
//code to be run if the condition is true
//}else if (condition2){ 
//code to be run if the condition2 is true
//}else{
//code to run if conditions are false
//}

age = prompt("Enter your age");

if(age>13){
    console.log("You are a child");
}else if(age<21){
    console.log("You are a teenager");
}else if(age<64){
    console.log("You are an adult");
}else{
    console.log("You are a Senior");
}else if(age=42){
    console.log("You are the answer to life");
}

//challenges

let light = prompt ("Enter your color");

if(green){
    console.log("Go!");
}
else if(yellow){
    console.log("Slow");
}
else if(red){
    console.log("Stop");
}
else {
    console.log("Invalid please pick a color");
}

//Challenge 3

let age = prompt ("Enter your age");
let price=0;

if (age>12){
    console.log("Price=$5");
}
else if(age==12-18){
    console.log("Price=$8");
}
else if(age<18){
    console.log("Price=$10")
}
    console.log("Your ticket price is $" + price);
}


//Challenge 4
//Weather outfits

let usertemp = prompt ("Enter your temperature")

if (>15){
    console.log("Wear a jacket");
}
else if (15==25){
    console.log("Wear a sweater");
}
else if (<25){
    console.log("wear a t-shirt");
}

//SAM's code:

function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    
    if(tmp<15){
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt"; 
    }

    p.innerHTML="You should wear : " + outfit;
}


//Switch

let action = prompt("Choose an action:jump, run, attack, or defend");

switch(action){
    case "jump":
        console.log("You jumped over an obstacle");
        break;
    case "run":
        console.log("You are running fast");
        break;
    case "attack":
        console.log("You attacked the enemy!");
        break;
    case "defend":
        console.log("You blocked the attack");
    default:
        console.log("Unknown action. Try again!");
    case "join fightclub":
        console.log("Scream HODOR"); 
    case "dance":
        console.log("Tell yourself you are pretty");
}

//END of NOTES --> Class 3