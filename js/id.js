const today = new Date();
let dayOfWeek;
dayOfWeek = today.getDay();
if (dayOfWeek == 0){
    dayOfWeek = "sunday";
    document.getElementById("omed").textContent = dayOfWeek;
}else if (dayOfWeek == 1){
    dayOfWeek = "monday";
    document.getElementById("omed").textContent = dayOfWeek;
}else if (dayOfWeek == 2){
    dayOfWeek = "tuesday";
    document.getElementById("omed").textContent = dayOfWeek;
}else if (dayOfWeek == 3){
    dayOfWeek = "wendnesday";
    document.getElementById("omed").textContent = dayOfWeek;
}else if (dayOfWeek == 4){
    dayOfWeek = "thursday";
    document.getElementById("omed").textContent = dayOfWeek;
}else if (dayOfWeek == 5){
    dayOfWeek = "friday";
    document.getElementById("omed").textContent = dayOfWeek;
}else if (dayOfWeek == 6){
    dayOfWeek = "saturday";
    document.getElementById("omed").textContent = dayOfWeek;
}
else{
    console.log("error");
}
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
document.getElementById("om").innerHTML = month;
const day = new Date();
document.getElementById("o").innerHTML = day.getDate();
const y = new Date();
document.getElementById("year").innerHTML = y.getFullYear();
function toggleMenu(){
    console.log("it works");
    document.getElementById("pn").classList.toggle("open");}
const x = document.getElementById('ham');
x.onclick = toggleMenu
const element = document.getElementById("message")
if (dayOfWeek == "monday"){
    console.log(dayOfWeek)
    element.classList.add("showme");
}else if (dayOfWeek == "tuesday"){
    console.log(dayOfWeek)
    element.classList.add("showme");

}else{
    console.log("hoje nao");
    console.log(dayOfWeek);
    element.classList.add("hideme");
}