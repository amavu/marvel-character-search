import "./CharacterList.css";

export const CharacterElement = ({ character, index }) => {
  return (
    <div className="character-box" key={index}>
      <span>{character.name.toUpperCase()}</span>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="character thumbnail"
      />
    </div>
  );
};
