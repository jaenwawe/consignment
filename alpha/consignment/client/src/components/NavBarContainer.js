import React, {useState, useEffect} from 'react'

import {
    BrowserRouter as Router
 } from "react-router-dom";



import NavBarLinks from "./NavBarLinks";
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
   
            <NavBarLinks setIsLoggedIn={setIsLoggedIn} /> 


           

          {/* {isLoggedIn
          ?  <Login 
          currentUser={currentUser} setCurrentUser={setCurrentUser} 
          handleLogin={handleLogin} 
          setEmail={setEmail} email={email} 
          setPassword={setPassword} password={password} isLoggedIn={false}/> 
          : null} */}

        </div>
        
        )
};
export default NavBarContainer;
