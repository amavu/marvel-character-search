import env from "react-dotenv";
import axios from "axios";

export const fetchMarvelCharacters = async (nameStartsWith) => {
  return await axios
    .get(
      `https://gateway.marvel.com/v1/public/characters?&nameStartsWith=${nameStartsWith}&limit=100&apikey=${env.PUBLIC_KEY}`
    )
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
