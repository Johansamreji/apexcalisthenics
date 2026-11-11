/**
 * ============================================================================
 * Apex Calisthenics Architecture - Core Application Logic (script.js)
 * ============================================================================
 * Vanilla JavaScript SPA with Web Storage API, Multi-Category Progressions,
 * Strict Form Validation, and Responsive Tab Navigation.
 */

// ----------------------------------------------------------------------------
// 1. Comprehensive Exercise Database (4 Disciplines × 5 Levels = 20 Milestones)
// ----------------------------------------------------------------------------
const EXERCISE_DATABASE = {
    push: {
        id: "push",
        name: "Push Discipline",
        shortName: "Push",
        icon: "⚡",
        color: "#00f5ff",
        description: "Upper body horizontal pushing foundation: progressing from incline wall push-ups to advanced planche control.",
        levels: [
            { id: 1, name: "Wall Push-Ups", rank: "Novice", targetReq: 15, difficulty: "Tier 1", muscles: "Pectoralis Major, Anterior Deltoids, Triceps", cues: "Hands at shoulder height, keep body in a rigid straight line, smooth tempo." },
            { id: 2, name: "Incline Bench Push-Ups", rank: "Beginner", targetReq: 15, difficulty: "Tier 2", muscles: "Lower Chest, Triceps Brachii, Core", cues: "Hands elevated on sturdy bench or platform, core braced, elbows at 45 degrees." },
            { id: 3, name: "Standard Floor Push-Ups", rank: "Intermediate", targetReq: 15, difficulty: "Tier 3", muscles: "Full Chest, Anterior Delts, Serratus Anterior", cues: "Full range of motion, chest touches floor, lock out completely at apex." },
            { id: 4, name: "Diamond Push-Ups", rank: "Advanced", targetReq: 15, difficulty: "Tier 4", muscles: "Medial & Lateral Triceps, Inner Chest", cues: "Thumbs and index fingers forming a diamond beneath sternum." },
            { id: 5, name: "Tuck Planche Push-Ups", rank: "Master", targetReq: 10, difficulty: "Tier 5", muscles: "Anterior Deltoids, Scapular Protractors, Core", cues: "Lean shoulders far forward, knees tucked to chest, elevate feet off ground." }
        ]
    },
    pull: {
        id: "pull",
        name: "Pull Discipline",
        shortName: "Pull",
        icon: "🧗",
        color: "#818cf8",
        description: "Vertical and horizontal pulling chain: developing scapular retraction, lat engagement, and explosive bar transitions.",
        levels: [
            { id: 1, name: "Bodyweight Incline Rows", rank: "Novice", targetReq: 15, difficulty: "Tier 1", muscles: "Rhomboids, Mid-Trapezius, Biceps", cues: "Grip low bar or gymnastics rings at 45 degrees, pull chest flush to handles." },
            { id: 2, name: "Horizontal Australian Rows", rank: "Beginner", targetReq: 12, difficulty: "Tier 2", muscles: "Latissimus Dorsi, Posterior Delts, Forearms", cues: "Body completely parallel to the ground beneath bar, drive elbows backward." },
            { id: 3, name: "Controlled Negative Pull-Ups", rank: "Intermediate", targetReq: 8, difficulty: "Tier 3", muscles: "Lats, Brachialis, Core Stabilizers", cues: "Jump or step to chin over bar, lower down with strict 4-5 second descent." },
            { id: 4, name: "Standard Strict Dead-Hang Pull-Ups", rank: "Advanced", targetReq: 12, difficulty: "Tier 4", muscles: "Full Back, Biceps Brachii, Grip Strength", cues: "Dead hang from full extension to chin clearing bar. No kipping or momentum." },
            { id: 5, name: "Bar Muscle-Up", rank: "Master", targetReq: 5, difficulty: "Tier 5", muscles: "Full Upper Body Explosive Chain, Lats, Triceps", cues: "Powerful explosive high pull, rapid wrist turnover, and straight-bar dip finish." }
        ]
    },
    core: {
        id: "core",
        name: "Core Discipline",
        shortName: "Core",
        icon: "🔥",
        color: "#f59e0b",
        description: "Anterior chain stability and compression power: progressing from hollow floor holds to gravity-defying L-sits.",
        levels: [
            { id: 1, name: "Floor Knee Tucks", rank: "Novice", targetReq: 20, difficulty: "Tier 1", muscles: "Rectus Abdominis, Iliopsoas", cues: "Lie flat on floor, compress knees to chest, extend outward without arching back." },
            { id: 2, name: "Hollow Body Static Hold", rank: "Beginner", targetReq: 45, difficulty: "Tier 2", muscles: "Transverse Abdominis, Obliques", cues: "Lower back glued to floor, arms overhead, legs straight hovering 6 inches high." },
            { id: 3, name: "Hanging Knee Raises", rank: "Intermediate", targetReq: 15, difficulty: "Tier 3", muscles: "Lower Abdominals, Forearms, Lat Stabilizers", cues: "Hang from pull-up bar, tilt pelvis up toward ribs, zero body swing." },
            { id: 4, name: "Hanging Straight Leg Raises", rank: "Advanced", targetReq: 12, difficulty: "Tier 4", muscles: "Full Anterior Core, Hip Flexors", cues: "Toes touch the pull-up bar under strict control with legs locked out straight." },
            { id: 5, name: "Parallette / Floor L-Sit Hold", rank: "Master", targetReq: 20, difficulty: "Tier 5", muscles: "Core Compression, Triceps, Quadriceps", cues: "Depress scapulae into handles or floor, legs locked out horizontally at 90 degrees." }
        ]
    },
    legs: {
        id: "legs",
        name: "Legs Discipline",
        shortName: "Legs",
        icon: "🦵",
        color: "#10b981",
        description: "Unilateral lower body strength and mobility: building raw knee flexion and ankle stability to master the single-leg pistol squat.",
        levels: [
            { id: 1, name: "Assisted Chair Squats", rank: "Novice", targetReq: 20, difficulty: "Tier 1", muscles: "Quadriceps, Gluteus Maximus", cues: "Controlled descent to chair surface, stand driving through mid-foot and heel." },
            { id: 2, name: "Deep Bodyweight Squats", rank: "Beginner", targetReq: 25, difficulty: "Tier 2", muscles: "Quads, Hamstrings, Glutes, Calves", cues: "Hip crease drops below knee caps, chest proud, feet flat on the ground." },
            { id: 3, name: "Bulgarian Split Squats", rank: "Intermediate", targetReq: 15, difficulty: "Tier 3", muscles: "Unilateral Quadriceps, Gluteus Medius", cues: "Rear foot elevated on bench or couch, descend straight down until thigh is parallel." },
            { id: 4, name: "Alternating Archer Squats", rank: "Advanced", targetReq: 12, difficulty: "Tier 4", muscles: "Adductors, Quads, Ankle Dorsiflexion", cues: "Wide stance, descend fully into one side while opposite leg stays locked and straight." },
            { id: 5, name: "Full Strict Pistol Squat", rank: "Master", targetReq: 8, difficulty: "Tier 5", muscles: "Single-Leg Peak Strength, Balance, Hip Flexors", cues: "Single-leg full depth squat with non-working leg extended straight forward off floor." }
        ]
    }
};

