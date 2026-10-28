/* ===================================================
   Home Calisthenics Progression Ladder - JavaScript
   =================================================== */

// 1. Data Definition: 5 Progression Levels
const LEVELS = [
    { id: 1, name: "Wall Push-Ups", rank: "Novice", emoji: "🧱" },
    { id: 2, name: "Incline Push-Ups", rank: "Beginner", emoji: "📐" },
    { id: 3, name: "Standard Push-Ups", rank: "Intermediate", emoji: "⚡" },
    { id: 4, name: "Diamond Push-Ups", rank: "Advanced", emoji: "💎" },
    { id: 5, name: "Pike Push-Ups", rank: "Elite", emoji: "🏔️" }
];

const TARGET_REPS = 15; // Rep requirement to unlock next level

// Application State
let state = {
    unlockedLevelId: 1,
    history: []
};

// DOM Elements
const gridEl = document.getElementById('progression-grid');
const exerciseSelectEl = document.getElementById('exercise');
const dateInputEl = document.getElementById('workout-date');
const setsInputEl = document.getElementById('sets');
const repsInputEl = document.getElementById('reps');
const formEl = document.getElementById('workout-form');
const historyListEl = document.getElementById('history-list');
const rankBadgeEl = document.getElementById('current-rank-badge');
const formMessageEl = document.getElementById('form-message');
const modalEl = document.getElementById('confirm-modal');
const cancelResetBtn = document.getElementById('cancel-reset-btn');
const confirmResetBtn = document.getElementById('confirm-reset-btn');

// 2. LocalStorage Helpers
function loadStateFromStorage() {
    try {
        const saved = localStorage.getItem('calisthenics_ladder_data');
        if (saved) {
            state = JSON.parse(saved);
        }
    } catch (err) {
        console.log("LocalStorage not accessible, using default state.");
    }
}

function saveStateToStorage() {
    try {
        localStorage.setItem('calisthenics_ladder_data', JSON.stringify(state));
    } catch (err) {
        console.log("Could not save to LocalStorage:", err);
    }
}

// 3. Render Functions

// Render the 5 progression level cards
function renderLadder() {
    gridEl.innerHTML = '';

    LEVELS.forEach(level => {
        const isUnlocked = level.id <= state.unlockedLevelId;

        // Create semantic article element
        const card = document.createElement('article');
        card.className = `card ${isUnlocked ? 'unlocked' : 'locked'}`;

        if (isUnlocked) {
            card.innerHTML = `
                <div>
                    <div class="text-3xl mb-2">${level.emoji}</div>
                    <h3 class="text-lg font-bold text-white">${level.name}</h3>
                    <p class="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-4">${level.rank}</p>
                    <p class="text-xs text-slate-300 mb-4">Status: <span class="text-emerald-400 font-semibold">Unlocked ✅</span></p>
                </div>
                <button type="button" onclick="selectForLog(${level.id})" class="btn-secondary w-full justify-center">
                    <span>Log Workout</span>
                    <span class="arrow">→</span>
                </button>
            `;
        } else {
            const previousLevel = LEVELS.find(l => l.id === level.id - 1);
            card.innerHTML = `
                <div>
                    <div class="text-3xl mb-2">🔒</div>
                    <h3 class="text-lg font-bold text-slate-300">${level.name}</h3>
                    <p class="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-4">${level.rank}</p>
                    <p class="text-xs text-slate-400 bg-slate-900 p-2 rounded border border-slate-700">
                        Target: ${TARGET_REPS} Reps on <strong>${previousLevel ? previousLevel.name : 'previous'}</strong> to unlock.
                    </p>
                </div>
                <div class="text-xs text-slate-500 text-center mt-4">
                    Locked 🔒
                </div>
            `;
        }

        gridEl.appendChild(card);
    });
}

// Update the Dropdown based on unlocked levels
function populateDropdown() {
    exerciseSelectEl.innerHTML = '';

    LEVELS.forEach(level => {
        const option = document.createElement('option');
        option.value = level.id;

        if (level.id <= state.unlockedLevelId) {
            option.textContent = `${level.id}. ${level.name}`;
            option.disabled = false;
        } else {
            option.textContent = `${level.id}. ${level.name} 🔒 (Locked)`;
            option.disabled = true;
        }

        exerciseSelectEl.appendChild(option);
    });

    // Set select value to current highest unlocked
    exerciseSelectEl.value = state.unlockedLevelId;
}

// Update Rank Badge
function updateRankBadge() {
    const currentLevel = LEVELS.find(l => l.id === state.unlockedLevelId);
    if (currentLevel) {
        rankBadgeEl.textContent = currentLevel.rank;
    }
}

