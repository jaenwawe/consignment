import { useState, useEffect } from "react";
import ProductCard from './ProductCard';




function ProductList({productArr, setProductArr, title}) {
 
    // const [products, setProductArr] = useState([]);
    // products => props object
    // { products } => props.products
    
    // http://localhost:3000/products
    

    
useEffect(() => {
    fetch("/styles")
      .then((response) => response.json())
      .then((products) => setProductArr)
      },[])

    
    return (
        
        <div className="product-list">
        
            {
                productArr.map(product => 
                {
                    return (
                        <ProductCard 
                        key={product.id} 
                        category={product.category}
                        photo={product.photo}
                        review={product.review}
                        price={product.price}/>         
                    )
                    })}  
        </div>
             
            );
        }

export default ProductList;