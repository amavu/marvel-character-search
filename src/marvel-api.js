import axios from "axios";

export const fetchMarvelCharacters = async (nameStartsWith) => {
  return await axios
    .get(
      `https://gateway.marvel.com/v1/public/characters?&nameStartsWith=${nameStartsWith}&limit=100&apikey=${process.env.REACT_APP_PUBLIC_KEY}`
    )
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const fetchSingleCharacterById = async (id) => {
  return await axios
    .get(
      `https://gateway.marvel.com/v1/public/characters/${id}?apikey=${process.env.REACT_APP_PUBLIC_KEY}`
    )
    .then(({ data }) => {
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
