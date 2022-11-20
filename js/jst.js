const buttonElement = document.getElementById("submit");
const buttonElement2 = document.getElementById("submit2");
//normal code
//const displayProphets = (dataProphets) => {
//    dataProphets.prophets.forEach ( 
//      prophet => {
//          let article = document.createElement("article");
//      
//          let prophetName = document.createElement("h3");
//          prophetName.textContent = prophet.name;
//          console.log(prophet)
//      
//          let date = document.createElement("h4");
//          date.textContent = `location: ${prophet.birthdate}`;
//      
//          let location = document.createElement("h4");
//          location.textContent = `birth place: ${prophet.birthplace}`;
//      
//          let img = document.createElement("img");
//          img.setAttribute("src", prophet.imageurl);
//          console.log(prophet.imageUrl)
//          img.setAttribute("alt", prophet.name);
//      
//          article.appendChild(prophetName);
//          article.appendChild(date);
//          article.appendChild(location);
//          article.appendChild(img);
//      
//          document.querySelector("#cards").appendChild(article);
//        });
//      };
//      const getlatter_day_prophets = async () => {
//        const response = await fetch(
//          "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
//        );
//        prophetList = await response.json();
//        displayProphets(prophetList);
//      };
//      getlatter_day_prophets();
// normal code end
//first function
function copyInput() {
    const displayProphets = (dataProphets) => {
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
          const getlatter_day_prophets = async () => {
            const response = await fetch(
              "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
            );
            prophetList = await response.json();
            displayProphets(prophetList);
          };
          getlatter_day_prophets();
    }
//end of function
//function2
function copyInput2(){
    const displayProphets = (dataProphets) => {
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
          
              document.querySelector(".cards").appendChild(article);
            });
          };
          const getlatter_day_prophets = async () => {
            const response = await fetch(
              "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json"
            );
            prophetList = await response.json();
            displayProphets(prophetList);
          };
          
}
//end of function
//subfunction
//function death_note(){
//    const element = document.getElementById("cards");
//    element.remove();
//}
function life_note(){
    let therebelight = document.createElement("div");
    therebelight.className = "cards";
}
function live_death(){
    //death_note();
    life_note();
    copyInput2();
}
     
      buttonElement.addEventListener("click", copyInput);
      buttonElement2.addEventListener("click", live_death);