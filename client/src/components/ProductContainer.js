import React from "react";
import ProductCard from "./ProductCard";

function ProductContainer({ products, renderUpdatedProduct }) {
  return (
    <div className="grid-collection">{products.map(product => <ProductCard product={product} renderUpdatedProduct={renderUpdatedProduct}/>)}</div>
  );
}

export default ProductContainer;