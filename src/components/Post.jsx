export default function Post({ title, body }) {
  return (
    <article style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <p style={{ marginBottom: 0 }}>{body}</p>
    </article>
  );
}
