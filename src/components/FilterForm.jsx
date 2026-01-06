export default function FilterForm({ filterText, onFilterTextChange }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{ marginBottom: 16 }}
    >
      <label style={{ display: "block", marginBottom: 6 }}>
        Filter by title:
      </label>
      <input
        type="text"
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
        placeholder="e.g. sunt"
        style={{ padding: 8, width: "100%", maxWidth: 420 }}
      />
    </form>
  );
}
