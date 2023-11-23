const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
    // hasFlippedCard = false;
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
    resetBoard();
}

function unFlipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        firstCard.classList.remove('flip');
        resetBoard();
    }, 1500);

}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

cards.forEach(card => card.addEventListener("click", flipCard));