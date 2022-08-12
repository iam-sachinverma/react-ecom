import { CATEGORIES_ACTION_TYPES } from "./catgeory.types";

const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

// action and state both are {}
export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
