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
    // console.log(firstCard.dataset.framework);
    // console.log(secondCard.dataset.framework);

    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")

        }, 1500);
    }

    console.log("Function Executed");
}
cards.forEach(card => card.addEventListener("click", flipCard))