// after getting data from API we do transformation in reducer selctor
import { createSelector } from "reselect";

// inital selector
const selectCategoryReducer = (state) => state.categories;

// memomize selector ---- createSelector params 1.inputSelector array 2.outputSelector
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;

      // obj square notation obj[property]
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
