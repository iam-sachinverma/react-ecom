import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { selectCategories } from "../../store/categories/category.selector";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories);

  return (
    // shortHand for Fragment <> </>
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return (
          <CategoryPreview
            key={title}
            title={title}
            products={products}
          ></CategoryPreview>
        );
      })}
    </>
  );
};

export default CategoriesPreview;
