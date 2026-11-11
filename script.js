/**
 * ============================================================================
 * Apex Calisthenics Architecture - Core Application Logic (script.js)
 * Enterprise Single Page Application (SPA) Engine
 * Strict Syllabus Compliance: HTML Tables, Audio Multimedia, SVG Graphics
 * ============================================================================
 */

// ----------------------------------------------------------------------------
// 1. Exercise Database (4 Disciplines × 5 Levels = 20 Milestones)
// Note: All text emojis removed; professional SVG graphics used throughout.
// ----------------------------------------------------------------------------
const EXERCISE_DATABASE = {
    push: {
        id: "push",
        name: "Push Progression",
        shortName: "Push",
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
        name: "Pull Progression",
        shortName: "Pull",
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
        name: "Core Progression",
        shortName: "Core",
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
        name: "Legs Progression",
        shortName: "Legs",
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

// ----------------------------------------------------------------------------
// 2. SVG Graphics Generator (Clean Heroicon Vector Icons)
// ----------------------------------------------------------------------------
function getSvgIcon(iconName, customClass = "w-4 h-4") {
    switch (iconName) {
        case "check":
            return `<svg class="${customClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
        case "lock":
            return `<svg class="${customClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>`;
        case "arrow-right":
            return `<svg class="${customClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>`;
        case "arrow-left":
            return `<svg class="${customClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>`;
        case "bolt":
            return `<svg class="${customClass}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`;
        default:
            return '';
    }
}

// ----------------------------------------------------------------------------
// 3. Audio Notification System (Web Audio API + HTML5 Audio fallback)
// ----------------------------------------------------------------------------
function playSuccessSound() {
    // 1. Attempt HTML5 Audio element
    const audioEl = document.getElementById('success-audio');
    let played = false;

    if (audioEl) {
        audioEl.currentTime = 0;
        const playPromise = audioEl.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                played = true;
            }).catch(() => {
                // If browser autoplay policy restricted, synthesize via Web Audio API
                synthesizeChime();
            });
        }
    }

    if (!played) {
        synthesizeChime();
    }
}

// Web Audio API backup chime
function synthesizeChime() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();

        // High crisp pleasant chime
        const now = ctx.currentTime;
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(587.33, now); // D5
        osc1.frequency.exponentialRampToValueAtTime(880, now + 0.12); // A5

        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(880, now);
        osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.12); // D6

        gainNode.gain.setValueAtTime(0.2, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

        osc1.connect(gainNode);
        osc2.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + 0.35);
        osc2.stop(now + 0.35);
    } catch (e) {
        // Audio not available or silenced
    }
}

function testSound() {
    playSuccessSound();
}

// ----------------------------------------------------------------------------
// 4. Application State & Storage Management (Web Storage API)
// ----------------------------------------------------------------------------
const STORAGE_KEY = 'apex_calisthenics_v3_state';

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

function getLocalDateString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
                appState.activeTab = parsed.activeTab || 'dashboard';
                appState.activeCategory = parsed.activeCategory || 'push';
                const ul = parsed.unlockedLevels || {};
                appState.unlockedLevels = {
                    push: Math.max(1, Math.min(5, parseInt(ul.push, 10) || 1)),
                    pull: Math.max(1, Math.min(5, parseInt(ul.pull, 10) || 1)),
                    core: Math.max(1, Math.min(5, parseInt(ul.core, 10) || 1)),
                    legs: Math.max(1, Math.min(5, parseInt(ul.legs, 10) || 1))
                };
                appState.history = Array.isArray(parsed.history) ? parsed.history : [];
            }
        }
    } catch (err) {
        console.warn('LocalStorage unavailable. Operating in memory mode.', err);
    }
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
    } catch (err) {
        console.warn('Failed to save state to LocalStorage.', err);
    }
}

function calculateOverallTier() {
    const totalUnlocked = Object.values(appState.unlockedLevels).reduce((acc, lvl) => acc + lvl, 0);
    if (totalUnlocked <= 4) return "Novice Athlete";
    if (totalUnlocked <= 8) return "Apprentice Athlete";
    if (totalUnlocked <= 12) return "Adept Athlete";
    if (totalUnlocked <= 16) return "Elite Athlete";
    if (totalUnlocked < 20) return "Master Practitioner";
    return "Grandmaster Athlete";
}

