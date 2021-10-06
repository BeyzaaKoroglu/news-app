import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function learnMoreReducer(
  state = initialState.learnMore,
  action
) {
  switch (action.type) {
    case actionTypes.LEARN_MORE:
      return action.payload;

    default:
      return state;
  }
}
