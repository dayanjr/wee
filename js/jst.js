const buttonElement = document.getElementById("submit");
const buttonElement2 = document.getElementById("submit2");


function copyInput() {
    const displayProphets = (dataProphets) => {
        dataProphets.prophets.forEach ( 
          prophet => { 
              document.getElementById("cards").className = "new";
              let article = document.createElement("article");
          
              let prophetName = document.createElement("h3");
              prophetName.textContent = prophet.name;
              console.log(prophet)
          
              let date = document.createElement("h4");
              date.textContent = `${prophet.address}`;
          
              let location = document.createElement("h4");
              location.textContent = `${prophet.phone_number}`;
              let link_adress = document.createElement("h4");
              location.textContent = `${prophet.URL}`;
          
              let img = document.createElement("img");
              img.setAttribute("src", prophet.link_adress);
              console.log(prophet.imageUrl)
              img.setAttribute("alt", prophet.name);
              
              article.appendChild(prophetName);
              article.appendChild(date);
              article.appendChild(location);
              article.appendChild(img);
              article.appendChild(link_adress);
          
              document.querySelector("#cards").appendChild(article);
              date.setAttribute("class", "color"); 
            });
          };
          const getlatter_day_prophets = async () => {
            const response = await fetch(
              "json/data.json"
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