console.log("functions.js");

let name="Mike"; 
let lastName="Scott";

//conscatenation
console.log("Hello "+ name + " " + lastName + ", Welcome!"); 
console.log('Hello ${name} ${lastName} ${1+1}, welcome!'); 


//1. function declaration (create a function)
function sayHello(){
    //block of the function
    console.log("Hello cohort 57");


}

//2. call the functiomn (code, console, from the user)
sayHello();
sayHello();
sayHello();


//Example 2, with 1 parameter
function greet(name){
    console.log('Hello ${name}, welcome!');
}

greet('HODOR');
greet("Ivan");
greet("Kenny");
greet("Patrick");

//Example 3, with 2 parameters
function greet2(name1,name2){
    console.log('Hello ${name1} and ${name2}, welcome!')

}

greet2(`Patrick`,`Kenny`); 

//Challenge 1: double the number
//task:
//-Create a function called 'doubleNumber' that takes one number as a parameter.
//-The function should return the number muliplied by 2.
//-print the result when you call the functoion with different numbers.


function doubleNumber(num){
    console.log(num*2);
}

doubleNumber(5); //10
doubleNumber(4); //8
doubleNumber(3); //6

// example 4, with a prompt

function welcome(){
    let name2 = prompt(`enter your name: `);
    let age2 = prompt(`Enter your age: `); 

    console.log(`Welcome ${name2} - {age2}`); 
}

//call the function on the console

// example 5, with default parameters
function add(num1=0, num2=0){
    console.log(`the sum is ${num1} + {num2} = ${num1+num2}`); 
}

add();
add(57.6,9.3);
add(50,100);


function combineName(fname="unknown",lname="unknown"){
    console.log(` ${fname} ${lname}`)
}

combineNames("Alice", "Johnson"); //should print: Alice Johnson
combineNames("Alice"); 
CombineNames();

//challenge 3: convert Minutes to seconds

function converttoSeconds (){
    let min = prompt("Enter minutes");
    document.getElementById("results");
}
