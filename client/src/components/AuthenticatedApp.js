import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import AuthBar from './AuthBar';
import Registered from "./Register";
import ProductList from './ProductList';
import AddProduct from './AddProduct';
import Profile from "./Profile"
import OrdersPage from "./OrdersCard"
import Logout from './Logout';
import About from "./About"
import OrdersBooked from "./OrdersBooked";
import Cart from "./Cart";import Order from "./OrdersCard.js";




function AuthenticatedApp({productArr, setProductArr,currentUser, setCurrentUser, title, setTitle, handleLogOut, handleLogin, setEmail, email, password, setPassword}) {


    const [product, setProduct] = useState(null)
    const [cartProductsArr, setCartProductsArr] = useState([])
    const [orderArr, setOrdersArr] = useState([])
    const [isOrderAdded, setIsOrderAdded] = useState(false)
    const [isOrderDeleted, setIsOrderDeleted] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
    const history = useHistory()
    const user_id= currentUser.id
    let order_id=Order.id
 


    // function handleLogOut(currentUserID) {
    //         fetch(`/logout/${currentUserID}`,{
    //         method: "DELETE"
    //     })
    //     .then(resp => {
    //         if (resp.ok) {
    //             console.log(currentUser)
    //             setCurrentUser(null)
    //             history.push("/")
    //         }
    //     })
    // }
    
    
    
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
      <Switch>
        <div id='Homeish'>
                <div id= 'Navbar-container'>
                    <AuthBar currentUser={currentUser} setCurrentUser={setCurrentUser} title={title} setTitle={setTitle} handleLogOut={handleLogOut}/>
                </div>
                <h1>Welcome {currentUser.first_name} </h1>
                <ProductList title={`Welcome to Styles ${currentUser.first_name}`}  productArr={productArr} />
        </div>
        
        <Route exact path="/" component={ProductList}/>
        <Route>
            <Registered setCurrentUser={setCurrentUser} currentUser = {currentUser}/>
        </Route>
        <Route path="/logout" >
            <Logout setCurrentUser={setCurrentUser} currentUser = {currentUser} handleLogOut={handleLogOut}  handleLogOut={handleLogOut} user_id={user_id}/>
        </Route> 
        <Route path="/about">
            <About />
        </Route>

        <Route path="/styles">
            <ProductList title={"Deals on Styles"} setProductArr={productArr}productArr={productArr}/>
        </Route>
            <Route path="/sale">
            <AddProduct title={"Deals on Styles"} setTitle={setTitle}/>

    
    
        </Route>
        <Route path="/profile">
            <Profile />
        </Route>
        
        
    
        <Route path="/sale">
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
    </BrowserRouter>
    )
}



export default AuthenticatedApp;
