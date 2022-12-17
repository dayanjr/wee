buttonElement = document.getElementById("submit");
function cc(userinput){const getfruits = async () => {
    const displayfruits = (datafruits) =>{
    //////////first/////////////
     let results = null
     userinput = document.getElementById("favchap").value;
     console.log(userinput);
     p = userinput.toLowerCase();
     first_fruit = datafruits[p].name;
     calories1 = datafruits[p].nutritions.calories;
     carbs1 = datafruits[p].nutritions.carbohydrates;
     fat1 = datafruits[p].nutritions.fat;
     protein1 = datafruits[p].nutritions.protein;
     sugar1 = datafruits[p].nutritions.sugar;
     //soma = calories + carbs + fat + protein + sugar;
     frutao = document.getElementById("fruit");
     s = document.getElementById("sumat");
     
    // s.append(`total carbohydrates, protein, fat, sugar, and calories from the selected fruit: ${soma}`);
    // frutao.append(frutinha);
     /////////first///////////
     /////////second//////////
     
     /////////second//////////
     /////////third//////////
     
     /////////third//////////
     /////////total//////////
    
     /////////total//////////

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
function cc2(userinput){const getfruits = async () => {
    const displayfruits = (datafruits) =>{
     let results = null
     //const userinput = "apricot";
     userinput = document.getElementById("favchap2").value;
     console.log(userinput);
     p2 = userinput.toLowerCase();
     console.log("input:",p);
     console.log(datafruits);
     //console.log(datafruits[p].genus);
    second_fruit = datafruits[p2].name;
     frutao = document.getElementById("fruit2");
     calories2 = datafruits[p2].nutritions.calories;
     carbs2 = datafruits[p2].nutritions.carbohydrates;
     fat2 = datafruits[p2].nutritions.fat;
     protein2 = datafruits[p2].nutritions.protein;
     sugar2 = datafruits[p2].nutritions.sugar;
    // soma2 = calories + carbs + fat + protein + sugar;
    // console.log("omg", soma2);
     s = document.getElementById("sumat2");
     
     //s.append(`total carbohydrates, protein, fat, sugar, and calories from the selected fruit: ${soma2}`);
     //frutao.append(frutinha);
    }
    const response = await fetch(
      "json/fruits.json"
    );
    fruitList = await response.json();
    displayfruits(fruitList);
  };
  getfruits();
  }
  cc2();
function cc3(userinput){const getfruits = async () => {
    const displayfruits = (datafruits) =>{
     let results = null
     //const userinput = "apricot";
     userinput = document.getElementById("favchap3").value;
     console.log(userinput);
     p = userinput.toLowerCase();
     console.log("input:",p);
     console.log(datafruits);
     //console.log(datafruits[p].genus);
     third_fruit = datafruits[p].name;
     frutao = document.getElementById("fruit3");
     calories3 = datafruits[p].nutritions.calories;
     carbs3 = datafruits[p].nutritions.carbohydrates;
     fat3 = datafruits[p].nutritions.fat;
     protein3 = datafruits[p].nutritions.protein;
     sugar3 = datafruits[p].nutritions.sugar;
     //////
     sum_of_carbs = carbs1 + carbs2 + carbs3;
     sum_of_calories = calories1 + calories2 + calories3;
     sum_of_proteins = protein1 + protein2 + protein3;
     sum_of_sugars = sugar1 + sugar2 + sugar3;
    
     sum_of_fat = fat1 + fat2 + fat3;
     sum_of_carbs2 = Math.round(sum_of_carbs);
     sum_of_calories2 = Math.round(sum_of_calories);
     sum_of_proteins2 = Math.round(sum_of_proteins);
     sum_of_sugars2 = Math.round(sum_of_sugars);
     sum_of_fat2 = Math.round(sum_of_fat);
     ////
    // soma3 = calories + carbs + fat + protein + sugar;
     const d = new Date();
     //totalidade = soma + soma2 + soma3;
     clientname = document.getElementById("fname").value;
     clientname_phone = document.getElementById("phone").value;
     clientname_email = document.getElementById("email").value;
    clientname_s = document.getElementById("spec").value;
     //console.log("merda",totalidade);
     //console.log("omg", soma3);
     console.log("client_name", clientname);
    console.log("client_name", clientname_s);
     console.log("fruitname", first_fruit);
     console.log("fruitname2", second_fruit);
     console.log("fruitname3", third_fruit);
     console.log("carbs", carbs1);
     console.log("carbs2", carbs2);
     console.log("carbs3", carbs3);
     console.log("client phone", clientname_phone);
     console.log("client email", clientname_email);
     l1 = document.getElementById("first_line");
     l2 = document.getElementById("second_line");
     l3 = document.getElementById("third_line");
     l4 = document.getElementById("fourth_line");
     l5 = document.getElementById("fifth_line");
     l6 = document.getElementById("sixth_line");
     l7 = document.getElementById("seventh_line");
     l8 = document.getElementById("8");
     l9 = document.getElementById("9");
     l10 = document.getElementById("10");
     l11 = document.getElementById("11");
     l12 = document.getElementById("12");
     l13 = document.getElementById("13");
     l14 = document.getElementById("14");
     l15 = document.getElementById("15");
     l16 = document.getElementById("16");
     
     l3.append(`
     Congratulations ${clientname}, your order was successfully submitted
`);
l4.append(`Order details:
  -fruits mixed: ${first_fruit}, ${second_fruit} and ${third_fruit}.`);
  l5.append(`-Total carbohydrates from fruit(s) selected: ${sum_of_carbs2}.`);
  l6.append(`-Total protein from fruit(s) selected: ${sum_of_proteins2}.`);
  l7.append(`-Total fat from fruit(s) selected: ${sum_of_fat2}.`);
  l8.append(`-Total sugar from fruit(s) selected: ${sum_of_sugars2}.`);
  l9.append(`-Total calories from fruit(s) selected: ${sum_of_calories2}.`);
  l10.append( `client info:`);
  l11.append(`-client name:${clientname}.`);
    l12.append(`-client phone number:${clientname_phone}.`);
    l13.append(`-client email:${clientname_email}.`);
    l14.append(`-client special specifications:${clientname_s}.`);
  l15.append(` Thank you for your order.`);
  l16.append(`Order date and time: ${d}.`);
     
    }
    const response = await fetch(
      "json/fruits.json"
    );
    fruitList = await response.json();
    displayfruits(fruitList);
  };
  getfruits();
}
  cc3();
  function clickCounter() {// w  w w .  ja v  a2 s .  com
    userinput = document.getElementById("favchap").value;
    console.log("burh",userinput);
    if(typeof(Storage) !== "undefined") {
        if (userinput != 0)
        {
            if (localStorage.clickcount) {
                localStorage.clickcount = Number(localStorage.clickcount)+1;
              } else {
                localStorage.clickcount = 1;
              }
              document.getElementById("first_line").innerHTML = "Your order was submitted with success";
              document.getElementById("second_line").innerHTML = "You have order " + localStorage.clickcount + " drink(s) so far.";
            } else {
              document.getElementById("first_line").innerHTML = "Sorry, you need to fill the from to store your order...";
            }
        }
      
  }
  function style(){
    document.getElementById("detisenhorcareco").className = "mystyle";
  }
  function supreme(){
    cc();
    cc2();
    cc3();
    style(); 
  }
  buttonElement.addEventListener("click", supreme, clickCounter); 