//Final: Convert Temperature Range

function convertTemperatureRange(){

    let startTemp = prompt ("Enter Celcius");//10
    let endTemp = prompt ("Enter Celcius");//15

    for(let i= startTemp;i<endTemp;i++){
        document.getElementById("results").innerHTML+=`<p>${i} C = ${i+4.5+32} fahrenheit</p>`; 
    }

}


