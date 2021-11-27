import React, {useState, useEffect} from 'react'

import {
    BrowserRouter as Router
 } from "react-router-dom";



import NavBarLinks from "./NavBarLinks";
import Login from "./Login";
import Register from "./Register";

function NavBarContainer ({handleLogin, cartArr,setCartArr, isLoggedIn,setIsLoggedIn,productIDCart,ArrproductArr}){
  
    



    function addToCart(id) {
        setCartArr([...cartArr, id])
        console.log(cartArr)
      }
      
    

    return(
        <Router>
            
            
            
            
            <div>
            <NavBarLinks setIsLoggedIn={setIsLoggedIn}/> 
      
        </div>
        </Router>)

};




  export default NavBarContainer;
