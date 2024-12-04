let startTime;
let wordsTyped = 0;
let correctWords = 0;
let totalWords = 0;

const textToType = document.getElementById('text-to-type').textContent.trim().split(' ');
const inputField = document.getElementById('typing-input');
const wpmCount = document.getElementById('wpm-count');
const accuracyCount = document.getElementById('accuracy-count');

function startTypingTest() {
    if (!startTime) {
        startTime = new Date();
    }

    const typedWords = inputField.value.trim().split(' ');
    wordsTyped = typedWords.length;
    correctWords = typedWords.filter((word, index) => word === textToType[index]).length;
    totalWords = textToType.length;

    updateWPM();
    updateAccuracy();
}

function updateWPM() {
    const timeElapsed = (new Date() - startTime) / 60000; // Time in minutes
    const wpm = Math.round((wordsTyped / timeElapsed) || 0);
    wpmCount.textContent = wpm;
}

function updateAccuracy() {
    const accuracy = Math.round((correctWords / wordsTyped) * 100) || 0;
    accuracyCount.textContent = `${accuracy}%`;
}
