import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch,Redirect, useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import Button from "@restart/ui/esm/Button";


import Logout from "./Logout"
import Register from "./Register";
import About from "./About"
import ProductList from './ProductList';
import AddProduct from './AddProduct'

import AuthBar from './AuthBar';
import Profile from "./Profile"
import OrdersPage from "./OrdersCard"
import Order from "./OrdersCard.js";


function AuthenticatedApp({productArr, setProductArr,currentUser, setCurrentUser, title, setTitle, handleLogOut, handleLogin, setEmail, email, password, setPassword,order, setOrder}) {
   const [product, setProduct] = useState(null)
   // const[order, setOrder]= useState("") move to App where login in
    const [cartProductsArr, setCartProductsArr] = useState([])
    const [orderArr, setOrdersArr] = useState([])
    const [isOrderAdded, setIsOrderAdded] = useState(false)
    const [isOrderDeleted, setIsOrderDeleted] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
    const history = useHistory()
    const user_id= currentUser.id
    let order_id=Order.id
 
       
    useEffect(() => {
        fetch("/orders")
        .then(resp => resp.json())
        .then(orders => setOrdersArr(orders))
    }, [isOrderAdded, isOrderDeleted])


    function postNewOrder(newOrder) {
        fetch("/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newOrder)
        })
        .then(resp => {
           if (resp.ok) {
                resp.json().then(addedOrder => {
                    setOrdersArr([...orderArr, addedOrder])
                    setIsOrderAdded(!isOrderAdded)
                    setErrorMessages([])
                })
           } else {
               resp.json().then(errors => {
                   setErrorMessages(errors.errors)
               })
           }
        })
    }

    function deleteOrder(deleteId) {
        fetch(`/orders/${deleteId}`, {
            method: "DELETE"
        })
        .then(data => setIsOrderDeleted(!isOrderDeleted))
    }


  return (
    <BrowserRouter>
       <div id= 'Navbar-container'>
            <AuthBar currentUser={currentUser} setCurrentUser={setCurrentUser} title={title} setTitle={setTitle} handleLogOut={handleLogOut}/>
            <h1>Welcome {currentUser.first_name} </h1>
        </div>
      <Switch>

        <Route exact path="/logout" >
            <Logout setCurrentUser={setCurrentUser}  user_id={currentUser.id}/>
        </Route> 

        <Route path="/about" component={About} />
     

        <Route path="/styles">
            <ProductList title={"Deals on Styles"} setProductArr={productArr}productArr={productArr}/>
        </Route>

        <Route path="/profile">
            <Profile />
        </Route>
        
    
        <Route path="/products/add">
            <AddProduct 
            productArr={productArr}  
            setProductArr={setProductArr}  
            user_id={user_id} 
            order_id={order_id} 
            />
        </Route>

        <Route path="/orders">
            <OrdersPage />
        </Route>
            
        
        </Switch>
        <ProductList title={`Welcome to Styles ${currentUser.first_name}`}  productArr={productArr} />
    </BrowserRouter>
    )
}



export default AuthenticatedApp;
