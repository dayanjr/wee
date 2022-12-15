
//let companies = 
//`[
//    {
//        "name": "Big Corporation",
//        "numberOfEmployees": 10000,
//        "ceo": "Mary",
//        "rating": 3.6
//    },
//    {
//        "name": "Small Startup",
//        "numberOfEmployees": 3,
//        "ceo": null,
//        "rating": 4.3
//    }
//    
//]`
const displayCompanies = (dataFruits) => {
    dataFruits.fruits.forEach ( 
      fruits => {
          let article = document.createElement("article");
      
          let prophetName = document.createElement("h3");
          prophetName.textContent = fruits.name;
          console.log(fruits)
      
          let date = document.createElement("h4");
          date.textContent = `location: ${fruits.genus}`;
      
          let location = document.createElement("h4");
          location.textContent = `birth place: ${fruits.genus}`;
      
      
          article.appendChild(prophetName);
          article.appendChild(date);
          article.appendChild(location);
          article.appendChild(img);
      
          document.querySelector("#cards").appendChild(article);
        });
      };
      const getlatter_day_prophets = async () => {
        const response = await fetch(
          "json/fruits.json"
        );
        fruitList = await response.json();
        displayfruits(fruitList);
      };
      getlatter_day_prophets();
const requestURL = 'json/f.json';
fetch('json/f.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
  console.log(data);
