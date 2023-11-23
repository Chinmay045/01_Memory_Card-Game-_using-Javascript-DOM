const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if(lockBoard)return;
    this.classList.toggle("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    } 
        hasFlippedCard = false;
        secondCard = this;
    
    checkForMatch();
}
// console.log(hasFlippedCard);
// console.log(firstCard.dataset.framework);
// console.log(secondCard.dataset.framework)

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unFlipCards();
    disableCards();


}
function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        firstCard.classList.remove('flip');
    }, 1500);

    lockBoard = false;
}





cards.forEach(card => card.addEventListener("click", flipCard));