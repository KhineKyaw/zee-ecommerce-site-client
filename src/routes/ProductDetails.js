import React, { useEffect, useState } from "react";

import classes from "./ProductDetails.module.css";
import getProducts from "../api/getProducts";
import ImageView from "../components/Product/ImageView/ImageView";
import CartOptions from "../components/Product/CartOptions/CartOptions";
import ProductDescription from "../components/Product/ProductDescription/ProductDescription";
import Reviews from "../components/Reviews/Reviews";
import Recommendations from "../components/Product/Recommendations/Recommendations";
import SectionWrapper from "../hoc/SectionWrapper";
import Breadcrumb from "../components/UI/Breadcrumb/Breadcrumb";
import getCategories from "../api/getCategories";

const FIXED_LINKS = { Home: "/", Products: "/products" };

const ProductDetails = (props) => {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const productId = Number(props.match.params.id);

  const links =
    category && data
      ? { ...FIXED_LINKS, [category.name]: `/category/${category.id}` }
      : FIXED_LINKS;

  useEffect(() => {
    const products = getProducts(productId, 1);
    const product = products.result.length !== 0 && products.result[0];
    const categories = getCategories();
    const category = categories.reduce((obj, item) => {
      if (item.id === product.category_id) return item;
      return obj;
    }, {});

    setData(product);
    setCategory(category);
  }, [productId]);

  if (!data) return null;

  return (
    <div className={classes.wrapper}>
      <SectionWrapper>
        <Breadcrumb links={links} last={data ? data.title : null} />
      </SectionWrapper>
      <SectionWrapper background="light">
        <div className={classes.main}>
          <ImageView data={data.images} />
          <CartOptions data={data} />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className={classes.description}>
          <ProductDescription data={data} />
        </div>
      </SectionWrapper>
      <SectionWrapper background="light">
        <div className={classes.reviews}>
          <Reviews data={{}} />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div className={classes.recommendation}>
          {/* <Recommendations /> */}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default ProductDetails;
