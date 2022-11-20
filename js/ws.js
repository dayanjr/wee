const tempnumber = parseFloat(document.getElementById("currentTemp").textContent);
const speednumber = parseFloat(document.getElementById("currentspeed").textContent);
console.log(tempnumber);
console.log(speednumber);
let windchill = 35.74 + (0.6215 * tempnumber) - (35.75 * Math.pow(speednumber, 0.16)) + (0.4275 * tempnumber * Math.pow(speednumber, 0.16));
windchill = Math.round(windchill);
console.log(windchill)
if(tempnumber<=50 && speednumber >3){
    document.getElementById("chill").textContent = "wind chill is "+windchill+"\xB0F";
}else{
    document.getElementById("chill").textContent = "no wind chill today";
}