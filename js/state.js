// === Game State Management ===

import { CONFIG } from './constants.js';

export class GameState {
    constructor() {
        this.reset();
    }

    reset() {
        this.currentIndex = 0;
        this.correctCount = 0;
        this.isOptionDisabled = false;
        this.shuffledIndices = [];
        this.activeItemIndex = null;
        this.activeItem = null;
    }

    initDeck(dataLength) {
        this.shuffledIndices = this.shuffleArray([...Array(dataLength).keys()]);
    }

    getNextIndex() {
        if (this.shuffledIndices.length === 0) return null;
        this.activeItemIndex = this.shuffledIndices.pop();
        this.currentIndex++;
        return this.activeItemIndex;
    }

    recordCorrect() {
        this.correctCount++;
    }

    disableOptions() {
        this.isOptionDisabled = true;
    }

    resetCardState() {
        this.isOptionDisabled = false;
    }

    get isComplete() {
        return this.shuffledIndices.length === 0 && this.currentIndex > 0;
    }

    get progress() {
        return { current: this.currentIndex, correct: this.correctCount };
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    generateOptions(data, correctIndex) {
        const incorrectPool = data.filter((_, i) => i !== correctIndex);
        const incorrect = this.shuffleArray([...incorrectPool]).slice(0, CONFIG.OPTIONS_COUNT);
        return this.shuffleArray([data[correctIndex], ...incorrect]);
    }
}

export const gameState = new GameState();
