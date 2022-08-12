import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

// any single reducer update it will re-render comp on which useSelector hook use
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
