import { useState, useEffect } from "react";
import ProductCard from './ProductCard';




function ProductList(props) {
 
    const [products, setProductArr] = useState([]);
    // products => props object
    // { products } => props.products
    
    // http://localhost:3000/products
    

    
useEffect(() => {
    fetch("/products")
      .then((response) => response.json())
      .then((productArr) => setProductArr(productArr))
      },[])

    
    return (
        
        <div className="product-list">
            <h1>{props.title}</h1>
            {
                products.map(product => 
                {
                    return (
                        <ProductCard 
                        key={product.id} 
                        category={product.category}
                        photo={product.photo}
                        review={product.review}
                        price={product.price}              />
                        );
                    })}
                </div>
            );
        }

export default ProductList;