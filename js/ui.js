// === DOM Caching & UI Operations ===

import { SELECTORS, CLASSES, STRINGS, CONFIG } from './constants.js';

export class UI {
    constructor() {
        this.cache = {};
        this.data = [];
        this.currentLang = 'eng';
    }

    init(data, lang) {
        this.data = data;
        this.currentLang = lang;
        this.cacheElements();
    }

    cacheElements() {
        this.cache = {
            card: document.querySelector(SELECTORS.CARD),
            frontCard: document.querySelector(SELECTORS.FRONT_CARD),
            frontText: document.querySelector(SELECTORS.FRONT_TEXT),
            options: document.querySelector(SELECTORS.OPTIONS),
            btn: document.querySelector(SELECTORS.BTN),
            counter: document.querySelector(SELECTORS.COUNTER),
            finalResult: document.querySelector(SELECTORS.FINAL_RESULT),
            languageSelection: document.querySelector(SELECTORS.LANGUAGE_SELECTION)
        };
    }

    bindEvents(handlers) {
        this.handlers = handlers;
        this.cache.frontCard.addEventListener('click', () => this.flipCard());
        this.cache.btn.addEventListener('click', () => this.handlers.onNext());
        
        // Event delegation for options
        this.cache.options.addEventListener('click', (e) => {
            const option = e.target.closest(`.${CLASSES.OPTION}`);
            if (option) this.handlers.onOptionClick(option);
        });
    }

    getLanguage() {
        return document.querySelector(SELECTORS.LANGUAGE_INPUT)?.value || 'eng';
    }

    setLoading(isLoading, lang = 'eng') {
        this.cache.btn.disabled = isLoading;
        this.cache.btn.textContent = isLoading 
            ? STRINGS[lang].loading 
            : STRINGS[lang].start;
    }

    showError(message) {
        this.cache.finalResult.textContent = message;
        this.cache.btn.disabled = true;
    }

    hideLanguageSelection() {
        this.cache.languageSelection.style.display = 'none';
    }

    flipCard() {
        const { card, frontCard, frontText } = this.cache;
        const isFlipped = card.style.transform === 'rotateX(180deg)';
        const lang = this.getLanguage();
        const str = STRINGS[lang];

        card.style.transform = isFlipped ? 'rotateX(0deg)' : 'rotateX(180deg)';

        setTimeout(() => {
            if (!isFlipped) {
                frontText.textContent = this.currentIndex === 0 ? str.title : (this.activeItem?.ar ?? '');
                frontText.style.fontSize = CONFIG.FONTS.ARABIC;
                frontText.style.transform = 'scaleY(-1)';
                frontCard.classList.add(CLASSES.FLIPPED);
            } else {
                frontText.textContent = this.currentIndex === 0 ? str.welcome : this.getItemText(this.activeItem);
                frontText.style.fontSize = CONFIG.FONTS.LATIN;
                frontText.style.transform = 'none';
                frontCard.classList.remove(CLASSES.FLIPPED);
            }
        }, CONFIG.ANIMATION_DELAY);
    }

    resetCard() {
        this.cache.card.style.transform = 'rotateX(0deg)';
        this.cache.frontCard.classList.remove(CLASSES.FLIPPED);
    }

    renderCard(item, lang) {
        this.activeItem = item;
        this.currentLang = lang;
        const { frontText } = this.cache;
        
        frontText.textContent = this.getItemText(item);
        frontText.style.fontSize = CONFIG.FONTS.LATIN;
        frontText.style.transform = 'none';
    }

    renderOptions(options, correctItem, onClick) {
        const { options: container } = this.cache;
        container.innerHTML = '';

        options.forEach(option => {
            const el = document.createElement('div');
            el.className = CLASSES.OPTION;
            el.setAttribute('role', 'listitem');
            el.textContent = this.getItemMeaning(option);
            el.dataset.correct = option === correctItem ? 'true' : 'false';
            container.appendChild(el);
        });
    }

    markOption(option, isCorrect) {
        option.classList.add(isCorrect ? CLASSES.CORRECT : CLASSES.INCORRECT);
        if (!isCorrect) {
            const correct = this.cache.options.querySelector(`[data-correct="true"]`);
            correct?.classList.add(CLASSES.CORRECT);
        }
    }

    disableOptions() {
        this.cache.options.querySelectorAll(`.${CLASSES.OPTION}`).forEach(opt => {
            opt.classList.add(CLASSES.DISABLED);
        });
    }

    enableOptions() {
        this.cache.options.querySelectorAll(`.${CLASSES.OPTION}`).forEach(opt => {
            opt.classList.remove(CLASSES.CORRECT, CLASSES.INCORRECT, CLASSES.DISABLED);
        });
    }

    updateCounter(current, total, lang) {
        const str = STRINGS[lang];
        this.cache.counter.textContent = current > 0 
            ? `${str.question} ${current}/${total}`
            : '';
    }

    updateButton(text) {
        this.cache.btn.textContent = text;
        this.cache.btn.disabled = false;
    }

    disableButton() {
        this.cache.btn.disabled = true;
    }

    showFinalResult(correct, total, lang) {
        const str = STRINGS[lang];
        this.cache.finalResult.textContent = `${correct}/${total} ${str.correct}`;
        this.cache.btn.textContent = str.end;
        this.cache.btn.disabled = true;
    }

    getItemText(item) {
        return this.currentLang === 'eng' ? item?.en : item?.aze;
    }

    getItemMeaning(item) {
        return this.currentLang === 'eng' ? item?.meaning : item?.meaning_aze;
    }

    get currentIndex() {
        // Access from game state through handlers
        return this.handlers?.getCurrentIndex?.() || 0;
    }
}

export const ui = new UI();
