import Home from "./Home";
import About from "./About";
import { createHashHistory } from 'history'
// import { useHistory } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {username} from "../data/Mock"
import Button from 'react-bootstrap/Button';
import logo from '../data/logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductList from './ProductList';
const history = createHashHistory()




function Bar() {
  // const [authorized, setAuthorized] = useState("false");

  // {authorized ? "Logout" : "Login"}
  // let history = useHistory();
 


  const routeChange = () =>{ 
    history.push(`/`)
    // let path = `/`; 
    // history.push(path);
  }

  return (
<Container className="center-horizontal">
      <Row >
              <Col>    
              <button className="btn btn-danger">Bootstrap</button>
                <Button className="dark" variant="primary"  onClick={routeChange} >Home</Button>{' '}
                <Button variant="info"> <img src={logo} className="App-logo" alt="logo" /></Button>{' '}
                <Button variant="warning">Join</Button>{' '}
                <Button variant="info">About Us</Button>{' '}
                <Button variant="success">Shop</Button>{' '}
                <Button variant="danger">Deals</Button> {' '}
                <Button variant="warning">Sale2Stores2</Button>{' '}
                <Button variant="dark">Stores</Button>{' '}
                <Button variant="success">Customer Service</Button>{' '}
                <Button variant="info" href="#">{username}</Button> 
                {/* <Button variant="info" href="#">"UserName"</Button>  */}
                {/* <Button type="submit">{authorized}</Button> */}
                <Button type="submit">AddState</Button>
              </Col>
      </Row>
    </Container> 

  );
}
export default Bar;




// <Switch>
// <Route exact path="/">
//     <ProductList title={title} setTitle={setTitle}/>
// </Route>
// <Route path="/products">
//     <ProductList title={"Deals on Styles"} setTitle={setTitle}/>
// </Route>
//   {loggedin}
//   <Route path="/wholesale">
//     <h1>Wholesale</h1>
//   </Route>
//   <Route path="/profile">
//     <Profile/>
//   </Route>
//   </Switch>


// onclick={routeHome} 
// routeHome=(props) => {
//   return(
//     <div>
//       <p>RouteHome</p>
//       <Switch>
//     <Route exact path="/">
//         <ProductList title={props.title} setTitle={props.setTitle}/>
//     </Route>
// </Switch></div>
//   );
// }