// ----------------------------------------------------------------------------
// 5. Single Page Application (SPA) Tab Switching Routing
// ----------------------------------------------------------------------------
const TAB_TITLES = {
    dashboard: "Dashboard & Progression",
    library: "Movement Exercise Library",
    log: "Log Workout Session",
    history: "Recent Workout History",
    settings: "System Settings & Data Control"
};

function toggleSidebar(forceState) {
    const sidebar = document.getElementById('sidebar-nav');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (!sidebar) return;

    const isOpen = typeof forceState === 'boolean' ? forceState : !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', isOpen);
    if (backdrop) {
        backdrop.classList.toggle('hidden', !isOpen);
    }
}

function switchTab(tabId) {
    if (!tabId || !document.getElementById(`section-${tabId}`)) {
        tabId = 'dashboard';
    }

    appState.activeTab = tabId;
    saveState();

    // Close mobile drawer if opened
    toggleSidebar(false);

    // 1. Update Section Visibility
    document.querySelectorAll('.tab-pane').forEach(section => {
        section.classList.remove('active');
    });
    const targetSection = document.getElementById(`section-${tabId}`);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    // 2. Update Desktop Sidebar Active States
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // 3. Update Mobile Bottom Nav Active States
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });

    // 4. Update Header Title
    const titleEl = document.getElementById('top-bar-title');
    if (titleEl && TAB_TITLES[tabId]) {
        titleEl.textContent = TAB_TITLES[tabId];
    }

    // 5. Trigger view-specific rendering
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

function initNavigationEvents() {
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
        btn.addEventListener('click', () => switchTab(btn.dataset.tab));
    });
}

// ----------------------------------------------------------------------------
// 6. Dashboard & Progression Ladder Rendering
// ----------------------------------------------------------------------------
function switchCategory(catKey) {
    if (!EXERCISE_DATABASE[catKey]) {
        catKey = 'push';
    }
    appState.activeCategory = catKey;
    saveState();

    document.querySelectorAll('.cat-pill').forEach(pill => {
        const isCurrent = (pill.dataset.category || '').toLowerCase() === catKey;
        pill.classList.toggle('active', isCurrent);
    });

    renderDashboard();
}