// Helper to get local date in YYYY-MM-DD format (avoids UTC timezone mismatch)
function getLocalDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
const STORAGE_KEY = 'apex_calisthenics_v2_state';

let appState = {
    activeTab: 'dashboard',
    activeCategory: 'push',
    unlockedLevels: {
        push: 1,
        pull: 1,
        core: 1,
        legs: 1
    },
    history: []
};

/**
 * Safely load state from LocalStorage with fallback defaults
 */
function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
                appState.activeTab = parsed.activeTab || 'dashboard';
                appState.activeCategory = parsed.activeCategory || 'push';
                appState.unlockedLevels = Object.assign({ push: 1, pull: 1, core: 1, legs: 1 }, parsed.unlockedLevels);
                appState.history = Array.isArray(parsed.history) ? parsed.history : [];
            }
        }
    } catch (err) {
        console.warn('LocalStorage unavailable or restricted. Operating in memory mode.', err);
    }
}

/**
 * Safely save state to LocalStorage
 */
function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (err) {
        console.warn('Failed to persist state to LocalStorage.', err);
    }
}

/**
 * Calculate overall Athlete Tier rank
 */
function calculateOverallTier() {
    const totalUnlocked = Object.values(appState.unlockedLevels).reduce((acc, lvl) => acc + lvl, 0);
    // 4 to 20 total levels
    if (totalUnlocked <= 4) return "Novice Recruit";
    if (totalUnlocked <= 8) return "Apprentice Athlete";
    if (totalUnlocked <= 12) return "Adept Practitioner";
    if (totalUnlocked <= 16) return "Elite Calisthenic";
    if (totalUnlocked < 20) return "Master of Movement";
    return "Grandmaster Athlete ⚡";
}

