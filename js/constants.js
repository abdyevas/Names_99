// === Constants & Configuration ===

export const CONFIG = {
    OPTIONS_COUNT: 3,
    ANIMATION_DELAY: 100,
    FONTS: {
        ARABIC: '40px',
        LATIN: '25px'
    }
};

export const SELECTORS = {
    CARD: '#card',
    FRONT_CARD: '#front-card',
    FRONT_TEXT: '#front-text',
    OPTIONS: '#options',
    BTN: '#btn',
    COUNTER: '#counter',
    FINAL_RESULT: '#final-result',
    LANGUAGE_SELECTION: '#language-selection',
    LANGUAGE_INPUT: 'input[name="language"]:checked'
};

export const CLASSES = {
    OPTION: 'option',
    CORRECT: 'correct',
    INCORRECT: 'incorrect',
    DISABLED: 'disabled',
    FLIPPED: 'flipped'
};

export const STRINGS = {
    eng: {
        welcome: 'Welcome!',
        title: '99 Names',
        start: 'Start',
        next: 'Next',
        end: 'The End',
        question: 'Question',
        correct: 'correct!',
        loading: 'Loading...',
        error: 'Failed to load data. Please refresh.'
    },
    aze: {
        welcome: 'Xoş Gəldiniz!',
        title: '99 Ad',
        start: 'Başla',
        next: 'Növbəti',
        end: 'Son',
        question: 'Sual',
        correct: 'düzgün!',
        loading: 'Yüklənir...',
        error: 'Məlumat yüklənmədi. Yeniləyin.'
    }
};
