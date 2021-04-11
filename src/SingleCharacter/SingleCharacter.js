import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchSingleCharacterById } from "../marvel-api";

export const SingleCharacter = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState();
  const [dataIsFetched, setDataIsFetched] = useState(false);

  const fetchCharacter = async (id) => {
    const data = await fetchSingleCharacterById(id);
    setCharacter(data.data.results[0]);
    setDataIsFetched(true);
  };

  useEffect(() => {
    fetchCharacter(id);
  }, [id]);

  console.log(character);

  return dataIsFetched ? (
    <div className="character-portrait">
      <span>{character.name}</span>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="single character thumbnail"
      />
    </div>
  ) : (
    <div>Loading</div>
  );
};
