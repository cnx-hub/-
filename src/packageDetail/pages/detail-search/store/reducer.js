import { CHANGE_KEYWORDS } from "./constant";

const defaultState = {
  keywords: []
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_KEYWORDS:
      return { ...state, keywords: action.keywords };
    default:
      return state;
  }
}