// ----------------------------------------------------------------------------
// 3. Multi-Tab Navigation Architecture (SPA Router)
// ----------------------------------------------------------------------------
const TAB_TITLES = {
    dashboard: "Dashboard & Progression",
    library: "Movement Exercise Library",
    log: "Log Completed Session",
    history: "Training Logs & Settings"
};

function switchTab(tabId) {
    if (!tabId || !document.getElementById(`section-${tabId}`)) {
        tabId = 'dashboard';
    }

    appState.activeTab = tabId;
    saveState();

    // 1. Update Section Visibility
    document.querySelectorAll('.tab-pane').forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(`section-${tabId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 2. Update Desktop Sidebar Navigation Active States
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // 3. Update Mobile Bottom Navigation Active States
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // 4. Update Header Title
    const titleEl = document.getElementById('top-bar-title');
    if (titleEl && TAB_TITLES[tabId]) {
        titleEl.textContent = TAB_TITLES[tabId];
    }

    // 5. Trigger Context-Specific Refresh
    if (tabId === 'dashboard') {
        renderDashboard();
    } else if (tabId === 'library') {
        renderLibrary();
    } else if (tabId === 'log') {
        setupLogForm();
    } else if (tabId === 'history') {
        renderHistory();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach event listeners to tab navigation buttons
function initNavigationEvents() {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
}

// ----------------------------------------------------------------------------
// 4. Dashboard & Progression Ladder Rendering
// ----------------------------------------------------------------------------
function switchCategory(catKey) {
    if (!EXERCISE_DATABASE[catKey]) {
        catKey = 'push';
    }
    appState.activeCategory = catKey;
    saveState();

    // Update Category Pills
    document.querySelectorAll('.cat-pill').forEach(pill => {
        const pillCat = pill.dataset.category || pill.textContent.toLowerCase();
        pill.classList.toggle('active', pillCat.includes(catKey));
    });

    renderDashboard();
}

function renderDashboard() {
    const category = EXERCISE_DATABASE[appState.activeCategory];
    if (!category) return;

    // 1. Overall Stats Overview
    const totalWorkouts = appState.history.length;
    const totalReps = appState.history.reduce((sum, item) => sum + (item.sets * item.reps), 0);
    const totalUnlockedAll = Object.values(appState.unlockedLevels).reduce((acc, lvl) => acc + lvl, 0);
    const overallTier = calculateOverallTier();

    const statWorkoutsEl = document.getElementById('stat-total-workouts');
    const statRepsEl = document.getElementById('stat-total-reps');
    const statUnlockedEl = document.getElementById('stat-unlocked-count');
    const statTierEl = document.getElementById('stat-overall-rank');
    const overallBadgeEl = document.getElementById('overall-rank-badge');
    const quickWorkoutCountEl = document.getElementById('quick-workout-count');

    if (statWorkoutsEl) statWorkoutsEl.textContent = totalWorkouts;
    if (statRepsEl) statRepsEl.textContent = totalReps.toLocaleString();
    if (statUnlockedEl) statUnlockedEl.textContent = totalUnlockedAll;
    if (statTierEl) statTierEl.textContent = overallTier;
    if (overallBadgeEl) overallBadgeEl.textContent = overallTier;
    if (quickWorkoutCountEl) quickWorkoutCountEl.textContent = totalWorkouts;

    // 2. Category Summary Banner
    const currentUnlockedLvl = appState.unlockedLevels[category.id] || 1;
    const bannerIcon = document.getElementById('cat-banner-icon');
    const bannerTitle = document.getElementById('cat-banner-title');
    const bannerBadge = document.getElementById('cat-banner-badge');
    const bannerDesc = document.getElementById('cat-banner-desc');
    const progressBar = document.getElementById('cat-progress-bar');
    const progressText = document.getElementById('cat-progress-text');

    if (bannerIcon) bannerIcon.textContent = category.icon;
    if (bannerTitle) bannerTitle.textContent = category.name;
    if (bannerBadge) bannerBadge.textContent = `Tier ${currentUnlockedLvl} Unlocked`;
    if (bannerDesc) bannerDesc.textContent = category.description;

    const progressPercent = Math.round((currentUnlockedLvl / category.levels.length) * 100);
    if (progressBar) progressBar.style.width = `${progressPercent}%`;
    if (progressText) progressText.textContent = `${currentUnlockedLvl} of 5 Milestones (${progressPercent}%)`;

    // 3. Render 5 Progression Ladder Cards (CSS Grid)
    const ladderGrid = document.getElementById('ladder-grid');
    if (!ladderGrid) return;
    ladderGrid.innerHTML = '';

    category.levels.forEach(level => {
        const isUnlocked = level.id <= currentUnlockedLvl;
        const isCurrentActive = level.id === currentUnlockedLvl;

        const article = document.createElement('article');
        article.className = `ladder-card ${isUnlocked ? 'unlocked' : 'locked'} ${isCurrentActive ? 'current-tier' : ''}`;

        if (isUnlocked) {
            article.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2 py-0.5 rounded-md">
                            ${level.difficulty}
                        </span>
                        <span class="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                            <span>✓</span> Unlocked
                        </span>
                    </div>
                    <h4 class="text-base font-bold text-white mb-1">${level.name}</h4>
                    <p class="text-xs text-slate-400 mb-4 font-mono font-medium">${level.rank} Level</p>
                    <p class="text-xs text-slate-300 leading-relaxed mb-4">${level.cues}</p>
                </div>
                <div class="border-t border-slate-800 pt-3 mt-2">
                    <button type="button" onclick="quickLogExercise('${category.id}', ${level.id})" class="w-full bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold text-xs py-2.5 px-3 rounded-lg transition-all flex items-center justify-center gap-1.5 group">
                        <span>Log Session</span>
                        <span class="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            `;
        } else {
            const prevLevel = category.levels.find(l => l.id === level.id - 1);
            article.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-md">
                            ${level.difficulty}
                        </span>
                        <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
                            <span>🔒</span> Locked
                        </span>
                    </div>
                    <h4 class="text-base font-bold text-slate-300 mb-1">${level.name}</h4>
                    <p class="text-xs text-slate-500 mb-4 font-mono">${level.rank} Level</p>
                    <div class="bg-slate-950/70 border border-slate-800 rounded-lg p-3 text-xs text-slate-400 mb-3">
                        <span class="text-cyan-400 font-semibold block mb-0.5">Requirement to Unlock:</span>
                        Log <strong class="text-white">${prevLevel ? prevLevel.targetReq : 15}+ reps</strong> on ${prevLevel ? prevLevel.name : 'previous tier'}.
                    </div>
                </div>
                <div class="border-t border-slate-800/80 pt-3 mt-2 text-center text-[11px] text-slate-500 font-mono">
                    Tier Locked 🔒
                </div>
            `;
        }

        ladderGrid.appendChild(article);
    });
}

// ----------------------------------------------------------------------------
// 5. Exercise Library Rendering (Responsive Grid with Filters)
// ----------------------------------------------------------------------------
function filterLibrary() {
    renderLibrary();
}

function renderLibrary() {
    const libraryGrid = document.getElementById('library-grid');
    const filterSelect = document.getElementById('library-filter');
    if (!libraryGrid) return;

    const selectedFilter = filterSelect ? filterSelect.value : 'all';
    libraryGrid.innerHTML = '';

    const categoriesToRender = selectedFilter === 'all' 
        ? Object.values(EXERCISE_DATABASE)
        : [EXERCISE_DATABASE[selectedFilter]].filter(Boolean);

    categoriesToRender.forEach(category => {
        const currentUnlockedLvl = appState.unlockedLevels[category.id] || 1;

        category.levels.forEach(level => {
            const isUnlocked = level.id <= currentUnlockedLvl;

            const article = document.createElement('article');
            article.className = "library-card";

            article.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-2.5">
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                            category.id === 'push' ? 'bg-cyan-950/60 text-cyan-400 border-cyan-500/30' :
                            category.id === 'pull' ? 'bg-indigo-950/60 text-indigo-400 border-indigo-500/30' :
                            category.id === 'core' ? 'bg-amber-950/60 text-amber-400 border-amber-500/30' :
                            'bg-emerald-950/60 text-emerald-400 border-emerald-500/30'
                        }">
                            ${category.shortName} • ${level.difficulty}
                        </span>
                        <span class="text-xs ${isUnlocked ? 'text-emerald-400 font-semibold' : 'text-slate-500 font-mono'}">
                            ${isUnlocked ? 'Unlocked ✓' : 'Locked 🔒'}
                        </span>
                    </div>

                    <h4 class="text-base font-bold text-white mb-1 flex items-center gap-1.5">
                        <span>${category.icon}</span>
                        <span>${level.name}</span>
                    </h4>

                    <p class="text-xs text-slate-400 font-medium mb-3">
                        <strong class="text-slate-300">Target Muscles:</strong> ${level.muscles}
                    </p>

                    <p class="text-xs text-slate-300 leading-relaxed mb-4 bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg">
                        ${level.cues}
                    </p>
                </div>

                <div class="border-t border-slate-800 pt-3 flex items-center justify-between">
                    <span class="text-[11px] font-mono text-slate-400">Target: <strong class="text-cyan-400">${level.targetReq} reps</strong></span>
                    <button type="button" onclick="quickLogExercise('${category.id}', ${level.id})" class="text-xs font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                        <span>Log Session</span>
                        <span>→</span>
                    </button>
                </div>
            `;

            libraryGrid.appendChild(article);
        });
    });
}

