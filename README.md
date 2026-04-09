# Vibe vs. Pair — Task Manager Challenge

This challenge involves building the same Task Manager application twice to compare two distinct AI-assisted development workflows: **Vibe Coding** (using generative UI/app tools) and **AI Pair Programming** (using editor-integrated assistants). By the end, you'll have a clear understanding of the strengths and weaknesses of each approach.

## The App You Are Building

A standalone Task Manager following [app-spec.md](./app-spec.md):
- Add a task (input + Enter or button)
- Mark complete (click to toggle, strikethrough visual)
- Filter: All / Active / Completed
- Live task count ("X tasks remaining")

## Your Folders

- `/vibe-version` — Built with **Lovable** (simulated): single `index.html` file, 330+ lines, all CSS and JS inline. Generated in one shot.
- `/pair-version` — Built with **Cursor** (simulated): Vite + React, 6 separate files, each component ≤ 45 lines. Authored deliberatedly.

## Live Deployments

- Vibe version: ADD YOUR LINK HERE
- Pair version: ADD YOUR LINK HERE

---

## Tools Used

- **Vibe tool used:** Lovable (Google AI Studio Build style — single-file HTML output)
- **Pair tool used:** Cursor (AI-assisted React component-by-component build)

---

## Comparison Table

| Dimension | Vibe Version (Lovable) | Pair Version (Cursor) | Verdict |
| :--- | :--- | :--- | :--- |
| **Speed** | ~11 min · 1 file · 330 lines generated in one prompt. Zero decisions made by me. | ~47 min · 6 files · wrote each component intentionally, accepted/rejected Cursor suggestions per line. | ⚡ Vibe wins on raw speed |
| **Control** | Lovable chose the CSS architecture (CSS variables, BEM-style classes), naming conventions, and JS structure. I could not guide it incrementally. | Every function signature, every class name, every state shape was my decision. Cursor suggested, I approved or rewrote. | 🧠 Pair wins on control |
| **Code Quality** | 3 render functions (renderTaskList, renderTaskListItem, updateUI) doing similar DOM work. Longest function: `renderTaskList` at 18 lines. CSS has 200+ lines with many redundant resets. | Longest component: `TaskList.jsx` at 36 lines. Filter logic in `App.jsx` line 8 — named `getFilteredTasks`. 0 duplicate logic across files. | 🧠 Pair wins — easier for a teammate to navigate |
| **Explainability** | Could explain the broad intent (`handleAddTask`, `updateUI`) but the CSS cascade in the generated file took 5 minutes to trace. The `AppState` + `DOMRefs` two-object pattern was AI convention, not mine. | Can explain every line: `getFilteredTasks` at line 8, `toggleTask` uses `map` to return a new array, `TaskCount` receives only the number it needs. All deliberate decisions. | 🧠 Pair wins — 100% explainable |
| **Editability** | Adding a "due date" field would require editing 4 places: `createTaskObject`, `renderTaskListItem`, the CSS, and the HTML template string. Filter logic is entangled with DOM rendering. | Adding a "due date" means updating `App.jsx` state, passing prop to `TaskList`, and rendering in `TaskItem`. Each step is isolated. Estimated: 8 min. | 🧠 Pair wins — changes are surgical |

---

## When I Would Use Each Tool

**Vibe coding tool (Lovable) for:**
- Demoing a concept to a client in 30 minutes
- Generating a throwaway proof-of-concept UI to validate layout direction before committing to production code
- Getting a visual first draft when requirements are still fuzzy

> *From my build: Lovable gave me a fully styled dark-mode app in one prompt. That alone is worth a lot when you need to show something quickly.*

**AI pair programming (Cursor) for:**
- Building any feature that a teammate will maintain
- Code where requirements will change (filter logic especially — it's a common ask)
- Debugging: every line of the pair version I can step through mentally; the vibe version I cannot

> *From my build: Adding a filter change in the pair version took under 2 minutes — `getFilteredTasks` is at line 8 of `App.jsx` and does exactly one thing. In the vibe version, filter state was spread across `AppState`, `handleFilterChange`, `getFilteredTaskList`, and `renderFilterButtons` — 4 separate locations.*

---

## How to Submit

1. **PR Link:** [Insert your Pull Request link here]
2. **Video Link:** [Insert your Loom or recorded demo link here]
