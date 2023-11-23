const cards = document.querySelectorAll(".memory-card");


let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;


function flipCard() {
    if(lockBoard) return;
    this.classList.toggle("flip");
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return
        // console.log({ hasFlippedCard, firstCard });
    } 
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
        // console.log({ firstCard, secondCard });
    }

    // console.log(firstCard.dataset.framework);
    // console.log(secondCard.dataset.framework);

    function checkForMatch() {
        if (firstCard.dataset.framework === secondCard.dataset.framework) {
            disableCards();
        } else {
            unflipCards();
        }

        console.log("Function Executed");
    }

    function disableCards() {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
    }

    function unflipCards() {
        lockBoard = true;
        setTimeout(() => {
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")
            lockBoard = false;
        }, 1500);
    }



cards.forEach(card => card.addEventListener("click", flipCard))