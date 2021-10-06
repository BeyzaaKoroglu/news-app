import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function searchWordReducer(
  state = initialState.searchWord,
  action
) {
  switch (action.type) {
    case actionTypes.SEARCH_WORD:
      return action.payload;

    default:
      return state;
  }
}
