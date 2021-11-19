import { useState, useEffect } from "react";
import ProductCard from './ProductCard';




function ProductList({addToCart, productArr, setProductArr, title}) {
 
    // const [products, setProductArr] = useState([]);
    // products => props object
    // { products } => props.products
    
    // http://localhost:3000/products
    
      // filter what has been added to cart product!=selectedProduct line 28
    
// useEffect(() => {
//     fetch("/styles")
//       .then((response) => response.json())
//       .then((products) => setProductArr)
//       },[])

    let x = productArr.map(p =><ProductCard addToCart={addToCart} data={p}/>)
    
    return (<div className="product-list">
    {x}
    </div>
         
        );
    }

export default ProductList;