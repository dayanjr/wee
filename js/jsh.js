function copyInput() {
  const displayProphets = (dataProphets) => {
      dataProphets.prophets.forEach( 
        prophet => { 
          console.log(prophet);
          let art = document.createElement("article");
          let first = document.createElement("h3")
          first.textContent = prophet.name
          let logo = document.createElement("img");
          //images/Screenshot(196).png
          //logo.setAttribute("src", prophet.genus);
          //console.log(prophet.imageUrl)
         //logo.setAttribute("alt", prophet.name);
         //logo.setAttribute("data-src", prophet.link_adress);
         //logo.setAttribute("loading", "lazy");
         //logo.setAttribute("class", "lazy");
          //let pi = document.createElement("picture");
          //pi.appendChild(logo);
          let indereco = document.createElement("h4");
          indereco.textContent = `${prophet.genus}`;
          let phone = document.createElement("h4");
            phone.textContent = `${prophet.genus}`;
            art.appendChild(first);
            art.appendChild(pi);
            art.appendChild(indereco);
            art.appendChild(phone);
            document.querySelector(".item3").appendChild(art); 
            art.setAttribute("class", "bussiness"); 
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
copyInput();