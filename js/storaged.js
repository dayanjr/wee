function show(){
    console.log("m",localStorage.clickcount);
    if( localStorage.clickcount == 0)
    {
        document.getElementById("result").innerHTML = "You have not ordered any drink(s) so far."; 
    }else{
        document.getElementById("result").innerHTML = "You have ordered " + localStorage.clickcount + " drink(s) so far.";
    }
    
}
show();