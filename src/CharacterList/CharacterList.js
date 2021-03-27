import { CharacterElement } from "./CharacterElement";
import "./CharacterList.css";

export const CharacterList = ({ characterList }) => {
  return (
    <div className="character-grid">
      {characterList.map((character, index) => {
        return <CharacterElement character={character} index={index} />;
      })}
    </div>
  );
};