// ----------------------------------------------------------------------------
// 6. Log Workout Form Architecture (Strict HTML5 Validation)
// ----------------------------------------------------------------------------
function setupLogForm() {
    const categorySelect = document.getElementById('form-category');
    const dateInput = document.getElementById('form-date');

    // Strict Syllabus Requirement: Date picker with max attribute set to today (local time)
    const today = getLocalDateString();
    if (dateInput) {
        dateInput.max = today;
        if (!dateInput.value) {
            dateInput.value = today;
        }
    }

    if (categorySelect) {
        categorySelect.value = appState.activeCategory;
    }
    updateExerciseDropdown();
}

function handleFormCategoryChange() {
    const categorySelect = document.getElementById('form-category');
    if (categorySelect) {
        appState.activeCategory = categorySelect.value;
    }
    updateExerciseDropdown();
}

function updateExerciseDropdown() {
    const categorySelect = document.getElementById('form-category');
    const exerciseSelect = document.getElementById('form-exercise');
    if (!categorySelect || !exerciseSelect) return;

    const catKey = categorySelect.value;
    const category = EXERCISE_DATABASE[catKey];
    if (!category) return;

    const currentUnlockedLvl = appState.unlockedLevels[catKey] || 1;
    exerciseSelect.innerHTML = '';

    category.levels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.id;
        const isUnlocked = level.id <= currentUnlockedLvl;

        if (isUnlocked) {
            option.textContent = `${level.id}. ${level.name} (Unlocked)`;
            option.disabled = false;
        } else {
            option.textContent = `${level.id}. ${level.name} 🔒 (Locked - Target: ${level.targetReq} reps on Level ${level.id - 1})`;
            option.disabled = true;
        }

        exerciseSelect.appendChild(option);
    });

    // Default to highest unlocked exercise in this category
    exerciseSelect.value = currentUnlockedLvl;
}

