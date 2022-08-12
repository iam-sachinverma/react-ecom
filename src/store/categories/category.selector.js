// after getting data from API we do transformation in reducer selctor

export const selectCategoriesMap = (state) => {
  console.log("selector fired");
  return state.categories.categories.reduce((acc, category) => {
    const { title, items } = category;

    // obj square notation obj[property]
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
};
