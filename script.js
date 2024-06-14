const homeScoreEl = document.querySelector(".home-score-el")
const guestScoreEl = document.querySelector(".guest-score-el")
const addHomeScore1= document.querySelector(".home-one")
const addHomeScore2= document.querySelector(".home-two")
const addHomeScore3= document.querySelector(".home-three")
const addGuestScore1= document.querySelector(".guest-one")
const addGuestScore2= document.querySelector(".guest-two")
const addGuestScore3= document.querySelector(".guest-three")
const newGame= document.querySelector(".new-game")

let homeScore = 0;
let guestScore = 0;

addHomeScore1.addEventListener("click", function(){ 
    const currentScore = homeScore +=1;
    homeScoreEl.textContent = currentScore;
})

addHomeScore2.addEventListener("click", function(){ 
    const currentScore = homeScore +=2;
    homeScoreEl.textContent = currentScore;
})

addHomeScore3.addEventListener("click", function(){ 
    const currentScore = homeScore +=3;
    homeScoreEl.textContent = currentScore;
})

addGuestScore1.addEventListener("click", function(){ 
    const currentScore = guestScore +=1;
    guestScoreEl.textContent = currentScore;
})

addGuestScore2.addEventListener("click", function(){ 
    const currentScore = guestScore +=2;
    guestScoreEl.textContent = currentScore;
})

addGuestScore3.addEventListener("click", function(){ 
    const currentScore = guestScore +=3;
    guestScoreEl.textContent = currentScore;
})

newGame.addEventListener("click", function(){
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
})