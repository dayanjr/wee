function cc(userinput){const getfruits = async () => {
  const displayfruits = (datafruits) =>{
   let results = null
   //const userinput = "apricot";
   userinput = document.getElementById("favchap").value;
   console.log("input:",userinput);
   console.log(datafruits);
   console.log(datafruits[userinput].genus);
   frutinha = datafruits[userinput].genus;
   frutao = document.getElementById("");
   frutao.append(frutinha);
   //console.log(datafruits.fruits[0]);
   //var url = datafruits.fruits;
  // var inputElement = document.getElementById("favchap2").value;
   // console.log("in", inputElement);
    //const modified = url.replace(fruits, inputElement);
    //console.log(modified);
  // const person = datafruits.fruits;
  // const found = person.find(element=> element.name == "Apple");
  // console.log(`message: ${found}`);
   //console.log(`message: ${found.name}`);
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
const displayCompanies = (fruitList) => {
  dataProphets.prophets.forEach ( 
    prophet => {
        let article = document.createElement("article");
    
        let prophetName = document.createElement("h3");
        prophetName.textContent = prophet.name;
        console.log(prophet)
    
        let date = document.createElement("h4");
        date.textContent = `location: ${prophet.birthdate}`;
    
        let location = document.createElement("h4");
        location.textContent = `birth place: ${prophet.birthplace}`;
    
        let img = document.createElement("img");
        img.setAttribute("src", prophet.imageurl);
        console.log(prophet.imageUrl)
        img.setAttribute("alt", prophet.name);
    
        article.appendChild(prophetName);
        article.appendChild(date);
        article.appendChild(location);
        article.appendChild(img);
    
        document.querySelector("#cards").appendChild(article);
      });
    };