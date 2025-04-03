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
}

