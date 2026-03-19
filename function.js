// === Data & State ===
let data = [];

async function loadData() {
    const response = await fetch('data.json');
    data = await response.json();
}

// === Game State ===
const gameState = {
    currentIndex: 0,    // how many cards passed
    correctCount: 0,
    isOptionDisabled: false,
    shuffledIndices: [], // shuffled index list, no recursion
    activeItemIndex: null,  // current item index in data[]
    activeItem: null,
};

// === Utilities ===
function getLanguage() {
    return document.querySelector('input[name="language"]:checked').value;
}

function getText(item, lang) {
    return lang === 'eng' ? item.en : item.aze;
}

function getMeaning(item, lang) {
    return lang === 'eng' ? item.meaning : item.meaning_aze;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function buildShuffledDeck() {
    const indices = data.map((_, i) => i);
    return shuffleArray(indices);
}

function resetGame() {
    gameState.currentIndex = 0;
    gameState.correctCount = 0;
    gameState.isOptionDisabled = false;
    gameState.shuffledIndices = buildShuffledDeck();
    gameState.activeItemIndex = null;
    gameState.activeItem = null;
}

// === UI Handlers ===
function flipCard() {
    const card = document.getElementById('card');
    const frontText = document.getElementById('front-text');
    const frontCard = document.getElementById('front-card');

    const isFlipped = card.style.transform === 'rotateX(180deg)';

    if (!isFlipped) {
        card.style.transform = 'rotateX(180deg)';
        setTimeout(() => {
            if (gameState.currentIndex === 0) {
                frontText.textContent = '99 Names';
            } else {
                frontText.textContent = gameState.activeItem?.ar ?? '';
                frontText.style.fontSize = '40px';
            }
            frontText.style.transform = 'scaleY(-1)';
            frontCard.classList.add('flipped');
        }, 100);
    } else {
        card.style.transform = 'rotateX(0deg)';
        setTimeout(() => {
            if (gameState.currentIndex === 0) {
                frontText.textContent = 'Welcome!';
            } else {
                const lang = getLanguage();
                frontText.textContent = getText(gameState.activeItem, lang);
                frontText.style.fontSize = '25px';
            }
            frontText.style.transform = 'none';
            frontCard.classList.remove('flipped');
        }, 100);
    }
}

function updateCounter() {
    const lang = getLanguage();
    const counter = document.getElementById('counter');
    if (gameState.currentIndex > 0) {
        counter.textContent = lang === 'eng'
            ? `Question ${gameState.currentIndex}/${data.length}`
            : `Sual ${gameState.currentIndex}/${data.length}`;
    }
}

function showFinalResult() {
    const lang = getLanguage();
    const btn = document.getElementById('btn');
    const finalResult = document.getElementById('final-result');

    finalResult.textContent = lang === 'eng'
        ? `${gameState.correctCount}/${data.length} correct!`
        : `${gameState.correctCount}/${data.length} düzgün!`;

    btn.textContent = lang === 'eng' ? 'The End' : 'Son';
    btn.disabled = true;
    disableOptions();
}

function checkOption(event) {
    if (gameState.isOptionDisabled) return;

    const selectedOption = event.currentTarget;
    const isCorrect = selectedOption.dataset.correct === 'true';

    if (isCorrect) {
        selectedOption.classList.add('correct');
        gameState.correctCount++;
    } else {
        selectedOption.classList.add('incorrect');
        document.querySelector('.option[data-correct="true"]').classList.add('correct');
    }

    disableOptions();
}

function disableOptions() {
    gameState.isOptionDisabled = true;
    document.querySelectorAll('.option').forEach(option => {
        option.removeEventListener('click', checkOption);
        option.classList.add('disabled');
    });
}

// === Game Logic ===
function showNextCard() {
    const lang = getLanguage();

    // First start
    if (gameState.currentIndex === 0) {
        resetGame();
        document.getElementById('language-selection').style.display = 'none';
    }

    // Game over
    if (gameState.shuffledIndices.length === 0) {
        showFinalResult();
        return;
    }

    // Reset card state
    gameState.isOptionDisabled = false;
    const card = document.getElementById('card');
    card.style.transform = 'rotateX(0deg)';
    document.getElementById('front-card').classList.remove('flipped');

    // Get next index without recursion
    const idx = gameState.shuffledIndices.pop();
    gameState.activeItemIndex = idx;
    gameState.activeItem = data[idx];
    gameState.currentIndex++;

    const currentItem = gameState.activeItem;

    // Update card
    const frontText = document.getElementById('front-text');
    frontText.textContent = getText(currentItem, lang);
    frontText.style.fontSize = '25px';
    frontText.style.transform = 'none';

    // Build answer options: 1 correct + 3 random wrong
    const incorrectPool = data.filter((_, i) => i !== idx);
    const incorrectOptions = shuffleArray([...incorrectPool]).slice(0, 3);
    const allOptions = shuffleArray([currentItem, ...incorrectOptions]);

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    allOptions.forEach(option => {
        const el = document.createElement('div');
        el.classList.add('option');
        el.setAttribute('role', 'listitem');
        el.textContent = getMeaning(option, lang);
        el.dataset.correct = option === currentItem ? 'true' : 'false';
        el.addEventListener('click', checkOption);
        optionsContainer.appendChild(el);
    });

    // Update button and counter
    const btn = document.getElementById('btn');
    btn.textContent = lang === 'eng' ? 'Next' : 'Növbəti';
    btn.disabled = false;

    updateCounter();
}

// === Initialization ===
document.addEventListener('DOMContentLoaded', async () => {
    await loadData();
    
    const btn = document.getElementById('btn');
    const frontCard = document.getElementById('front-card');

    btn.addEventListener('click', showNextCard);
    frontCard.addEventListener('click', flipCard);
});