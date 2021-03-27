import { useState } from "react";
import "./App.css";
import { fetchMarvelCharacters } from "./marvel-api";
import { CharacterList } from "./CharacterList/CharacterList";
import { SearchForm } from "./SearchForm/SearchForm";
import { Portrait } from "./Portrait/Portrait";

const App = () => {
  const [characterList, setCharacterList] = useState([]);

  const fetchMarvelCharactersApi = async (searchText) => {
    const data = await fetchMarvelCharacters(searchText);
    setCharacterList(data.data.results);
  };

  const handleSubmit = (inputText, e) => {
    e.preventDefault();
    fetchMarvelCharactersApi(inputText);
  };

  console.log(characterList);
  return (
    <div>
      <header className="marvel-header">MARVEL CHARACTER SEARCH</header>
      <div className="portrait-and-search-container">
        <Portrait />
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      <CharacterList characterList={characterList} />
    </div>
  );
};

export default App;
