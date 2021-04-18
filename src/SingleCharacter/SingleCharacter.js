import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { fetchSingleCharacterById } from "../marvel-api";
import "./SingleCharacter.css";

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
    <div className="single-character-portrait">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt="single character thumbnail"
      />
      <span>{character.name}</span>
    </div>
  ) : (
    <div>Loading</div>
  );
};
