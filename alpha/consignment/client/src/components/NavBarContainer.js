import React, {useState, useEffect} from 'react'

import {
    BrowserRouter as Router
 } from "react-router-dom";



import NavBarLinks from "./NavBarLinks";
import NavBarLinksUser from './NavBarLinksUser';
import Login from "./Login";
import Register from "./Register";

import {Route} from 'react-router'

function NavBarContainer ({setEmail, email, setPassword, password,currentUser,setCurrentUser,handleLogin, cartArr,setCartArr, isLoggedIn,setIsLoggedIn,productIDCart,ArrproductArr})
{
      function addToCart(id) {
        setCartArr([...cartArr, id])
        console.log(cartArr)
      }
      
    return(
      <div>
          {isLoggedIn
          ? <NavBarLinksUser setIsLoggedIn={setIsLoggedIn}/>
          : <NavBarLinks setIsLoggedIn={setIsLoggedIn} /> }


        </div>
        
        )
};
export default NavBarContainer;
