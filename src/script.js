const words = [
    { word: "javascript", hint: "A programming language" },
    { word: "developer", hint: "A person who creates software" },
    { word: "scramble", hint: "To mix up" },
    { word: "coding", hint: "The process of writing code" },
    { word: "puzzle", hint: "A problem designed to test ingenuity" }
];

let currentWord = getRandomWord();
let scrambled = scrambleWord(currentWord.word);
let score = 0;
let timeLeft = 30; // Timer for the game
let timerInterval;

document.getElementById('scrambled-word').innerText = scrambled;
document.getElementById('score').innerText = `Score: ${score}`;
startTimer();

// Event listener for submit button
document.getElementById('submit-btn').addEventListener('click', () => {
    const userGuess = document.getElementById('user-input').value.trim();
    if (checkAnswer(userGuess, currentWord.word)) {
        document.getElementById('feedback').innerText = "Correct!";
        score += 10; // Increase score for a correct answer
        document.getElementById('score').innerText = `Score: ${score}`;
        loadNewWord();
    } else {
        document.getElementById('feedback').innerText = "Try Again!";
    }
    document.getElementById('user-input').value = ""; // Clear input field
});

// Event listener for hint button
document.getElementById('hint-btn').addEventListener('click', () => {
    document.getElementById('feedback').innerText = `Hint: ${currentWord.hint}`;
});

// Function to get a random word from the list
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to scramble the letters of the word
function scrambleWord(word) {
    return word.split('').sort(() => Math.random() - 0.5).join('');
}

// Function to check if the user's guess is correct
function checkAnswer(userGuess, originalWord) {
    return userGuess.toLowerCase() === originalWord.toLowerCase();
}

// Load a new scrambled word
function loadNewWord() {
    currentWord = getRandomWord();
    scrambled = scrambleWord(currentWord.word);
    document.getElementById('scrambled-word').innerText = scrambled;
    document.getElementById('feedback').innerText = ""; // Clear feedback message
}

// Timer functionality
function startTimer() {
    timerInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById('timer').innerText = `Time Left: ${timeLeft}s`;
        } else {
            clearInterval(timerInterval);
            endGame(); // Call the function to end the game and show results
        }
    }, 1000);
}

// End the game and display the result
function endGame() {
    document.getElementById('feedback').innerText = `Time's up! You scored ${score} points.`;
    document.getElementById('scrambled-word').innerText = ""; // Clear scrambled word
    document.getElementById('submit-btn').disabled = true; // Disable submit button
    document.getElementById('hint-btn').disabled = true;   // Disable hint button
}