function renderDashboard() {
    const category = EXERCISE_DATABASE[appState.activeCategory] || EXERCISE_DATABASE.push;

    // 1. Stats Overview
    const totalWorkouts = appState.history.length;
    const totalReps = appState.history.reduce((sum, item) => sum + (item.sets * item.reps), 0);
    const totalUnlockedAll = Object.values(appState.unlockedLevels).reduce((acc, lvl) => acc + lvl, 0);
    const overallTier = calculateOverallTier();

    const statWorkoutsEl = document.getElementById('stat-total-workouts');
    const statRepsEl = document.getElementById('stat-total-reps');
    const statUnlockedEl = document.getElementById('stat-unlocked-count');
    const statTierEl = document.getElementById('stat-overall-rank');
    const overallBadgeEl = document.getElementById('overall-rank-badge');

    if (statWorkoutsEl) statWorkoutsEl.textContent = totalWorkouts;
    if (statRepsEl) statRepsEl.textContent = totalReps.toLocaleString();
    if (statUnlockedEl) statUnlockedEl.textContent = totalUnlockedAll;
    if (statTierEl) statTierEl.textContent = overallTier;
    if (overallBadgeEl) overallBadgeEl.textContent = overallTier;

    // 2. Banner
    const currentUnlockedLvl = appState.unlockedLevels[category.id] || 1;
    const bannerTitle = document.getElementById('cat-banner-title');
    const bannerBadge = document.getElementById('cat-banner-badge');
    const bannerDesc = document.getElementById('cat-banner-desc');
    const progressBar = document.getElementById('cat-progress-bar');
    const progressText = document.getElementById('cat-progress-text');

    if (bannerTitle) bannerTitle.textContent = category.name;
    if (bannerBadge) bannerBadge.textContent = `Tier ${currentUnlockedLvl} Unlocked`;
    if (bannerDesc) bannerDesc.textContent = category.description;

    const progressPercent = Math.round((currentUnlockedLvl / category.levels.length) * 100);
    if (progressBar) progressBar.style.width = `${progressPercent}%`;
    if (progressText) progressText.textContent = `${currentUnlockedLvl} of 5 Unlocked (${progressPercent}%)`;

    // 3. Render Ladder Cards
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
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-400 bg-[#0b0f19] border border-[#1f293d] px-2 py-0.5 rounded">
                            ${level.difficulty}
                        </span>
                        <span class="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                            ${getSvgIcon('check', 'w-3.5 h-3.5')}
                            <span>Unlocked</span>
                        </span>
                    </div>
                    <h4 class="text-sm font-bold text-white mb-0.5">${level.name}</h4>
                    <p class="text-[11px] text-slate-400 mb-3 font-mono">${level.rank} Level</p>
                    <p class="text-xs text-slate-300 leading-relaxed mb-4">${level.cues}</p>
                </div>
                <div class="border-t border-[#1f293d] pt-3 mt-2">
                    <button type="button" onclick="quickLogExercise('${category.id}', ${level.id})" class="w-full bg-[#151e32] hover:bg-blue-600 hover:text-white text-slate-200 font-semibold text-xs py-2 px-3 rounded-lg border border-[#1f293d] transition-colors flex items-center justify-center gap-1.5">
                        <span>Log Session</span>
                        ${getSvgIcon('arrow-right', 'w-3 h-3')}
                    </button>
                </div>
            `;
        } else {
            const prevLevel = category.levels.find(l => l.id === level.id - 1);
            article.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 bg-[#0b0f19] border border-[#1f293d] px-2 py-0.5 rounded">
                            ${level.difficulty}
                        </span>
                        <span class="text-xs font-semibold text-slate-500 flex items-center gap-1">
                            ${getSvgIcon('lock', 'w-3.5 h-3.5')}
                            <span>Locked</span>
                        </span>
                    </div>
                    <h4 class="text-sm font-bold text-slate-300 mb-0.5">${level.name}</h4>
                    <p class="text-[11px] text-slate-500 mb-3 font-mono">${level.rank} Level</p>
                    <div class="bg-[#0b0f19] border border-[#1f293d] rounded-lg p-2.5 text-xs text-slate-400 mb-3">
                        <span class="text-blue-400 font-semibold block mb-0.5">Unlock Target:</span>
                        Log <strong class="text-white">${prevLevel ? prevLevel.targetReq : 15} reps</strong> on ${prevLevel ? prevLevel.name : 'previous level'}.
                    </div>
                </div>
                <div class="border-t border-[#1f293d] pt-3 mt-2">
                    <button type="button" disabled class="w-full bg-[#0b0f19] text-slate-500 font-semibold text-xs py-2 px-3 rounded-lg border border-[#1f293d] flex items-center justify-center gap-1.5 cursor-not-allowed opacity-60" title="Tier Locked: Complete previous level target to unlock">
                        ${getSvgIcon('lock', 'w-3.5 h-3.5')}
                        <span>Tier Locked</span>
                    </button>
                </div>
            `;
        }

        ladderGrid.appendChild(article);
    });
}

