
import React, { useState, 
    useEffect } from "react";
import { BrowserRouter, 
    Route, 
    Switch, 
    useHistory } from "react-router-dom";


import Bar from './Bar';
import Registered from "./Login";
import ProductList from './ProductList';
import Login from './Login';

import ReactDOM  from "react-dom";
import Profile from "./Profile";
import Order from "./OrdersPage.js";
// import Header from "./Header";
import OrdersBooked from "./OrdersBooked";
import OrdersPage from "./OrdersPage";
import Cart from "./Cart";


function AuthenticatedApp({ currentUser, setCurrentUser, title, setTitle}) {

    const [orderArr, setOrdersArr] = useState([])
    const [isOrderAdded, setIsOrderAdded] = useState(false)
    const [isOrderDeleted, setIsOrderDeleted] = useState(false)
    const [errorMessages, setErrorMessages] = useState([])
    const history = useHistory()

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
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok) {
                setCurrentUser(null)
                history.push("/")
            }
        })
    }






  return (
    <div className="App">  
    <div className="app-body">
      <header className="App-header">
      {/* <Bar title={title} setTitle={setTitle}/> */}
      </header>
     
  


      <Switch>
        <Route exact path="/" component={ProductList}/>
        <Route>
          <Registered setCurrentUser={setCurrentUser} currentUser = {currentUser}/>
         </Route>
         
           <Route>
          {/* <Login setCurrentUser={setCurrentUser} currentUser = {currentUser}/> */}
         </Route>

        <Route path="/products">
            <ProductList title={"Deals on Styles"} setTitle={setTitle}/>
        </Route>

        </Switch>


     
       
      {/* one tag get routerProperties
      if two tags */}
       {/* <Route exact path="/">
          router propety  
            <ProductList title={title} setTitle={setTitle}/>
        </Route> */}
 
    

 </div>
 </div>
    )
}



export default AuthenticatedApp;

