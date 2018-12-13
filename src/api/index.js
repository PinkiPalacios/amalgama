import axios from "axios";

export const getBreeds = async () => {
  const {
    data: { message }
  } = await axios.get("https://dog.ceo/api/breeds/list");

  return message;
};
export const getBreedImage = async name => {
  const {
    data: { message }
  } = await axios.get(`https://dog.ceo/api/breed/${name}/images/random`);
  return message;
};
