const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const luckyButton = document.getElementById('luckyButton');
const newGameButton = document.getElementById('newGameButton');
const result = document.getElementById('result');

let numberToGuess = Math.floor(Math.random() * 101);

guessButton.addEventListener('click', () => {
    const guess = parseInt(guessInput.value, 10);
    checkGuess(guess);
});

luckyButton.addEventListener('click', () => {
    const guess = Math.floor(Math.random() * 101);
    checkGuess(guess);
    guessInput.value = guess;
});

newGameButton.addEventListener('click', () => {
    numberToGuess = Math.floor(Math.random() * 101);
    guessInput.value = '';
    result.textContent = '';
    newGameButton.style.display = 'none';
});

function checkGuess(guess) {
    if (guess < numberToGuess) {
        result.textContent = 'For lavt!';
    } else if (guess > numberToGuess) {
        result.textContent = 'For høyt!';
    } else {
        result.textContent = 'Riktig! Du vant!';
        newGameButton.style.display = 'block';
    }
}