function quickLogExercise(catKey, levelId) {
    appState.activeCategory = catKey;
    switchTab('log');

    const categorySelect = document.getElementById('form-category');
    const exerciseSelect = document.getElementById('form-exercise');
    const setsInput = document.getElementById('form-sets');

    if (categorySelect) categorySelect.value = catKey;
    updateExerciseDropdown();
    if (exerciseSelect) exerciseSelect.value = levelId;
    if (setsInput) setsInput.focus();
}

// Form Submission Event with Progression Checking & Level-Up Verification
function initFormSubmission() {
    const form = document.getElementById('workout-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Stop normal form post

        const categoryKey = document.getElementById('form-category').value;
        const exerciseId = parseInt(document.getElementById('form-exercise').value, 10);
        const sets = parseInt(document.getElementById('form-sets').value, 10);
        const reps = parseInt(document.getElementById('form-reps').value, 10);
        const date = document.getElementById('form-date').value;
        const notes = document.getElementById('form-notes').value.trim();

        // Strict Client-Side Form Validation check
        const today = getLocalDateString();
        if (!date || date > today) {
            showFormFeedback("Invalid date. Workouts cannot be logged for future dates.", false);
            return;
        }
        if (isNaN(sets) || sets < 1 || isNaN(reps) || reps < 1) {
            showFormFeedback("Please enter valid positive numbers for sets and reps (min: 1).", false);
            return;
        }

        const category = EXERCISE_DATABASE[categoryKey];
        const exercise = category ? category.levels.find(l => l.id === exerciseId) : null;
        if (!category || !exercise) {
            showFormFeedback("Selected exercise was not found in database.", false);
            return;
        }

        const currentLvl = appState.unlockedLevels[categoryKey] || 1;
        const isTargetMet = reps >= exercise.targetReq;

        // Record entry
        const record = {
            id: Date.now(),
            categoryKey,
            categoryName: category.shortName,
            levelId: exercise.id,
            exerciseName: exercise.name,
            sets,
            reps,
            date,
            notes,
            targetMet: isTargetMet
        };

        appState.history.unshift(record); // Prepend so latest appears first

        // Progression Check: If user matched/exceeded target reps on current unlocked level
        let leveledUp = false;
        let newUnlockedExercise = null;

        if (exerciseId === currentLvl && isTargetMet && currentLvl < category.levels.length) {
            appState.unlockedLevels[categoryKey]++;
            leveledUp = true;
            newUnlockedExercise = category.levels.find(l => l.id === appState.unlockedLevels[categoryKey]);
        }

        // Save state to LocalStorage
        saveState();

        // Feedback notification
        if (leveledUp && newUnlockedExercise) {
            showLevelUpCelebration(category.name, newUnlockedExercise.name);
        } else {
            showFormFeedback(`Session logged: ${sets} sets × ${reps} reps on ${exercise.name}!`, true);
        }

        // Reset numerical inputs
        document.getElementById('form-sets').value = '';
        document.getElementById('form-reps').value = '';
        document.getElementById('form-notes').value = '';

        // Re-render other views in background
        renderDashboard();
        renderHistory();
    });
}

