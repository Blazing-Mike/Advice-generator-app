const quoteP = document.querySelector("h3.quote");
const adviceId = document.querySelector("p.advice-id");
const reloadButton = document.querySelector('.reload');


function generateAdvice() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((response) => response.json())
      .then((response) => {
        let data = response.slip;
        let dataId = data.id;
        let dataAdvice = data.advice;
  
        adviceId.innerHTML = `advice # ${dataId}`;
        quoteP.innerHTML = `" ${dataAdvice} "`;
      });
  }
  

reloadButton.addEventListener("click", ()=> generateAdvice())
document.body.onload = generateAdvice();