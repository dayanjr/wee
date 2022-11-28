
let daynames2 = [
    "Sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "Friday",
    "Saturday",
];

let months2 = [
    "January",
    "February",
    "March",
    "April",
    "may",
    "june",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
let todaysdate2 = new Date();
let dayName2 = daynames2[todaysdate2.getDay()];
let monthName2 = months2[todaysdate2.getMonth()];
let oLastModif2 = new Date(document.lastModified);
const d2 = new Date();
document.getElementById("demo2").innerHTML = d2.getFullYear();
var date2 = new Date(document.lastModified);
const str = new Intl.DateTimeFormat("en", {
    timeStyle:"medium",
    dateStyle:"short"}).format(date2);
document.getElementById("d2").innerHTML = str
//try {
//    let options = {
//        weekday: "long",
//        day: "numeric",
//        month: "long",
//        year: "numeric"
//    };
//    document.getquerySelector("currentdate2").textContent = new Date().toLocaleDateString("en-US", options);
// } catch (e) {
//    alert("Error with code or your browser does not support Locale")
// }