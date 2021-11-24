import Header from "./Header";
import React, {useState, useEffect} from 'react'
import ProductList from "./ProductList";


function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [productIDCartArr, setProductIDInCartArr] = useState([])
  const [productArr, setProductArr]= useState([])


        // addProductToCart  pass into products list and previous customers for sale


  useEffect(() => {
    fetch("/styles")
      .then((response) => response.json())
      .then((productArr) => addToProductArr(productArr))
      },[])

      function addToProductArr(product) {
        console.log(productArr)
        setProductArr([...product, ...productArr ])
      }
      

      function handleProductIDInCartArr(product_id) {
        console.log(product_id)
        setProductIDInCartArr([product_id, ...productIDCartArr ])
        console.log(productIDCartArr)
      }
      

   
      

  return(
<div> 
<h1> First Class Clothes  </h1>
  <h4>Resold at great prices</h4>
  <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
  <ProductList handleProductIDInCartArr={handleProductIDInCartArr} productArr={productArr}/>
</div>

  )
}

export default Home