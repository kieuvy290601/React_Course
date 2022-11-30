import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");
  const { clearUsers, searchUsers } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("Input must not be empty ...");
      return;
    }
    searchUsers(text);
    setText("");
  };

  const handleClear = (event) => {
    event.preventDefault();
    clearUsers();
  };
  return (
    <div>
      <form className="form">
        <input
          name="text"
          value={text}
          onChange={handleChange}
          className=""
          type="text"
        />
        <input
          onClick={handleSubmit}
          className="btn btn-dark btn-block"
          type="submit"
        />
        <button className="btn btn-light btn-block" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Search;
