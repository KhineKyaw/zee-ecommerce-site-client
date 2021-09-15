import React, { useEffect, useState, useContext } from "react";

import ProductsSectionBar from "../../components/Product/ProductsSectionBar/ProductsSectionBar";
import ProductItem from "../../components/Product/ProductItem/ProductItem";

import getProducts from "../../api/getProducts";
import LanguageContext from "../../context/language-context";
import ItemList from "../../components/UI/ItemList/ItemList";

const SectionMore2Love = () => {
  const { languageDict: texts } = useContext(LanguageContext);
  const [data, setData] = useState();

  useEffect(() => {
    setData(getProducts(0, 8).result);
  }, []);

  return (
    <>
      <ProductsSectionBar
        title={texts.home["section-title-1"]}
        subTitle={texts.actions["view-more"]}
      />
      <ItemList type={"grid"} onDataQuery={() => []} renderItem={ProductItem} />
    </>
  );
};

export default SectionMore2Love;
