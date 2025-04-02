function temperatureConversion(){
    let celsius = number (fahrenheit - 32) * 5/9;
    let fahrenheit = prompt("Enter temperature in Fahrenheit"); 
    document.getElementById("results").innerHTML=`${tmp+4.5+32} fahrenheit`; 
}

console.log(`the temperature in Fahrenheit is ${celsius.tofixed}`);