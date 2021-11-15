import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import Button from "@restart/ui/esm/Button";



import Login from "./Login";
import Logout from "./Logout"
import Register from "./Register";
import About from "./About"
import NavBar from "./NavBar";
import ProductList from './ProductList';
import logo from '../data/logo.png';




function UnAuthenticatedApp ({ title= "Unauthenticated Site", setTitle, currentUser, setCurrentUser, handleLogin, setEmail, email, setPassword, password, productArr, setProductArr }){
    return(
    <BrowserRouter>
      <div id= 'Navbar-container'>
        <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} title={title} setTitle={setTitle} />
        <h1>Welcome to Styles!</h1>
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} handleLogin={handleLogin} setEmail={setEmail} email={email} password={password} setPassword={setPassword}/>
        <ProductList title={"Welcome to Styles"} setProductArr={productArr}productArr={productArr}/>
    </div>
    <Switch>
    <Route path="/about">
            <About />
          </Route>

          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>      
          
            <Route path="/styles">
              <ProductList title={"Deals on Styles"} />
            </Route>

 
      </Switch>
    </BrowserRouter>
    )
};
export default UnAuthenticatedApp;