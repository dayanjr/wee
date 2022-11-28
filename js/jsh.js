function copyInput() {
   const displayProphets = (dataProphets) => {
       dataProphets.prophets.forEach( 
         prophet => { 
           console.log(prophet);
           let art = document.createElement("article");
           let first = document.createElement("h3")
           first.textContent = prophet.name
           let logo = document.createElement("img");
           logo.setAttribute("src", prophet.link_adress);
           console.log(prophet.imageUrl)
           logo.setAttribute("alt", prophet.name);
           let indereco = document.createElement("h4");
           indereco.textContent = `${prophet.address}`;
           let phone = document.createElement("h4");
             phone.textContent = `${prophet.phone_number}`;
             art.appendChild(first);
             art.appendChild(logo);
             art.appendChild(indereco);
             art.appendChild(phone);
             document.querySelector(".item3").appendChild(art); 
             art.setAttribute("class", "bussiness"); 
           });
         };
         const getlatter_day_prophets = async () => {
           const response = await fetch(
             "json/data-h.json"
           );
           prophetList = await response.json();
           displayProphets(prophetList);
         };
         getlatter_day_prophets();
   }
 copyInput();
