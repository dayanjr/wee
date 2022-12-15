const buttonElement = document.getElementById("submit");
function cc(){const getfruits = async () => {
    const displayfruits = (datafruits) =>{
     //let results = null
     console.log(datafruits);
     console.log(datafruits.fruits);
     console.log(datafruits.fruits[0]);
     var inputElement = document.getElementById("favchap2").value;
     console.log("in", inputElement);
     const person = datafruits.fruits;
     const found = person.find(element=> element.name == inputElement);
     console.log(`message: ${found.name}`);
     console.log();
 
    // Printing desired values.
    console.log(found);
      
    }
    const response = await fetch(
      "json/fruits.json"
    );
    fruitList = await response.json();
    displayfruits(fruitList);
  };
  getfruits();
  }
  cc();
  buttonElement.addEventListener("click", cc);
  //storage
  const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("visits"));
console.log(numVisits)
if (numVisits !== 0){
    visitsDisplay.textContent = `Number of visits:${numVisits}`;
} else{
    visitsDisplay.textContent = "Number of visits: this is your first visit";
}
numVisits++;
localStorage.setItem("visits", numVisits);
todayDisplay.textContent = Date.now();
//other storage
const FormNumbdisplay = document.getElementById("")