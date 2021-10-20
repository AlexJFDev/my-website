var growBed1 = {"daysSincePlanted": 20, "soilMoisture": 31, "image": "/images/carrot.png"}
var growBed2 = {"daysSincePlanted": 31, "soilMoisture": 59, "image": "/images/cellery.png"}
var growBed3 = {"daysSincePlanted": 28, "soilMoisture": 40, "image": "/images/tomato.png"}
var growBed4 = {"daysSincePlanted": 18, "soilMoisture": 100, "image": "/images/tomato.png"}
var growBed5 = {"daysSincePlanted": 40, "soilMoisture": 60, "image": "/images/zucchini.png"}
var growBed6 = {"daysSincePlanted": 19, "soilMoisture": 50, "image": "/images/potato.png"}

var hydroponic1 = {"daysSincePlanted": 19, "nutrients": "in limit", "image": "/images/lettuce.png"}
var hydroponic2 = {"daysSincePlanted": 28, "nutrients": "low in nutrients", "image": "/images/spinach.png"}
var hydroponic3 = {"daysSincePlanted": 35, "nutrients": "in limit", "image": "/images/basil.png"}

var ambientCdns = {"temperature": 72, "humidity": 67}

var growBed1Element = document.getElementById("growBed1");
console.log(growBed1Element);
growBed1Element.innerHTML = "<td>"+growBed1["daysSincePlanted"]+" days</td><td></td><td></td>";
