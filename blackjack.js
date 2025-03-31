function getCards() {
    return Math.floor(Math.random ()*12)
}

function startGame() {
    let dealerCards1 = getCards();
    let dealerCards2 = getCards();
    let dealerCardsTotal = dealerCards1 + dealerCards2;

    playerCards = getCards()+ getCards();
    console.log("you have a total of" + dealerCardsTotal)
}

startGame ();