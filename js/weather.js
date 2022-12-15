//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5334223&appid=b85709abfebaacbe0c192a934ab5d901&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    const d = weatherInfo.main.humidity;
    console.log(d);
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp;
    document.getElementById('currentspeed').innerHTML=weatherInfo.wind.speed;
    const captionDesc = document.querySelector('figcaption');
    const iconcode = weatherInfo.weather[0].icon;
    const desc = weatherInfo.weather[0].description;
    const tempnumber = parseFloat(document.getElementById("currentTemp").textContent);
    const speednumber = parseFloat(document.getElementById("currentspeed").textContent);
    console.log(desc);
    console.log(tempnumber);
    console.log(speednumber);
    let windchill = 35.74 + (0.6215 * tempnumber) - (35.75 * Math.pow(speednumber, 0.16)) + (0.4275 * tempnumber * Math.pow(speednumber, 0.16));
    windchill = Math.round(windchill);
    console.log(windchill);
    document.getElementById("chill").textContent = "humidity: "+d+"%";
    //if(tempnumber <=50 && speednumber >3){
    //document.getElementById("chill").textContent = "windchill: "+windchill+"\xB0F";
    //}else{
    //document.getElementById("chill").textContent = "windchill: N/A";
    //};
    const icon_path = "//openweathermap.org/img/w/"+ iconcode +".png";
    //console.log(icon_path);
    document.getElementById("weather_icon").src = icon_path;
    document.getElementById("weather_icon").alt = desc;
    captionDesc.textContent = desc;

    
  
  
    

 });
//end of "then" fat arrow function