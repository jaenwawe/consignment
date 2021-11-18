import { useState,useEffect } from 'react'

function ButtonUser (product) {
    
    const [cartProductsArr, setCartProductsArr] =useState([])
    
    function handleCart(product) 
        {
            setCartProductsArr([...cartProductsArr,product])
        }

    return (
 
    <button onClick={()=>this.handleCart(product)}>Add to Cart</button>
  }



  //index.js or index.html on in public folder  index.css
  
  export default AuthChecked;