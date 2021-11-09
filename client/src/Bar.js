import Home from "./Home";
import About from "./components/About";
import {username} from "./data/Mock"
import Button from 'react-bootstrap/Button';
import logo from './logo.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Bar() {
  // const [authorized, setAuthorized] = useState("false");

  // {authorized ? "Logout" : "Login"}


  return (
    <Container className="center-horizontal">
      <Row >
              <Col>  
                <Button variant="primary">Home</Button>{' '}
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