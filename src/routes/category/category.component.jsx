import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/product-card.component";

import { useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/category.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();

  const categories = useSelector(selectCategories);

  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className='category-title'>{category.toUpperCase()}</h2>
      <div className='category-container'>
        {/* safeGuard beacuse comp is depend on async fetch call */}
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
