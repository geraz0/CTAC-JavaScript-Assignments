const hands = ['rock', 'paper', 'scissors'];

// Define the getHand function
function getHand() {
    return hands[parseInt(Math.random() * 10) % 3];
}

// Define two player objects
const player1 = {
    name: "Player 1",
    getHand
    //getHand: getHand
};

const player2 = {
    name: "Player 2",
    getHand
    //getHand: getHand
};

// Define the playRound function
function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    console.log(`${player1.name} plays ${hand1}`);
    console.log(`${player2.name} plays ${hand2}`);

    if (hand1 === hand2) {
        console.log("It's a tie!");
        return null;
    }

    let winner;
    if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'paper' && hand2 === 'rock') ||
        (hand1 === 'scissors' && hand2 === 'paper')
    ) {
        winner = player1;
    } else {
        winner = player2;
    }

    console.log(`The winner is ${winner.name}`);
    return winner;
}

// Define the playGame function
function playGame(player1, player2, playUntil) {
    player1.wins = 0;
    player2.wins = 0;

    while (player1.wins < playUntil && player2.wins < playUntil) {
        const winner = playRound(player1, player2);
        if (winner) {
            winner.wins++;
        }
    }

    if (player1.wins === playUntil) {
        console.log(`${player1.name} wins the game!`);
        return player1;
    } else {
        console.log(`${player2.name} wins the game!`);
        return player2;
    }
}

// Define the playTournament function
function playTournament(players, playUntil) {
    const winner1 = playGame(players[0], players[1], playUntil);
    const winner2 = playGame(players[2], players[3], playUntil);
    const finalWinner = playGame(winner1, winner2, playUntil);

    console.log(`${finalWinner.name} is the world champion!`);
}

// Example usage
const player3 = {
    name: "Player 3",
    getHand: getHand,
    wins: 0
};

const player4 = {
    name: "Player 4",
    getHand: getHand,
    wins: 0
};

const players = [player1, player2, player3, player4];
playTournament(players, 3);

