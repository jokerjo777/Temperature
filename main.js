//  ° 

document.getElementById('submitButton').onclick = function() {

    let temp;

    if(document.getElementById('cButton').checked) {
        temp = document.getElementById('inputField').value;
        temp = Number(temp);
        temp = toCelsius(temp);
        document.getElementById('convertedData').innerHTML = temp + ' °C'; 

    }else if(document.getElementById('fButton').checked) {
        temp = document.getElementById('inputField').value;
        temp = Number(temp);
        temp = toFahrenheit(temp);
        document.getElementById('convertedData').innerHTML = temp + ' °F';

    } else {
        document.getElementById('convertedData').innerHTML = 'select a unit';
    }
}


function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9/5 + 32;
}