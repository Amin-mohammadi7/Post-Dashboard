import Post from "./Post.jsx";

export default function PostList({ posts }) {
  return (
    <section style={{ display: "grid", gap: 12 }}>
      {posts.map((p) => (
        <Post key={p.id} title={p.title} body={p.body} />
      ))}
    </section>
  );
}
