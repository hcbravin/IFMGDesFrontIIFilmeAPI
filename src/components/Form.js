import { useState } from "react";

function Form({ handleSubmit }) {
  const [searchEntry, setSearchEntry] = useState("");

  function updateSearchInput(e) {
    setSearchEntry(e.target.value);
  }

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e, searchEntry);
      }}
      className="search-form"
    >
      <input
        type="text"
        name="search"
        placeholder="Search movie..."
        onChange={updateSearchInput}
        value={searchEntry}
      />
      <button
        type="submit"
        disabled={!searchEntry.trim()}
        className={`search-button ${searchEntry.trim() ? "active" : ""}`}
      >
        Buscar
      </button>
    </form>
  );
}

export default Form;