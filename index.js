const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
    this.classList.toggle("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
    } else {
        hasFlippedCard = false;
        secondCard = this;
    }
    // console.log(hasFlippedCard);
    // console.log(firstCard.dataset.framework);
    // console.log(secondCard.dataset.framework)
    if (firstCard.dataset.framework === secondCard.dataset.framework) {

        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard)
    }
}



cards.forEach(card => card.addEventListener("click", flipCard));