import { useState } from "react";

function Search({ getSearchTerm }) {
  const [input, setInput] = useState("");
  function handleInput(input) {
    setInput(input);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getSearchTerm(input);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      getSearchTerm(input);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => {
            handleInput(event.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
