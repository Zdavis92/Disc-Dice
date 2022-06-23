const diceOne = ['Putter', 'Mid-range', 'Driver', 'Over-Stable', 'Under-Stable', "Opponent's Choice"];
const diceTwo = ["Backhand", "Forehand", "Hyzer", "Anhyzer", "Roller", "Tomahawk"];
const diceRoll = (dice) => {
    const roll = Math.floor(Math.random() * 6);
    return dice[roll];
}

const roll = () => {
    const results = [
        diceRoll(diceOne),
        diceRoll(diceTwo)
    ];
    return results;
}

module.exports = roll;