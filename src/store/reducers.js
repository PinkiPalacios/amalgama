const defaultStartState = {
  breeds: [],
  imageUrl: ""
};

export default function State(state = defaultStartState, action) {
  switch (action.type) {
    case "GET_BREEDS_SUCCESS":
      return Object.assign({}, state, {
        breeds: action.payload.breeds
      });
    case "GET_IMAGE_SUCCESS":
      return Object.assign({}, state, {
        imageUrl: action.payload.imageUrl
      });
    case "CLEAR_IMAGE":
      return Object.assign({}, state, {
        imageUrl: ""
      });

    default:
      return state;
  }
}
