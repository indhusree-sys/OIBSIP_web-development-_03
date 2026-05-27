function convertTemperature(){

    let temp = document.getElementById("temp").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if(temp === ""){
        result.innerHTML = "Please enter temperature";
        return;
    }

    if(unit === "celsius"){

        let fahrenheit = (temp * 9/5) + 32;

        result.innerHTML =
        temp + "°C = " + fahrenheit.toFixed(2) + "°F";

    }else{

        let celsius = (temp - 32) * 5/9;

        result.innerHTML =
        temp + "°F = " + celsius.toFixed(2) + "°C";
    }
}