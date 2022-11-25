const imagesToLoad = document.querySelectorAll("[data-src]");

const options = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1.0
}

function callback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.src = entry.target.dataset['src']
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(callback, options)
imagesToLoad.forEach(img=> {
    observer.observe(img)
})
//storage
const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
let numVisits = Number(window.localStorage.getItem("visita-la"));
if (numVisits !== 0){
    visitsDisplay.textContent = numVisits;
} else{
    visitsDisplay.textContent = "this is your first visit";
}
numVisits++;
localStorage.setItem("visits", numVisits);
todayDisplay.textContent = Date.now();