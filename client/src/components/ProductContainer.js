import React from "react";
import ProductCard from "./ProductCard";

function ProductContainer({ products, renderUpdatedProduct }) {
  return (
    <div id="product-collection">{products.map(product => <ProductCard product={product} renderUpdatedProduct={renderUpdatedProduct}/>)}</div>
  );
}

export default ProductContainer;