function getCards() {
    return Math.floor(Math.random ()*12)
}

function startGame() {
    let dealerCards1 = getCards();
    let dealerCards2 = getCards();
    let dealerCardsTotal = dealerCards1 + dealerCards2;

    let playerCards1 = getCards();
    let playerCards2 = getCards();
    let playerTotal = playerCards1 + playerCards2;

    console.log("you have a total of" + dealerCardsTotal)
    console.log('Your total: ${playerTotal}')
    while(playerTotal < 21) {
        let question = prompt('hit or stand???')
        if(question = 'hit') {
            playerTotal = playerTotal + getCards();
        }
    }

    
}

startGame ();