const buttonElement = document.getElementById("list");
const buttonElement2 = document.getElementById("grid");



function copyInput() {
    const displayProphets = (dataProphets) => {
        dataProphets.prophets.forEach ( 
          prophet => { 
              let article = document.getElementById("favchap");
              let article2 = document.getElementById("favchap2");
              let article3 = document.getElementById("favchap3");
          
              let prophetName = document.createElement("option");
              let prophetName2 = document.createElement("option");
              let prophetName3 = document.createElement("option");
              prophetName.textContent = prophet.name;
              prophetName2.textContent = prophet.name;
              prophetName3.textContent = prophet.name;
              console.log(prophet.textContent)
             
              article.appendChild(prophetName);
              article2.appendChild(prophetName2);
              article3.appendChild(prophetName3);

            });
          };
          const getlatter_day_prophets = async () => {
            const response = await fetch(
              "json/f.json"
            );
            prophetList = await response.json();
            displayProphets(prophetList);
          };
          getlatter_day_prophets();
    }
function complet(){
  document.getElementById("cards").className = "newid";
}
function complet2(){
  document.getElementById("cards").className = "new";
}
copyInput();
     
      buttonElement.addEventListener("click", complet);
      buttonElement2.addEventListener("click", complet2);