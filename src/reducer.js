import authors from "./data";

const initialState = {
  authors: authors,
  newAuthorId: 5
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_AUTHOR":
      return {
        ...state,
        authors: state.authors.concat(action.payload),
        newAuthorId: state.newAuthorId + 1
      };
    case "DELETE_AUTHOR":
      return {
        ...state,
        authors: state.authors.filter(author => action.payload !== author)
      };
    default:
      return state;
  }
};

export default reducer;
