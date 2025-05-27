var cars= ["volvo", "saab", "BMW", "ford", "fiat"];
var text= "";
for (var i = 0; i < cars.length; i++) {
text += " carro: " + cars[i] + "<br>";
}

document.getElementById("carros").innerHTML = text;

for (var i = 0; i < cars.length; i++) {
text += " carro: " + cars[i] + "<br>";
}

document.getElementById("carros").innerHTML = text;