// ----------------------------------------------------------------------------
// 7. Exercise Library (Enforces Lock States Across All Disciplines)
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
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#151e32] text-blue-400 border border-[#1f293d]">
                            ${category.shortName} • ${level.difficulty}
                        </span>
                        <span class="text-xs flex items-center gap-1 ${isUnlocked ? 'text-emerald-400 font-semibold' : 'text-slate-500 font-mono'}">
                            ${isUnlocked ? getSvgIcon('check', 'w-3.5 h-3.5') + ' Unlocked' : getSvgIcon('lock', 'w-3.5 h-3.5') + ' Locked'}
                        </span>
                    </div>

                    <h4 class="text-sm font-bold text-white mb-1">
                        ${level.name}
                    </h4>

                    <p class="text-xs text-slate-400 mb-2">
                        <strong class="text-slate-300">Target Muscles:</strong> ${level.muscles}
                    </p>

                    <p class="text-xs text-slate-300 leading-relaxed mb-3 bg-[#0b0f19] border border-[#1f293d] p-2.5 rounded-lg">
                        ${level.cues}
                    </p>
                </div>

                <div class="border-t border-[#1f293d] pt-3 flex items-center justify-between">
                    <span class="text-[11px] font-mono text-slate-400">Target: <strong class="text-blue-400">${level.targetReq} reps</strong></span>
                    ${isUnlocked ? `
                        <button type="button" onclick="quickLogExercise('${category.id}', ${level.id})" class="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors">
                            <span>Log Workout</span>
                            ${getSvgIcon('arrow-right', 'w-3 h-3')}
                        </button>
                    ` : `
                        <span class="text-xs font-mono text-slate-500 flex items-center gap-1 bg-[#0b0f19] px-2.5 py-1 rounded border border-[#1f293d] opacity-75">
                            ${getSvgIcon('lock', 'w-3.5 h-3.5')}
                            <span>Locked</span>
                        </span>
                    `}
                </div>
            `;

            libraryGrid.appendChild(article);
        });
    });
}

// ----------------------------------------------------------------------------
// 8. Log Workout Form Architecture (Strict HTML5 Validation & Lock Guard)
// ----------------------------------------------------------------------------
function setupLogForm() {
    const categorySelect = document.getElementById('form-category');
    const dateInput = document.getElementById('form-date');

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

function updateExerciseDropdown(explicitLevelId = null) {
    const categorySelect = document.getElementById('form-category');
    const exerciseSelect = document.getElementById('form-exercise');
    if (!categorySelect || !exerciseSelect) return;

    const catKey = categorySelect.value;
    const category = EXERCISE_DATABASE[catKey];
    if (!category) return;

    const currentUnlockedLvl = appState.unlockedLevels[catKey] || 1;
    exerciseSelect.innerHTML = '';

    // Strictly enforce locked vs unlocked options in the select element
    category.levels.forEach(level => {
        const option = document.createElement('option');
        option.value = level.id;
        const isUnlocked = level.id <= currentUnlockedLvl;

        if (isUnlocked) {
            option.disabled = false;
            option.textContent = `${level.id}. ${level.name} (Unlocked • Target ${level.targetReq} reps)`;
        } else {
            option.disabled = true;
            option.textContent = `${level.id}. ${level.name} (Locked - Complete Tier ${level.id - 1} First)`;
        }

        exerciseSelect.appendChild(option);
    });

    // Ensure selected value is strictly an unlocked level
    if (explicitLevelId !== null && explicitLevelId <= currentUnlockedLvl) {
        exerciseSelect.value = explicitLevelId;
    } else {
        exerciseSelect.value = currentUnlockedLvl;
    }
}

/**
 * Quick Log Bridge from Exercise Library or Ladder:
 * Only allows logging unlocked exercises; blocks and alerts if locked.
 */
function quickLogExercise(catKey, levelId) {
    const currentUnlockedLvl = appState.unlockedLevels[catKey] || 1;

    // Strict Lock Enforcement: Prevent logging locked exercises
    if (levelId > currentUnlockedLvl) {
        const category = EXERCISE_DATABASE[catKey];
        const lockedEx = category ? category.levels.find(l => l.id === levelId) : null;
        const currentEx = category ? category.levels.find(l => l.id === currentUnlockedLvl) : null;

        switchTab('log');
        showFormFeedback(`Access Denied: "${lockedEx ? lockedEx.name : 'Selected Exercise'}" is locked. Complete ${currentEx ? currentEx.targetReq : 15} reps on Tier ${currentUnlockedLvl} (${currentEx ? currentEx.name : ''}) first.`, false);
        updateExerciseDropdown(currentUnlockedLvl);
        return;
    }

    appState.activeCategory = catKey;
    switchTab('log');

    const categorySelect = document.getElementById('form-category');
    const exerciseSelect = document.getElementById('form-exercise');
    const setsInput = document.getElementById('form-sets');

    if (categorySelect) {
        categorySelect.value = catKey;
    }
    updateExerciseDropdown(levelId);

    if (exerciseSelect) {
        exerciseSelect.value = levelId;
    }
    if (setsInput) {
        setsInput.focus();
    }
}

function initFormSubmission() {
    const form = document.getElementById('workout-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
        event.preventDefault();

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

        // Strict Progression Enforcement: Cannot log a locked exercise
        if (exerciseId > currentLvl) {
            const currentEx = category.levels.find(l => l.id === currentLvl);
            showFormFeedback(`Validation Error: "${exercise.name}" is locked. Complete ${currentEx ? currentEx.targetReq : 15} reps on Tier ${currentLvl} (${currentEx ? currentEx.name : ''}) to unlock it.`, false);
            return;
        }

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
            totalVolume: sets * reps,
            date,
            notes,
            targetMet: isTargetMet
        };

        appState.history.unshift(record);

        // Progression Engine: Level up only when target reps met on the current active unlocked tier
        let leveledUp = false;
        let newUnlockedExercise = null;

        if (isTargetMet && exerciseId === currentLvl && currentLvl < category.levels.length) {
            appState.unlockedLevels[categoryKey] = currentLvl + 1;
            leveledUp = true;
            newUnlockedExercise = category.levels.find(l => l.id === appState.unlockedLevels[categoryKey]);
        }

        // Save state to LocalStorage
        saveState();

        // Audio trigger requirement
        playSuccessSound();

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

        // Refresh dropdown to reflect any newly unlocked exercises
        updateExerciseDropdown();

        // Re-render other views in background
        renderDashboard();
        renderHistory();
    });
}

function showFormFeedback(msg, isSuccess) {
    const feedbackEl = document.getElementById('form-feedback');
    if (!feedbackEl) return;

    feedbackEl.textContent = msg;
    feedbackEl.className = `rounded-lg p-3 text-xs font-semibold text-center transition-all ${
        isSuccess 
            ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30' 
            : 'bg-red-950/60 text-red-300 border border-red-500/30'
    }`;
    feedbackEl.style.display = 'block';

    setTimeout(() => {
        feedbackEl.style.display = 'none';
    }, 5000);
}

// ----------------------------------------------------------------------------
// 9. Semantic HTML Table Architecture for Workout History
// ----------------------------------------------------------------------------
function renderHistory() {
    const tableBody = document.getElementById('history-table-body');
    const emptyState = document.getElementById('history-empty-state');
    const table = document.getElementById('history-table');
    const filterSelect = document.getElementById('history-filter');
    if (!tableBody) return;

    const filterVal = filterSelect ? filterSelect.value : 'all';
    tableBody.innerHTML = '';

    const records = filterVal === 'all'
        ? appState.history
        : appState.history.filter(item => item.categoryKey === filterVal);

    if (records.length === 0) {
        if (table) table.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
        return;
    }

    if (table) table.classList.remove('hidden');
    if (emptyState) emptyState.classList.add('hidden');

    records.forEach(item => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td class="font-mono text-slate-400 whitespace-nowrap">${item.date}</td>
            <td class="font-semibold text-white">${item.categoryName}</td>
            <td class="text-slate-200 font-medium">${item.exerciseName}</td>
            <td class="text-center font-mono font-bold text-white">${item.sets}</td>
            <td class="text-center font-mono font-bold text-blue-400">${item.reps}</td>
            <td class="text-center font-mono text-slate-300">${item.totalVolume || item.sets * item.reps}</td>
            <td>
                ${item.targetMet 
                    ? `<span class="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded">
                         ${getSvgIcon('check', 'w-3 h-3')} Target Met
                       </span>`
                    : `<span class="inline-flex items-center text-[10px] font-mono text-slate-400 bg-[#151e32] border border-[#1f293d] px-2 py-0.5 rounded">
                         Logged
                       </span>`
                }
            </td>
            <td class="text-slate-400 italic max-w-xs truncate">${item.notes ? item.notes : '—'}</td>
        `;

        tableBody.appendChild(row);
    });
}

function focusFirstWorkout() {
    switchTab('log');
    const setsInput = document.getElementById('form-sets');
    if (setsInput) setsInput.focus();
}

// ----------------------------------------------------------------------------
// 10. Native Modals (Wipe All Data & Level Up Celebrations)
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
    showFormFeedback("All workout data and milestones have been reset.", true);
}

function showLevelUpCelebration(categoryName, newExerciseName) {
    const modal = document.getElementById('levelup-modal');
    const details = document.getElementById('levelup-details');
    if (details) {
        details.innerHTML = `You met the target requirement in <strong>${categoryName}</strong> and officially unlocked <strong>${newExerciseName}</strong> in your progression ladder.`;
    }
    if (modal) modal.classList.remove('hidden');
}

function closeLevelupModal() {
    const modal = document.getElementById('levelup-modal');
    if (modal) modal.classList.add('hidden');
    switchTab('dashboard');
}

// ----------------------------------------------------------------------------
// 11. Application Bootstrap
// ----------------------------------------------------------------------------
function init() {
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    loadState();
    initNavigationEvents();
    initFormSubmission();

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
window.toggleSidebar = toggleSidebar;
window.focusFirstWorkout = focusFirstWorkout;
window.testSound = testSound;

// Bootstrap on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
