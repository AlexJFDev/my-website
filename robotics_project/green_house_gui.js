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

document.getElementById("growBed1").innerHTML = `<td>`+growBed1["daysSincePlanted"]+` days</td>
                                                 <td>`+growBed1["soilMoisture"]+` cb moisture</td>
                                                 <td><img src=.`+growBed1["image"]+` style="width:50px;height:50px;"></td>`;
document.getElementById("growBed2").innerHTML = `<td>`+growBed2["daysSincePlanted"]+` days</td>
                                                 <td>`+growBed2["soilMoisture"]+` cb moisture</td>
                                                 <td><img src=.`+growBed2["image"]+` style="width:50px;height:50px;"></td>`;
document.getElementById("growBed3").innerHTML = `<td>`+growBed3["daysSincePlanted"]+` days</td>
                                                 <td>`+growBed3["soilMoisture"]+` cb moisture</td>
                                                 <td><img src=.`+growBed3["image"]+` style="width:50px;height:50px;"></td>`;
document.getElementById("growBed4").innerHTML = `<td>`+growBed4["daysSincePlanted"]+` days</td>
                                                 <td>`+growBed4["soilMoisture"]+` cb moisture</td>
                                                 <td><img src=.`+growBed4["image"]+` style="width:50px;height:50px;"></td>`;
document.getElementById("growBed5").innerHTML = `<td>`+growBed5["daysSincePlanted"]+` days</td>
                                                 <td>`+growBed5["soilMoisture"]+` cb moisture</td>
                                                 <td><img src=.`+growBed5["image"]+` style="width:50px;height:50px;"></td>`;
document.getElementById("growBed6").innerHTML = `<td>`+growBed6["daysSincePlanted"]+` days</td>
                                                 <td>`+growBed6["soilMoisture"]+` cb moisture</td>
                                                 <td><img src=.`+growBed6["image"]+` style="width:50px;height:50px;"></td>`;

document.getElementById("hydroponic1").innerHTML = `<td>`+hydroponic1["daysSincePlanted"]+` days</td>
                                                 <td>`+hydroponic1["nutrients"]+`</td>
                                                 <td><img src=.`+hydroponic1["image"]+` style="width:50px;height:50px;"></td>`;
document.getElementById("hydroponic2").innerHTML = `<td>`+hydroponic2["daysSincePlanted"]+` days</td>
                                                 <td>`+hydroponic2["nutrients"]+`</td>
                                                 <td><img src=.`+hydroponic2["image"]+` style="width:50px;height:50px;"></td>`;
document.getElementById("hydroponic3").innerHTML = `<td>`+hydroponic3["daysSincePlanted"]+` days</td>
                                                 <td>`+hydroponic3["nutrients"]+`</td>
                                                 <td><img src=.`+hydroponic3["image"]+` style="width:50px;height:50px;"></td>`;

document.getElementById("temperature").innerHTML = ambientCdns["temperature"]+` deg F`;
document.getElementById("humidity").innerHTML = ambientCdns["humidity"]+`%`;
