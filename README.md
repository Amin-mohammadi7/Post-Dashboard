Post Dashboard

Overview
This project is a React Post Dashboard that:
- Fetches posts asynchronously from JSONPlaceholder
- Manages async states (loading, error, success) using `useReducer`
- Supports filtering posts by title using a controlled input
- Handles loading, error, and empty states via conditional rendering

File Organization
- `src/api/postsApi.js`: Data fetching only (Fetch API). No UI/React code.
- `src/reducer/postsReducer.js`: Pure reducer and initial state for async transitions.
- `src/components/Post.jsx`: Presentational component for a single post.
- `src/components/PostList.jsx`: Renders a list of posts using `.map()`.
- `src/components/FilterForm.jsx`: Controlled form for filtering by title.
- `src/App.jsx`: Orchestrates state, effect, filtering (derived state), and UI states.

Key React Concepts Used
- `useEffect` for side effects (fetch on mount)
- `useReducer` for async state transitions
- `useState` for controlled filter input
- Derived state for filtering (no filtered posts stored in state)
- Cleanup with `AbortController` to avoid memory leaks

Challenges
- Ensuring fetch cleanup to prevent setting state after unmount
- Keeping reducer pure and avoiding side effects inside it
- Implementing filtering as derived state (not storing filtered results)

Running the project
```bash
npm install
npm run dev
