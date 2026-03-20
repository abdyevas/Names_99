// === Data Loading with Error Handling ===

import { STRINGS } from './constants.js';

export async function loadData(lang = 'eng') {
    try {
        const response = await fetch('data.json');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to load data:', error);
        throw new Error(STRINGS[lang].error);
    }
}

export function getItemText(item, lang) {
    return lang === 'eng' ? item.en : item.aze;
}

export function getItemMeaning(item, lang) {
    return lang === 'eng' ? item.meaning : item.meaning_aze;
}
