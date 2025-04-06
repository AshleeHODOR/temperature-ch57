Let scale = prompt("Enter C for (Celsius) or F (Farenheit):");
Let temperature = Number(Prompt("Enter the temperature:"))
Let res;
Let temperatureSpan = document.getElementById("temp");

function convertTemperature(scale, temperature){
    if(scale=="F"){
        res = (temperature - 32) * (5/9);
    }else if(scale=="C"){
        res = (temperature * (9/5? + 32; 
    }else{
        alert("The result is..."); 
    }
    temperatureSpan.innerHTML = res;
}

convertTemperature(scale, temperature);


//Bonus
const Element = document.getElementById("usertemp");
Element.classList.add("new-class", "another-class")
