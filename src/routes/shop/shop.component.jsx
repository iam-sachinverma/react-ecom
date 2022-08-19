import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import "./shop.styles.scss";

// redux
import { fetchCategoriesAsync } from "../../store/categories/category.action";
import { useDispatch } from "react-redux/es/exports";

const Shop = () => {
  // dispatch action
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      {/* params */}
      <Route path=':category' element={<Category />}></Route>
    </Routes>
  );
};

export default Shop;
