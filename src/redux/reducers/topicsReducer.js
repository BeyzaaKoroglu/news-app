import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function topicsReducer(state = initialState.topics, action) {
  switch (action.type) {
    case actionTypes.GET_TOPICS_SUCCESS:
      return state.concat(action.payload);

    default:
      return state;
  }
}
