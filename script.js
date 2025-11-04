
let currentAnswer = 0;
let score = 0;
let gameStarted = false;

const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answer');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const checkBtn = document.getElementById('check-btn');
const startBtn = document.getElementById('start-btn');

// Hide the check button initially
checkBtn.style.display = 'none';

function generateQuestion() {
    // Generate two random numbers between 1 and 10
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    
    currentAnswer = num1 * num2;
    
    // Update the question on the UI
    questionEl.textContent = `What is ${num1} × ${num2}?`;
    
    // Clear the answer field and previous result
    answerInput.value = '';
    resultEl.textContent = '';
    answerInput.focus(); // Focus the cursor on the input field
}

function startGame() {
    gameStarted = true;
    startBtn.style.display = 'none';
    checkBtn.style.display = 'block';
    score = 0;
    scoreEl.textContent = score;
    generateQuestion();
}

function checkAnswer() {
    if (!gameStarted) {
        resultEl.textContent = 'Please press "Start Game" to begin!';
        resultEl.style.color = '#e67e22';
        return;
    }
    
    const userAnswer = parseInt(answerInput.value);
    
    // Check if the user entered a number
    if (isNaN(userAnswer)) {
        resultEl.textContent = 'Please enter a valid number.';
        resultEl.style.color = '#e67e22';
        return;
    }

    if (userAnswer === currentAnswer) {
        // Correct answer
        resultEl.textContent = 'Correct Answer! Well done.';
        resultEl.style.color = '#27ae60';
        score++;
    } else {
        // Wrong answer
        resultEl.textContent = `Wrong Answer. The correct answer was ${currentAnswer}.`;
        resultEl.style.color = '#c0392b';
    }

    // Update the score board
    scoreEl.textContent = score;
    
    // Generate a new question after a short delay
    setTimeout(generateQuestion, 1500); // 1.5 second delay
}

// Add the ability to check the answer by pressing the Enter key
answerInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});