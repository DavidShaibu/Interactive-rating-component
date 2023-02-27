

let submitBtn = document.querySelector(".submit-btn");
let rateBtns = document.querySelectorAll(".btn");
let ratingText = document.querySelector(".rating");
let defaultCard = document.querySelector(".card-rating");
let thankYouCard = document.querySelector(".card-thank-you");
let ratedFigure;

function getIndex(){
    ratedFigure = this.getAttribute("buttonIndex");
}

rateBtns.forEach( button => button.addEventListener("click", getIndex));

submitBtn.onclick = function(){

    if(!ratedFigure){
        submitBtn.style.background = "#ff8c00";
        submitBtn.style.color = "#fff";
    }
    else{
    submitBtn.textContent = "Hello!";
    defaultCard.style.visibility = "hidden";
    thankYouCard.style.visibility = "visible";
    ratingText.textContent = ratedFigure;
    }
};




