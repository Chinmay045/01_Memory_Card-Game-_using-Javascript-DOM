const cards = document.querySelectorAll(".memory-card");


let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.toggle("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        // console.log({ hasFlippedCard, firstCard });
    } else {
        hasFlippedCard = false;
        secondCard = this;

        // console.log({ firstCard, secondCard });
    }
    console.log(firstCard.dataset.framework);
    console.log(secondCard.dataset.framework);

}
cards.forEach(card => card.addEventListener("click", flipCard))