import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState , useEffect} from "react";
import Button from "@restart/ui/esm/Button";



import Login from "./Login";
import Register from "./Register";
import About from "./About"
import Bar from "./Bar";
import ProductList from './ProductList';

function UnAuthenticatedApp ({ title= "Unauthenticated Site", setTitle, currentUser, setCurrentUser }){
    return(
<BrowserRouter>
<Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
<h1>Unauthenticated Site</h1>
        <Route path="/about">
              <About />
            </Route>
          <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>           
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/products">
            <ProductList title={"Deals on Styles"} setTitle={setTitle}/>
        </Route>


            <ProductList title={"Welcome to Styles"} setTitle={setTitle}/>

      </BrowserRouter>

    )
};
export default UnAuthenticatedApp;