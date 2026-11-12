# Apex Calisthenics — Progression Ladder Platform

> An enterprise-grade, single-page web application (SPA) designed to track, log, and advance through calisthenics skill progressions across four foundational movement disciplines. Built with strictly native HTML5, Tailwind CSS, and Vanilla JavaScript.

**Course**: CSE326 — Internet Programming (Continuous Assessment 2)  
**Institution**: Lovely Professional University (LPU)  
**Developer**: Johan Sam Reji  
**Live Demo**: [GitHub Pages](https://johansamreji.github.io/apexcalisthenics/)

---

## Overview

Apex Calisthenics transforms standard bodyweight fitness into a gamified, milestone-driven progression ladder. Athletes advance through 20 structured movements across Push, Pull, Core, and Legs by hitting designated repetition targets on active tiers before unlocking subsequent milestones.

---

## Key Architectural Features

### 1. Multi-Tab Single Page Application (SPA) Engine
- Seamless Vanilla JavaScript client-side routing switching between 5 semantic `<section>` views without full page reloads:
  - **Dashboard**: Interactive progression ladder cards, completion bars, and overall athlete tier rankings.
  - **Exercise Library**: Searchable and filterable reference catalog of all 20 movements with execution cues and target muscle groups.
  - **Log Workout**: Structured workout session submission form with strict input validation.
  - **Workout History**: Chronological training log rendered through semantic HTML table structures.
  - **Settings**: LocalStorage management, audio chime testing, and custom modal confirmation for factory resets.

### 2. Multi-Discipline Movement Database (20 Milestones)
- **Push Progression**: Wall Push-Ups &rarr; Incline Bench &rarr; Standard Floor &rarr; Diamond &rarr; Tuck Planche Push-Ups
- **Pull Progression**: Bodyweight Incline Rows &rarr; Australian Rows &rarr; Negative Pull-Ups &rarr; Strict Dead-Hang Pull-Ups &rarr; Bar Muscle-Up
- **Core Progression**: Floor Knee Tucks &rarr; Hollow Body Hold &rarr; Hanging Knee Raises &rarr; Hanging Straight Leg Raises &rarr; L-Sit Hold
- **Legs Progression**: Assisted Chair Squats &rarr; Deep Bodyweight Squats &rarr; Bulgarian Split Squats &rarr; Alternating Archer Squats &rarr; Full Pistol Squat

### 3. Strict Progression & Lock Enforcement
- Locked movement tiers are disabled across the interface (dropdowns, ladder cards, and quick-log buttons).
- Form submission handlers validate user milestone records client-side, strictly preventing locked tiers from being logged or skipping ladder levels.
- Reaching or surpassing milestone target repetitions on the active unlocked tier triggers an animated celebration modal and unlocks the next level.

### 4. Semantic HTML5 Data Representation
- **Workout History Table**: Built strictly with semantic `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` elements.
- Dynamic category filtering and an intuitive empty-state handler with a one-click shortcut to log initial workouts.

### 5. Web Storage API Persistence (`localStorage`)
- Automatic state serialization saving unlocked tier levels across all 4 categories, chronological workout logs, and active navigation preferences.
- Resilient recovery on page reloads with sanitized boundary checks to prevent corrupted data.

### 6. Multimedia & Modern CSS Architecture
- **Zero Text Emojis**: Clean, professional Heroicon-style vector SVGs used across all buttons, status indicators, and badges.
- **Audio Feedback**: Dual-path audio chime triggered on successful session logs and level-up milestones (HTML5 `<audio>` element with Web Audio API synthesizer fallback).
- **Advanced CSS**:
  - `@keyframes subtle-card-pulse`: Ambient glowing highlight on active tier cards.
  - `::after` animated underline micro-interactions on navigation tabs.
  - SaaS Typography Stack: Google Fonts **Inter** (weights 400, 500, 600, 700) with `font-size-adjust: from-font` for visually stable system font degradation.
  - Tabular numbers (`font-feature-settings: "tnum" 1`) for aligned numeric statistics and tables.

---

## Project Structure

```text
lpu-cse326-ca2/
├── index.html       # Semantic HTML5 layout, modals, SVG icons, and audio element
├── style.css        # Custom design system, keyframes, transitions, and typography
├── script.js        # Core SPA engine, progression rules, storage API, and audio synthesis
└── README.md        # Project documentation and architectural overview
```

---

## Getting Started

No build step, package manager, or server environment is required:

1. Clone or download this repository:
   ```bash
   git clone https://github.com/Johansamreji/lpu-cse326-ca2.git
   ```
2. Open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).

---

## Academic Compliance & Standards

- **HTML5**: Semantic tags throughout (`<nav>`, `<header>`, `<main>`, `<section>`, `<article>`, `<table>`, `<footer>`).
- **Tailwind CSS**: Utility-first responsive design via official CDN.
- **JavaScript**: 100% Vanilla JS (Zero external frameworks, libraries, or npm dependencies).
- **Accessibility**: ARIA labels, semantic roles, high contrast dark theme, and keyboard navigable controls.

---

## License

Developed by **Johan Sam Reji** for academic submission in **CSE326 (Internet Programming)** at Lovely Professional University.