function showFormFeedback(msg, isSuccess) {
    const feedbackEl = document.getElementById('form-feedback');
    if (!feedbackEl) return;

    feedbackEl.textContent = msg;
    feedbackEl.className = `rounded-xl p-4 text-xs font-semibold text-center transition-all ${
        isSuccess 
            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' 
            : 'bg-rose-500/15 text-rose-300 border border-rose-500/30'
    }`;
    feedbackEl.style.display = 'block';

    setTimeout(() => {
        feedbackEl.style.display = 'none';
    }, 5000);
}

// ----------------------------------------------------------------------------
// 7. Workout History & Danger Zone Architecture
// ----------------------------------------------------------------------------
function renderHistory() {
    const historyList = document.getElementById('history-list');
    const filterSelect = document.getElementById('history-filter');
    if (!historyList) return;

    const filterVal = filterSelect ? filterSelect.value : 'all';
    historyList.innerHTML = '';

    const records = filterVal === 'all'
        ? appState.history
        : appState.history.filter(item => item.categoryKey === filterVal);

    if (records.length === 0) {
        historyList.innerHTML = `
            <div class="bg-cardBg border border-slate-800 rounded-2xl p-8 text-center text-slate-400">
                <span class="text-3xl block mb-2">📋</span>
                <p class="text-sm font-semibold text-slate-300">No workout sessions logged yet.</p>
                <p class="text-xs text-slate-500 mt-1">Complete a workout from the Log tab to record your training history.</p>
            </div>
        `;
        return;
    }

    records.forEach(item => {
        const row = document.createElement('article');
        row.className = `history-row ${item.targetMet ? 'pr-unlocked' : ''}`;

        row.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-lg">
                    ${item.categoryKey === 'push' ? '⚡' : item.categoryKey === 'pull' ? '🧗' : item.categoryKey === 'core' ? '🔥' : '🦵'}
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h4 class="text-sm font-bold text-white">${item.exerciseName}</h4>
                        ${item.targetMet ? '<span class="text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded">Milestone Met</span>' : ''}
                    </div>
                    <p class="text-xs text-slate-400 mt-0.5">
                        <span class="font-mono text-cyan-400 font-semibold">${item.date}</span> • ${item.categoryName} Progression
                        ${item.notes ? ` • <span class="italic text-slate-300">"${item.notes}"</span>` : ''}
                    </p>
                </div>
            </div>
            <div class="text-right shrink-0">
                <span class="font-mono text-sm sm:text-base font-extrabold text-white bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg">
                    ${item.sets} <span class="text-slate-500 text-xs">×</span> ${item.reps}
                </span>
            </div>
        `;

        historyList.appendChild(row);
    });
}

// ----------------------------------------------------------------------------
// 8. Custom Website-Native Modals (Wipe Data & Level-Up Celebrations)
// ----------------------------------------------------------------------------
function openWipeModal() {
    const modal = document.getElementById('wipe-modal');
    if (modal) modal.classList.remove('hidden');
}

function closeWipeModal() {
    const modal = document.getElementById('wipe-modal');
    if (modal) modal.classList.add('hidden');
}

function confirmWipeData() {
    // Reset state completely to default baseline
    appState.unlockedLevels = {
        push: 1,
        pull: 1,
        core: 1,
        legs: 1
    };
    appState.history = [];
    appState.activeCategory = 'push';
    saveState();

    closeWipeModal();
    renderDashboard();
    renderHistory();
    setupLogForm();
    showFormFeedback("All data and progress have been purged from LocalStorage.", true);
}

function showLevelUpCelebration(categoryName, newExerciseName) {
    const modal = document.getElementById('levelup-modal');
    const details = document.getElementById('levelup-details');
    if (details) {
        details.innerHTML = `Outstanding accomplishment! You surpassed your target requirement in <strong>${categoryName}</strong> and officially unlocked <strong>${newExerciseName}</strong> in your progression ladder!`;
    }
    if (modal) modal.classList.remove('hidden');
}

function closeLevelupModal() {
    const modal = document.getElementById('levelup-modal');
    if (modal) modal.classList.add('hidden');
    switchTab('dashboard'); // Guide the user back to the ladder to see the newly unlocked milestone
}

// ----------------------------------------------------------------------------
// 9. Application Bootstrap & Initialization
// ----------------------------------------------------------------------------
function init() {
    // Set dynamic footer year
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Load persisted state
    loadState();

    // Initialize event handlers
    initNavigationEvents();
    initFormSubmission();

    // Restore user's active tab or default to dashboard
    switchTab(appState.activeTab || 'dashboard');
}

// Global scope attachments for inline HTML event bindings
window.switchTab = switchTab;
window.switchCategory = switchCategory;
window.filterLibrary = filterLibrary;
window.handleFormCategoryChange = handleFormCategoryChange;
window.quickLogExercise = quickLogExercise;
window.openWipeModal = openWipeModal;
window.closeWipeModal = closeWipeModal;
window.confirmWipeData = confirmWipeData;
window.closeLevelupModal = closeLevelupModal;

// Bootstrap on DOM ready (handles cached scripts and deferred loading)
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
