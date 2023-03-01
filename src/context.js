import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

// Creating the Context
const AppContext = React.createContext();
const API = "https://hn.algolia.com/api/v1/search?";
const intitalState = {
  isLoading: true,
  query: "css",
  nbPages: 0,
  page: 0,
  hits: [],
};
// Creating provider function
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intitalState);
  const fetchApiData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: result.hits,
          nbPages: result.nbPages,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  // TO remove the post
  const removePost = (postID) => {
    dispatch({
      type: "REMOVE_POST",
      payload: postID,
    });
  };

  // TO Search the post
  const searchPost = (searchQuery) => {
    dispatch({
      type: "SEARCH_POST",
      payload: searchQuery,
    });
  };

  // Get Previous Page
  const getPrevPage = () => {
    dispatch({
      type: "PREVIOUS_PAGE",
    });
  };
  // Get Next Page
  const getNextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };
  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
    >
      {children}
    </AppContext.Provider>
  );
};
// children in between the provider is the entire REACT application where we will be providing the content to the components

// Global Context
const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalContext };
