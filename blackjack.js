function getCards() {
    return Math.floor(Math.random ()*12);
}

function startGame() {
    let dealerCards1 = getCards();
    let dealerCards2 = getCards();
    let dealerCardsTotal = dealerCards1 + dealerCards2;

    let playerCards1 = getCards();
    let playerCards2 = getCards();
    let playerTotal = playerCards1 + playerCards2;

    console.log("Dealer's first card is" + dealerCards1)
    console.log('Your total: ${playerTotal}')
    while(playerTotal < 21) {
        let action = prompt('hit or stand???')
        if(action == 'hit') {
            let newCard = getCards();
            playerTotal = playerTotal + newCard();
            console.log('u drew' + newCard + 'ur total is' + playerTotal)
        } 
        else if(action = 'stand') {
            console.log('u have decided to stand');
            break;
        }
        else {
            console.log("Invalid response; type 'hit' or 'stand'");
        }
    }
    if (playerTotal > 21) {
        console.log('U lost! Muahahahahahahahshjnvfndovjkfncrjkd')
    }
    else {
        console.log(dealerCardsTotal);
    }
    
}

startGame ();