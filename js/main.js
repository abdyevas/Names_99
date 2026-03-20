// === Application Entry Point ===

import { loadData } from './data.js';
import { GameController } from './game.js';
import { ui } from './ui.js';
import { STRINGS } from './constants.js';

let gameData = null;

document.addEventListener('DOMContentLoaded', async () => {
    const startBtn = document.getElementById('btn');
    const langInputs = document.querySelectorAll('input[name="language"]');
    
    // Get initial language
    let currentLang = document.querySelector('input[name="language"]:checked')?.value || 'eng';
    
    // Update button text based on language
    const updateButtonText = () => {
        if (!gameData) {
            startBtn.textContent = STRINGS[currentLang].start;
        }
    };
    
    // Language change handler
    langInputs.forEach(input => {
        input.addEventListener('change', (e) => {
            currentLang = e.target.value;
            updateButtonText();
        });
    });
    
    // Show loading state
    ui.cacheElements();
    ui.setLoading(true, currentLang);
    
    // Load data
    try {
        gameData = await loadData(currentLang);
        ui.setLoading(false, currentLang);
        
        // Start game on button click
        startBtn.addEventListener('click', () => {
            const selectedLang = document.querySelector('input[name="language"]:checked')?.value || 'eng';
            GameController.start(gameData, selectedLang);
        }, { once: true });
        
    } catch (error) {
        ui.showError(error.message);
    }
});
