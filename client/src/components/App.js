import { useState, useEffect } from "react";
import '../style/App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import { Router, Route, withRouter, Switch, Redirect } from "react-router-dom";
import Bar from '../Bar';
import Profile from './Profile';

// Data
import ProductList from './ProductList';
import {ProductCard} from './ProductCard';

import Register from "../Register";

  
// import Home from './Home';
// import About from './About';
// import AuthenticatedApp from "./components/AuthenticatedApp";
// import UnauthenticatedApp from "./components/UnauthenticatedApp";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  useEffect(() => {
    fetch("/me")
      .then((resp) => {
        if (resp.ok) {
          resp.json().then(user => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, []);

  return (
    <div className="App">
    <header className="App-header">
    <Bar/>
  </header>
  <BrowserRouter>
        <Switch>
        <Route path="/products">
            <h1>For Sale</h1>
          </Route>

          <Route path="/orders">
          <h1>View Orders</h1>
          </Route>

          <Route path="/">
            <h1>Home Page</h1>
          </Route>

          <Route path="/wholesale">
            <h1>Wholesale</h1>
          </Route>

          <Route path="/deals">
            <h1>Deals</h1>
          </Route>

          <Route path="/me">
            <h1>Profile</h1>
          </Route>

        </Switch>
    </BrowserRouter>
      <div className="product-id"></div>
      <Register/>
 </div>
   );
  }


export default App;