// Render recent workouts list
function renderHistory() {
    historyListEl.innerHTML = '';

    if (state.history.length === 0) {
        historyListEl.innerHTML = `
            <div class="text-center p-6 bg-slate-800 rounded-lg text-slate-400 text-sm">
                No workouts logged yet. Start by completing Wall Push-Ups!
            </div>
        `;
        return;
    }

    // Show latest 5 workouts
    const recent = [...state.history].reverse().slice(0, 5);

    recent.forEach(item => {
        const level = LEVELS.find(l => l.id === item.levelId);
        const isTargetMet = item.reps >= TARGET_REPS;

        const div = document.createElement('div');
        div.className = `history-item ${isTargetMet ? 'target-met' : ''}`;

        div.innerHTML = `
            <div>
                <h4 class="font-bold text-white text-sm">${level ? level.name : 'Workout'}</h4>
                <p class="text-xs text-slate-400">${item.date}</p>
            </div>
            <div class="text-right">
                <span class="font-mono text-sm font-bold bg-slate-900 px-2.5 py-1 rounded border border-slate-700">
                    ${item.sets} sets × ${item.reps} reps
                </span>
                ${isTargetMet ? '<p class="text-xs text-emerald-400 font-semibold mt-1">Target Met! 🎯</p>' : ''}
            </div>
        `;

        historyListEl.appendChild(div);
    });
}

// 4. User Interaction & Modal Helpers
function selectForLog(levelId) {
    exerciseSelectEl.value = levelId;
    formEl.scrollIntoView({ behavior: 'smooth' });
    setsInputEl.focus();
}

function displayMessage(text, isSuccess) {
    formMessageEl.textContent = text;
    formMessageEl.className = `message-box ${isSuccess ? 'message-success' : 'message-error'}`;
    formMessageEl.style.display = 'block';

    setTimeout(() => {
        formMessageEl.style.display = 'none';
    }, 4500);
}

// Open Custom Reset Modal
function openResetModal() {
    modalEl.classList.remove('hidden');
}

// Close Custom Reset Modal
function closeResetModal() {
    modalEl.classList.add('hidden');
}

// Perform reset when user confirms in the modal
function performReset() {
    state.unlockedLevelId = 1;
    state.history = [];

    saveStateToStorage();
    renderLadder();
    populateDropdown();
    renderHistory();
    updateRankBadge();

    closeResetModal();
    displayMessage("All workout history and progress have been reset!", true);
}

// Modal Event Listeners
cancelResetBtn.addEventListener('click', closeResetModal);
confirmResetBtn.addEventListener('click', performReset);

// Close modal if user clicks outside the modal box
modalEl.addEventListener('click', function (event) {
    if (event.target === modalEl) {
        closeResetModal();
    }
});

// 5. Form Submit Event Handler
formEl.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop page reload

    const levelId = parseInt(exerciseSelectEl.value);
    const date = dateInputEl.value;
    const sets = parseInt(setsInputEl.value);
    const reps = parseInt(repsInputEl.value);

    // Validation check
    if (!date || isNaN(sets) || isNaN(reps) || sets < 1 || reps < 1) {
        displayMessage("Please enter valid positive numbers for sets and reps.", false);
        return;
    }

    const currentLevel = LEVELS.find(l => l.id === levelId);

    // Save new workout record
    const newRecord = {
        id: Date.now(),
        levelId: levelId,
        date: date,
        sets: sets,
        reps: reps
    };
    state.history.push(newRecord);

    let feedbackText = `Logged ${sets} sets of ${reps} ${currentLevel ? currentLevel.name : 'reps'}!`;

    // Check if user reached progression threshold to unlock the next level
    if (reps >= TARGET_REPS && levelId === state.unlockedLevelId && state.unlockedLevelId < LEVELS.length) {
        state.unlockedLevelId++;
        const unlockedLevel = LEVELS.find(l => l.id === state.unlockedLevelId);
        feedbackText = `🎉 LEVEL UP! You reached ${reps} reps and unlocked ${unlockedLevel.name}!`;
    }

    // Save state & re-render UI
    saveStateToStorage();
    renderLadder();
    populateDropdown();
    renderHistory();
    updateRankBadge();

    // Show feedback message right on the form
    displayMessage(feedbackText, true);

    // Clear sets and reps inputs for next entry
    setsInputEl.value = '';
    repsInputEl.value = '';
});

// 6. Page Initialization
function init() {
    // Set today's date in date input
    const today = new Date().toISOString().split('T')[0];
    dateInputEl.value = today;

    // Set footer year
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Load saved data and render UI
    loadStateFromStorage();
    renderLadder();
    populateDropdown();
    renderHistory();
    updateRankBadge();
}

// Run when page loads
document.addEventListener('DOMContentLoaded', init);
