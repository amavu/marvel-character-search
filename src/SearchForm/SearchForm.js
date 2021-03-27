import { useState } from "react";
import "./SearchForm.css";

export const SearchForm = ({ handleSubmit }) => {
  const [inputText, setInputText] = useState("");
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <form className="search-form" onSubmit={(e) => handleSubmit(inputText, e)}>
      <input value={inputText} onChange={(e) => handleTextChange(e)}></input>
      <button type="submit">Search</button>
    </form>
  );
};
