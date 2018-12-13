import { getBreeds, getBreedImage } from "../api/index";

export function GetBreedSuccess(breeds) {
  return {
    type: "GET_BREEDS_SUCCESS",
    payload: {
      breeds
    }
  };
}
export function GetImageSuccess(imageUrl) {
  return {
    type: "GET_IMAGE_SUCCESS",
    payload: {
      imageUrl
    }
  };
}
export function clearImage(imageUrl) {
  return { type: "CLEAR_IMAGE" };
}

export function getBreedsRequest() {
  return dispatch => {
    return getBreeds().then(breeds => dispatch(GetBreedSuccess(breeds)));
  };
}

export function getBreedImageRequest(name) {
  return dispatch => {
    return getBreedImage(name).then(imageUrl =>
      dispatch(GetImageSuccess(imageUrl))
    );
  };
}
