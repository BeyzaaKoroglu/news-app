import axios from "axios";
import * as actionTypes from "./actionTypes";
import initialState from "../reducers/initialState";

export function getTopicsSuccess(topics) {
  return { type: actionTypes.GET_TOPICS_SUCCESS, payload: topics };
}

export function getTopics(search) {
  return (dispatch) => {
    axios({
      method: "GET",
      url: `https://free-news.p.rapidapi.com/v1/search?q=${search}&lang=en`,
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "6834cb11fbmsh22aaec9f27ba0cfp1ba3aejsne67a01542e40",
      },
    }).then((response) => {
      console.log(response.data.articles);

      if (typeof response.data.articles !== "undefined") {
        return dispatch(getTopicsSuccess(response.data.articles));
      } else {
        return dispatch(getTopicsSuccess([]));
      }
    });
  };
}

export function searchWord(searchWord) {
  return { type: actionTypes.SEARCH_WORD, payload: searchWord };
}

export function learnMore(learnMore) {
  return { type: actionTypes.LEARN_MORE, payload: learnMore };
}
