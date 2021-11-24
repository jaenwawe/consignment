
import NavBar from './NavBar';
import AuthBar from './AuthBar';


function Header(isLoggedIn, setIsLoggedIn) {
  console.log(isLoggedIn)
    return (
      <div  class="inline-flex">
        
         {//logged in user views order/post products/checkout option
          
          (isLoggedIn)
            ? <div> <AuthBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/></div>  
            : <div> <NavBar setIsLoggedIn={setIsLoggedIn}/> </div>
         }
      </div>
    );
  }
 
  export default Header;