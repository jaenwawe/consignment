// import React, { useState, useEffect } from "react";
// import Product from './ProductCard';



// function ProductList() {
//     // const [product, setProduct] = useState([]);
//     const [currentUserPlansArr, setCurrentUserPlansArr] = useState([])
//     // products => props object
//     // { products } => props.products
    
//     // http://localhost:3000/products
    
    
    
//     function handleAddProduct(newProduct) {}
    
    
    
//     useEffect(() => {
//         fetch("/products")
//           .then((response) => response.json())
//           .then((productArr) => setCurrentProductArr(productArr))
//           },[])
      
//     return (
//         <div className="product-list">
//             <h2 className="component-name">product List Component</h2>
//             <br />
//             {products.map(product => {
//                 return (
//                     <Product 
//                         key={product.id} 
//                         title={product.title} 
//                         content={product.content} 
//                     />
//                 );
//             })}
//         </div>
//     );
// }

// export default ProductList;