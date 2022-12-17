function show(){
    console.log("m",localStorage.clickcount);
    document.getElementById("result").innerHTML = "You have ordered " + localStorage.clickcount + "drink(s) so far.";
}
show();