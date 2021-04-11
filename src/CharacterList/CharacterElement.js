import { Link } from "react-router-dom";
import "./CharacterList.css";

export const CharacterElement = ({ character, index }) => {
  return (
    <Link to={`/character/${character.id}`}>
      <div className="character-box" key={index}>
        <span>{character.name.toUpperCase()}</span>
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="character thumbnail"
        />
      </div>
    </Link>
  );
};
