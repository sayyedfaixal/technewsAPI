const reducer = (state, action) => {
  switch (action.type) {
    case "IS_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (currentElement) => currentElement.objectID !== action.payload
        ),
      };

    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };

    case "PREVIOUS_PAGE":
      let pageNumberDec = state.page - 1;
      if (pageNumberDec <= 0) {
        pageNumberDec = 0;
      }
      return {
        ...state,
        page: pageNumberDec,
      };

    case "NEXT_PAGE":
      let pageNumberInc = state.page + 1;
      if (pageNumberInc >= state.nbPages) {
        pageNumberInc = 0;
      }
      return {
        ...state,
        page: pageNumberInc,
      };
  }

  return state;
};
export default reducer;
