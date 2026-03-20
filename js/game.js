// === Game Logic Controller ===

import { gameState } from './state.js';
import { ui } from './ui.js';
import { getItemText, getItemMeaning } from './data.js';
import { STRINGS } from './constants.js';

export class GameController {
    constructor(data, lang) {
        this.data = data;
        this.lang = lang;
        this.strings = STRINGS[lang];
    }

    init() {
        gameState.reset();
        gameState.initDeck(this.data.length);
        
        ui.init(this.data, this.lang);
        ui.bindEvents({
            onNext: () => this.next(),
            onOptionClick: (el) => this.handleOptionClick(el),
            getCurrentIndex: () => gameState.currentIndex
        });

        ui.hideLanguageSelection();
        this.next();
    }

    next() {
        if (gameState.isComplete) {
            const { correct, current } = gameState.progress;
            ui.showFinalResult(correct, this.data.length, this.lang);
            ui.disableOptions();
            return;
        }

        gameState.resetCardState();
        ui.resetCard();
        ui.enableOptions();

        const idx = gameState.getNextIndex();
        if (idx === null) return;

        const item = this.data[idx];
        gameState.activeItem = item;

        ui.renderCard(item, this.lang);
        
        const options = gameState.generateOptions(this.data, idx);
        ui.renderOptions(options, item);

        ui.updateCounter(gameState.currentIndex, this.data.length, this.lang);
        ui.updateButton(this.strings.next);
    }

    handleOptionClick(element) {
        if (gameState.isOptionDisabled) return;

        const isCorrect = element.dataset.correct === 'true';
        
        ui.markOption(element, isCorrect);
        
        if (isCorrect) {
            gameState.recordCorrect();
        }

        gameState.disableOptions();
        ui.disableOptions();
    }

    static async start(data, lang) {
        const game = new GameController(data, lang);
        game.init();
        return game;
    }
}
