import React from "react";
import { useState } from "react";
import { connect } from "react-redux";

import ProductListItem from "./ProductListItem";

const ProductList = (props) => {
  const { items } = props;
  // console.log(items);
  const [val, setVal] = useState(0);
  const allItems = items.map((item) => (
    <ProductListItem item={item} key={item.id} />
  ));
  const sliderItems = items.map((item) => (
    <ProductListItem item={item} key={item.id} />
  ));
  console.log();
  return (
    <div className="product-list">
      <div className="slider-section">
        <button
          className="btn-for-slider"
          onClick={() => setVal(val + 1)}
          disabled={items.length - 1 == val}
        >
          ⬅
        </button>
        <div className="slider-pictures-section">
          <div className="previous">{sliderItems[val]} </div>
          <div className="middle"> {sliderItems[val + 1]}</div>
          <div className="next"> {sliderItems[val + 2]}</div>
        </div>
        <button
          className="btn-for-slider"
          onClick={() => setVal(val - 1)}
          disabled={val == 0}
        >
          ➡
        </button>
      </div>
      <ul className="product">{allItems}</ul>
    </div>
  );
};

const mapStoreToProps = (store) => ({
  items: Object.values(store.products),
});
export default connect(mapStoreToProps)(ProductList);
