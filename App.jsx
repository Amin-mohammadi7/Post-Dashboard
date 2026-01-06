import { useEffect, useMemo, useReducer, useState } from "react";
import { fetchPosts } from "./api/postsApi.js";
import { initialPostsState, postsReducer } from "./reducer/postsReducer.js";
import PostList from "./components/PostList.jsx";
import FilterForm from "./components/FilterForm.jsx";

export default function App() {
  const [state, dispatch] = useReducer(postsReducer, initialPostsState);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      dispatch({ type: "FETCH_START" });

      try {
        const posts = await fetchPosts(controller.signal);
        dispatch({ type: "FETCH_SUCCESS", payload: posts });
      } catch (err) {
        if (err.name === "AbortError") return;

        dispatch({
          type: "FETCH_ERROR",
          payload: err.message || "Something went wrong while fetching posts.",
        });
      }
    }

    load();

    return () => {
      controller.abort();
    };
  }, []);

    const filteredPosts = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    if (!q) return state.posts;

    return state.posts.filter((p) => p.title.toLowerCase().includes(q));
  }, [state.posts, filterText]);

  const showEmpty =
    !state.loading && !state.error && filteredPosts.length === 0;

  return (
    <main style={{ padding: 20, fontFamily: "system-ui, Arial" }}>
      <h1 style={{ marginTop: 0 }}>Post Dashboard</h1>

      <FilterForm
        filterText={filterText}
        onFilterTextChange={setFilterText}
      />

      {state.loading && <p>Loading posts...</p>}

      {state.error && (
        <div style={{ padding: 12, border: "1px solid #f2b8b8", borderRadius: 8 }}>
          <p style={{ margin: 0 }}>
            <strong>Error:</strong> {state.error}
          </p>
        </div>
      )}

      {showEmpty && <p>No posts found.</p>}

      {!state.loading && !state.error && filteredPosts.length > 0 && (
        <PostList posts={filteredPosts} />
      )}
    </main>
  );
}
