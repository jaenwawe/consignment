import React, {useState, useEffect} from 'react'


import '../style/App.css'
import "../style/index.css"




import ProductList from "./ProductList";
import Home from './Home'
import NavBarContainer from './NavBarContainer';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [productArr, setProductArr]= useState([])
  const [cartArr, setCartArr] = useState([])

  useEffect(() => {
    fetch("/styles")
      .then((response) => response.json())
      .then((productArr) => addToProductArr(productArr))
      },[])

      function addToProductArr(product) {
        setProductArr([...product, ...productArr ])
        console.log(productArr)
      }
      

      function handleCartArr(product_id) {
        console.log(product_id)
        setCartArr([product_id, ...cartArr ])
        console.log(cartArr)
      }
      

   
     


  return(
<div> 

<NavBarContainer 
   isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
  setCartArr= {setCartArr}
  
/>

 {/* <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> */}
   <ProductList handleCartArr={handleCartArr} productArr={productArr}/>

  <Home/>
</div>

  )
}
      
   
   
   

export default App;